import { InvestorPageWrapper, AccordionItem, DocumentList, type DocumentLink } from './InvestorComponents';

// ── Announcements ──
const reconstitution: DocumentLink[] = [
    { title: "Reconstitution of Committees", url: "/documentforwebsiteupdate/MRC_reconstitutionofcommittees.pdf" },
];
const valuationReports: DocumentLink[] = [
    { title: "Valuation Report 2024", url: "/documentforwebsiteupdate/MRC_Valuation Report_06032024 (1).pdf" },
    { title: "Valuation Report 2025", url: "/documentforwebsiteupdate/MRC_Valuation.pdf" },
];
const moaAoa: DocumentLink[] = [
    { title: "Memorandum & Articles of Association", url: "/documentforwebsiteupdate/MRC_MOA_AOA.pdf" },
];
const scrutinizerReport: DocumentLink[] = [
    { title: "Scrutinizer Report", url: "/documentforwebsiteupdate/MRC_CS_scutinizer-report.pdf" },
];

// ── Compliance Certificates & Reports ──
const complianceCertificates: DocumentLink[] = [
    { title: "Annual Secretarial Compliance Report (Regulation 24A)", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" },
    { title: "Compliance Certificate under Regulation 40(9)", tag: "FY 2024-25" },
    { title: "Compliance Certificate under Regulation 7(3)", tag: "FY 2024-25" },
    { title: "Reconciliation of Share Capital Audit Report", tag: "Q4 FY 2024-25" },
    { title: "Corporate Governance Report (Regulation 27(2))", tag: "Q1 FY 2025-26" },
    { title: "Statement of Investor Complaints", tag: "Q1 FY 2025-26" },
    { title: "Structured Digital Database (SDD) Compliance Certificate", tag: "FY 2024-25" },
];

// ── Policies & Code of Conduct — standard SEBI (LODR) policy set ──
// Items with `url` link to signed PDFs; items with `to` open the drafted on-site policy page.
const policies: DocumentLink[] = [
    { title: "NRC Policy and Criteria of making payments to non-executive directors", url: "/Nomination and Remuneration Policy.pdf" },
    { title: "Policy for determining Material Subsidiaries", to: "/investors/policies/material-subsidiaries" },
    { title: "Familiarisation Programme for Independent Directors", to: "/investors/policies/familiarisation" },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Terms and Conditions for Appointment of Independent Directors", to: "/investors/policies/independent-directors-terms" },
    { title: "Policy on Group Companies, Material Creditors & Material Litigation", to: "/investors/policies/group-company-material-litigation" },
    { title: "Internal Financial Control Policy", to: "/investors/policies/internal-financial-control" },
    { title: "Archival Policy", to: "/investors/policies/archival" },
    { title: "Policy for Determination of Materiality of Events", to: "/investors/policies/determination-materiality-events" },
    { title: "Policy for Preservation of Documents", to: "/investors/policies/preservation-documents" },
    { title: "Policy on Material Related Party Transactions", url: "/Policy on Related Party Transactions - MRC.pdf" },
    { title: "Risk Management Policy", to: "/investors/policies/risk-management" },
    { title: "Code of Conduct for Insider Trading & Code of Practices and Procedures for Fair Disclosure of UPSI", to: "/investors/policies/insider-trading-code" },
    { title: "Code of Ethics for Board Members and Senior Management", url: "/Code of Conduct Policy.pdf" },
    { title: "Vigil Mechanism / Whistle Blower Policy", to: "/investors/policies/whistle-blower" },
];

// ── Disclosures under Regulation 46 & 62 of SEBI (LODR), 2015 ──
const reg4662: DocumentLink[] = [
    { title: "Familiarisation programmes for Independent Directors", to: "/investors/policies/familiarisation" },
    { title: "Secretarial Compliance Report", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" },
    { title: "Press Releases / Press Notes", to: "/investors/disclosures/press-releases" },
    { title: "Business Details", url: "/about-us" },
    { title: "Terms and conditions of appointment of Independent Directors", to: "/investors/policies/independent-directors-terms" },
    { title: "Composition of various committees of the Board of Directors", url: "/company/board" },
    { title: "Code of Conduct", url: "/Code of Conduct Policy.pdf" },
    { title: "Details of establishment of Vigil Mechanism / Whistle Blower Policy", to: "/investors/policies/whistle-blower" },
    { title: "Criteria of making payments to Non-Executive Directors", url: "/Nomination and Remuneration Policy.pdf" },
    { title: "Policy on dealing with Related Party Transactions", url: "/Policy on Related Party Transactions - MRC.pdf" },
    { title: "Email address for grievance redressal and other relevant details", url: "/investors/contact" },
    { title: "Contact information of designated officials handling investor grievances", url: "/investors/contact" },
    { title: "Financial Information", url: "/investors/financial-reporting" },
    { title: "Notice of Board Meeting where financial results are to be discussed", url: "/investors/notice-board" },
    { title: "Financial results, on conclusion of the Board Meeting where results were approved", url: "/investors/financial-reporting" },
    { title: "Complete copy of the Annual Report", url: "/investors/financial-reporting" },
    { title: "Shareholding Pattern / Unit Holding Pattern", url: "/investors/shareholders-info" },
    { title: "New name and old name of the listed entity (Date of Name Change)", to: "/investors/disclosures/name-change" },
    { title: "Disclosure of the policy for determination of materiality of events or information", to: "/investors/policies/determination-materiality-events" },
    { title: "Contact details of Key Managerial Personnel", url: "/investors/contact" },
    { title: "Disclosures under sub-regulation (8) of Regulation 30", to: "/investors/disclosures/reg30-8-disclosures" },
    { title: "Statements of deviation(s) or variation(s) as specified in Regulation 32", to: "/investors/disclosures/reg32-deviation" },
    { title: "Annual Return", to: "/investors/disclosures/annual-return" },
    { title: "Newspaper Advertisements", to: "/investors/disclosures/newspaper-advertisements" },
    { title: "Subsidiary Financial Statements", url: "/investors/financial-reporting" },
];

export const CorporateAnnouncement = () => (
    <InvestorPageWrapper
        title="Statutory Communication & Announcements"
        intro="Statutory communications, compliance certificates, corporate governance policies and website disclosures of MRC Agrotech Limited under the Companies Act, 2013 and SEBI (LODR) Regulations, 2015."
        wide
    >
        <div className="space-y-2 mt-4">
            <AccordionItem title="Announcements">
                <div className="space-y-2 mt-2">
                    <AccordionItem title="Reconstitution of Committees">
                        <DocumentList documents={reconstitution} />
                    </AccordionItem>
                    <AccordionItem title="Valuation Reports">
                        <DocumentList documents={valuationReports} />
                    </AccordionItem>
                    <AccordionItem title="Memorandum & Articles of Association">
                        <DocumentList documents={moaAoa} />
                    </AccordionItem>
                    <AccordionItem title="Postal Ballot / Scrutinizer's Report">
                        <DocumentList documents={scrutinizerReport} />
                    </AccordionItem>
                </div>
            </AccordionItem>

            <AccordionItem title="Compliance Certificates & Reports">
                <DocumentList documents={complianceCertificates} />
            </AccordionItem>

            <AccordionItem title="Policies & Code of Conduct">
                <DocumentList documents={policies} />
            </AccordionItem>

            <AccordionItem title="Disclosures under Regulation 46 & 62">
                <DocumentList documents={reg4662} />
            </AccordionItem>
        </div>
    </InvestorPageWrapper>
);
