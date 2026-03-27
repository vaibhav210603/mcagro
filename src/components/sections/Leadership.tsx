import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
    { name: "Mr. Ashokk Singh", role: "Chairman & Director", image: "/team/ashokk_singh.jpg" },
    { name: "Parmar Vishal Surendra", role: "Independent Director", image: "/team/vishal.jpeg" },
    { name: "Mrs. Sudha Navin Agarwal", role: "Non-Executive - Independent Director", image: "/team/user.png" },
    { name: "Mr. Jainendra Baxi", role: "Independent Director", image: "/team/jainendra_baxi.jpg" },
    { name: "Ms. Swati Sharma", role: "Independent Director", image: "/team/swati.jpg" },
    { name: "Shweta Mundra", role: "Independent Director", image: "/team/shweta.jpg" },
    { name: "Mr. Rahul Mathur", role: "Company Secretary and Compliance Officer", image: "/team/rahul_mathur.jpg" },
    //{ name: "Mr. Tyler Beaver", role: "Technology Consultant", image: "/team/tyler.jpg" },
    //{ name: "Mehul Kamdar", role: "Global Business Consultant", image: "/team/mehul.jpg" },
    { name: "Deepak Kilania", role: "President - Global Affairs", image: "/team/deepak_kilania.jpg" },
];

export const Leadership = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 5);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);
        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (dir: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.querySelector('div')?.offsetWidth ?? 300;
        el.scrollBy({ left: dir === 'left' ? -cardWidth * 3 : cardWidth * 3, behavior: 'smooth' });
    };

    return (
        <SectionWrapper id="leadership" className="bg-white">
            <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-600 font-semibold tracking-wide uppercase text-sm"
                    >
                        Management
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-dark mt-2"
                    >
                        Our Leadership
                    </motion.h2>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-3 rounded-full border transition-all duration-200 ${canScrollLeft ? 'border-gray-300 hover:bg-brand-50 hover:border-brand-300 text-gray-700' : 'border-gray-100 text-gray-300 cursor-not-allowed'}`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-3 rounded-full border transition-all duration-200 ${canScrollRight ? 'border-gray-300 hover:bg-brand-50 hover:border-brand-300 text-gray-700' : 'border-gray-100 text-gray-300 cursor-not-allowed'}`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/company/team')}
                        className="ml-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors border-b border-brand-300 hover:border-brand-600"
                    >
                        View All →
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory hide-scrollbar"
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex-none w-[75%] sm:w-[45%] md:w-[32%] lg:w-[32%] snap-start bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        onClick={() => navigate('/company/team')}
                    >
                        <div className="h-52 md:h-60 overflow-hidden bg-gray-100">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=random&size=256' }}
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-gray-900 truncate">{member.name}</h3>
                            <p className="text-sm text-brand-600 font-medium mt-1">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
