import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { FileText, ArrowRight, Bell, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

type Notice = {
    title: string;
    date: string;
    type: 'AGM' | 'EGM';
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

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    AGM: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    EGM: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
};

export const NoticesSection = () => {
    return (
        <SectionWrapper id="notices">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-4">
                        <Bell size={16} className="text-brand-600" />
                        <span className="text-sm font-semibold text-brand-700 tracking-wide uppercase">
                            Investor Notices
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        AGM & EGM Notices
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Stay updated with the latest Annual General Meeting and Extra-Ordinary General Meeting notices and proceedings.
                    </p>
                </motion.div>

                {/* Notices Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {notices.map((notice, index) => {
                        const colors = typeColors[notice.type];
                        return (
                            <motion.a
                                key={index}
                                href={notice.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="group relative bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/30 transition-all duration-300"
                            >
                                {/* Type Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide ${colors.bg} ${colors.text} border ${colors.border}`}>
                                        {notice.type}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                                        <Calendar size={12} />
                                        <span>{notice.date}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-brand-700 transition-colors leading-snug mb-4 min-h-[2.5rem]">
                                    {notice.title}
                                </h3>

                                {/* Footer */}
                                <div className="flex items-center gap-2 text-brand-600 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <FileText size={14} />
                                    <span className="text-xs font-medium">View Document</span>
                                    <ArrowRight size={12} className="ml-auto transform group-hover:translate-x-1 transition-transform" />
                                </div>

                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-100/0 group-hover:from-brand-50/40 group-hover:to-brand-100/20 transition-all duration-500 pointer-events-none" />
                            </motion.a>
                        );
                    })}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <Link
                        to="/investors"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        View All Investor Documents
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
