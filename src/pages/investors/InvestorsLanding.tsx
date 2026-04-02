import { motion } from 'framer-motion';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Shield, BarChart3, Users, Megaphone, Phone, BookOpen, Scale } from 'lucide-react';

const sections = [
    {
        title: "Code Of Conduct & Policy",
        href: "/investors/code-of-conduct",
        icon: Shield,
        description: "Corporate governance policies including code of conduct, dividend distribution, nomination and remuneration.",
        color: "from-blue-500 to-indigo-600"
    },
    {
        title: "Financial Reporting",
        href: "/investors/financial-reporting",
        icon: BarChart3,
        description: "Quarterly financials, annual reports, AGM/EGM notices, RPT disclosure and subsidiary financials.",
        color: "from-emerald-500 to-teal-600"
    },
    {
        title: "Shareholders Information",
        href: "/investors/shareholders-info",
        icon: Users,
        description: "Shareholding pattern and investor-related information.",
        color: "from-violet-500 to-purple-600"
    },
    {
        title: "Corporate Announcement",
        href: "/investors/corporate-announcement",
        icon: Megaphone,
        description: "Committee reconstitution, valuation reports, MOA/AOA, scrutinizer reports and announcements.",
        color: "from-amber-500 to-orange-600"
    },
    {
        title: "Investors Contact",
        href: "/investors/contact",
        icon: Phone,
        description: "RTA details, Company Secretary and compliance officer contact information.",
        color: "from-rose-500 to-pink-600"
    },
    {
        title: "Prospectus",
        href: "/investors/prospectus",
        icon: BookOpen,
        description: "Company prospectus and related documents.",
        color: "from-cyan-500 to-sky-600"
    },
    {
        title: "REG.46 & 62",
        href: "/investors/reg-46-62",
        icon: Scale,
        description: "Regulatory compliance under Regulation 46 & 62 of SEBI LODR.",
        color: "from-slate-500 to-gray-600"
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
