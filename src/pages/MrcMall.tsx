import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Sparkles, Leaf, Droplet, Minus, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// --- MOCK PRODUCT DATA ---
const TEAS = [
    { id: 't1', name: 'First Pluck',         price: 0, category: 'Orthodox Black Tea',  image: '/images/temi-tea-card/first-pluck.webp' },
    { id: 't2', name: 'Second Pluck',         price: 0, category: 'Orthodox Black Tea',  image: '/images/temi-tea-card/second-pluck.webp' },
    { id: 't3', name: 'Awaken',               price: 0, category: 'Blended Black Tea',   image: '/images/temi-tea-card/awaken.webp' },
    { id: 't4', name: 'Classic',              price: 0, category: 'Orthodox Black Tea',  image: '/images/temi-tea-card/classic.webp' },
    { id: 't5', name: 'Special',              price: 0, category: 'Orthodox Black Tea',  image: '/images/temi-tea-card/special.webp' },
    { id: 't6', name: 'Green Tea',            price: 0, category: 'Green Tea',           image: '/images/temi-tea-card/green-tea.webp' },
    { id: 't7', name: 'Temi Tea Dip',         price: 0, category: 'Tea Bags',            image: '/images/temi-tea-card/dip.webp' },
    { id: 't8', name: 'Green Tea Premium',    price: 0, category: 'Premium Green Tea',   image: '/images/temi-tea-card/green-tea-premium.webp' },
    { id: 't9', name: 'Premium Tea',          price: 0, category: 'Ultra Premium',       image: '/images/temi-tea-card/premium-tea.webp' },
];

const BESTSELLERS = ['t4', 't5', 't1', 't6']; // Classic, Special, First Pluck, Green Tea

const OILS = [
    { id: 'o1', name: 'Ajwain Essential Oil',      price: 0, category: 'Pure Extract', image: '/offerings/ajwain.png' },
    { id: 'o2', name: 'Cinnamon Essential Oil',    price: 0, category: 'Pure Extract', image: '/offerings/cinnamon.png' },
    { id: 'o3', name: 'Cumin Seed Essential Oil',  price: 0, category: 'Pure Extract', image: null },
    { id: 'o4', name: 'Lemongrass Essential Oil',  price: 0, category: 'Pure Extract', image: '/offerings/lemongrass.png' },
    { id: 'o5', name: 'Palmarosa Essential Oil',   price: 0, category: 'Pure Extract', image: '/offerings/palmarosa.png' },
    { id: 'o6', name: 'Peppermint Essential Oil',  price: 0, category: 'Pure Extract', image: '/offerings/peppermint.png' },
];

const FERTILIZERS = [
    { id: 'f1', name: 'Nano Manganese Liquid (20000 PPM)', price: 0, category: 'Advanced Nano Tech', image: '/offerings/Nano-1.jpg' },
    { id: 'f2', name: 'Nano Potash Liquid',               price: 0, category: 'Advanced Nano Tech', image: '/offerings/Nano-2.jpg' },
    { id: 'f3', name: 'Nano Copper Liquid (4000 PPM)',    price: 0, category: 'Advanced Nano Tech', image: '/offerings/Nano-3.jpg' },
    { id: 'f4', name: 'Nano Urea Liquid',                 price: 0, category: 'Advanced Nano Tech', image: '/offerings/Nano-4.jpg' },
    { id: 'f5', name: 'Nano Zinc Liquid (50000 PPM)',     price: 0, category: 'Advanced Nano Tech', image: '/offerings/Nano-5.jpg' },
    { id: 'f6', name: 'Nano Multi-Nutrient Solution',     price: 0, category: 'Advanced Nano Tech', image: '/offerings/nano_fertilizer.png' },
];

// --- FALLING LEAVES COMPONENT ---
const FallingLeaves = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-6 h-6 bg-green-800/60 rounded-tl-full rounded-br-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `-5%`,
                    }}
                    animate={{
                        y: ['0vh', '105vh'],
                        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10,
                    }}
                />
            ))}
        </div>
    );
};

export const MrcMall = () => {
    const navigate = useNavigate();
    const { items, addToCart, updateQuantity, itemCount } = useCart();
    
    const [cartGlow, setCartGlow] = useState(false);
    const [showAllTeas, setShowAllTeas] = useState(false);

    // Trigger glow effect when itemCount changes
    useEffect(() => {
        if (itemCount > 0) {
            setCartGlow(true);
            const timer = setTimeout(() => setCartGlow(false), 600);
            return () => clearTimeout(timer);
        }
    }, [itemCount]);

    // Parallax effect for Hero
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(heroScroll, [0, 1], [1, 0]);

    return (
        <div className="min-h-screen bg-[#F5F5F0] font-sans text-stone-100 selection:bg-emerald-500/30 overflow-hidden flex flex-col">
            
            {/* FLOATING CART BUTTON */}
            <AnimatePresence>
                {itemCount > 0 && (
                    <motion.button 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: cartGlow ? 1.15 : 1, 
                            opacity: 1,
                            boxShadow: cartGlow ? "0 0 50px rgba(16, 185, 129, 0.8)" : "0 0 20px rgba(16, 185, 129, 0.3)"
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        onClick={() => navigate('/checkout')}
                        className="fixed bottom-8 right-8 z-50 bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/50 text-white p-4 rounded-full flex items-center gap-3 transition-colors hover:bg-emerald-500/40"
                    >
                        <div className="relative">
                            <ShoppingCart className={`w-6 h-6 ${cartGlow ? 'animate-bounce' : ''}`} />
                            <span className="absolute -top-3 -right-3 bg-emerald-500 text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                                {itemCount}
                            </span>
                        </div>
                        <span className="font-bold hidden sm:inline tracking-wide">Checkout</span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* HERO SECTION */}
            <div ref={heroRef} className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
                <motion.div style={{ y: heroY, opacity }} className="absolute inset-0">
                    <img 
                        src="/images/mall_hero_light.png" 
                        alt="Farm origin background" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F5F0]/40 to-[#F5F5F0]"></div>
                </motion.div>
                
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-emerald-200 backdrop-blur-md text-emerald-800 text-sm font-medium tracking-widest uppercase mb-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                            <Sparkles className="w-4 h-4" /> Next Gen Agriculture
                        </span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 mb-6 tracking-tighter"
                    >
                        MRC LIVING
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-3xl text-stone-700 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        India's First Farm-Origin Lifestyle Emporium <br/>
                        <span className="text-emerald-700 font-medium">From Our Soil to Your Life.</span>
                    </motion.p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-80">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-700 to-transparent"></div>
                </div>
            </div>

            {/* TEMI TEA SECTION - HIMALAYAN THEME */}
            <div className="relative w-full py-20 md:py-32 bg-[#F5F5F0] overflow-hidden">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Yatra+One&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&display=swap');
                    .scrollbar-hide::-webkit-scrollbar { display: none; }
                    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
                
                {/* Subtle Himalayan Range Background Overlay */}
                <div className="absolute inset-0 z-0 mix-blend-multiply opacity-30">
                    <img 
                        src="/images/himalayan_art.png" 
                        alt="Himalayan Background" 
                        className="w-full h-full object-cover object-bottom"
                    />
                </div>
                <FallingLeaves />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl flex flex-col items-start"
                        >
                            <a 
                                href="https://temiteaestate.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block mb-6 transition-transform duration-300 hover:scale-105"
                            >
                                <img 
                                    src="/temitea.png" 
                                    alt="Temi Tea Brand" 
                                    className="h-16 md:h-24 w-auto object-contain"
                                />
                            </a>
                            <div className="flex items-center gap-2 text-emerald-700 font-medium tracking-widest uppercase text-sm mb-4">
                                <Leaf className="w-5 h-5" /> <span>Pristine Himalayas</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-wide" style={{ fontFamily: "'Yatra One', cursive" }}>
                                Temi Tea Collection
                            </h2>
                        </motion.div>
                        <motion.p 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-stone-600 text-lg md:text-xl font-light text-left md:text-right max-w-md"
                        >
                            Experience the finest organic tea from the only tea estate in Sikkim. A legacy of flavor, aroma, and purity steeped in Himalayan tradition.
                        </motion.p>
                    </div>

                    {/* BESTSELLERS SLIDER */}
                    <div className="mb-10">
                        <div className="text-center mb-8">
                            <h3
                                className="text-5xl md:text-6xl font-semibold italic leading-none"
                                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#92400e' }}
                            >
                                Bestsellers
                            </h3>
                            {/* Ornate curvy underline */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 28" className="w-72 mx-auto mt-2" aria-hidden="true">
                                <defs>
                                    <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="18%" stopColor="#92400e" />
                                        <stop offset="50%" stopColor="#fbbf24" />
                                        <stop offset="82%" stopColor="#92400e" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                {/* Left swoop */}
                                <path d="M 8 14 C 40 6, 100 20, 152 14" stroke="url(#goldLine)" strokeWidth="1.4" fill="none" />
                                {/* Central diamond */}
                                <polygon points="170,6 177,14 170,22 163,14" fill="#fbbf24" opacity="0.9" />
                                {/* Right swoop */}
                                <path d="M 188 14 C 240 8, 300 22, 332 14" stroke="url(#goldLine)" strokeWidth="1.4" fill="none" />
                                {/* Small flanking dots */}
                                <circle cx="148" cy="14" r="2" fill="#d97706" opacity="0.7" />
                                <circle cx="192" cy="14" r="2" fill="#d97706" opacity="0.7" />
                            </svg>
                        </div>
                        <TeaSlider
                            products={TEAS.filter(t => BESTSELLERS.includes(t.id))}
                            cartItems={items}
                            onAdd={addToCart}
                            onUpdate={updateQuantity}
                        />
                    </div>

                    {/* ALL PRODUCTS SLIDER — revealed on Show More */}
                    <AnimatePresence initial={false}>
                        {showAllTeas && (
                            <motion.div
                                key="all-products"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="overflow-hidden mb-10"
                            >
                                <div className="flex items-end gap-4 mb-6 pt-2">
                                    <h3 className="text-4xl md:text-5xl font-semibold italic text-stone-800 leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                        All Products
                                    </h3>
                                    <div className="h-px flex-1 bg-stone-300/60 mb-2" />
                                </div>
                                <TeaSlider
                                    products={TEAS}
                                    cartItems={items}
                                    onAdd={addToCart}
                                    onUpdate={updateQuantity}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* SHOW MORE / SHOW LESS */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setShowAllTeas(v => !v)}
                            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-stone-400/50 text-stone-700 hover:border-emerald-700 hover:text-emerald-800 transition-all duration-300 text-xs tracking-[0.2em] uppercase font-medium"
                        >
                            <span>{showAllTeas ? 'Show Less' : 'Explore All Teas'}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllTeas ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>
                
                {/* Transition to next light green section */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-brand-50 pointer-events-none z-20"></div>
            </div>

            {/* LIGHT GREEN SECTION - OILS */}
            <div className="relative z-20 pb-20 md:pb-32 bg-brand-50 w-full">
                {/* ESSENTIAL OILS SECTION */}
                <Section title="Natural Essential Oils" subtitle="Pure Extracts" icon={<Droplet className="w-5 h-5" />} description="Derived from high-quality aromatic crops, perfect for aromatherapy and personal care." slider sectionTheme="light">
                    <TeaSlider
                        products={OILS}
                        cartItems={items}
                        onAdd={addToCart}
                        onUpdate={updateQuantity}
                        theme="light"
                    />
                </Section>

                {/* gradient bridge back to cream */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F5F5F0] pointer-events-none z-20" />
            </div>

            {/* CREAM SECTION - NANO FERTILIZERS */}
            <div className="relative z-20 pb-20 md:pb-32 bg-[#F5F5F0] w-full overflow-hidden">
                {/* Subtle Farm and Crop Watermark Background */}
                <div className="absolute inset-0 z-0 mix-blend-multiply opacity-20 pointer-events-none">
                    <img 
                        src="/images/fertilizer_bg.png" 
                        alt="Farm and Crop Background" 
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <Section title="Nano Fertilizers" subtitle="Advanced Agriculture" icon={<Sparkles className="w-5 h-5" />} description="High-efficiency, environmentally friendly nutrition for superior crop yields." reverse slider sectionTheme="light">
                    <TeaSlider
                        products={FERTILIZERS}
                        cartItems={items}
                        onAdd={addToCart}
                        onUpdate={updateQuantity}
                        theme="light"
                    />
                </Section>
            </div>
        </div>
    );
};

// --- REUSABLE SECTION WRAPPER ---
const Section = ({ title, subtitle, icon, description, children, reverse = false, slider = false, sectionTheme = 'dark' }: any) => {
    const isLight = sectionTheme === 'light';
    return (
        <section className="pt-20 md:pt-32 px-4 relative z-10 max-w-7xl mx-auto">
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8`}>
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl text-left"
                >
                    <div className={`flex items-center gap-2 font-medium tracking-widest uppercase text-sm mb-3 md:mb-4 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                        {icon} <span>{subtitle}</span>
                    </div>
                    <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${isLight ? 'text-stone-900' : 'text-white'}`}>{title}</h2>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-lg md:text-xl font-light text-left md:text-right max-w-md ${isLight ? 'text-stone-600' : 'text-stone-400'}`}
                >
                    {description}
                </motion.p>
            </div>

            {slider ? children : (
                <div className="grid md:grid-cols-3 gap-8">
                    {children}
                </div>
            )}
        </section>
    );
};

// --- HORIZONTAL PRODUCT SLIDER (supports light + dark themes) ---
const TeaSlider = ({ products, cartItems, onAdd, onUpdate, theme = 'light' }: any) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const isDark = theme === 'dark';

    const scroll = (dir: 'left' | 'right') => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
        }
    };

    const btnClass = isDark
        ? 'bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/25'
        : 'bg-white/90 backdrop-blur border border-stone-200 text-stone-700 hover:bg-white';

    return (
        <div className="relative group/slider">
            <button
                onClick={() => scroll('left')}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 rounded-full p-2.5 shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 ${btnClass}`}
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-3"
            >
                {products.map((product: any) => (
                    <div key={product.id} className="snap-start flex-shrink-0 w-[280px]">
                        <ProductCard
                            product={product}
                            cartItems={cartItems}
                            onAdd={() => onAdd(product)}
                            onUpdate={onUpdate}
                            theme={theme}
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={() => scroll('right')}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 rounded-full p-2.5 shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 ${btnClass}`}
                aria-label="Scroll right"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

// --- REUSABLE PRODUCT CARD (SUPPORTS DARK & LIGHT THEMES) ---
const ProductCard = ({ product, cartItems, onAdd, onUpdate, theme = 'dark' }: any) => {
    const cartItem = cartItems.find((item: any) => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    const isLight = theme === 'light';

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.5 }}
            className={`group relative rounded-[2rem] overflow-hidden backdrop-blur-2xl flex flex-col h-full transition-shadow duration-500
                ${isLight 
                    ? 'bg-white/80 border border-white/50 shadow-[0_8px_30px_0_rgba(30,64,45,0.06)] hover:shadow-[0_15px_40px_0_rgba(30,64,45,0.12)]' 
                    : 'bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_0_rgba(0,0,0,0.5)]'
                }
            `}
        >
            {/* Hover Background Gradient */}
            <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100
                ${isLight ? 'bg-gradient-to-br from-emerald-600/5 via-transparent to-transparent' : 'bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent'}
            `}></div>
            
            <div className="relative h-[340px] w-full p-8 flex flex-col items-center justify-center overflow-hidden">
                {/* Glowing Background behind Image */}
                <div className={`absolute inset-0 z-10 pointer-events-none
                    ${isLight ? 'bg-gradient-to-t from-[#F5F5F0] via-[#F5F5F0]/50 to-transparent' : 'bg-gradient-to-t from-black/80 via-black/10 to-transparent'}
                `}></div>
                
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                    ${isLight ? 'bg-emerald-600/10' : 'bg-emerald-500/20'}
                `}></div>
                
                {product.image ? (
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className={`
                            ${product.image.includes('temi-tea-card')
                                ? 'absolute inset-0 object-cover'
                                : 'absolute inset-4 object-contain'}
                            w-full h-full z-20 transition-all duration-700 ease-out transform group-hover:scale-105 group-hover:-translate-y-2
                            ${isLight ? 'drop-shadow-[0_20px_30px_rgba(30,64,45,0.15)]' : 'drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]'}
                        `}
                    />
                ) : (
                    <div className={`absolute inset-4 z-20 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2
                        ${isLight ? 'border-emerald-200 bg-emerald-50/60' : 'border-white/10 bg-white/5'}
                    `}>
                        <Droplet className={`w-12 h-12 mb-2 ${isLight ? 'text-emerald-300' : 'text-white/20'}`} />
                        <span className={`text-xs font-medium tracking-wider uppercase ${isLight ? 'text-emerald-400' : 'text-white/20'}`}>Image Coming Soon</span>
                    </div>
                )}
            </div>
            
            <div className="px-8 pb-8 pt-4 relative z-30 flex flex-col flex-grow">
                <div className="flex-grow">
                    <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>{product.category}</p>
                    <h3 className={`text-2xl font-bold mb-2 leading-tight transition-colors 
                        ${isLight ? 'text-stone-900 group-hover:text-emerald-800' : 'text-white group-hover:text-emerald-300'}
                    `}>{product.name}</h3>
                </div>
                
                <div className="mt-8 flex items-end justify-between">
                    <div>
                        <span className={`block text-sm mb-1 ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Price</span>
                        <span className={`text-3xl font-light ${isLight ? 'text-stone-800' : 'text-white'}`}>--</span>
                    </div>

                    <div className="h-12 flex items-center justify-end">
                        <AnimatePresence mode="wait">
                            {quantity === 0 ? (
                                <motion.button
                                    key="add"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onAdd}
                                    className={`h-12 px-6 rounded-full font-bold flex items-center gap-2 transition-all duration-300 relative z-40
                                        ${isLight
                                            ? 'text-white shadow-lg'
                                            : 'bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-500/50 text-white'
                                        }
                                    `}
                                    style={isLight ? { backgroundColor: '#92400e' } : undefined}
                                >
                                    <Plus className="w-5 h-5" /> Add
                                </motion.button>
                            ) : (
                                <motion.div
                                    key="quantity"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className={`h-12 px-2 rounded-full font-bold flex items-center gap-4 relative z-40
                                        ${isLight
                                            ? 'text-white shadow-inner'
                                            : 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                                        }
                                    `}
                                    style={isLight ? { backgroundColor: '#92400e' } : undefined}
                                >
                                    <button
                                        onClick={() => onUpdate(product.id, quantity - 1)}
                                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isLight ? 'hover:bg-black/10' : 'hover:bg-black/10'}`}
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-lg min-w-[20px] text-center">{quantity}</span>
                                    <button 
                                        onClick={() => onUpdate(product.id, quantity + 1)}
                                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isLight ? 'hover:bg-emerald-200/60' : 'hover:bg-black/10'}`}
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
