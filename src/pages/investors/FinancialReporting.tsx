import { InvestorPageWrapper, AccordionItem, DocumentList, type DocumentLink } from './InvestorComponents';

const annualReports: DocumentLink[] = [
    { title: "Annual Report 2024-25", url: "/annual-reports/annual-report-2025.pdf" },
    { title: "Annual Report 2023-24", url: "/annual-reports/annual-report-2024.pdf" },
    { title: "Annual Report 2022-23", url: "/annual-reports/annual-report-2023.pdf" },
    { title: "Annual Report 2021-22", url: "/annual-reports/annual-report-2022.pdf" },
    { title: "Annual Report 2020-21", url: "/annual-reports/annual-report-2021.pdf" },
    { title: "Annual Report 2019-20", url: "/annual-reports/annual-report-2020.pdf" },
    { title: "Annual Report 2018-19", url: "/annual-reports/annual-report-2019.pdf" },
    { title: "Annual Report 2017-18", url: "/annual-reports/annual-report-2018.pdf" },
];

const quarterlyFinancials: DocumentLink[] = [
    { title: "Financial Results — Quarter ended 31 March 2026", url: "/quaterlies/MRC_Jan_March_2026.pdf" },
    { title: "Financial Results — Quarter ended 31 December 2025", url: "/quaterlies/MRC_Oct_Dec_2025.pdf" },
    { title: "Financial Results — Quarter ended 30 September 2025", url: "/quaterlies/MRC_july_september_2025.pdf" },
    { title: "Financial Results — Quarter ended 30 June 2025", url: "/quaterlies/MRC_april_june_2025.pdf" },
    { title: "Financial Results — Quarter ended 31 March 2025", url: "/quaterlies/MRC_Jan_march 2025_ result.pdf" },
    { title: "Financial Results — Quarter ended 31 December 2024", url: "/quaterlies/MRC_oct to dec 2024_ result.pdf" },
    { title: "Financial Results — Quarter ended 30 September 2024", url: "/quaterlies/Financial_statements_30_Sep_2024.pdf" },
    { title: "Financial Results — Quarter ended 30 June 2024", url: "/quaterlies/Financial_statements_30_June_2024.pdf" },
    { title: "Financial Results — Quarter ended 31 March 2024", url: "/quaterlies/Annual_report_Mar_2024.pdf" },
    { title: "Financial Results — Quarter ended 31 December 2023", url: "/quaterlies/MRC30092023.pdf" },
    { title: "Financial Results — Quarter ended 30 September 2023", url: "/quaterlies/MRC30092023.pdf" },
    { title: "Financial Results — Quarter ended 30 June 2023", url: "/quaterlies/financial-statements-for-quarter-ended-on-30-june-2023.pdf" },
    { title: "Financial Results — Quarter ended 31 March 2023", url: "/quaterlies/Financial-statements-for-quarter-ended-on-31-March-2023.pdf" },
    { title: "Financial Results — Quarter ended 31 December 2022", url: "/quaterlies/financial-results-for-quarter-ended-on-31-12-2022.pdf" },
];

const rptDisclosure: DocumentLink[] = [
    { title: "RPT Disclosure", url: "/documentforwebsiteupdate/RPT_Disclosure.pdf" },
    { title: "Policy on Material Related Party Transactions", url: "/Policy on Related Party Transactions - MRC.pdf" },
];

const noticeOfAGM: DocumentLink[] = [
    { title: "Notice of Annual General Meeting 2025", url: "/agm-egm/Notice-of-AGM-2025.pdf" },
];

const outcomeOfAGM: DocumentLink[] = [
    { title: "Outcome of Annual General Meeting" },
];

const noticeOfEGM: DocumentLink[] = [
    { title: "Corrigendum to Notice of EGM dated 28-06-2025", url: "/agm-egm/Corrigendum-to-Notice-of-EGM-Dated-28-06-2025.pdf" },
    { title: "Notice of Extra-Ordinary General Meeting dated 06-06-2025" },
    { title: "Corrigendum to Notice of EGM dated 27-03-2024", url: "/agm-egm/Corrigendum-to-Notice-of-EGM.pdf" },
    { title: "Notice of EGM dated 08-03-2024 (Revised)", url: "/agm-egm/EGM-Notice.pdf" },
    { title: "Notice of EGM dated 08-03-2024", url: "/agm-egm/NOTICE-OF-EGM.pdf" },
];

const outcomeOfEGM: DocumentLink[] = [
    { title: "EGM Outcome dated 28-06-2025" },
    { title: "Proceedings of EGM dated 03-04-2024", url: "/agm-egm/Proceedings-of-EGM.pdf" },
    { title: "EGM Outcome dated 03-04-2024", url: "/agm-egm/EGM-Outcome-03-04-2024.pdf" },
];

const boardMeetings: DocumentLink[] = [
    { title: "Board Meeting Outcome dated 22-06-2026", url: "/agm-egm/MRC - Board Meeting Outcome-22-06-2026.pdf" },
];

export const FinancialReporting = () => (
    <InvestorPageWrapper
        title="Financial Information"
        intro="Annual reports, quarterly financial results, related party transactions, subsidiary financials and general meeting documents of MRC Agrotech Limited."
    >
        <div className="space-y-2 mt-4">
            <AccordionItem title="Annual Reports" defaultOpen>
                <DocumentList documents={annualReports} />
            </AccordionItem>

            <AccordionItem title="Quarterly Financial Results">
                <DocumentList documents={quarterlyFinancials} />
            </AccordionItem>

            <AccordionItem title="Related Party Transactions">
                <DocumentList documents={rptDisclosure} />
            </AccordionItem>

            <AccordionItem title="Financials of Subsidiaries">
                <div className="space-y-4 mt-2">
                    <div className="border border-emerald-100 rounded-xl p-5 bg-emerald-50/30">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-emerald-900">Agronica Seeds Spark Private Limited</h3>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">Subsidiary</span>
                        </div>
                        <DocumentList documents={[{ title: "Visit Agronica Seeds Spark Official Website", url: "https://agronicaseeds.com" }]} />
                    </div>
                    <div className="border border-emerald-100 rounded-xl p-5 bg-emerald-50/30">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-emerald-900">Mars Pharma Private Limited</h3>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">Subsidiary</span>
                        </div>
                        <DocumentList documents={[{ title: "Visit Mars Pharma Official Website", url: "https://www.marspharma.in/" }]} />
                    </div>
                </div>
            </AccordionItem>

            <AccordionItem title="General Meetings (AGM / EGM)">
                <div className="space-y-3 mt-2">
                    <div className="border border-emerald-100 rounded-xl p-4 bg-emerald-50/30">
                        <h3 className="text-base font-bold text-emerald-800 mb-3">Annual General Meeting (AGM)</h3>
                        <div className="space-y-2 ml-1">
                            <AccordionItem title="Notice of AGM" defaultOpen>
                                <DocumentList documents={noticeOfAGM} />
                            </AccordionItem>
                            <AccordionItem title="Outcome of AGM">
                                <DocumentList documents={outcomeOfAGM} />
                            </AccordionItem>
                        </div>
                    </div>

                    <div className="border border-amber-100 rounded-xl p-4 bg-amber-50/30">
                        <h3 className="text-base font-bold text-amber-800 mb-3">Extra-Ordinary General Meeting (EGM)</h3>
                        <div className="space-y-2 ml-1">
                            <AccordionItem title="Notice of EGM" defaultOpen>
                                <DocumentList documents={noticeOfEGM} />
                            </AccordionItem>
                            <AccordionItem title="Outcome of EGM">
                                <DocumentList documents={outcomeOfEGM} />
                            </AccordionItem>
                        </div>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/60">
                        <h3 className="text-base font-bold text-gray-700 mb-3">Board Meeting Outcomes</h3>
                        <DocumentList documents={boardMeetings} />
                    </div>
                </div>
            </AccordionItem>
        </div>
    </InvestorPageWrapper>
);
