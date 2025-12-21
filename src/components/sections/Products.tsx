
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ArrowUpRight } from 'lucide-react';

const products = [
    {
        title: 'Essential Oils',
        description: 'Pure, natural oils extracted from our aromatic crops alongside Ajwain and other herbs.',
        video: '/Ajwain_natural_oil_202512211846_0vbwo.mp4',
        tag: 'Bestseller'
    },
    {
        title: 'Lemongrass',
        description: 'Premium quality chunks and tea cuts known for bright, zesty flavor and health benefits.',
        video: '/Lemongrass_cinematic_video_202512211843_ouv9c.mp4',
        tag: 'Organic'
    },
    {
        title: 'FMCGs',
        description: 'High-quality consumer goods derived directly from our sustainable farming practices.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000',
        tag: 'New'
    }
];

export const Products = () => {
    return (
        <SectionWrapper id="products" className="bg-brand-50/50">
            <div className="mb-16 md:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-dark mb-6"
                >
                    Our Offerings
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="w-full h-[1px] bg-gray-200"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-4">
                                        {product.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                                    <p className="text-white/80 line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
