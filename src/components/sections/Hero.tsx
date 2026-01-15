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
                    <source src="/farming4.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-8xl font-bold text-white tracking-tight mb-6"
                    >
                        Future of <br />
                        <span className="text-brand-300">Agriculture.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl font-light leading-relaxed"
                    >
                        Using technology to protect nature and provide quality organic products from the hearts of India.<br/>
                       <br/> Get the best of India from the best.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-4"
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
        </div>
    );
};
