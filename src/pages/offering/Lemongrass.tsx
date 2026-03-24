import { useState } from 'react';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Button } from '../../components/ui/Button';
import { ContactModal } from '../../components/ui/ContactModal';
import { Droplets, Info } from 'lucide-react';

const products = [
    {
        name: "Lemongrass Chunks & Tea Cuts",
        image: "/offerings/lemongrass_chunks.png",
        description: "Dried stalks used for tea; known for anti-inflammatory and antioxidant properties.",
        details: [
            { label: "Botanical Name", value: "Cymbopogon citratus" },
            { label: "Format", value: "Dried Chunks / Cuts" },
            { label: "Process", value: "Sun & Mechanically Dried" },
            { label: "Quality", value: "Aromatic / Export Grade" }
        ],
        uses: "Perfect for use in herbal teas, culinary applications, infusions, and natural health remedies."
    }
];

export const Lemongrass = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <>
            <div className="pt-20">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center space-y-4 mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-dark">Lemongrass Chunks & Tea Cuts</h1>
                            <p className="text-xl text-gray-600 mx-auto">
                                We offer high-quality Lemongrass chunks and tea cuts, specially harvested at the peak of freshness.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-8">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
                                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden flex items-center justify-center p-6 relative bg-brand-50/50">
                                        <img src={product.image} alt={product.name} className="h-full w-full object-contain hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
                                        <h3 className="text-2xl font-bold text-brand-900 mb-3">{product.name}</h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-1">
                                            {product.description}
                                        </p>
                                        
                                        <div className="space-y-4 mb-8">
                                            <div className="bg-brand-50/30 rounded-xl p-4 border border-brand-100/50">
                                                <h4 className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-3">
                                                    <Info className="w-4 h-4" /> Product Details
                                                </h4>
                                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                                    {product.details.map((detail, i) => (
                                                        <div key={i}>
                                                            <dt className="text-gray-500">{detail.label}</dt>
                                                            <dd className="font-medium text-gray-900">{detail.value}</dd>
                                                        </div>
                                                    ))}
                                                </dl>
                                            </div>
                                            
                                            <div>
                                                <h4 className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-2">
                                                    <Droplets className="w-4 h-4" /> Uses & Benefits
                                                </h4>
                                                <p className="text-sm text-gray-600">{product.uses}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                                            <Button className="flex-1" onClick={() => setIsContactOpen(true)}>
                                                Get Quotation
                                            </Button>
                                            <Button variant="outline" className="flex-1 border-brand-200 text-brand-700 hover:bg-brand-50" onClick={() => setIsContactOpen(true)}>
                                                Send Sample
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            </div>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};
