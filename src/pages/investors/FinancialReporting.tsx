import { InvestorPageWrapper, AccordionItem, DocumentList } from './InvestorComponents';

const quarterlyFinancials = [
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
];

const annualReports = [
    { title: "ANNUAL REPORT 2025", url: "/annual-reports/annual-report-2025.pdf" },
    { title: "ANNUAL REPORT 2024", url: "/annual-reports/annual-report-2024.pdf" },
    { title: "ANNUAL REPORT 2023", url: "/annual-reports/annual-report-2023.pdf" },
    { title: "ANNUAL REPORT 2022", url: "/annual-reports/annual-report-2022.pdf" },
    { title: "ANNUAL REPORT 2021", url: "/annual-reports/annual-report-2021.pdf" },
    { title: "ANNUAL REPORT 2020", url: "/annual-reports/annual-report-2020.pdf" },
    { title: "ANNUAL REPORT 2019", url: "/annual-reports/annual-report-2019.pdf" },
    { title: "ANNUAL REPORT 2018", url: "/annual-reports/annual-report-2018.pdf" }
];

const rptDisclosure = [
    { title: "RPT Disclosure", url: "/documentforwebsiteupdate/RPT_Disclosure.pdf" }
];

const noticeOfAGM = [
    { title: "Notice of AGM 2025", url: "/agm-egm/Notice-of-AGM-2025.pdf" }
];

const noticeOfEGM = [
    { title: "Notice of EGM dated 08-03-2024", url: "/agm-egm/NOTICE-OF-EGM.pdf" },
    { title: "Notice of EGM dated 08-03-2024 (Revised)", url: "/agm-egm/EGM-Notice.pdf" },
    { title: "Corrigendum to Notice of EGM dated 27-03-2024", url: "/agm-egm/Corrigendum-to-Notice-of-EGM.pdf" },
    { title: "Proceedings of EGM dated 03-04-2024", url: "/agm-egm/Proceedings-of-EGM.pdf" },
    { title: "Notice of Intimation Of The Extra-Ordinary General Meeting Date 06-06-2025", url: "/agm-egm/Notice-06062025.pdf" },
    { title: "Corrigendum to Notice of EGM Dated 28-06-2025", url: "/agm-egm/Corrigendum-to-Notice-of-EGM-Dated-28-06-2025.pdf" }
];

const outcomeOfEGM = [
    { title: "EGM Outcome dated 03-04-2024", url: "/agm-egm/EGM-Outcome-03-04-2024.pdf" },
    { title: "EGM Outcome dated 28-06-2025", url: "/agm-egm/EGM-Outcome-28-06-2025.pdf" }
];

export const FinancialReporting = () => (
    <InvestorPageWrapper title="Financial Reporting">
        <div className="space-y-2 mt-4">
            <AccordionItem title="Quarterly Financials" defaultOpen>
                <DocumentList documents={quarterlyFinancials} />
            </AccordionItem>
            <AccordionItem title="Annual Reports">
                <DocumentList documents={annualReports} />
            </AccordionItem>
            <AccordionItem title="Financials of Subsidiary">
                <div className="space-y-4 mt-2">
                    <div className="border border-emerald-100 rounded-xl p-5 bg-emerald-50/30">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-emerald-900">Agronica Seeds Private Limited</h3>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">Subsidiary</span>
                        </div>
                        <DocumentList documents={[{ title: "Visit Agronica Seeds Official Website", url: "https://agronicaseeds.com" }]} />
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem title="RPT Disclosure">
                <DocumentList documents={rptDisclosure} />
            </AccordionItem>
            <AccordionItem title="AGM & EGM Notices">
                <div className="space-y-3 mt-2">
                    {/* AGM Section */}
                    <div className="border border-emerald-100 rounded-xl p-4 bg-emerald-50/30">
                        <h3 className="text-base font-bold text-emerald-800 mb-3">AGM (Annual General Meeting)</h3>
                        <div className="space-y-2 ml-1">
                            <AccordionItem title="Notice of AGM" defaultOpen>
                                <DocumentList documents={noticeOfAGM} />
                            </AccordionItem>
                            <AccordionItem title="Outcome of AGM">
                                <div className="p-4 bg-gray-50 rounded-lg text-gray-500 italic text-sm border border-gray-100 mt-2">
                                    Coming Soon…
                                </div>
                            </AccordionItem>
                        </div>
                    </div>

                    {/* EGM Section */}
                    <div className="border border-amber-100 rounded-xl p-4 bg-amber-50/30">
                        <h3 className="text-base font-bold text-amber-800 mb-3">EGM (Extra-Ordinary General Meeting)</h3>
                        <div className="space-y-2 ml-1">
                            <AccordionItem title="Notice of EGM" defaultOpen>
                                <DocumentList documents={noticeOfEGM} />
                            </AccordionItem>
                            <AccordionItem title="Outcome of EGM">
                                <DocumentList documents={outcomeOfEGM} />
                            </AccordionItem>
                        </div>
                    </div>
                </div>
            </AccordionItem>
        </div>
    </InvestorPageWrapper>
);
