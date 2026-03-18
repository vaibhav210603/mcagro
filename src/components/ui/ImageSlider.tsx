import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
    images: string[];
    interval?: number;
    className?: string;
    imageClassName?: string;
    imageFit?: 'contain' | 'cover';
}

export const ImageSlider = ({ images, interval = 5000, className = '', imageClassName = '', imageFit = 'contain' }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className={`relative flex items-center justify-center aspect-square overflow-hidden group ${className}`}>
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence>
                    {images.map((image, index) => {
                        // Calculate relative position based on currentIndex
                        const position = (index - currentIndex + images.length) % images.length;

                        // Logic for Coverflow layout
                        let offset = position;
                        // If it's in the second half of the array, it's to the left
                        if (position > images.length / 2) {
                            offset = position - images.length;
                        }

                        let opacity = 0;
                        let zIndex = 0;
                        let scale = 0.5;
                        let xOffset = offset * 60; // Spread them horizontally
                        let display = 'none';

                        if (Math.abs(offset) <= 2) {
                            display = 'block';
                            zIndex = 30 - Math.abs(offset) * 10;

                            if (offset === 0) {
                                // Center card
                                opacity = 1;
                                scale = 1;
                                xOffset = 0;
                            } else if (Math.abs(offset) === 1) {
                                opacity = 0.85;
                                scale = 0.85;
                                xOffset = offset < 0 ? -35 : 35; // Tighter overlap now that cards are bigger
                            } else if (Math.abs(offset) === 2) {
                                opacity = 0.6;
                                scale = 0.7;
                                xOffset = offset < 0 ? -75 : 75;
                            }
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    opacity,
                                    scale,
                                    x: `${xOffset}%`,
                                    zIndex,
                                    display
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`absolute inset-0 m-auto flex items-center justify-center w-full aspect-square rounded-xl shadow-2xl bg-white border-[8px] md:border-[12px] border-white overflow-hidden ${imageClassName}`}
                            >
                                <img src={image} className={`w-full h-full object-${imageFit}`} alt={`Slider image ${index + 1}`} />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors backdrop-blur-sm ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
