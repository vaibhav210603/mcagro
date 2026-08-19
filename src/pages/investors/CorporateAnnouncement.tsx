import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
// All items link to PDFs: signed PDFs at the site root, and the drafted policies rendered
// on the MRC letterhead under /policies/.
const policies: DocumentLink[] = [
    { title: "NRC Policy and Criteria of making payments to non-executive directors", url: "/Nomination and Remuneration Policy.pdf" },
    { title: "Policy for determining Material Subsidiaries", url: "/policies/material-subsidiaries.pdf" },
    { title: "Familiarisation Programme for Independent Directors", url: "/policies/familiarisation.pdf" },
    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
    { title: "Terms and Conditions for Appointment of Independent Directors", url: "/policies/independent-directors-terms.pdf" },
    { title: "Policy on Group Companies, Material Creditors & Material Litigation", url: "/policies/group-company-material-litigation.pdf" },
    { title: "Internal Financial Control Policy", url: "/policies/internal-financial-control.pdf" },
    { title: "Archival Policy", url: "/policies/archival.pdf" },
    { title: "Policy for Determination of Materiality of Events", url: "/policies/determination-materiality-events.pdf" },
    { title: "Policy for Preservation of Documents", url: "/policies/preservation-documents.pdf" },
    { title: "Policy on Material Related Party Transactions", url: "/Policy on Related Party Transactions - MRC.pdf" },
    { title: "Risk Management Policy", url: "/policies/risk-management.pdf" },
    { title: "Code of Conduct for Insider Trading & Code of Practices and Procedures for Fair Disclosure of UPSI", url: "/policies/insider-trading-code.pdf" },
    { title: "Code of Ethics for Board Members and Senior Management", url: "/Code of Conduct Policy.pdf" },
    { title: "Vigil Mechanism / Whistle Blower Policy", url: "/policies/whistle-blower.pdf" },
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

            <Link
                to="/investors/regulation-46-62"
                className="flex items-center justify-between gap-4 p-5 rounded-xl border border-brand-100 bg-brand-50/50 hover:bg-brand-50 hover:border-brand-200 transition-colors group"
            >
                <div>
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-brand-800">
                        Disclosures under Regulation 46 & 62
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                        View the complete website disclosure index under SEBI (LODR) Regulations, 2015.
                    </p>
                </div>
                <ArrowRight size={20} className="text-brand-500 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    </InvestorPageWrapper>
);
