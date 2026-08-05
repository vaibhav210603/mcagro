import { Download } from 'lucide-react';
import { InvestorPageWrapper, DocumentList, type DocumentLink } from './InvestorComponents';

// ── Shareholding Pattern — as filed with BSE for the quarter ended 31 March 2026 ──
// Summary Statement of holding of specified securities (Table I).
const shpSummary = [
    { category: "(A) Promoter & Promoter Group", holders: "4", shares: "66,74,511", percent: "21.31%" },
    { category: "(B) Public", holders: "5,325", shares: "2,46,52,896", percent: "78.69%" },
    { category: "(C) Non Promoter – Non Public", holders: "—", shares: "0", percent: "0.00%" },
    { category: "Total", holders: "5,329", shares: "3,13,27,407", percent: "100.00%", strong: true },
];

// Statement showing shareholding of the Promoter & Promoter Group (Table II).
const shpPromoters = [
    { name: "ESPS Capital Advisors Private Limited", percent: "8.96%" },
    { name: "Ashok Kumar Singh", percent: "6.94%" },
    { name: "Vindu Mahendra Pratap Singh", percent: "5.14%" },
    { name: "Kiritkumar Madhavlal Shah", percent: "0.26%" },
    { name: "Total Promoter & Promoter Group", percent: "21.31%", strong: true },
];

// Statement showing shareholding of the Public shareholder (Table III).
const shpPublic = [
    { name: "Resident Individuals — nominal capital up to ₹2 lakh", holders: "5,053", percent: "14.32%" },
    { name: "Resident Individuals — nominal capital above ₹2 lakh", holders: "170", percent: "43.61%" },
    { name: "Bodies Corporate", holders: "13", percent: "16.00%" },
    { name: "HUF / LLP / Others", holders: "71", percent: "4.34%" },
    { name: "Non-Resident Indians (NRIs)", holders: "18", percent: "0.42%" },
    { name: "Total Public Shareholding", holders: "5,325", percent: "78.69%", strong: true },
];

// "For more data" links shown below the tables.
const shpLinks: DocumentLink[] = [
    { title: "Full Shareholding Pattern — Quarter ended March 2026 (BSE)", url: "https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/qtrid/129.01/shareholding-pattern/mar-2026" },
    { title: "All Quarterly Shareholding Patterns (BSE)", url: "https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/shareholding-pattern/" },
];

// ── Year-wise / quarter-wise archive ──
// url = downloadable PDF for that quarter; omit to render a disabled cell (document to be added).
const BSE_MAR_2026 = "https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/qtrid/129.01/shareholding-pattern/mar-2026";
type GridRow = { fy: string; q1?: string; q2?: string; q3?: string; q4?: string };
const shpGrid: GridRow[] = [
    { fy: "2025-26", q4: BSE_MAR_2026 },
    { fy: "2024-25" },
    { fy: "2023-24" },
    { fy: "2022-23" },
    { fy: "2021-22" },
];
const quarterCols: { key: keyof Omit<GridRow, 'fy'>; label: string }[] = [
    { key: "q1", label: "Q1 (Jun)" },
    { key: "q2", label: "Q2 (Sep)" },
    { key: "q3", label: "Q3 (Dec)" },
    { key: "q4", label: "Q4 (Mar)" },
];

// Reusable table for the shareholding-pattern statements.
const SHPTable = ({
    heading,
    columns,
    rows,
}: {
    heading: string;
    columns: string[];
    rows: { cells: string[]; strong?: boolean }[];
}) => (
    <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">{heading}</h4>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-brand-700 text-white">
                        {columns.map((c, i) => (
                            <th
                                key={i}
                                className={`py-3 px-4 font-semibold text-xs uppercase tracking-wider whitespace-nowrap ${i === 0 ? 'text-left' : 'text-right'}`}
                            >
                                {c}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, r) => (
                        <tr
                            key={r}
                            className={`border-b border-gray-100 last:border-0 ${row.strong ? 'bg-gray-50 font-semibold text-gray-900' : 'text-gray-700'}`}
                        >
                            {row.cells.map((cell, c) => (
                                <td
                                    key={c}
                                    className={`py-3 px-4 whitespace-nowrap ${c === 0 ? 'text-left whitespace-normal' : 'text-right tabular-nums'}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// Latest shareholding-pattern block — mirrors the BSE filing layout.
const LatestPattern = () => (
    <div className="space-y-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-bold text-gray-900">Latest Shareholding Pattern</h3>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">As on 31 March 2026</span>
        </div>

        <SHPTable
            heading="I. Summary Statement of Holding of Specified Securities"
            columns={["Category of Shareholder", "No. of Shareholders", "No. of Shares", "% of Total"]}
            rows={shpSummary.map((r) => ({ cells: [r.category, r.holders, r.shares, r.percent], strong: r.strong }))}
        />

        <SHPTable
            heading="II. Shareholding of the Promoter & Promoter Group"
            columns={["Name of Shareholder", "% of Total"]}
            rows={shpPromoters.map((r) => ({ cells: [r.name, r.percent], strong: r.strong }))}
        />

        <SHPTable
            heading="III. Shareholding of the Public Shareholders"
            columns={["Category", "No. of Shareholders", "% of Total"]}
            rows={shpPublic.map((r) => ({ cells: [r.name, r.holders, r.percent], strong: r.strong }))}
        />

        <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-1">For more data</h4>
            <p className="text-xs text-gray-400 mb-1">
                Figures above are as filed with BSE Limited (Scrip Code: 540809) for the quarter ended 31 March 2026.
                For the complete statement — including voting rights, locked-in shares, dematerialisation and prior quarters —
                refer to the filings on BSE:
            </p>
            <DocumentList documents={shpLinks} />
        </div>
    </div>
);

// Year-wise / quarter-wise download grid.
const PatternArchive = () => (
    <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Quarterly Archive</h4>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-brand-700 text-white">
                        <th className="text-left py-3 px-4 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Financial Year</th>
                        {quarterCols.map((q) => (
                            <th key={q.key} className="text-center py-3 px-4 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">{q.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {shpGrid.map((row) => (
                        <tr key={row.fy} className="border-b border-gray-100 last:border-0">
                            <td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">{row.fy}</td>
                            {quarterCols.map((q) => {
                                const href = row[q.key];
                                return (
                                    <td key={q.key} className="py-3 px-4 text-center">
                                        {href ? (
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-medium transition-colors"
                                                aria-label={`Download shareholding pattern ${row.fy} ${q.label}`}
                                            >
                                                <Download size={15} /> PDF
                                            </a>
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">
            Quarter-wise shareholding pattern documents are added as they are filed. Cells marked “—” will be updated with the respective PDF.
        </p>
    </div>
);

export const ShareholdersInfo = () => (
    <InvestorPageWrapper
        title="Shareholding Information"
        intro="Shareholding pattern of MRC Agrotech Limited filed under the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 — the latest statement together with the year-wise, quarter-wise archive."
        wide
    >
        <div className="mt-4 space-y-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm">
                <LatestPattern />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm">
                <PatternArchive />
            </div>
        </div>
    </InvestorPageWrapper>
);
