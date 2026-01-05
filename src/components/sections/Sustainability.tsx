
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';

export const Sustainability = () => {
    return (
        <SectionWrapper id="sustainability" className="bg-brand-900 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-7xl font-bold tracking-tight mb-8 md:mb-12"
                    >
                        Zero<br /><span className="text-brand-400">Chemicals.</span><br />
                        100%<br /><span className="text-brand-400">Future.</span>
                    </motion.h2>

                    <Button
                        size="lg"
                        className="bg-white text-brand-900 hover:bg-brand-50 border-white"
                        onClick={() => alert("Sustainability Report 2024 is coming soon!")}
                    >
                        Read Our Sustainability Report
                    </Button>
                </div>

                <div className="space-y-12">
                    {[
                        { title: 'Regenerative Farming', desc: 'Restoring soil health through natural processes and biodiversity promotion.' },
                        { title: 'Carbon Negative', desc: 'Our farming practices actively sequester usage carbon from the atmosphere.' },
                        { title: 'Water Conservation', desc: 'Advanced irrigation systems reduce water usage by up to 40%.' }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="border-l border-white/20 pl-8"
                        >
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-white/60 text-lg font-light leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
