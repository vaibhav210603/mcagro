
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';

export const About = () => {
    return (
        <SectionWrapper id="vision" className="bg-white">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/homeimage.png"
                            alt="Sustainable farming"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </div>

                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-600 font-semibold tracking-wide uppercase text-sm md:text-base"
                    >
                        Our Vision
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mt-4 mb-6 md:mb-8 leading-tight text-dark"
                    >
                        Redefining agriculture through innovation and sustainability.
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-light"
                    >
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            Established in 2015, MRC Agrotech Ltd. is committed to mitigating the environmental impact of agriculture.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            Our primary focus revolves around the shift towards <strong className="text-brand-800 font-medium">chemical-free, regenerative</strong>,
                            and commercial-scale farming practices.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            We operate over <strong className="text-brand-800 font-medium">100 acres</strong> of land, specializing in aromatic crops and essential oils.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            As a debt-free entity, we stand on a foundation of financial stability and prudence.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:flex gap-x-8 gap-y-8 md:gap-12 mt-10 md:mt-12"
                    >
                        {[
                            { label: 'Acres Cultivated', value: '100+' },
                            { label: 'Established', value: '2015' },
                            { label: 'Sustainability', value: '100%' }
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl md:text-3xl font-bold text-brand-700">{stat.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};
