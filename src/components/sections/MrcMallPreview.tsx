import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import promoImg from '../../assets/mrc_mall_promo.png';

export const MrcMallPreview = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />

            <SectionWrapper>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-6 border border-amber-500/30">
                            <Star className="w-4 h-4 fill-amber-300" /> Premium Collection
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">MRC Mall</span> is Now Open
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Discover a curated selection of nature's finest. From the misty hills of Temi Tea Estate to our own aromatic extractions,
                            experience purity delivered to your doorstep.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => navigate('/mrc-mall')}
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-1"
                            >
                                <ShoppingBag className="w-5 h-5" /> Start Shopping
                            </button>
                            <button
                                onClick={() => navigate('/mrc-mall')}
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
                            >
                                View Categories <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-[2rem] transform rotate-3" />
                        <img
                            src={promoImg}
                            alt="MRC Mall Preview"
                            className="relative z-10 rounded-[2rem] shadow-2xl border border-white/10 w-full object-cover transform transition-transform hover:scale-[1.02] duration-500"
                        />
                        {/* Floating badges */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <LeafIcon />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 font-medium">Certified</div>
                                <div className="text-lg font-bold text-gray-900">100% Organic</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

const LeafIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);
