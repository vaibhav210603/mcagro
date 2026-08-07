import { FileText } from 'lucide-react';
import { InvestorPageWrapper } from './InvestorComponents';

// Shareholding pattern reports as filed with BSE (Scrip Code: 540809), by financial year and quarter.
// url = the filed report for that quarter; undefined = not filed that quarter (early years were half-yearly).
type GridRow = { fy: string; q1?: string; q2?: string; q3?: string; q4?: string };
const shpGrid: GridRow[] = [
    { fy: "2026-27", q1: "/shareholding-patterns/MRC-SHP-Jun-2026.html", q2: undefined, q3: undefined, q4: undefined },
    { fy: "2025-26", q1: "/shareholding-patterns/MRC-SHP-Jun-2025.html", q2: "/shareholding-patterns/MRC-SHP-Sep-2025.html", q3: "/shareholding-patterns/MRC-SHP-Dec-2025.html", q4: "/shareholding-patterns/MRC-SHP-Mar-2026.html" },
    { fy: "2024-25", q1: "/shareholding-patterns/MRC-SHP-Jun-2024.html", q2: "/shareholding-patterns/MRC-SHP-Sep-2024.html", q3: "/shareholding-patterns/MRC-SHP-Dec-2024.html", q4: "/shareholding-patterns/MRC-SHP-Mar-2025.html" },
    { fy: "2023-24", q1: "/shareholding-patterns/MRC-SHP-Jun-2023.html", q2: "/shareholding-patterns/MRC-SHP-Sep-2023.html", q3: "/shareholding-patterns/MRC-SHP-Dec-2023.html", q4: "/shareholding-patterns/MRC-SHP-Mar-2024.html" },
    { fy: "2022-23", q1: undefined, q2: "/shareholding-patterns/MRC-SHP-Sep-2022.html", q3: "/shareholding-patterns/MRC-SHP-Dec-2022.html", q4: "/shareholding-patterns/MRC-SHP-Mar-2023.html" },
    { fy: "2021-22", q1: undefined, q2: "/shareholding-patterns/MRC-SHP-Sep-2021.html", q3: undefined, q4: "/shareholding-patterns/MRC-SHP-Mar-2022.html" },
    { fy: "2020-21", q1: undefined, q2: "/shareholding-patterns/MRC-SHP-Sep-2020.html", q3: undefined, q4: "/shareholding-patterns/MRC-SHP-Mar-2021.html" },
    { fy: "2019-20", q1: undefined, q2: "/shareholding-patterns/MRC-SHP-Sep-2019.html", q3: undefined, q4: "/shareholding-patterns/MRC-SHP-Mar-2020.html" },
    { fy: "2018-19", q1: undefined, q2: "/shareholding-patterns/MRC-SHP-Sep-2018.html", q3: undefined, q4: "/shareholding-patterns/MRC-SHP-Mar-2019.html" },
    { fy: "2017-18", q1: undefined, q2: undefined, q3: undefined, q4: "/shareholding-patterns/MRC-SHP-Mar-2018.html" },
];

const quarterCols: { key: keyof Omit<GridRow, 'fy'>; label: string }[] = [
    { key: "q1", label: "Q1 · Jun" },
    { key: "q2", label: "Q2 · Sep" },
    { key: "q3", label: "Q3 · Dec" },
    { key: "q4", label: "Q4 · Mar" },
];

const QuarterLink = ({ href, fy, label }: { href?: string; fy: string; label: string }) => {
    if (!href) return <span className="text-gray-300">—</span>;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-medium transition-colors"
            aria-label={`View shareholding pattern for ${label} FY ${fy}`}
        >
            <FileText size={15} /> View
        </a>
    );
};

export const ShareholdersInfo = () => (
    <InvestorPageWrapper
        title="Shareholding Information"
        intro="Shareholding pattern of MRC Agrotech Limited filed with BSE Limited (Scrip Code: 540809) under Regulation 31 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015. Select a quarter to view the report."
        wide
    >
        <div className="mt-4">
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-brand-700 text-white">
                            <th className="text-left py-3.5 px-5 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Financial Year</th>
                            {quarterCols.map((q) => (
                                <th key={q.key} className="text-center py-3.5 px-5 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">{q.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {shpGrid.map((row) => (
                            <tr key={row.fy} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-5 font-semibold text-gray-800 whitespace-nowrap">{row.fy}</td>
                                {quarterCols.map((q) => (
                                    <td key={q.key} className="py-4 px-5 text-center">
                                        <QuarterLink href={row[q.key]} fy={row.fy} label={q.label} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-xs text-gray-400">
                Reports are the shareholding patterns filed with BSE Limited. Cells marked “—” are quarters for which no
                separate pattern was filed (in earlier financial years the pattern was filed on a half-yearly basis).
            </p>
        </div>
    </InvestorPageWrapper>
);
