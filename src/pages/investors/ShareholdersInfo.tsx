import { InvestorPageWrapper, AccordionItem, DocumentList, type DocumentLink } from './InvestorComponents';

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

// Only quarters with a filed report are shown; unavailable quarters are omitted entirely.
const toDocuments = (row: GridRow): DocumentLink[] =>
    quarterCols
        .filter((q) => row[q.key])
        .map((q) => ({
            title: q.label,
            url: row[q.key],
            tag: `FY ${row.fy}`,
        }));

export const ShareholdersInfo = () => (
    <InvestorPageWrapper
        title="Shareholding Information"
        intro="Shareholding pattern of MRC Agrotech Limited filed with BSE Limited (Scrip Code: 540809) under Regulation 31 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015. Select a financial year to view the quarterly reports."
        wide
    >
        <div className="mt-4 space-y-2">
            {shpGrid.map((row) => (
                <AccordionItem key={row.fy} title={`FY ${row.fy}`}>
                    <DocumentList documents={toDocuments(row)} />
                </AccordionItem>
            ))}
        </div>
        <p className="mt-4 text-xs text-gray-400">
            Reports are the shareholding patterns filed with BSE Limited. Only quarters for which a separate
            pattern was filed are listed (in earlier financial years the pattern was filed on a half-yearly basis).
        </p>
    </InvestorPageWrapper>
);
