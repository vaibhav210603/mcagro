import { useState } from 'react';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Button } from '../../components/ui/Button';
import { ContactModal } from '../../components/ui/ContactModal';
import { Droplets, Info } from 'lucide-react';

const products = [
    {
        name: "Food Grade Guar Gum Powder",
        image: "/offerings/guar_gum_products.png",
        description: "High-purity, plant-based hydrocolloid derived from guar seeds (Cyamopsis tetragonolobus). Manufactured under strict quality and food safety standards.",
        details: [
            { label: "Botanical Name", value: "CYAMPOSIS TETRAGONOLOBUS, L" },
            { label: "HS Code", value: "130 232 30" },
            { label: "CAS No.", value: "9000-30-0" },
            { label: "EEC No.", value: "E 412" }
        ],
        uses: "Thickening efficiency, improves texture, prevents separation, enhances freeze-thaw stability, acts as partial fat replacer."
    },
    {
        name: "Guar Korma Meal (Animal Feed)",
        image: "/offerings/guar_gum_products.png",
        description: "Protein-rich animal feed ingredient obtained as a by-product after guar gum extraction.",
        details: [
            { label: "Key Features", value: "Rich in plant protein, balanced nutrition" },
            { label: "Suitable for", value: "Cattle Feed, Poultry Feed, Livestock" }
        ],
        uses: "Economical alternative to conventional protein meals for animal nutrition."
    },
    {
        name: "Roasted Guar Korma Meal",
        image: "/offerings/guar_gum_products.png",
        description: "Value-added, heat-processed form for improved digestibility and nutrient absorption.",
        details: [
            { label: "Grade", value: "Premium Digestible Feed Grade" },
            { label: "Applications", value: "Poultry, Aquaculture, Dairy & Cattle" }
        ],
        uses: "Improved digestibility, reduced anti-nutritional factors, better palatability."
    }
];

export const GuarGum = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <>
            <div className="pt-20">
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto space-y-8">
                        <div className="text-center space-y-4 mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-dark">Guar Gum Products</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                MRC Agrotech specializes in guar-based food and feed ingredients, manufactured with a focus on quality, consistency, and reliability.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                    <div className="h-48 overflow-hidden flex items-center justify-center p-6 relative bg-brand-50/50">
                                        <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-xl hover:scale-105 transition-transform duration-500" />
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
