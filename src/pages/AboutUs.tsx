import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import aboutHero from '../assets/about_hero.png';
import visionMissionImg from '../assets/vision_mission.png';
import integrityIcon from '../assets/value_integrity.png';
import innovationIcon from '../assets/value_innovation.png';
import sustainabilityIcon from '../assets/value_sustainability.png';
import { Leaf, Tractor, Building2 } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

const stats = [
    { label: 'Acres Cultivated', value: '100+', suffix: ' Acres', icon: <Tractor className="w-6 h-6" /> },
    { label: 'Years Legacy', value: '8+', suffix: ' Years', icon: <Building2 className="w-6 h-6" /> },
    { label: 'Sustainability', value: '100', suffix: '%', icon: <Leaf className="w-6 h-6" /> },
];

const values = [
    {
        title: "Integrity",
        desc: "We uphold the highest ethical standards in all our interactions.",
        icon: integrityIcon,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Innovation",
        desc: "Pioneering new ways to make agriculture sustainable and efficient.",
        icon: innovationIcon,
        color: "bg-green-50 text-green-600"
    },
    {
        title: "Sustainability",
        desc: "Committed to practices that protect our planet for future generations.",
        icon: sustainabilityIcon,
        color: "bg-teal-50 text-teal-600"
    }
];

export const AboutUs = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yVal = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="min-h-screen bg-white">
            {/* Hero Section with Parallax */}
            <div className="relative h-[80vh] overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ y: yVal }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-110"
                        style={{ backgroundImage: `url(${aboutHero})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-300 font-semibold tracking-[0.2em] uppercase mb-4 block">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Cultivating a <br /> Sustainable Future
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
                            Since 2015, we've been redefining agriculture through innovation, integrity, and a deep respect for nature.
                        </p>
                    </motion.div>
                </div>
            </div>

            <SectionWrapper className="relative z-10 bg-white">
                {/* Intro Text */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div {...fadeIn}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pioneers in Aromatic Agriculture</h2>
                        <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                MRC Agrotech Ltd stands as a beacon of stability and sustainability in the agricultural sector.
                                Operating as a debt-free entity, we manage over <strong className="text-brand-700">100 acres</strong> of
                                pristine farmland dedicated to the cultivation of aromatic crops.
                            </p>
                            <p>
                                We are not just farmers; we are stewards of the land. Our chemical-free, regenerative practices
                                produce premium Natural Essential Oils that serve the pharmaceutical, personal care, and wellness
                                industries globally.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Animated Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-3xl bg-brand-50/50 border border-brand-100 text-center hover:shadow-lg transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm text-brand-600 mb-6">
                                {stat.icon}
                            </div>
                            <div className="text-5xl font-bold text-brand-900 mb-2">
                                {stat.value}<span className="text-2xl text-brand-400">{stat.suffix}</span>
                            </div>
                            <div className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Vision & Mission Split */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[600px]"
                    >
                        <img
                            src={visionMissionImg}
                            alt="Vision and Mission"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">A Global Vision</h3>
                                <p className="text-gray-300">Feeding the world while preserving the planet.</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <motion.div {...fadeIn}>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-12 h-1 bg-brand-500 rounded-full block"></span>
                                Our Vision
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed italic">
                                "To be a leading sustainable agriculture company, setting new standards for environmental stewardship,
                                social responsibility, and economic viability."
                            </p>
                        </motion.div>

                        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-12 h-1 bg-brand-500 rounded-full block"></span>
                                Our Mission
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                To produce high-quality agricultural products through sustainable practices that prioritize soil conservation
                                and biodiversity.
                            </p>
                            <ul className="space-y-4">
                                {['Nutritious & Safe Food', 'Rural Development', 'Innovation & Integrity'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">The principles that guide our every action and decision.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((val, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                        >
                            <div className="h-48 mb-8 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-brand-50/50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                                <img src={val.icon} alt={val.title} className="w-32 h-32 object-contain relative z-10 drop-shadow-lg" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-900 mb-3">{val.title}</h3>
                            <p className="text-gray-600">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </SectionWrapper>
        </div>
    );
};
