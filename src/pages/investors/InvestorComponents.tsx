import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { ChevronDown, FileText, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type DocumentLink = {
    title: string;
    url: string;
};

// Shared components for all investor sub-pages

export const InvestorPageWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="pt-20 bg-gray-50 min-h-screen">
        <SectionWrapper id="investor-section">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <Link
                            to="/investors"
                            className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-800 transition-colors mb-6 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Investors Corner
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-dark">{title}</h1>
                    </div>
                    {children}
                </motion.div>
            </div>
        </SectionWrapper>
    </div>
);

export const DocumentList = ({ documents }: { documents: DocumentLink[] }) => (
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

export const AccordionItem = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
                <span className="text-lg font-semibold text-gray-800">{title}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-gray-400">
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
                        <div className="px-5 pb-5 border-t border-gray-100">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const ComingSoon = ({ label }: { label?: string }) => (
    <div className="p-8 bg-gray-50 rounded-xl text-center border border-gray-100">
        <p className="text-gray-400 italic text-lg">{label || "Coming Soon…"}</p>
    </div>
);
