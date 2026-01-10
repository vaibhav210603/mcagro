import { SectionWrapper } from '../components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import temiTeaBanner from '../assets/temi_tea_banner.png';

export const MrcMall = () => {
    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <SectionWrapper className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        >
                            MRC Mall
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            Curated premium products from the heart of nature.
                        </motion.p>
                    </div>

                    {/* Featured Banner - Temi Tea */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer h-[500px]"
                        onClick={() => window.open('https://temiteaestate.com', '_blank')}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={temiTeaBanner}
                                alt="Temi Tea Estate"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                            <div className="max-w-3xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/90 text-white text-sm font-medium mb-4 backdrop-blur-sm">
                                    <ShoppingBag className="w-4 h-4" /> Featured Partner
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                    Discover the Taste of <br /> Temi Tea
                                </h2>
                                <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl font-light">
                                    Experience the finest organic tea from the only tea estate in Sikkim.
                                    A legacy of flavor, aroma, and purity.
                                </p>
                                <button
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-brand-50 transition-colors text-lg group-hover:gap-4"
                                >
                                    Explore Products <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};
