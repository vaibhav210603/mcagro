import { motion } from 'framer-motion';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BarChart3, Users, Megaphone, Phone, Bell, Gavel } from 'lucide-react';

const sections = [
    {
        title: "Financial Information",
        href: "/investors/financial-reporting",
        icon: BarChart3,
        description: "Annual reports, quarterly results, related party transactions, subsidiary financials and general meetings.",
        color: "from-sky-500 to-blue-600"
    },
    {
        title: "Shareholding Information",
        href: "/investors/shareholders-info",
        icon: Users,
        description: "Shareholding pattern — the latest statement plus the year-wise, quarter-wise archive.",
        color: "from-violet-500 to-purple-600"
    },
    {
        title: "Statutory Communication & Announcements",
        href: "/investors/corporate-announcement",
        icon: Megaphone,
        description: "Compliance certificates, corporate governance policies, code of conduct and Reg. 46 & 62 disclosures.",
        color: "from-amber-500 to-orange-600"
    },
    {
        title: "Investor Contact",
        href: "/investors/contact",
        icon: Phone,
        description: "Registrar & Transfer Agent, Company Secretary and Compliance Officer contact details.",
        color: "from-cyan-500 to-sky-600"
    },
    {
        title: "Smart ODR & SEBI SCORES",
        href: "/investors/grievance-redressal",
        icon: Gavel,
        description: "Investor grievance redressal through the SEBI SCORES and Smart ODR platforms.",
        color: "from-slate-500 to-gray-600"
    },
    {
        title: "Notices",
        href: "/investors/notice-board",
        icon: Bell,
        description: "Latest notices and stock-exchange filings, searchable by financial year.",
        color: "from-rose-500 to-pink-600"
    },
];

export const InvestorsLanding = () => {
    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <SectionWrapper id="investors-corner">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-10"
                    >
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-dark mb-4">Investors Corner</h1>
                            <p className="text-xl text-gray-600">Financial information, regulatory filings & corporate governance</p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {sections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <motion.div
                                        key={section.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.07 }}
                                    >
                                        <Link
                                            to={section.href}
                                            className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/20 transition-all duration-300 h-full"
                                        >
                                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${section.color} mb-4`}>
                                                <Icon size={22} className="text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-700 transition-colors mb-2">
                                                {section.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                                {section.description}
                                            </p>
                                            <div className="flex items-center gap-1.5 text-brand-600 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                                                <FileText size={14} />
                                                <span>View Details</span>
                                                <ArrowRight size={14} className="ml-auto transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};
