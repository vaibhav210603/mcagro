import { useState, useEffect } from 'react';
import { InvestorPageWrapper } from './InvestorComponents';
import { FileText, Download, Search, Clock, ExternalLink } from 'lucide-react';
import { API_BASE_URL } from '../../config/api';

const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours — at most 2 BSE calls/day
const CACHE_KEY = 'mrc_bse_notices_v1';

type Notice = {
    date: string;        // YYYY-MM-DD
    title: string;
    category: string;
    subcategory?: string;
    pdfUrl: string | null;
    source: 'bse' | 'local';
};

// Company-hosted PDFs — always shown, merged with live BSE data
const LOCAL_NOTICES: Notice[] = [
    {
        date: '2026-06-22',
        title: 'Board Meeting Outcome - 22 Jun 2026',
        category: 'Board Meeting',
        pdfUrl: '/agm-egm/MRC - Board Meeting Outcome-22-06-2026.pdf',
        source: 'local',
    },
    {
        date: '2025-06-28',
        title: 'Corrigendum to Notice of EGM Dated 28-06-2025',
        category: 'EGM',
        pdfUrl: '/agm-egm/Corrigendum-to-Notice-of-EGM-Dated-28-06-2025.pdf',
        source: 'local',
    },
    {
        date: '2025-01-01',
        title: 'Notice of Annual General Meeting 2025',
        category: 'AGM',
        pdfUrl: '/agm-egm/Notice-of-AGM-2025.pdf',
        source: 'local',
    },
    {
        date: '2024-04-03',
        title: 'Proceedings of EGM - 03 Apr 2024',
        category: 'EGM',
        pdfUrl: '/agm-egm/Proceedings-of-EGM.pdf',
        source: 'local',
    },
    {
        date: '2024-04-03',
        title: 'EGM Outcome - 03 Apr 2024',
        category: 'EGM',
        pdfUrl: '/agm-egm/EGM-Outcome-03-04-2024.pdf',
        source: 'local',
    },
    {
        date: '2024-03-27',
        title: 'Corrigendum to Notice of EGM - 27 Mar 2024',
        category: 'EGM',
        pdfUrl: '/agm-egm/Corrigendum-to-Notice-of-EGM.pdf',
        source: 'local',
    },
    {
        date: '2024-03-08',
        title: 'Notice of Extra-Ordinary General Meeting',
        category: 'EGM',
        pdfUrl: '/agm-egm/NOTICE-OF-EGM.pdf',
        source: 'local',
    },
    {
        date: '2024-03-08',
        title: 'EGM Notice',
        category: 'EGM',
        pdfUrl: '/agm-egm/EGM-Notice.pdf',
        source: 'local',
    },
];

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
    'Board Meeting':             { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200'   },
    'AGM':                       { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200'},
    'EGM':                       { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200'  },
    'AGM/EGM':                   { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200'  },
    'Shareholding':              { bg: 'bg-purple-50',  text: 'text-purple-700',  border: 'border-purple-200' },
    'Insider Trading / SAST':    { bg: 'bg-red-50',     text: 'text-red-700',     border: 'border-red-200'    },
    'Result':                    { bg: 'bg-indigo-50',  text: 'text-indigo-700',  border: 'border-indigo-200' },
    'Corp. Action':              { bg: 'bg-teal-50',    text: 'text-teal-700',    border: 'border-teal-200'   },
    'Company Update':            { bg: 'bg-sky-50',     text: 'text-sky-700',     border: 'border-sky-200'    },
};

function getCategoryStyle(cat: string) {
    return CATEGORY_STYLES[cat] ?? { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };
}

function formatDate(dateStr: string): string {
    if (!dateStr) return '—';
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch {
        return dateStr;
    }
}

// Returns Indian financial year string, e.g. "2026-27" for any date in Apr 2026 – Mar 2027
function getFinancialYear(dateStr: string): string | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return null;
    const yr = d.getFullYear();
    const mo = d.getMonth() + 1; // 1–12
    const startYear = mo >= 4 ? yr : yr - 1;
    return `${startYear}-${String(startYear + 1).slice(2)}`;
}

function mergeNotices(bse: Notice[], local: Notice[]): Notice[] {
    return [...local, ...bse].sort((a, b) => {
        const da = new Date(a.date).getTime() || 0;
        const db = new Date(b.date).getTime() || 0;
        return db - da;
    });
}

// ── Skeleton loader ────────────────────────────────────────────────────────────
const SkeletonRow = () => (
    <tr className="border-b border-gray-100">
        <td className="py-4 px-4"><div className="h-4 w-24 bg-gray-200 rounded animate-pulse" /></td>
        <td className="py-4 px-4"><div className="h-6 w-28 bg-gray-200 rounded-full animate-pulse" /></td>
        <td className="py-4 px-4"><div className="h-4 w-full max-w-md bg-gray-200 rounded animate-pulse" /></td>
        <td className="py-4 px-4"><div className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse" /></td>
    </tr>
);

export const NoticeBoard = () => {
    const [notices, setNotices] = useState<Notice[]>(LOCAL_NOTICES);
    const [loading, setLoading] = useState(true);
    const [fetchedAt, setFetchedAt] = useState<number | null>(null);

    const [selectedFY, setSelectedFY] = useState<string>('all');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const loadNotices = async () => {
            // Layer 1: check localStorage — if fresh, use it immediately
            try {
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const parsed = JSON.parse(cached) as { data: Notice[]; fetchedAt: number };
                    const age = Date.now() - parsed.fetchedAt;
                    if (age < CACHE_TTL_MS && parsed.data?.length) {
                        setNotices(mergeNotices(parsed.data, LOCAL_NOTICES));
                        setFetchedAt(parsed.fetchedAt);
                        setLoading(false);
                        return;
                    }
                }
            } catch {
                // localStorage unavailable — continue to network fetch
            }

            // Layer 2: fetch from our server (which has its own 12h BSE cache)
            try {
                const res = await fetch(`${API_BASE_URL}/api/bse-announcements`);
                const json = await res.json();
                if (json.success && Array.isArray(json.data)) {
                    const now = Date.now();
                    try {
                        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: json.data, fetchedAt: now }));
                    } catch { /* storage quota exceeded — ignore */ }
                    setNotices(mergeNotices(json.data, LOCAL_NOTICES));
                    setFetchedAt(now);
                }
            } catch {
                // silently fall back to local notices
            } finally {
                setLoading(false);
            }
        };

        loadNotices();
    }, []);

    // Derive unique financial years from current notices, newest first
    const financialYears = [...new Set(
        notices.map(n => getFinancialYear(n.date)).filter((fy): fy is string => fy !== null)
    )].sort((a, b) => b.localeCompare(a));

    // Apply filters
    const filtered = notices.filter(n => {
        if (selectedFY !== 'all' && getFinancialYear(n.date) !== selectedFY) return false;
        if (search) {
            const q = search.toLowerCase();
            if (
                !n.title.toLowerCase().includes(q) &&
                !n.category.toLowerCase().includes(q) &&
                !(n.subcategory ?? '').toLowerCase().includes(q)
            ) return false;
        }
        return true;
    });

    const bseCount = notices.filter(n => n.source === 'bse').length;

    return (
        <InvestorPageWrapper title="Notices">
            <div className="space-y-6 pb-12">


                {/* ── FY tabs + search ──────────────────────────────────── */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-2 overflow-x-auto flex-1">
                        <button
                            onClick={() => setSelectedFY('all')}
                            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                                selectedFY === 'all'
                                    ? 'bg-brand-700 text-white border-brand-700'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-700'
                            }`}
                        >
                            All Years
                        </button>
                        {financialYears.map(fy => (
                            <button
                                key={fy}
                                onClick={() => setSelectedFY(fy)}
                                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                                    selectedFY === fy
                                        ? 'bg-brand-700 text-white border-brand-700'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-700'
                                }`}
                            >
                                FY {fy}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative shrink-0 sm:w-64">
                        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search notices…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-200 bg-white"
                        />
                    </div>
                </div>

                {/* ── Table ────────────────────────────────────────────── */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap w-32">Date</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap w-44">Category</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Subject</th>
                                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap w-28">Document</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading
                                    ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
                                    : filtered.length === 0
                                        ? (
                                            <tr>
                                                <td colSpan={4} className="py-16 text-center text-gray-400">
                                                    <FileText size={36} className="mx-auto mb-3 opacity-30" />
                                                    <p className="font-medium">No notices match your filters</p>
                                                    <button
                                                        onClick={() => { setSelectedFY('all'); setSearch(''); }}
                                                        className="mt-3 text-brand-600 text-sm hover:underline"
                                                    >
                                                        Clear filters
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                        : filtered.map((notice, i) => {
                                            const s = getCategoryStyle(notice.category);
                                            return (
                                                <tr
                                                    key={i}
                                                    className="border-b border-gray-50 hover:bg-gray-50/70 transition-colors"
                                                >
                                                    {/* Date */}
                                                    <td className="py-4 px-4 text-gray-500 whitespace-nowrap align-top">
                                                        {formatDate(notice.date)}
                                                    </td>

                                                    {/* Category */}
                                                    <td className="py-4 px-4 align-top">
                                                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold border ${s.bg} ${s.text} ${s.border}`}>
                                                            {notice.category}
                                                        </span>
                                                        {notice.subcategory && (
                                                            <p className="text-gray-400 text-xs mt-1">{notice.subcategory}</p>
                                                        )}
                                                    </td>

                                                    {/* Title */}
                                                    <td className="py-4 px-4 align-top">
                                                        <p className="text-gray-800 font-medium leading-snug">{notice.title}</p>
                                                        {notice.source === 'bse' && (
                                                            <span className="inline-flex items-center gap-1 text-xs text-gray-400 mt-1">
                                                                <ExternalLink size={10} />
                                                                BSE Filing
                                                            </span>
                                                        )}
                                                    </td>

                                                    {/* Download */}
                                                    <td className="py-4 px-4 text-right align-top">
                                                        {notice.pdfUrl ? (
                                                            <a
                                                                href={notice.pdfUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 hover:border-brand-200 transition-colors text-xs font-semibold whitespace-nowrap"
                                                            >
                                                                <Download size={12} />
                                                                PDF
                                                            </a>
                                                        ) : (
                                                            <span className="text-gray-300 text-xs">—</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ── Footer status bar ─────────────────────────────────── */}
                {!loading && (
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 px-1">
                        <span>
                            Showing {filtered.length} of {notices.length} notices
                            {bseCount > 0 && ` · ${bseCount} from BSE`}
                        </span>
                        {fetchedAt && (
                            <span className="flex items-center gap-1">
                                <Clock size={11} />
                                BSE data refreshed: {new Date(fetchedAt).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </span>
                        )}
                    </div>
                )}

            </div>
        </InvestorPageWrapper>
    );
};
