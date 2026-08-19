import { FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InvestorPageWrapper } from './InvestorComponents';

// Disclosure index under Regulation 46 & 62 of SEBI (LODR), 2015, modelled on the
// comprehensive itemised format used by listed peers. Each item either links to the
// relevant document / on-site page, or is marked "Not Applicable" where MRC Agrotech
// has nothing to disclose for that item.
type DisclosureRow = {
    title: string;
    /** Internal SPA route (same tab). */
    to?: string;
    /** External document / PDF (new tab). Takes effect only if `to` is not set. */
    url?: string;
    /** Marks the item as Not Applicable to the Company. */
    na?: boolean;
};

const rows: DisclosureRow[] = [
    { title: "Brief details of the business of the Company", to: "/about-us" },
    { title: "Terms and conditions of appointment of Independent Directors", to: "/investors/policies/independent-directors-terms" },
    { title: "Composition of various committees of the Board of Directors", to: "/company/board" },
    { title: "Code of Conduct for Board of Directors and Senior Management Personnel", url: "/Code of Conduct Policy.pdf" },
    { title: "Details of establishment of Vigil Mechanism / Whistle Blower Policy", to: "/investors/policies/whistle-blower" },
    { title: "Criteria for making payments to Non-Executive Directors", url: "/Nomination and Remuneration Policy.pdf" },
    { title: "Policy on dealing with Related Party Transactions", url: "/Policy on Related Party Transactions - MRC.pdf" },
    { title: "Policy for determining Material Subsidiaries", to: "/investors/policies/material-subsidiaries" },
    { title: "Familiarisation programmes imparted to Independent Directors", to: "/investors/policies/familiarisation" },
    { title: "Policy for determination of materiality of events or information", to: "/investors/policies/determination-materiality-events" },
    { title: "Contact information of the designated officials handling investor grievances", to: "/investors/contact" },
    { title: "Email address for grievance redressal and other relevant details", to: "/investors/contact" },
    { title: "Financial information — notice of Board meetings, financial results and annual reports", to: "/investors/financial-reporting" },
    { title: "Shareholding pattern", to: "/investors/shareholders-info" },
    { title: "New name and old name of the listed entity (change of name)", to: "/investors/disclosures/name-change" },
    { title: "Disclosures under sub-regulation (8) of Regulation 30 (material events / information)", to: "/investors/disclosures/reg30-8-disclosures" },
    { title: "Statements of deviation(s) or variation(s) under Regulation 32", to: "/investors/disclosures/reg32-deviation" },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Annual Return under Section 92 of the Companies Act, 2013", to: "/investors/disclosures/annual-return" },
    { title: "Secretarial Compliance Report", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" },
    { title: "Contact details of Key Managerial Personnel authorised to determine materiality", to: "/investors/contact" },
    { title: "Financial statements of subsidiary companies", to: "/investors/financial-reporting" },
    { title: "Newspaper advertisements / publications", to: "/investors/disclosures/newspaper-advertisements" },
    { title: "Memorandum & Articles of Association of the Company", url: "/documentforwebsiteupdate/MRC_MOA_AOA.pdf" },
    { title: "Schedule of analyst or institutional investor meetings and presentations made", na: true },
    { title: "Audio / video recordings and transcripts of analyst / investor calls", na: true },
    { title: "Agreements entered into with media companies and/or their associates", na: true },
    { title: "Credit ratings obtained for all outstanding instruments", na: true },
    { title: "Details of any issue of securities during the year", na: true },
];

const ViewCell = ({ row }: { row: DisclosureRow }) => {
    if (row.na) {
        return (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                Not Applicable
            </span>
        );
    }
    if (row.to) {
        return (
            <Link
                to={row.to}
                className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-medium transition-colors"
            >
                <FileText size={15} /> View
            </Link>
        );
    }
    if (row.url) {
        return (
            <a
                href={row.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-medium transition-colors"
            >
                <ExternalLink size={15} /> View
            </a>
        );
    }
    return <span className="text-gray-300">—</span>;
};

export const RegulationDisclosures = () => (
    <InvestorPageWrapper
        title="Disclosures under Regulation 46 & 62"
        intro="Disclosures made available on the website of MRC Agrotech Limited pursuant to Regulation 46 and 62 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015."
        wide
    >
        <div className="mt-2 space-y-6">
            <p className="text-gray-600 leading-relaxed text-justify">
                MRC Agrotech Limited is engaged in the cultivation, processing, manufacturing, trading and export of a
                diversified range of agricultural and agri-based products, including natural essential oils, lemongrass,
                tea, seeds, nano fertilizers and guar gum. The equity shares of the Company are listed on BSE Limited
                (Scrip Code: 540809). In accordance with Regulation 46 and 62 of the SEBI (LODR) Regulations, 2015, the
                Company makes the following information available to its stakeholders on this page. Items marked
                “Not Applicable” are those for which the Company has no disclosure to make as on date.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-brand-700 text-white">
                            <th className="text-left py-3.5 px-5 font-semibold text-xs uppercase tracking-wider w-14">Sr. No.</th>
                            <th className="text-left py-3.5 px-5 font-semibold text-xs uppercase tracking-wider">Particulars</th>
                            <th className="text-center py-3.5 px-5 font-semibold text-xs uppercase tracking-wider whitespace-nowrap w-36">Disclosure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => (
                            <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors align-top">
                                <td className="py-4 px-5 text-gray-400 font-medium tabular-nums">{idx + 1}</td>
                                <td className="py-4 px-5 text-gray-700 leading-relaxed">{row.title}</td>
                                <td className="py-4 px-5 text-center whitespace-nowrap">
                                    <ViewCell row={row} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-xs text-gray-400">
                This page is maintained under Regulation 46 and 62 of the SEBI (LODR) Regulations, 2015 and is updated as
                and when required. Material events and information filed with BSE Limited are also available under the
                corporate announcements section for the Company (Scrip Code: 540809).
            </p>
        </div>
    </InvestorPageWrapper>
);
