import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        title: 'Essential Oils',
        description: 'Pure, natural oils extracted from our aromatic crops alongside Ajwain and other herbs.',
        video: '/Ajwain_natural_oil_202512211846_0vbwo.mp4',
        tag: 'Bestseller',
        link: '/offering/essential-oils'
    },
    {
        title: 'Lemongrass',
        description: 'Premium quality chunks and tea cuts known for bright, zesty flavor and health benefits.',
        video: '/Lemongrass_cinematic_video_202512211843_ouv9c.mp4',
        tag: 'Natural',
        link: '/offering/lemongrass'
    },
    {
        title: 'Cotton Seeds',
        description: 'Premium quality cotton seeds for maximum agricultural yield.',
        image: '/cotton.png',
        tag: 'Premium',
        link: '/offering/seeds'
    },
    {
        title: 'Maize Seeds',
        description: 'High-grade golden maize seeds for superior farming results.',
        image: '/maize.png',
        tag: 'Premium',
        link: '/offering/seeds'
    },
    {
        title: 'Mustard Seeds',
        description: 'Fine quality mustard seeds ensuring excellent harvest.',
        image: '/mustard.png',
        tag: 'Premium',
        link: '/offering/seeds'
    },
    {
        title: 'Agrochemicals',
        description: 'Advanced nano-formulated crop nutrition for highly efficient sustainable agriculture.',
        image: '/offerings/Nano-1.jpg',
        tag: 'New',
        link: '/offering/fertilizers'
    }
];

export const Products = () => {
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement>(null);
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
        el.scrollBy({ left: dir === 'left' ? -cardWidth * 2 : cardWidth * 2, behavior: 'smooth' });
    };

    return (
        <SectionWrapper id="products" className="bg-brand-50/50">
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-dark mb-4"
                    >
                        Our Offerings
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-24 h-1.5 bg-brand-600 rounded-full origin-left"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-4 rounded-full border transition-all duration-300 ${
                            canScrollLeft 
                            ? 'bg-white border-gray-200 hover:border-brand-600 text-brand-600 shadow-sm hover:shadow-lg' 
                            : 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                        }`}
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-4 rounded-full border transition-all duration-300 ${
                            canScrollRight 
                            ? 'bg-white border-gray-200 hover:border-brand-600 text-brand-600 shadow-sm hover:shadow-lg' 
                            : 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                        }`}
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => navigate('/offering/others')}
                        className="ml-4 text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors uppercase tracking-widest border-b-2 border-brand-200 hover:border-brand-600 pb-1"
                    >
                        View More →
                    </button>
                </div>
            </div>

            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 md:gap-8 pb-10 snap-x snap-mandatory hide-scrollbar"
            >
                {products.map((product, index) => (
                    <motion.div
                        key={product.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => navigate(product.link)}
                        className="flex-none w-[85%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] snap-start group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                    >
                        <div className="aspect-[4/5] overflow-hidden">
                            {product.video ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                >
                                    <source src={product.video} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                    <span className="inline-block px-3 py-1 bg-brand-600/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                                        {product.tag}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-3">{product.title}</h3>
                                    <p className="text-gray-200 text-sm line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 leading-relaxed text-justify">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-8 right-8 p-4 bg-white/20 backdrop-blur-md rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30 transform scale-90 group-hover:scale-100">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

