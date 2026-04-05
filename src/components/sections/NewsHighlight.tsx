import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Newspaper, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

type NewsItem = {
    id: number;
    badge: string;
    source: string;
    date: string;
    headline: string;
    highlightedText: string;
    headlineSuffix: string;
    summary: string;
    quote?: { text: string; author: string; role: string; initial: string };
    image: string;
    imageAlt: string;
    imageCaption: string;
    articleUrl?: string;
    articleLabel?: string;
};

const newsItems: NewsItem[] = [
    {
        id: 1,
        badge: 'In the News',
        source: 'Business Standard',
        date: 'May 30, 2025',
        headline: 'Precision Farming & ',
        highlightedText: 'Sustainable Development',
        headlineSuffix: ' is Here for the Farmers',
        summary: 'MRC Agrotech Ltd. has entered into a strategic partnership with Vizexec Transformation Pvt. Ltd. to bring cutting-edge satellite-based crop monitoring technology to India\'s agriculture sector, starting with farmers in Uttar Pradesh.',
        quote: {
            text: 'Committed in carrying the company\'s vision in bringing cost effective solutions right in the hands of the farmers. And, steadfast mission to spearhead the development of an economical, sustainable, profitable, and scalable agriculture farming sector in India.',
            author: 'Mr. Ashokk Singh',
            role: 'Chairman & Director, MRC Agrotech Ltd.',
            initial: 'A'
        },
        image: '/news_partnership.png',
        imageAlt: 'MRC Agrotech Strategic Partnership',
        imageCaption: 'Strategic Partnership for Precision Agriculture',
        articleUrl: 'https://www.business-standard.com/content/press-releases-ani/precision-farming-and-sustainable-development-is-here-for-the-farmers-125053001183_1.html',
        articleLabel: 'Read Full Article on Business Standard'
    },
    {
        id: 2,
        badge: 'Press Coverage',
        source: 'Sikkim Express',
        date: 'January 24, 2025',
        headline: 'Temi Tea Estate Launches ',
        highlightedText: 'E-Commerce Website',
        headlineSuffix: ' in Collaboration with MRC Agrotech',
        summary: 'The Temi Tea Estate launched its e-commerce website on January 24, marking a major step toward expanding market access. The website was launched by Science & Technology department chairperson N.J Bhutia, in the presence of MSME principal director Raj Kumar, SEED Cell president Raj Lama, and MRC Agrotech Ltd CEO Ashok Singh.',
        quote: {
            text: 'The digital platform enables direct brand-to-consumer delivery, ensuring a seamless, secure, and trustworthy shopping experience. Rooted in Temi Tea\'s longstanding values of purity and uniqueness, the website integrates modern technology to make these qualities accessible to customers across regions.',
            author: 'Mr. Ashokk Singh',
            role: 'Chairman, MRC Agrotech Ltd.',
            initial: 'A'
        },
        image: '/temi-tea.jpeg',
        imageAlt: 'Temi Tea Estate E-Commerce Launch - Newspaper Coverage',
        imageCaption: 'Temi Tea Estate E-Commerce Website Launch Coverage',
        articleUrl: 'https://temiteaestate.com',
        articleLabel: 'Visit Temi Tea E-Commerce Store'
    },
];

export const NewsHighlight = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = useCallback((dir: number) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + newsItems.length) % newsItems.length);
    }, []);

    // Auto-advance every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => paginate(1), 8000);
        return () => clearInterval(timer);
    }, [paginate]);

    const item = newsItems[current];

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0 }),
    };

    return (
        <SectionWrapper id="news" className="bg-gradient-to-br from-brand-900 via-brand-800 to-emerald-900 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={item.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* Two Column Layout */}
                        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-14">
                            {/* Left: Text Content (3 cols) */}
                            <div className="lg:col-span-3">
                                {/* Badge */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                                        <Newspaper className="w-4 h-4 text-amber-400" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-amber-300">{item.badge}</span>
                                    </div>
                                    <span className="text-white/40 text-sm font-medium">{item.source} • {item.date}</span>
                                </div>

                                {/* Headline */}
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                                    {item.headline}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                                        {item.highlightedText}
                                    </span>
                                    {item.headlineSuffix}
                                </h2>

                                {/* Summary */}
                                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 font-light">
                                    {item.summary}
                                </p>

                                {/* Quote Card */}
                                {item.quote && (
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8">
                                        <div className="text-4xl text-amber-400/60 font-serif leading-none mb-3">"</div>
                                        <p className="text-white/90 text-base md:text-lg italic leading-relaxed mb-5">
                                            {item.quote.text}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                                                {item.quote.initial}
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">{item.quote.author}</div>
                                                <div className="text-white/50 text-sm">{item.quote.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right: Image (2 cols) */}
                            <div className="lg:col-span-2 relative group">
                                <div className="rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/30 group-hover:border-amber-400/30 transition-all duration-500">
                                    <img
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3 text-center">
                                    <p className="text-white/80 text-xs md:text-sm font-medium text-center">
                                        {item.imageCaption}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mb-10">
                    {/* Dots */}
                    <div className="flex items-center gap-3">
                        {newsItems.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="p-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Read Full Article Link */}
                {item.articleUrl && (
                    <a
                        href={item.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-brand-900 font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-amber-400/20 hover:scale-105 transform"
                    >
                        {item.articleLabel}
                        <ExternalLink className="w-5 h-5" />
                    </a>
                )}
            </div>
        </SectionWrapper>
    );
};
