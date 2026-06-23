import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { InvestorPageWrapper } from './InvestorComponents';
import { Search, ExternalLink, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { API_BASE_URL } from '../../config/api';

const CACHE_TTL_MS = 12 * 60 * 60 * 1000;
const ITEMS_PER_PAGE = 15;

type Notice = {
    date: string;
    title: string;
    category: string;
    subcategory?: string;
    pdfUrl: string | null;
    source: 'bse' | 'local';
};

// Company-hosted PDFs — always shown in their respective FY
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

// Returns the FY start year for a date (Apr–Mar = Indian FY)
function getFYStart(dateStr: string): number | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return null;
    const mo = d.getMonth() + 1;
    return mo >= 4 ? d.getFullYear() : d.getFullYear() - 1;
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

function fyLabel(fyStart: number): string {
    return `${fyStart}-${fyStart + 1}`;
}

function getCurrentFYStart(): number {
    const today = new Date();
    return (today.getMonth() + 1) >= 4 ? today.getFullYear() : today.getFullYear() - 1;
}

// FY list from current year down to 2019-20, computed once
const CURRENT_FY = getCurrentFYStart();
const FY_LIST: number[] = Array.from(
    { length: CURRENT_FY - 2019 + 1 },
    (_, i) => CURRENT_FY - i,
);

function cacheKeyForFY(fyStart: number) {
    return `mrc_bse_fy_${fyStart}_v1`;
}

export const NoticeBoard = () => {
    const [selectedFY, setSelectedFY] = useState<number>(CURRENT_FY);
    // undefined = not yet fetched; Notice[] = loaded (may be empty)
    const [fyData, setFyData] = useState<Partial<Record<number, Notice[]>>>({});
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const preloadStarted = useRef(false);

    const localForFY = useCallback((fyStart: number): Notice[] =>
        LOCAL_NOTICES.filter(n => getFYStart(n.date) === fyStart),
    []);

    const fetchFY = useCallback(async (fyStart: number) => {
        // Check localStorage first — instant if cached
        try {
            const raw = localStorage.getItem(cacheKeyForFY(fyStart));
            if (raw) {
                const parsed = JSON.parse(raw) as { data: Notice[]; fetchedAt: number };
                if (Date.now() - parsed.fetchedAt < CACHE_TTL_MS && Array.isArray(parsed.data)) {
                    const merged = [...localForFY(fyStart), ...parsed.data]
                        .sort((a, b) => b.date.localeCompare(a.date));
                    setFyData(prev => ({ ...prev, [fyStart]: merged }));
                    return;
                }
            }
        } catch { /* storage unavailable */ }

        // Fetch from server — only 4 quarters in parallel → ~300 ms
        try {
            const res = await fetch(`${API_BASE_URL}/api/bse-announcements?fy=${fyStart}`);
            const json = await res.json();
            const bseData: Notice[] = json.success && Array.isArray(json.data) ? json.data : [];
            try {
                localStorage.setItem(cacheKeyForFY(fyStart), JSON.stringify({ data: bseData, fetchedAt: Date.now() }));
            } catch { /* quota exceeded */ }
            const merged = [...localForFY(fyStart), ...bseData]
                .sort((a, b) => b.date.localeCompare(a.date));
            setFyData(prev => ({ ...prev, [fyStart]: merged }));
        } catch {
            // Silently fall back to local notices only
            setFyData(prev => ({ ...prev, [fyStart]: localForFY(fyStart) }));
        }
    }, [localForFY]);

    // Fetch current FY on mount
    useEffect(() => { fetchFY(CURRENT_FY); }, [fetchFY]);

    // Once current FY is ready, silently preload all other FYs one by one
    useEffect(() => {
        if (fyData[CURRENT_FY] === undefined || preloadStarted.current) return;
        preloadStarted.current = true;
        const queue = FY_LIST.filter(fy => fy !== CURRENT_FY);
        (async () => {
            for (const fy of queue) {
                await fetchFY(fy);
            }
        })();
    }, [fyData, fetchFY]);

    const handleSelectFY = (fyStart: number) => {
        setSelectedFY(fyStart);
        setCurrentPage(1);
        setSearch('');
        if (fyData[fyStart] === undefined) {
            fetchFY(fyStart);
        }
    };

    const currentNotices = fyData[selectedFY];
    const isLoading = currentNotices === undefined;

    const filtered = useMemo(() => {
        if (!currentNotices) return [];
        if (!search) return currentNotices;
        const q = search.toLowerCase();
        return currentNotices.filter(n => n.title.toLowerCase().includes(q));
    }, [currentNotices, search]);

    useEffect(() => { setCurrentPage(1); }, [search, selectedFY]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <InvestorPageWrapper title="Notices">
            <div className="flex flex-col md:flex-row gap-8 pb-16 min-h-[60vh]">

                {/* ── Left Sidebar ──────────────────────────────────────── */}
                <aside className="md:w-44 shrink-0">
                    {/* Search */}
                    <div className="mb-6">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Search</p>
                        <div className="relative">
                            <Search size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            <input
                                type="text"
                                value={search}
                                onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                                className="w-full pl-5 pr-2 py-1.5 text-sm border-b border-gray-300 focus:outline-none focus:border-brand-600 bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Year filters */}
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Filters</p>
                        <ul className="space-y-0.5">
                            {FY_LIST.map(fy => (
                                <li key={fy}>
                                    <button
                                        onClick={() => handleSelectFY(fy)}
                                        className={`w-full text-left flex items-center gap-2 py-1.5 text-sm transition-colors ${
                                            selectedFY === fy
                                                ? 'text-gray-900 font-semibold'
                                                : 'text-gray-500 hover:text-gray-800'
                                        }`}
                                    >
                                        <span className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 transition-colors ${
                                            selectedFY === fy
                                                ? 'border-brand-600 bg-brand-600'
                                                : 'border-gray-300'
                                        }`} />
                                        {fyLabel(fy)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* ── Main Table ────────────────────────────────────────── */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-brand-700 text-white">
                                        <th className="text-left py-3 px-5 font-semibold text-xs uppercase tracking-wider w-36">Date</th>
                                        <th className="text-left py-3 px-5 font-semibold text-xs uppercase tracking-wider">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading
                                        ? (
                                            <tr>
                                                <td colSpan={2} className="py-20 text-center">
                                                    <div className="flex flex-col items-center gap-3 text-gray-500">
                                                        <div className="w-8 h-8 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
                                                        <p className="text-sm font-medium text-gray-600">Please wait…</p>
                                                        <p className="text-xs text-gray-400">Loading FY {fyLabel(selectedFY)} notices</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                        : filtered.length === 0
                                            ? (
                                                <tr>
                                                    <td colSpan={2} className="py-20 text-center text-gray-400">
                                                        <FileText size={32} className="mx-auto mb-3 opacity-25" />
                                                        <p className="text-sm">
                                                            {search
                                                                ? 'No notices match your search'
                                                                : `No notices for FY ${fyLabel(selectedFY)}`}
                                                        </p>
                                                    </td>
                                                </tr>
                                            )
                                            : paginated.map((notice, i) => (
                                                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                                    <td className="py-4 px-5 text-gray-500 whitespace-nowrap align-top">
                                                        {formatDate(notice.date)}
                                                    </td>
                                                    <td className="py-4 px-5 align-top">
                                                        <span className="text-gray-800 leading-snug">
                                                            {notice.title}
                                                        </span>
                                                        {notice.pdfUrl && (
                                                            <a
                                                                href={notice.pdfUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex ml-1.5 align-middle text-gray-400 hover:text-brand-600 transition-colors"
                                                                aria-label="Open document"
                                                            >
                                                                <ExternalLink size={13} />
                                                            </a>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    {!isLoading && filtered.length > ITEMS_PER_PAGE && (
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md hover:border-brand-400 hover:text-brand-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft size={14} /> Prev
                            </button>
                            <span className="px-3">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md hover:border-brand-400 hover:text-brand-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                Next <ChevronRight size={14} />
                            </button>
                        </div>
                    )}

                    {/* Count */}
                    {!isLoading && filtered.length > 0 && (
                        <p className="text-xs text-gray-400 text-center">
                            {filtered.length} notice{filtered.length !== 1 ? 's' : ''} in FY {fyLabel(selectedFY)}
                        </p>
                    )}
                </div>
            </div>
        </InvestorPageWrapper>
    );
};
