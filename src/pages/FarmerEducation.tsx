import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import heroImage from '../assets/farmer_education_hero.png';
import sustainableImg from '../assets/sustainable_practices.png';
import breedingImg from '../assets/participatory_breeding.png';
import awarenessImg from '../assets/awareness_program.png';
import { Leaf, Users, Sprout, Tractor, Droplets, Coins, Factory } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const FarmerEducation = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-brand-300 font-semibold tracking-wider uppercase mb-4"
                    >
                        Empowering Agriculture
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Farmer Centric <br /> Organisation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-200 max-w-2xl"
                    >
                        Bridging gaps and building sustainable livelihoods through education, technology, and partnership.
                    </motion.p>
                </div>
            </div>

            <SectionWrapper className="py-20">
                {/* Introduction */}
                <motion.div
                    {...fadeIn}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultivating Knowledge, Harvesting Success</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At MRC Agrotech, we believe that the future of food security lies in the hands of small farmers.
                        We are actively involved in conducting programs across different geographies to promote sustainable
                        farming practices, introduce high-yielding products, and educate farmers on modern agronomy.
                    </p>
                </motion.div>

                {/* Key Initiatives Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            title: "Sustainable Practices",
                            image: sustainableImg,
                            desc: "Promoting chemical-free farming and soil health management to combat climate change.",
                            icon: <Leaf className="w-6 h-6" />
                        },
                        {
                            title: "Participatory Breeding",
                            image: breedingImg,
                            desc: "Collaborating with farmers to test pipeline products and record feedback on yield and stress resistance.",
                            icon: <Sprout className="w-6 h-6" />
                        },
                        {
                            title: "Awareness Programmes",
                            image: awarenessImg,
                            desc: "Conducting workshops and festivals with agricultural universities to disseminate new technologies.",
                            icon: <Users className="w-6 h-6" />
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                        >
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Engagement Cycle Infographic Reimagined */}
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-brand-100/50 mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Farmer Engagement Cycle</h2>
                        <p className="text-gray-500">Our holistic approach to empowering the farming community</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-4 gap-6"
                    >
                        {[
                            { step: "01", title: "Leverage", desc: "Digital platforms for seamless engagement" },
                            { step: "02", title: "Facilitate", desc: "Knowledge transfer & financial support" },
                            { step: "03", title: "Empower", desc: "Building sustainable livelihoods" },
                            { step: "04", title: "Awareness", desc: "Raising ambition & adopting best practices" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                className="relative p-6 rounded-2xl bg-brand-50/50 border border-brand-100 hover:bg-brand-50 transition-colors"
                            >
                                <div className="text-5xl font-bold text-brand-100 absolute top-4 right-4">{item.step}</div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-xl font-bold text-brand-800 mb-2">{item.title}</h3>
                                    <p className="text-brand-600/80 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bridging Gaps Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bridging Gaps for Growth</h2>
                        <p className="text-gray-500">Addressing key challenges in modern agriculture</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { icon: <Sprout />, label: "High Quality Seeds" },
                            { icon: <Factory />, label: "Infrastructure" },
                            { icon: <Coins />, label: "Access to Credit" },
                            { icon: <Droplets />, label: "Irrigation Systems" },
                            { icon: <Leaf />, label: "Soil Health" },
                            { icon: <Tractor />, label: "Modern Equipment" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
                            >
                                <div className="p-3 bg-brand-50 rounded-full text-brand-600">
                                    {item.icon}
                                </div>
                                <span className="font-semibold text-gray-700">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </SectionWrapper>
        </div>
    );
};
