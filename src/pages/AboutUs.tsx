import { SectionWrapper } from '../components/ui/SectionWrapper';
import { motion } from 'framer-motion';

export const AboutUs = () => {
    return (
        <div className="pt-20">
            <SectionWrapper id="about-us" className="bg-white">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl font-bold text-dark">About Us</h1>
                        <h2 className="text-2xl font-semibold text-brand-700">Overview</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                MRC Agrotech Ltd, established in 2015, is dedicated to chemical-free, regenerative, and commercial-scale farming.
                                We focus on aromatic crops and Natural Essential Oils, committed to preserving the environment while delivering high-quality agricultural products.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-50 p-8 rounded-2xl border border-brand-100"
                    >
                        <h2 className="text-2xl font-semibold text-brand-800 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-700 italic leading-relaxed">
                            "To be a leading and sustainable agriculture and farming company, providing high-quality, chemical-free, and nutrient-rich food while fostering environmental stewardship and community empowerment."
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-semibold text-brand-700">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our mission is to revolutionize the agriculture industry through innovative and sustainable farming practices. We strive to provide high-quality, sustainable, and nutrient-rich food while promoting environmental conservation and social responsibility.
                        </p>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};
