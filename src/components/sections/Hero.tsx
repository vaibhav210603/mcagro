import { useRef } from 'react';
import { useLoading } from '../../context/LoadingContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Hero = () => {
    const navigate = useNavigate();
    const { setVideoLoaded } = useLoading();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Black Overlay for readability */}
                <div className="absolute inset-0 bg-black/80 z-10" />

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    onCanPlayThrough={() => setVideoLoaded()}
                    onError={() => setVideoLoaded()} // Fallback if video fails
                    className="w-full h-full object-cover"
                >
                    <source src="/farming_final.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content — centered column: Logo → Heading → Body → Buttons */}
            <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-20">

                {/* MRC Logo — large, centered, blended above the heading */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.75, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-2 md:mb-4"
                >
                    <img
                        src="/MRC.png"
                        alt="MRC Agrotech Logo"
                        className="w-64 md:w-56 md:h-56 object-contain select-none pointer-events-none"
                        style={{
                            mixBlendMode: 'screen',
                            filter: 'drop-shadow(0 0 28px rgba(15, 78, 38, 0.5)) brightness(1.2)',
                            maskImage: 'radial-gradient(ellipse 78% 78% at 50% 50%, black 50%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 78% 78% at 50% 50%, black 50%, transparent 100%)',
                        }}
                    />
                </motion.div>

                {/* Heading — overlaps logo slightly via negative top margin */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight -mt-6 md:-mt-10 mb-5"
                >
                    Future of{' '}
                    <span className="text-brand-300">Agriculture.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base md:text-xl text-white/85 mb-10 max-w-md md:max-w-xl font-light leading-relaxed"
                >
                    Using technology to protect nature and provide quality organic products from the hearts of India.
                    <br /><br />
                    Get the best of India from the best.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button
                        size="lg"
                        className="bg-white text-brand-900 hover:bg-brand-50"
                        onClick={() => navigate('/about-us')}
                    >
                        Our Vision
                    </Button>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white hover:from-amber-500 hover:to-yellow-700 border-none shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105"
                        onClick={() => navigate('/mrc-mall')}
                    >
                        <span className="mr-2">🛍️</span> Visit MRC Mall
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
