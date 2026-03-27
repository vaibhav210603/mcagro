import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Newspaper, ExternalLink, Satellite, Leaf, BarChart3, Droplets, ShieldCheck } from 'lucide-react';

const highlights = [
    { icon: Satellite, label: 'Real-Time Crop Monitoring', desc: 'Satellite-based crop health tracking for actionable insights' },
    { icon: BarChart3, label: 'Yield Forecasting', desc: 'Data-driven planning for optimal harvest results' },
    { icon: Droplets, label: 'Water Management', desc: 'Precision irrigation using remote sensing data' },
    { icon: ShieldCheck, label: 'Optimized Inputs', desc: 'Smart pesticide & fertilizer application reducing waste' },
    { icon: Leaf, label: 'Sustainable Practices', desc: 'Regenerative farming powered by technology' },
];

export const NewsHighlight = () => {
    return (
        <SectionWrapper id="news" className="bg-gradient-to-br from-brand-900 via-brand-800 to-emerald-900 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
                {/* Two Column Layout: Text + Image */}
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-14">
                    {/* Left: Text Content (3 cols) */}
                    <div className="lg:col-span-3">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap items-center gap-3 mb-6"
                        >
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                                <Newspaper className="w-4 h-4 text-amber-400" />
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-300">In the News</span>
                            </div>
                            <span className="text-white/40 text-sm font-medium">Business Standard • May 30, 2025</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6"
                        >
                            Precision Farming &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                                Sustainable Development
                            </span>{' '}
                            is Here for the Farmers
                        </motion.h2>

                        {/* Summary */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 font-light"
                        >
                            MRC Agrotech Ltd. has entered into a strategic partnership with Vizexec Transformation Pvt. Ltd. 
                            to bring cutting-edge satellite-based crop monitoring technology to India's agriculture sector, 
                            starting with farmers in Uttar Pradesh.
                        </motion.p>

                        {/* Quote Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8"
                        >
                            <div className="text-4xl text-amber-400/60 font-serif leading-none mb-3">"</div>
                            <p className="text-white/90 text-base md:text-lg italic leading-relaxed mb-5">
                                Committed in carrying the company's vision in bringing cost effective solutions right in the 
                                hands of the farmers. And, steadfast mission to spearhead the development of an economical, 
                                sustainable, profitable, and scalable agriculture farming sector in India.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                                    A
                                </div>
                                <div>
                                    <div className="text-white font-bold">Mr. Ashokk Singh</div>
                                    <div className="text-white/50 text-sm">Chairman & Director, MRC Agrotech Ltd.</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="lg:col-span-2 relative group"
                    >
                        <div className="rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/30 group-hover:border-amber-400/30 transition-all duration-500">
                            <img 
                                src="/news_partnership.png" 
                                alt="MRC Agrotech Strategic Partnership" 
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Floating caption */}
                        <div className="absolute -bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3 text-center">
                            <p className="text-white/80 text-xs md:text-sm font-medium text-center">
                                Strategic Partnership for Precision Agriculture
                            </p>
                        </div>
                    </motion.div>
                </div>


                {/* Tech Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-10"
                >
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">Key Technology Solutions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 + i * 0.08 }}
                                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all duration-300 group"
                            >
                                <item.icon className="w-8 h-8 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                                <div className="text-white font-bold text-sm mb-1">{item.label}</div>
                                <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Read Full Article Link */}
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    href="https://www.business-standard.com/content/press-releases-ani/precision-farming-and-sustainable-development-is-here-for-the-farmers-125053001183_1.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-brand-900 font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-amber-400/20 hover:scale-105 transform"
                >
                    Read Full Article on Business Standard
                    <ExternalLink className="w-5 h-5" />
                </motion.a>
            </div>
        </SectionWrapper>
    );
};
