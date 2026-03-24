import { useState } from 'react';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Button } from '../../components/ui/Button';
import { ContactModal } from '../../components/ui/ContactModal';
import { Droplets, Info } from 'lucide-react';

const oils = [
    {
        name: "Ajwain Essential Oil",
        image: "/offerings/ajwain.png",
        description: "Extracted through steam distillation from seeds of Trachyspermum ammi. Known for its strong, pungent aroma and digestive benefits.",
        details: [
            { label: "Botanical Name", value: "Trachyspermum ammi" },
            { label: "CAS#", value: "8001-99-8" },
            { label: "Method", value: "Steam Distillation" },
            { label: "Key Constituents", value: "Thymol, Gamma-terpinene, P-cymene" }
        ],
        uses: "Digestive aid, respiratory relief, antimicrobial, and aromatherapy."
    },
    {
        name: "Cinnamon Essential Oil",
        image: "/offerings/cinnamon.png",
        description: "Extracted from the dried inner bark of Cinnamomum zeylanicum. Has a warm, spicy aroma.",
        details: [
            { label: "Botanical Name", value: "Cinnamomum zeylanicum" },
            { label: "CAS#", value: "8015-91-6" },
            { label: "Major Constituents", value: "Cinnamaldehyde" }
        ],
        uses: "Stress reduction, skincare (acne/eczema), and natural deodorizer in cleaning."
    },
    {
        name: "Cumin Seed Essential Oil",
        image: "/offerings/cumin.png",
        description: "Extracted from dried seeds; used in culinary, aromatherapy, and for respiratory relief.",
        details: [
            { label: "Botanical Name", value: "Cuminum cyminum" },
            { label: "CAS#", value: "8014-13-9" },
            { label: "Method", value: "Steam Distillation" }
        ],
        uses: "Potent antioxidant, aids digestion, immune support, and flavoring agent."
    },
    {
        name: "Lemongrass Essential Oil",
        image: "/offerings/lemongrass.png",
        description: "Fresh, lemony scent; used for stress reduction, muscle pain, and as an insect repellent.",
        details: [
            { label: "Botanical Name", value: "Cymbopogon citratus" },
            { label: "CAS#", value: "8007-02-1" },
            { label: "Method", value: "Steam Distillation" }
        ],
        uses: "Relieves muscle tension, natural insect repellent, skin toner, and stress relief."
    },
    {
        name: "Palmarosa Essential Oil",
        image: "/offerings/palmarosa.png",
        description: "Sweet, floral aroma; known for hydrating properties and skin care (eczema, psoriasis).",
        details: [
            { label: "Botanical Name", value: "Cymbopogon martinii" },
            { label: "CAS#", value: "8014-19-5" },
            { label: "Method", value: "Steam Distillation" }
        ],
        uses: "Skin hydration, cellular regeneration, emotional balancing, and natural perfumery."
    },
    {
        name: "Peppermint Essential Oil",
        image: "/offerings/peppermint.png",
        description: "Refreshing, invigorating scent; used for headaches, nausea, and sinus congestion.",
        details: [
            { label: "Botanical Name", value: "Mentha piperita" },
            { label: "CAS#", value: "8006-90-4" },
            { label: "Method", value: "Steam Distillation" }
        ],
        uses: "Headache relief, digestive support, respiratory clearance, and energy boost."
    }
];

export const EssentialOils = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <>
            <div className="pt-20">
                <SectionWrapper>
                    <div className="max-w-6xl mx-auto space-y-8">
                        <div className="text-center space-y-4 mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-dark">Natural Essential Oils</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We offer a wide range of natural essential oils derived from high-quality aromatic crops.
                                Our essential oils are used in various industries including pharmaceuticals, home and personal care,
                                food and beverages, and aromatherapy.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                            {oils.map((oil, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                    <div className="h-64 overflow-hidden flex items-center justify-center p-6 relative">
                                        <img src={oil.image} alt={oil.name} className="h-full w-full object-contain hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-bold text-brand-900 mb-3">{oil.name}</h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-1">
                                            {oil.description}
                                        </p>
                                        
                                        <div className="space-y-4 mb-6">
                                            <div className="bg-brand-50/30 rounded-xl p-4 border border-brand-100/50">
                                                <h4 className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-3">
                                                    <Info className="w-4 h-4" /> Product Details
                                                </h4>
                                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                                    {oil.details.map((detail, i) => (
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
                                                <p className="text-sm text-gray-600">{oil.uses}</p>
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
