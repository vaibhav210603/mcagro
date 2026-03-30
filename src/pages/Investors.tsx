import { useState } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, ExternalLink } from 'lucide-react';

// Data Structure
type DocumentLink = {
    title: string;
    url: string;
};

type Category = {
    title: string;
    subcategories?: {
        [key: string]: DocumentLink[] | string;
    } | DocumentLink[];
};

const investorsData: Category[] = [
    {
        title: "Financial Reporting",
        subcategories: {
            "Quarterly Financials": [
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
            ],
            "Annual Reports": [
                { title: "ANNUAL REPORT 2025", url: "/annual-reports/annual-report-2025.pdf" },
                { title: "ANNUAL REPORT 2024", url: "/annual-reports/annual-report-2024.pdf" },
                { title: "ANNUAL REPORT 2023", url: "/annual-reports/annual-report-2023.pdf" },
                { title: "ANNUAL REPORT 2022", url: "/annual-reports/annual-report-2022.pdf" },
                { title: "ANNUAL REPORT 2021", url: "/annual-reports/annual-report-2021.pdf" },
                { title: "ANNUAL REPORT 2020", url: "/annual-reports/annual-report-2020.pdf" },
                { title: "ANNUAL REPORT 2019", url: "/annual-reports/annual-report-2019.pdf" },
                { title: "ANNUAL REPORT 2018", url: "/annual-reports/annual-report-2018.pdf" }
            ],
            "Valuation Reports": [
                { title: "Valuation Report 2024", url: "/documentforwebsiteupdate/MRC_Valuation Report_06032024 (1).pdf" },
                { title: "Valuation Report", url: "/documentforwebsiteupdate/MRC_Valuation.pdf" }
            ],
            "RPT Disclosure": [
                { title: "RPT Disclosure", url: "/documentforwebsiteupdate/RPT_Disclosure.pdf" }
            ]
        }
    },
    {
        title: "Compliance & Policies",
        subcategories: {
            "Compliance": [
                { title: "Annual Secretarial Compliance Certificate", url: "/documentforwebsiteupdate/annual-secretarial-compliance-certificate.pdf" },
                { title: "Scrutinizer Report", url: "/documentforwebsiteupdate/MRC_CS_scutinizer-report.pdf" }
            ],
            "Corporate Governance / Policies": [
                { title: "Dividend Distribution Policy", url: "/Dividend Distribution Policy.pdf" },
                { title: "Nomination and Remuneration Policy", url: "/Nomination and Remuneration Policy.pdf" },
                { title: "Code of Conduct Policy", url: "/Code of Conduct Policy.pdf" },
                { title: "Policy on Related Party Transactions - MRC", url: "/Policy on Related Party Transactions - MRC.pdf" },
                { title: "Memorandum & Articles of Association", url: "/documentforwebsiteupdate/MRC_MOA_AOA.pdf" },
                { title: "Reconstitution of Committees", url: "/documentforwebsiteupdate/MRC_reconstitutionofcommittees.pdf" }
            ]
        }
    },
    {
        title: "Group Companies",
        subcategories: [
            { title: "Agronica Seeds", url: "https://agronicaseeds.com/" }
        ]
    }
];

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

export const Investors = () => {
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
                            <p className="text-xl text-gray-600">Financial information and regulatory filings</p>
                        </div>

                        <div className="space-y-4">
                            {investorsData.map((category, index) => (
                                <AccordionItem key={index} title={category.title} defaultOpen={index === 0}>
                                    {/* Handle direct list of links */}
                                    {Array.isArray(category.subcategories) ? (
                                        <DocumentList documents={category.subcategories} />
                                    ) : (
                                        // Handle nested subcategories
                                        <div className="space-y-2 mt-2">
                                            {Object.entries(category.subcategories || {}).map(([subTitle, items], subIndex) => (
                                                <div key={subIndex} className="ml-2">
                                                    {typeof items === 'string' ? (
                                                        <div className="p-4 bg-gray-50 rounded-lg text-gray-500 italic text-sm border border-gray-100">
                                                            {items}
                                                        </div>
                                                    ) : (
                                                        <AccordionItem title={subTitle}>
                                                            <DocumentList documents={items} />
                                                        </AccordionItem>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </AccordionItem>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

