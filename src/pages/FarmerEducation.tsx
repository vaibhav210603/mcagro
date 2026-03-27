import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import heroImage from '../assets/farmer_education_hero.png';
import sustainableImg from '../assets/sustainable_practices.png';
import breedingImg from '../assets/participatory_breeding.png';
import awarenessImg from '../assets/awareness_program.png';
import { Leaf, Users, Sprout, Tractor, Droplets, Coins, Factory, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <div ref={containerRef} className="min-h-screen bg-gray-50/50 font-sans">
            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-cover bg-center"
                >
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
                </motion.div>
                
                <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white pt-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 text-brand-300 text-sm font-bold mb-6 border border-brand-500/30 backdrop-blur-md w-fit"
                    >
                        <Sprout className="w-4 h-4" /> Empowering Agriculture
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none"
                    >
                        Farmer Centric <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-green-500">Organisation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed border-l-4 border-brand-500 pl-6"
                    >
                        Bridging gaps and building sustainable livelihoods through education, technology, and strategic partnership.
                    </motion.p>
                </div>
                
                {/* Decorative Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(110%+1.3px)] h-[80px] text-gray-50/50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.6,201.5,107.5,243.61,96.65,283.56,69.58,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <SectionWrapper className="py-24 relative z-10 -mt-10">
                {/* Introduction */}
                <motion.div
                    {...fadeIn}
                    className="max-w-4xl mx-auto text-center mb-28 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Cultivating Knowledge, <br className="hidden md:block"/> <span className="text-brand-600">Harvesting Success</span></h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        At MRC Agrotech, we believe that the future of food security lies in the hands of small farmers.
                        We are actively involved in conducting programs across different geographies to promote sustainable
                        farming practices, introduce high-yielding products, and educate farmers on modern agronomy.
                    </p>
                </motion.div>

                {/* Key Initiatives Cards */}
                <div className="grid md:grid-cols-3 gap-10 mb-32">
                    {[
                        {
                            title: "Sustainable Practices",
                            image: sustainableImg,
                            desc: "Promoting chemical-free farming and soil health management to combat climate change.",
                            icon: <Leaf className="w-8 h-8" />
                        },
                        {
                            title: "Participatory Breeding",
                            image: breedingImg,
                            desc: "Collaborating with farmers to test pipeline products and record feedback on yield and stress resistance.",
                            icon: <Sprout className="w-8 h-8" />
                        },
                        {
                            title: "Awareness Programmes",
                            image: awarenessImg,
                            desc: "Conducting workshops and festivals with agricultural universities to disseminate new technologies.",
                            icon: <Users className="w-8 h-8" />
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2, duration: 0.7 }}
                            className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative border border-gray-100"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute -bottom-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-xl z-20 group-hover:rotate-12 transition-transform duration-500">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="p-10 pt-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Engagement Cycle Infographic Reimagined */}
                <div className="relative rounded-[3rem] p-12 md:p-20 shadow-2xl mb-32 overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-gray-900 to-black opacity-90" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/30 rounded-full blur-3xl mix-blend-screen" />
                    
                    <div className="relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Farmer Engagement Cycle</h2>
                            <p className="text-xl text-gray-300 font-light">Our holistic approach to empowering the farming community</p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-4 gap-8 relative"
                        >
                            <div className="hidden md:block absolute top-[45%] left-0 w-full h-1 bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0 -z-10" />
                            
                            {[
                                { step: "01", title: "Leverage", desc: "Digital platforms for seamless engagement" },
                                { step: "02", title: "Facilitate", desc: "Knowledge transfer & financial support" },
                                { step: "03", title: "Empower", desc: "Building sustainable livelihoods directly" },
                                { step: "04", title: "Awareness", desc: "Raising ambition & adopting best practices" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn}
                                    className="relative group p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="text-7xl font-black text-white/5 absolute -top-6 -right-2 group-hover:text-brand-500/20 transition-colors duration-500">{item.step}</div>
                                    <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-brand-500/30">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-300 font-medium leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bridging Gaps Section */}
                <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-12 shadow-xl border border-brand-50">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Focus Areas</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bridging Gaps for Growth</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Addressing key challenges in modern agriculture with innovative solutions</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Sprout className="w-8 h-8"/>, label: "High Quality Seeds", color: "from-green-400 to-green-600" },
                            { icon: <Factory className="w-8 h-8"/>, label: "Infrastructure", color: "from-blue-400 to-blue-600" },
                            { icon: <Coins className="w-8 h-8"/>, label: "Access to Credit", color: "from-yellow-400 to-yellow-600" },
                            { icon: <Droplets className="w-8 h-8"/>, label: "Irrigation Systems", color: "from-cyan-400 to-cyan-600" },
                            { icon: <Leaf className="w-8 h-8"/>, label: "Soil Health", color: "from-emerald-400 to-emerald-600" },
                            { icon: <Tractor className="w-8 h-8"/>, label: "Modern Equipment", color: "from-orange-400 to-orange-600" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                                className="group flex items-center gap-6 p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <span className="font-bold text-gray-900 text-lg block">{item.label}</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </SectionWrapper>
        </div>
    );
};
