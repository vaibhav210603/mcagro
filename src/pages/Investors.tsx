import { useState, useEffect } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, ExternalLink, Building2, Mail, Phone, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// Data Structure
type DocumentLink = {
    title: string;
    url: string;
};

type SubSection = {
    title: string;
    items: DocumentLink[] | string;
};

type Section = {
    id: string;
    title: string;
    subsections?: SubSection[];
    content?: React.ReactNode;
};

// ─── SECTION DATA ────────────────────────────────────────

const sections: Section[] = [
    {
        id: "code-of-conduct",
        title: "Code Of Conduct & Policy",
        subsections: [
            {
                title: "Policies",
                items: [
                    { title: "Code of Conduct Policy", url: "/Code of Conduct Policy.pdf" },
                    { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
                    { title: "Nomination and Remuneration Policy", url: "/Nomination and Remuneration Policy.pdf" },
                    { title: "Policy on Related Party Transactions - MRC", url: "/Policy on Related Party Transactions - MRC.pdf" },
                ]
            },
        ]
    },
    {
        id: "financial-reporting",
        title: "Financial Reporting",
        subsections: [
            {
                title: "Quarterly Financials",
                items: [
                    { title: "Financial statements for quarter ended on 31 Dec 2025", url: "/quaterlies/MRC_Oct_Dec_2025.pdf" },
                    { title: "Financial statements for quarter ended on 30 Sep 2025", url: "/quaterlies/MRC_july_september_2025.pdf" },
                    { title: "Financial statements for quarter ended on 30 June 2025", url: "/quaterlies/MRC_april_june_2025.pdf" },
                    { title: "Financial statements for quarter ended on 31 March 2025", url: "/quaterlies/MRC_Jan_march 2025_ result.pdf" },
                    { title: "Financial statements for quarter ended on 31 Dec 2024", url: "/quaterlies/MRC_oct to dec 2024_ result.pdf" },
                    { title: "Financial statements for quarter ended on 30 September 2024", url: "/quaterlies/Financial_statements_30_Sep_2024.pdf" },
                    { title: "Financial statements for quarter ended on 30 June 2024", url: "/quaterlies/Financial_statements_30_June_2024.pdf" },
                    { title: "Financial statements for quarter ended on 31 Mar 2024", url: "/quaterlies/Annual_report_Mar_2024.pdf" },
                    { title: "Financial statements for quarter ended on 31 Dec 2023", url: "/quaterlies/MRC30092023.pdf" },
                    { title: "Financial statements for quarter ended on 30 Sep 2023", url: "/quaterlies/MRC30092023.pdf" },
                    { title: "Financial statements for quarter ended on 30 June 2023", url: "/quaterlies/financial-statements-for-quarter-ended-on-30-june-2023.pdf" },
                    { title: "Financial statements for quarter ended on 31 March 2023", url: "/quaterlies/Financial-statements-for-quarter-ended-on-31-March-2023.pdf" },
                    { title: "Financial Results for Quarter Ended on 31 December 2022", url: "/quaterlies/financial-results-for-quarter-ended-on-31-12-2022.pdf" }
                ]
            },
            {
                title: "Annual Reports",
                items: [
                    { title: "ANNUAL REPORT 2025", url: "/annual-reports/annual-report-2025.pdf" },
                    { title: "ANNUAL REPORT 2024", url: "/annual-reports/annual-report-2024.pdf" },
                    { title: "ANNUAL REPORT 2023", url: "/annual-reports/annual-report-2023.pdf" },
                    { title: "ANNUAL REPORT 2022", url: "/annual-reports/annual-report-2022.pdf" },
                    { title: "ANNUAL REPORT 2021", url: "/annual-reports/annual-report-2021.pdf" },
                    { title: "ANNUAL REPORT 2020", url: "/annual-reports/annual-report-2020.pdf" },
                    { title: "ANNUAL REPORT 2019", url: "/annual-reports/annual-report-2019.pdf" },
                    { title: "ANNUAL REPORT 2018", url: "/annual-reports/annual-report-2018.pdf" }
                ]
            },
            {
                title: "Financials of Subsidiary",
                items: "There are no subsidiaries."
            },
            {
                title: "RPT Disclosure",
                items: [
                    { title: "RPT Disclosure", url: "/documentforwebsiteupdate/RPT_Disclosure.pdf" }
                ]
            },
            {
                title: "Notice of AGM",
                items: [
                    { title: "Notice of AGM 2025", url: "/agm-egm/Notice-of-AGM-2025.pdf" }
                ]
            },
            {
                title: "Outcome of AGM",
                items: "Coming Soon…"
            },
            {
                title: "Notice of EGM",
                items: [
                    { title: "Notice of EGM dated 08-03-2024", url: "/agm-egm/NOTICE-OF-EGM.pdf" },
                    { title: "Notice of EGM dated 08-03-2024 (Revised)", url: "/agm-egm/EGM-Notice.pdf" },
                    { title: "Corrigendum to Notice of EGM dated 27-03-2024", url: "/agm-egm/Corrigendum-to-Notice-of-EGM.pdf" },
                    { title: "Proceedings of EGM dated 03-04-2024", url: "/agm-egm/Proceedings-of-EGM.pdf" },
                    { title: "Notice of Intimation Of The Extra-Ordinary General Meeting Date 06-06-2025", url: "/agm-egm/Notice-06062025.pdf" },
                    { title: "Corrigendum to Notice of EGM Dated 28-06-2025", url: "/agm-egm/Corrigendum-to-Notice-of-EGM-Dated-28-06-2025.pdf" }
                ]
            },
            {
                title: "Outcome of EGM",
                items: [
                    { title: "EGM Outcome dated 03-04-2024", url: "/agm-egm/EGM-Outcome-03-04-2024.pdf" },
                    { title: "EGM Outcome dated 28-06-2025", url: "/agm-egm/EGM-Outcome-28-06-2025.pdf" }
                ]
            }
        ]
    },
    {
        id: "shareholders-info",
        title: "Shareholders Information",
        subsections: [
            {
                title: "Shareholding Pattern",
                items: [
                    { title: "Shareholding Pattern (BSE India)", url: "https://www.bseindia.com/stock-share-price/mrc-agrotech-ltd/mrcagro/540809/qtrid/128.00/shareholding-pattern/Dec-2025/" }
                ]
            }
        ]
    },
    {
        id: "corporate-announcement",
        title: "Corporate Announcement",
        subsections: [
            {
                title: "Reconstitution of Committees",
                items: [
                    { title: "Reconstitution of Committees", url: "/documentforwebsiteupdate/MRC_reconstitutionofcommittees.pdf" }
                ]
            },
            {
                title: "Announcement",
                items: [
                    { title: "Annual Secretarial Compliance Certificate", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" }
                ]
            },
            {
                title: "Valuation Report",
                items: [
                    { title: "Valuation Report 2024", url: "/documentforwebsiteupdate/MRC_Valuation Report_06032024 (1).pdf" },
                    { title: "Valuation Report", url: "/documentforwebsiteupdate/MRC_Valuation.pdf" }
                ]
            },
            {
                title: "Intimation MOA AOA",
                items: [
                    { title: "Memorandum & Articles of Association", url: "/documentforwebsiteupdate/MRC_MOA_AOA.pdf" }
                ]
            },
            {
                title: "Postal Ballot Scrutinizers Report",
                items: [
                    { title: "Scrutinizer Report", url: "/documentforwebsiteupdate/MRC_CS_scutinizer-report.pdf" }
                ]
            }
        ]
    },
    {
        id: "investors-contact",
        title: "Investors Contact",
    },
    {
        id: "prospectus",
        title: "Prospectus",
        subsections: [
            { title: "Prospectus", items: "Coming Soon…" }
        ]
    },
    {
        id: "reg-46-62",
        title: "REG.46 & 62",
        subsections: [
            { title: "REG.46 & 62", items: "Coming Soon…" }
        ]
    }
];

// ─── COMPONENTS ────────────────────────────────────────

const DocumentList = ({ documents }: { documents: DocumentLink[] }) => {
    return (
        <div className="grid gap-3 pt-4 pb-2">
            {documents.map((doc, idx) => (
                <a
                    key={idx}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all group"
                >
                    <div className="p-2 bg-brand-100 text-brand-600 rounded-md group-hover:bg-brand-200 transition-colors">
                        <FileText size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-brand-800 flex-1">
                        {doc.title}
                    </span>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-brand-500 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
            ))}
        </div>
    );
};

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
                <span className="text-lg font-semibold text-gray-800">{title}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400"
                >
                    <ChevronDown />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-5 pb-5 border-t border-gray-100">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const InvestorsContactContent = () => (
    <div className="space-y-6 pt-4">
        <p className="text-gray-600 leading-relaxed text-base italic">
            All stakeholders are important to us. We ensure transparency in financial reporting system.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
            {/* RTA Card */}
            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-100 rounded-lg">
                        <Building2 size={20} className="text-brand-700" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">RTA</h4>
                        <p className="text-sm text-brand-700 font-semibold">PURVA SHAREGISTRY (INDIA) PRIVATE LIMITED</p>
                    </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                        <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                        <span>Unit no 9, Shiv Shakti Industrial Estate, J.R. Boricha Marg, Lower Parel (E), Mumbai 400 011.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-400 shrink-0" />
                        <a href="mailto:support@purvashare.com" className="text-brand-600 hover:text-brand-800 transition-colors font-medium">
                            support@purvashare.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Company Secretary Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-100 rounded-lg">
                        <Building2 size={20} className="text-emerald-700" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Company Secretary & Compliance Officer</h4>
                        <p className="text-sm text-emerald-700 font-semibold">Mr. Rahul Mathur</p>
                    </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                        <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                        <span>Office no 1028, The Summit Business Bay by Omkar, WEH, Andheri (E), Mumbai 400 093.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-400 shrink-0" />
                        <a href="mailto:info@mrcagro.com" className="text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                            info@mrcagro.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// ─── MAIN PAGE ────────────────────────────────────────

export const Investors = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
            }
        }
    }, [location.hash]);

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <SectionWrapper id="investors-corner">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-dark mb-4">Investors Corner</h1>
                            <p className="text-xl text-gray-600">Financial information, regulatory filings & corporate governance</p>
                        </div>

                        <div className="space-y-6">
                            {sections.map((section, index) => (
                                <div key={section.id} id={section.id} className="scroll-mt-28">
                                    <AccordionItem title={section.title} defaultOpen={index === 0}>
                                        {/* Investors Contact — custom content */}
                                        {section.id === 'investors-contact' ? (
                                            <InvestorsContactContent />
                                        ) : (
                                            <div className="space-y-2 mt-2">
                                                {section.subsections?.map((sub, subIndex) => (
                                                    <div key={subIndex} className="ml-2">
                                                        {typeof sub.items === 'string' ? (
                                                            <div className="p-4 bg-gray-50 rounded-lg text-gray-500 italic text-sm border border-gray-100">
                                                                {sub.items}
                                                            </div>
                                                        ) : (
                                                            <AccordionItem title={sub.title}>
                                                                <DocumentList documents={sub.items} />
                                                            </AccordionItem>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </AccordionItem>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};
