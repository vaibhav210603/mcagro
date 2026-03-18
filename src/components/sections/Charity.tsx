import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ImageSlider } from '../ui/ImageSlider';
import { Heart } from 'lucide-react';

export const Charity = () => {
    return (
        <SectionWrapper id="charity" className="bg-rose-50/50">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl"
                    >
                        <ImageSlider
                            images={['/charity2.jpg']}
                            className="w-full"
                            imageFit="cover"
                        />
                    </motion.div>
                </div>

                <div className="order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        <span className="text-rose-600 font-semibold tracking-wide uppercase text-sm md:text-base">
                            Social Impact
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-dark"
                    >
                        Giving back to the community
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
                            At <strong className="text-brand-800 font-medium">MRCAgrotech ltd</strong>, we believe that our responsibility extends beyond sustainable farming. We are deeply committed to uplifting the communities that support our endeavors.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            Through our various charitable initiatives, we strive to make a tangible, long-lasting difference locally, enhancing the quality of life for farmers, their families, and surrounding districts.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};
