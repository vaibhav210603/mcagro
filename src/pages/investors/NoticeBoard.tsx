import { InvestorPageWrapper } from './InvestorComponents';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Bell, Calendar } from 'lucide-react';

type Notice = {
    title: string;
    date: string;
    type: 'AGM' | 'EGM' | 'Board Meeting';
    pdfUrl: string;
};

const notices: Notice[] = [
    {
        title: "Corrigendum to Notice of EGM Dated 28-06-2025",
        date: "28 Jun 2025",
        type: "EGM",
        pdfUrl: "/agm-egm/Corrigendum-to-Notice-of-EGM-Dated-28-06-2025.pdf"
    },
    {
        title: "Notice of Intimation Of The Extra-Ordinary General Meeting",
        date: "06 Jun 2025",
        type: "EGM",
        pdfUrl: "/agm-egm/Notice-06062025.pdf"
    },
    {
        title: "Notice of Annual General Meeting 2025",
        date: "2025",
        type: "AGM",
        pdfUrl: "/agm-egm/Notice-of-AGM-2025.pdf"
    },
    {
        title: "Proceedings of EGM dated 03-04-2024",
        date: "03 Apr 2024",
        type: "EGM",
        pdfUrl: "/agm-egm/Proceedings-of-EGM.pdf"
    },
    {
        title: "Corrigendum to Notice of EGM dated 27-03-2024",
        date: "27 Mar 2024",
        type: "EGM",
        pdfUrl: "/agm-egm/Corrigendum-to-Notice-of-EGM.pdf"
    },
    {
        title: "Notice of Extra-Ordinary General Meeting",
        date: "08 Mar 2024",
        type: "EGM",
        pdfUrl: "/agm-egm/NOTICE-OF-EGM.pdf"
    },
];

const boardMeetings: Notice[] = [
    {
        title: "2026 Board Meeting Outcomes",
        date: "22 Jun 2026",
        type: "Board Meeting",
        pdfUrl: "/agm-egm/MRC - Board Meeting Outcome-22-06-2026.pdf"
    }
];

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    AGM: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    EGM: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    'Board Meeting': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' }
};

const NoticeCard = ({ notice, index }: { notice: Notice, index: number }) => {
    const colors = typeColors[notice.type];
    return (
        <motion.a
            href={notice.pdfUrl}
            target={notice.pdfUrl !== '#' ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/30 transition-all duration-300 flex flex-col h-full"
        >
            <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {notice.type}
                </span>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Calendar size={12} />
                    <span>{notice.date}</span>
                </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-brand-700 transition-colors leading-snug mb-4 flex-grow">
                {notice.title}
            </h3>

            <div className="flex items-center gap-2 text-brand-600 opacity-70 group-hover:opacity-100 transition-opacity mt-auto">
                <FileText size={14} />
                <span className="text-xs font-medium">View Document</span>
                <ArrowRight size={12} className="ml-auto transform group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-100/0 group-hover:from-brand-50/40 group-hover:to-brand-100/20 transition-all duration-500 pointer-events-none" />
        </motion.a>
    );
};

export const NoticeBoard = () => {
    return (
        <InvestorPageWrapper title="Notice Board">
            <div className="space-y-12 pb-12">
                <section>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <Bell size={16} className="text-brand-600" />
                        <span className="text-sm font-semibold text-brand-700 tracking-wide uppercase">
                            AGM & EGM Notices
                        </span>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {notices.map((notice, index) => (
                            <NoticeCard key={index} notice={notice} index={index} />
                        ))}
                    </div>
                </section>

                <section>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <Bell size={16} className="text-brand-600" />
                        <span className="text-sm font-semibold text-brand-700 tracking-wide uppercase">
                            Board Meetings
                        </span>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {boardMeetings.map((notice, index) => (
                            <NoticeCard key={index} notice={notice} index={index} />
                        ))}
                    </div>
                </section>
            </div>
        </InvestorPageWrapper>
    );
};
