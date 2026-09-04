import { useState } from 'react';
import { FileText, ExternalLink, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InvestorPageWrapper, AccordionItem, DocumentList, type DocumentLink } from './InvestorComponents';

// Disclosure index under Regulation 46 & 62 of SEBI (LODR), 2015, following the same item
// coverage and order used by listed peers, with each item pointing to MRC Agrotech's own
// document / on-site page. Items not applicable to the Company are omitted entirely.
type Item = {
    title: string;
    /** Internal SPA route (same tab). */
    to?: string;
    /** External document / PDF (new tab). Used only if `to` is not set. */
    url?: string;
    /** Sub-links; when present the item renders as an expandable accordion. */
    children?: DocumentLink[];
    /** Custom body node rendered inside an expandable accordion. */
    content?: React.ReactNode;
};

const BSE_ANNOUNCEMENTS =
    'https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/corp-announcements/';

// MRC Agrotech's corporate governance policies (shown under the "Policies & Codes" item).
const policyLinks: DocumentLink[] = [
    { title: "Nomination & Remuneration Policy and criteria for payments to Non-Executive Directors", url: "/Nomination and Remuneration Policy.pdf" },
    { title: "Code of Ethics / Code of Conduct for Board & Senior Management", url: "/Code of Conduct Policy.pdf" },
    { title: "Policy on Related Party Transactions", url: "/Policy on Related Party Transactions - MRC.pdf" },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Policy for determining Material Subsidiaries", url: "/policies/material-subsidiaries.pdf" },
    { title: "Code of Conduct for Prevention of Insider Trading & Fair Disclosure of UPSI", url: "/policies/insider-trading-code.pdf" },
    { title: "Vigil Mechanism / Whistle Blower Policy", url: "/policies/whistle-blower.pdf" },
    { title: "Risk Management Policy", url: "/policies/risk-management.pdf" },
    { title: "Policy on Group Companies, Material Creditors & Material Litigation", url: "/policies/group-company-material-litigation.pdf" },
    { title: "Internal Financial Control Policy", url: "/policies/internal-financial-control.pdf" },
    { title: "Policy for Determination of Materiality of Events or Information", url: "/policies/determination-materiality-events.pdf" },
    { title: "Archival Policy", url: "/policies/archival.pdf" },
    { title: "Policy for Preservation of Documents", url: "/policies/preservation-documents.pdf" },
];

// Stock-exchange filings.
const stockExchangeGeneralLinks: DocumentLink[] = [
    { title: "Quarterly Financial Results", to: "/investors/financial-reporting" },
    { title: "Related Party Transaction disclosures", url: BSE_ANNOUNCEMENTS },
];

const tradingWindowDisclosures: DocumentLink[] = [
    { title: "Closure of Trading Window — Quarter ended 30 June 2026", tag: "Q1 FY 2026-27", url: "/trading-window/closure-trading-window-jun-2026.pdf" },
    { title: "Closure of Trading Window — Quarter ended 31 March 2026", tag: "Q4 FY 2025-26", url: "/trading-window/closure-trading-window-mar-2026.pdf" },
    { title: "Closure of Trading Window — Quarter ended 31 December 2025", tag: "Q3 FY 2025-26", url: "/trading-window/closure-trading-window-dec-2025.pdf" },
    { title: "Closure of Trading Window — Quarter ended 30 September 2025", tag: "Q2 FY 2025-26", url: "/trading-window/closure-trading-window-sep-2025.pdf" },
    { title: "Closure of Trading Window — Quarter ended 30 June 2025", tag: "Q1 FY 2025-26", url: "/trading-window/closure-trading-window-jun-2025.pdf" },
    { title: "Closure of Trading Window — Quarter ended 31 March 2025", tag: "Q4 FY 2024-25", url: "/trading-window/closure-trading-window-mar-2025.pdf" },
    { title: "Closure of Trading Window — Quarter ended 31 December 2024", tag: "Q3 FY 2024-25", url: "/trading-window/closure-trading-window-dec-2024.pdf" },
    { title: "Closure of Trading Window — Quarter ended 30 September 2024", tag: "Q2 FY 2024-25", url: "/trading-window/closure-trading-window-sep-2024.pdf" },
    { title: "Closure of Trading Window — Quarter ended 30 June 2024", tag: "Q1 FY 2024-25", url: "/trading-window/closure-trading-window-jun-2024.pdf" },
    { title: "Closure of Trading Window — Quarter ended 31 March 2024", tag: "Q4 FY 2023-24", url: "/trading-window/closure-trading-window-mar-2024.pdf" },
    { title: "Closure of Trading Window — Quarter ended 31 December 2023", tag: "Q3 FY 2023-24", url: "/trading-window/closure-trading-window-dec-2023.pdf" },
];

const StockExchangeDisclosuresContent = () => {
    const [tradingWindowOpen, setTradingWindowOpen] = useState(true);

    return (
        <div className="pt-2 space-y-4">
            <div>
                <DocumentList documents={stockExchangeGeneralLinks} />
            </div>
            <div className="pt-3 border-t border-gray-100">
                <button
                    type="button"
                    onClick={() => setTradingWindowOpen(!tradingWindowOpen)}
                    className="w-full flex items-center justify-between py-2 text-left group cursor-pointer"
                >
                    <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-brand-700 transition-colors">
                            Closure of Trading Window
                        </h4>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-full font-medium border border-brand-100">
                            11 filings
                        </span>
                    </div>
                    <ChevronDown
                        size={16}
                        className={`text-gray-400 group-hover:text-brand-600 transition-transform duration-200 ${
                            tradingWindowOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>
                {tradingWindowOpen && (
                    <div className="pt-1">
                        <DocumentList documents={tradingWindowDisclosures} />
                    </div>
                )}
            </div>
        </div>
    );
};

const items: Item[] = [
    { title: "Brief details of the business of the Company", to: "/about-us" },
    { title: "Terms and conditions of appointment of Independent Directors", url: "/policies/independent-directors-terms.pdf" },
    { title: "Composition of various committees of the Board of Directors", to: "/company/board" },
    { title: "Policies & Codes of the Company", children: policyLinks },
    { title: "Familiarisation programmes imparted to Independent Directors", url: "/policies/familiarisation.pdf" },
    { title: "Email address for grievance redressal and other relevant details", to: "/investors/contact" },
    { title: "Contact information of the designated officials handling investor grievances", to: "/investors/contact" },
    { title: "Financial information — notices of Board meetings and financial results", to: "/investors/financial-reporting" },
    { title: "Annual Reports", to: "/investors/financial-reporting" },
    { title: "Shareholding pattern and quarterly reports", to: "/investors/shareholders-info" },
    { title: "New name and old name of the listed entity (change of name)", url: "/policies/name-change.pdf" },
    { title: "Reconciliation of Share Capital Audit Report", url: BSE_ANNOUNCEMENTS },
    { title: "Newspaper advertisements / publications", url: "/policies/newspaper-advertisements.pdf" },
    { title: "Financial statements of subsidiary companies", to: "/investors/financial-reporting" },
    { title: "Secretarial Compliance Report", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" },
    { title: "Disclosure of material events / information filed with the Stock Exchange", to: "/investors/notice-board" },
    { title: "Contact details of Key Managerial Personnel authorised to determine materiality", to: "/investors/contact" },
    { title: "Disclosures under sub-regulation (8) of Regulation 30 of the LODR", to: "/investors/notice-board" },
    { title: "Statements of deviation(s) or variation(s) under Regulation 32", url: BSE_ANNOUNCEMENTS },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Annual Return under Section 92 of the Companies Act, 2013", to: "/investors/financial-reporting" },
    { title: "Other disclosures filed with the Stock Exchange", content: <StockExchangeDisclosuresContent /> },
    { title: "Memorandum & Articles of Association of the Company", url: "/documentforwebsiteupdate/MRC_MOA_AOA.pdf" },
];

const rowShell = "border border-gray-200 rounded-xl bg-white mb-4 transition-colors";

const LinkRow = ({ item, n }: { item: Item; n: number }) => {
    const action = (
        <span className="shrink-0 inline-flex items-center gap-1.5 text-brand-600 group-hover:text-brand-800 font-medium">
            {item.to ? <FileText size={15} /> : <ExternalLink size={15} />} View
        </span>
    );

    const label = (
        <span className="text-lg font-semibold text-gray-800 group-hover:text-brand-800 text-left">
            {n}. {item.title}
        </span>
    );

    const cls = `${rowShell} hover:border-brand-200 hover:bg-brand-50/40 flex items-center justify-between gap-4 p-5 group`;

    return item.to ? (
        <Link to={item.to} className={cls}>
            {label}
            {action}
        </Link>
    ) : (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className={cls}>
            {label}
            {action}
        </a>
    );
};

export const RegulationDisclosures = () => (
    <InvestorPageWrapper
        title="Disclosures under Regulation 46 & 62"
        intro="Disclosures made available on the website of MRC Agrotech Limited pursuant to Regulation 46 and 62 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015."
        wide
    >
        <div className="mt-2 space-y-6">
            <p className="text-gray-600 leading-relaxed text-justify">
                MRC Agrotech Limited (formerly MRC Exim Limited) is engaged in the cultivation, processing,
                manufacturing, trading and export of a diversified range of agricultural and agri-based products,
                including natural essential oils, lemongrass, tea, seeds, nano fertilizers and guar gum. The equity
                shares of the Company are listed on BSE Limited (Scrip Code: 540809). In accordance with Regulation 46
                and 62 of the SEBI (LODR) Regulations, 2015, the Company makes the following information available to
                its stakeholders.
            </p>

            <div>
                {items.map((item, idx) =>
                    item.content ? (
                        <AccordionItem key={idx} title={`${idx + 1}. ${item.title}`}>
                            {item.content}
                        </AccordionItem>
                    ) : item.children ? (
                        <AccordionItem key={idx} title={`${idx + 1}. ${item.title}`}>
                            <DocumentList documents={item.children} />
                        </AccordionItem>
                    ) : (
                        <LinkRow key={idx} item={item} n={idx + 1} />
                    ),
                )}
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-400">
                <ArrowRight size={14} className="mt-0.5 shrink-0" />
                <p>
                    This page is maintained under Regulation 46 and 62 of the SEBI (LODR) Regulations, 2015 and is
                    updated as and when required. Material events and information filed with BSE Limited are also
                    available under the corporate announcements section for the Company (Scrip Code: 540809).
                </p>
            </div>
        </div>
    </InvestorPageWrapper>
);
