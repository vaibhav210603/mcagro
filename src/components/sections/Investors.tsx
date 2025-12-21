
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const team = [
    { name: 'Mr. Ashokk Singh', role: 'Chairman & Director', image: '/ashok.gif' },
    { name: 'Mr. Sanjay Kumar Singh', role: 'Non-Executive Director', image: null },
    { name: 'Mr. Jainendra Baxi', role: 'Independent Director', image: null },
    { name: 'Ms. Swati Sharma', role: 'Independent Woman Director', image: null },
];

export const Investors = () => {
    return (
        <SectionWrapper id="investors" className="bg-white">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-dark mb-4"
                >
                    Leadership
                </motion.h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Guided by industry veterans committed to ethical growth and value creation.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, i) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent",
                            member.image
                                ? "bg-black"
                                : "bg-gray-50 hover:bg-white hover:border-gray-100"
                        )}
                    >
                        {member.image ? (
                            <>
                                <div className="absolute inset-0">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>
                                <div className="relative z-10 flex flex-col h-full justify-end text-center pt-32">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-300 mb-4">{member.role}</p>
                                    <div className="flex justify-center">
                                        <a href="#" className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full backdrop-blur-sm transition-colors">
                                            View Profile <ArrowUpRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-brand-100 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-brand-700 font-bold text-2xl group-hover:bg-brand-500 group-hover:text-white">
                                    {member.name.charAt(4)}
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-1 text-center">{member.name}</h3>
                                <p className="text-sm text-gray-500 mb-4 h-10 text-center">{member.role}</p>
                                <div className="flex justify-center">
                                    <a href="#" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-800">
                                        View Profile <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
