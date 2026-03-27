import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';

export const Associations = () => {
    return (
        <SectionWrapper id="associations" className="bg-gray-50 border-y border-gray-100">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 p-6 md:p-10 lg:p-14"
                >
                    <img
                        src="/partners_banner.png"
                        alt="In association with - Sikkim Temi Tea, VedicTree, Mental Engines, Khushi Sansaar"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
