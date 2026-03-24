import { useState } from 'react';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Button } from '../../components/ui/Button';
import { ContactModal } from '../../components/ui/ContactModal';
import { Droplets, Info } from 'lucide-react';

const products = [
    {
        name: "Nano Manganese Liquid (20000 PPM)",
        image: "/offerings/Nano-1.jpg",
        description: "A liquid fertilizer with nano-sized manganese particles for enhanced crop absorption.",
        details: [
            { label: "Category", value: "Agrochemicals / Fertilizers" },
            { label: "Type", value: "Liquid Nano Fertilizer" },
            { label: "Concentration", value: "20000 PPM" }
        ],
        uses: "Corrects manganese deficiency, enhances photosynthesis, and improves crop resilience."
    },
    {
        name: "Nano Potash Liquid",
        image: "/offerings/Nano-2.jpg",
        description: "A nano-formulated potassium supplement to upgrade soil fertility and crop quality.",
        details: [
            { label: "Category", value: "Agrochemicals / Fertilizers" },
            { label: "Type", value: "Liquid Nano Fertilizer" }
        ],
        uses: "Improves fruit size, quality, and overall plant structure and immunity."
    },
    {
        name: "Nano Copper Liquid (4000 PPM)",
        image: "/offerings/Nano-3.jpg",
        description: "A copper-based micronutrient solution in nano form for systemic protection and growth.",
        details: [
            { label: "Category", value: "Agrochemicals / Fertilizers" },
            { label: "Type", value: "Liquid Nano Fertilizer" },
            { label: "Concentration", value: "4000 PPM" }
        ],
        uses: "Provides essential copper for lignin synthesis and aids in disease resistance."
    },
    {
        name: "Nano Urea Liquid",
        image: "/offerings/Nano-4.jpg",
        description: "A highly efficient nitrogen fertilizer for improving plant productivity and nitrogen utilization.",
        details: [
            { label: "Category", value: "Agrochemicals / Fertilizers" },
            { label: "Type", value: "Liquid Nano Fertilizer" }
        ],
        uses: "Rapidly delivers nitrogen, reducing the need for conventional bulk urea application."
    },
    {
        name: "Nano Zinc Liquid (50000 PPM)",
        image: "/offerings/Nano-5.jpg",
        description: "A concentrated nano zinc supplement for agricultural efficiency and deficiency correction.",
        details: [
            { label: "Category", value: "Agrochemicals / Fertilizers" },
            { label: "Type", value: "Liquid Nano Fertilizer" },
            { label: "Concentration", value: "50000 PPM" }
        ],
        uses: "Crucial for hormone regulation, internode elongation, and protein synthesis."
    }
];

export const Fertilizers = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <>
            <div className="pt-20">
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto space-y-8">
                        <div className="text-center space-y-4 mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-dark">Nano Fertilizers</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Cutting-edge nano-formulated crop nutrition for highly efficient absorption and sustainable agriculture.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                    <div className="h-48 overflow-hidden flex items-center justify-center p-6 relative bg-brand-50/50">
                                        <img src={product.image} alt={product.name} className="h-full w-full object-contain hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-brand-900 mb-3">{product.name}</h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-1">
                                            {product.description}
                                        </p>
                                        
                                        <div className="space-y-4 mb-6">
                                            <div className="bg-brand-50/30 rounded-xl p-4 border border-brand-100/50">
                                                <h4 className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-2">
                                                    <Info className="w-4 h-4" /> Details
                                                </h4>
                                                <dl className="grid gap-1 text-sm">
                                                    {product.details.map((detail, i) => (
                                                        <div key={i} className="flex justify-between border-b border-brand-100/30 pb-1 last:border-0">
                                                            <dt className="text-gray-500">{detail.label}</dt>
                                                            <dd className="font-medium text-gray-900 text-right max-w-[60%]">{detail.value}</dd>
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
                                        
                                        <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 mt-auto">
                                            <Button className="w-full justify-center" onClick={() => setIsContactOpen(true)}>
                                                Get Quotation
                                            </Button>
                                            <Button variant="outline" className="w-full justify-center border-brand-200 text-brand-700 hover:bg-brand-50" onClick={() => setIsContactOpen(true)}>
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
