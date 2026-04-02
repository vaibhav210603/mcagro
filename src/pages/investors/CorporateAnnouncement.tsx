import { InvestorPageWrapper, AccordionItem, DocumentList } from './InvestorComponents';

const reconstitution = [
    { title: "Reconstitution of Committees", url: "/documentforwebsiteupdate/MRC_reconstitutionofcommittees.pdf" }
];

const announcement = [
    { title: "Annual Secretarial Compliance Certificate", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" }
];

const valuationReports = [
    { title: "Valuation Report 2024", url: "/documentforwebsiteupdate/MRC_Valuation Report_06032024 (1).pdf" },
    { title: "Valuation Report 2025", url: "/documentforwebsiteupdate/MRC_Valuation.pdf" }
];

const moaAoa = [
    { title: "Memorandum & Articles of Association", url: "/documentforwebsiteupdate/MRC_MOA_AOA.pdf" }
];

const scrutinizerReport = [
    { title: "Scrutinizer Report", url: "/documentforwebsiteupdate/MRC_CS_scutinizer-report.pdf" }
];

export const CorporateAnnouncement = () => (
    <InvestorPageWrapper title="Corporate Announcement">
        <div className="space-y-2 mt-4">
            <AccordionItem title="Reconstitution of Committees" defaultOpen>
                <DocumentList documents={reconstitution} />
            </AccordionItem>
            <AccordionItem title="Announcement">
                <DocumentList documents={announcement} />
            </AccordionItem>
            <AccordionItem title="Valuation Report">
                <DocumentList documents={valuationReports} />
            </AccordionItem>
            <AccordionItem title="Intimation MOA AOA">
                <DocumentList documents={moaAoa} />
            </AccordionItem>
            <AccordionItem title="Postal Ballot Scrutinizers Report">
                <DocumentList documents={scrutinizerReport} />
            </AccordionItem>
        </div>
    </InvestorPageWrapper>
);
