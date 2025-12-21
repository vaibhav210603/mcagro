
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';

export const Contact = () => {
    return (
        <SectionWrapper id="contact" className="bg-gray-50">
            <div className="relative rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/This_man_shaping_202512211919.gif"
                        alt="Shaping the future"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to shape the future of agriculture?
                    </h2>
                    <Button size="lg" className="bg-white text-brand-900 hover:bg-brand-50 px-10 py-5 text-lg">
                        Get in Touch
                    </Button>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
                {[
                    { label: 'Visit', content: 'Block 404, 4th floor, Sagar Tech Plaza, Mumbai, 400072' },
                    { label: 'Call', content: '022 - 40156765' },
                    { label: 'Email', content: 'info@mrcagro.com' }
                ].map((item, i) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center"
                    >
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">{item.label}</h4>
                        <p className="text-lg font-medium text-brand-900">{item.content}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
