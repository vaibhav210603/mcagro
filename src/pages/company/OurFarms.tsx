import { useState } from 'react';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const maharashtraFarms = [
    "/farms/mh_farm1.jpg",
    "/farms/mh_farm2.jpg",
    "/farms/mh_farm3.jpg",
    "/farms/mh_farm4.jpg"
];

const upFarms = [
    "/farms/up_farm1.jpg",
    "/farms/up_farm2.jpg",
    "/farms/up_farm3.jpg",
    "/farms/up_farm4.jpg"
];

export const OurFarms = () => {
    const [activeTab, setActiveTab] = useState<'UP' | 'MH'>('UP');

    return (
        <div className="pt-20 bg-gray-50/50 min-h-screen">
            <SectionWrapper>
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-dark">Our Farms</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            MRC Agrotech operates farming operations spanning over 100 acres of land. 
                            Our primary focus is on chemical-free, regenerative, and commercial-scale 
                            farming practices, with a specialization in aromatic crops.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-8">
                        {/* Tab Tiles */}
                        <div className="flex flex-wrap justify-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                            <button
                                onClick={() => setActiveTab('UP')}
                                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                                    activeTab === 'UP' 
                                        ? 'bg-brand-600 text-white shadow-md' 
                                        : 'bg-transparent text-gray-600 hover:bg-brand-50 hover:text-brand-700'
                                }`}
                            >
                                Farms in Uttar Pradesh
                            </button>
                            <button
                                onClick={() => setActiveTab('MH')}
                                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                                    activeTab === 'MH' 
                                        ? 'bg-brand-600 text-white shadow-md' 
                                        : 'bg-transparent text-gray-600 hover:bg-brand-50 hover:text-brand-700'
                                }`}
                            >
                                Farms in Maharashtra
                            </button>
                        </div>

                        {/* Images Grid */}
                        <div className="w-full relative mt-8">
                            <AnimatePresence mode="wait">
                                {activeTab === 'UP' ? (
                                    <motion.div
                                        key="UP"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
                                    >
                                        {upFarms.map((img, i) => (
                                            <div key={i} className="rounded-3xl overflow-hidden shadow-sm h-64 md:h-96 border border-gray-100 bg-white group">
                                                <img src={img} alt={`Uttar Pradesh Farm ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="MH"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
                                    >
                                        {maharashtraFarms.map((img, i) => (
                                            <div key={i} className="rounded-3xl overflow-hidden shadow-sm h-64 md:h-96 border border-gray-100 bg-white group">
                                                <img src={img} alt={`Maharashtra Farm ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
