import { FileText, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InvestorPageWrapper, AccordionItem, DocumentList, type DocumentLink } from './InvestorComponents';

// Disclosure index under Regulation 46 & 62 of SEBI (LODR), 2015, following the same item
// coverage and order used by listed peers, with each item pointing to MRC Agrotech's own
// document / on-site page, or marked "Not Applicable" where the Company has nothing to disclose.
type Item = {
    title: string;
    /** Internal SPA route (same tab). */
    to?: string;
    /** External document / PDF (new tab). Used only if `to` is not set. */
    url?: string;
    /** Marks the item Not Applicable to the Company. */
    na?: boolean;
    /** Sub-links; when present the item renders as an expandable accordion. */
    children?: DocumentLink[];
};

const BSE_ANNOUNCEMENTS =
    'https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/corp-announcements/';

// MRC Agrotech's corporate governance policies (shown under the "Policies & Codes" item).
const policyLinks: DocumentLink[] = [
    { title: "Nomination & Remuneration Policy and criteria for payments to Non-Executive Directors", url: "/Nomination and Remuneration Policy.pdf" },
    { title: "Code of Ethics / Code of Conduct for Board & Senior Management", url: "/Code of Conduct Policy.pdf" },
    { title: "Policy on Related Party Transactions", url: "/Policy on Related Party Transactions - MRC.pdf" },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Policy for determining Material Subsidiaries", to: "/investors/policies/material-subsidiaries" },
    { title: "Code of Conduct for Prevention of Insider Trading & Fair Disclosure of UPSI", to: "/investors/policies/insider-trading-code" },
    { title: "Vigil Mechanism / Whistle Blower Policy", to: "/investors/policies/whistle-blower" },
    { title: "Risk Management Policy", to: "/investors/policies/risk-management" },
    { title: "Policy on Group Companies, Material Creditors & Material Litigation", to: "/investors/policies/group-company-material-litigation" },
    { title: "Internal Financial Control Policy", to: "/investors/policies/internal-financial-control" },
    { title: "Policy for Determination of Materiality of Events or Information", to: "/investors/policies/determination-materiality-events" },
    { title: "Archival Policy", to: "/investors/policies/archival" },
    { title: "Policy for Preservation of Documents", to: "/investors/policies/preservation-documents" },
];

// Stock-exchange filings hosted on the BSE portal for the Company.
const stockExchangeLinks: DocumentLink[] = [
    { title: "Quarterly Financial Results", to: "/investors/financial-reporting" },
    { title: "Related Party Transaction disclosures", url: BSE_ANNOUNCEMENTS },
    { title: "Closure of Trading Window", url: BSE_ANNOUNCEMENTS },
];

const items: Item[] = [
    { title: "Brief details of the business of the Company", to: "/about-us" },
    { title: "Terms and conditions of appointment of Independent Directors", to: "/investors/policies/independent-directors-terms" },
    { title: "Composition of various committees of the Board of Directors", to: "/company/board" },
    { title: "Policies & Codes of the Company", children: policyLinks },
    { title: "Familiarisation programmes imparted to Independent Directors", to: "/investors/policies/familiarisation" },
    { title: "Email address for grievance redressal and other relevant details", to: "/investors/contact" },
    { title: "Contact information of the designated officials handling investor grievances", to: "/investors/contact" },
    { title: "Financial information — notices of Board meetings and financial results", to: "/investors/financial-reporting" },
    { title: "Annual Reports", to: "/investors/financial-reporting" },
    { title: "Shareholding pattern and quarterly reports", to: "/investors/shareholders-info" },
    { title: "Agreements entered into with media companies and/or their associates", na: true },
    { title: "Schedule of analyst or institutional investor conference calls / meetings", na: true },
    { title: "Audio / video recordings and transcripts of investor / analyst meetings", na: true },
    { title: "New name and old name of the listed entity (change of name)", to: "/investors/disclosures/name-change" },
    { title: "Reconciliation of Share Capital Audit Report", url: BSE_ANNOUNCEMENTS },
    { title: "Newspaper advertisements / publications", to: "/investors/disclosures/newspaper-advertisements" },
    { title: "Credit ratings obtained for all outstanding instruments", na: true },
    { title: "Financial statements of subsidiary companies", to: "/investors/financial-reporting" },
    { title: "Secretarial Compliance Report", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" },
    { title: "Disclosure of material events / information filed with the Stock Exchange", url: BSE_ANNOUNCEMENTS },
    { title: "Contact details of Key Managerial Personnel authorised to determine materiality", to: "/investors/contact" },
    { title: "Disclosures under sub-regulation (8) of Regulation 30 of the LODR", to: "/investors/disclosures/reg30-8-disclosures" },
    { title: "Statements of deviation(s) or variation(s) under Regulation 32", to: "/investors/disclosures/reg32-deviation" },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Annual Return under Section 92 of the Companies Act, 2013", to: "/investors/disclosures/annual-return" },
    { title: "Other disclosures filed with the Stock Exchange", children: stockExchangeLinks },
    { title: "Details of any issue of securities during the year", na: true },
    { title: "Memorandum & Articles of Association of the Company", url: "/documentforwebsiteupdate/MRC_MOA_AOA.pdf" },
    { title: "Employee Stock Option Scheme (ESOP)", na: true },
];

const rowShell = "border border-gray-200 rounded-xl bg-white mb-4 transition-colors";

const LinkRow = ({ item, n }: { item: Item; n: number }) => {
    if (item.na) {
        return (
            <div className={`${rowShell} flex items-center justify-between gap-4 p-5`}>
                <span className="text-lg font-semibold text-gray-500">{n}. {item.title}</span>
                <span className="shrink-0 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                    Not Applicable
                </span>
            </div>
        );
    }

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
                its stakeholders. Items marked “Not Applicable” are those for which the Company has no disclosure to
                make as on date.
            </p>

            <div>
                {items.map((item, idx) =>
                    item.children ? (
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
