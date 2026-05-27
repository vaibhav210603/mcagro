import { useState } from 'react';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Button } from '../../components/ui/Button';
import { ContactModal } from '../../components/ui/ContactModal';
import { ImageSlider } from '../../components/ui/ImageSlider';
import { Droplets, Info } from 'lucide-react';

const img = (folder: string, count: number) =>
    Array.from({ length: count }, (_, i) => `/images/temi-tea/${folder}/${i + 1}.webp`);

const products = [
    {
        name: "First Pluck",
        images: img('first-pluck', 4),
        description: "The very first harvest of the season — tender, young leaves with a delicate flavour profile and high antioxidant content. A rare and prized offering from Temi Tea Estate.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Orthodox Black Tea" },
            { label: "Harvest", value: "First Flush" },
            { label: "Quality", value: "Export Grade" },
        ],
        uses: "Ideal as a premium hot brew. Pairs well with light snacks. High in antioxidants and natural polyphenols."
    },
    {
        name: "Second Pluck",
        images: img('second-pluck', 5),
        description: "The second flush harvest delivers a fuller body and richer muscatel character. A classic choice for those who love a robust, aromatic cup of Darjeeling-style tea.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Orthodox Black Tea" },
            { label: "Harvest", value: "Second Flush" },
            { label: "Quality", value: "Export Grade" },
        ],
        uses: "Perfect for morning or afternoon tea. Rich aroma and full-bodied flavour. Can be enjoyed with or without milk."
    },
    {
        name: "Awaken",
        images: img('awaken', 4),
        description: "A specially blended tea designed to invigorate your senses. The Awaken blend combines carefully selected leaves to deliver a bright, energising cup every morning.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Blended Black Tea" },
            { label: "Format", value: "Loose Leaf" },
            { label: "Quality", value: "Premium Grade" },
        ],
        uses: "Morning energiser, pairs with breakfast. Brisk and bright character lifts focus and alertness."
    },
    {
        name: "Classic",
        images: img('classic', 4),
        description: "Temi Tea Classic is the signature blend — a timeless, well-balanced cup that represents the very essence of Sikkim's pristine tea gardens. A consistent favourite.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Orthodox Black Tea" },
            { label: "Format", value: "Loose Leaf / Packaged" },
            { label: "Quality", value: "Export Grade" },
        ],
        uses: "All-day tea. Smooth, balanced, and aromatic. Suitable for both hot and iced tea preparation."
    },
    {
        name: "Special",
        images: img('special', 4),
        description: "An elevated selection from the finest lots of each harvest, the Special blend is curated for connoisseurs who demand the best from Sikkim's high-altitude tea gardens.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Orthodox Black Tea" },
            { label: "Format", value: "Loose Leaf" },
            { label: "Quality", value: "Special Grade" },
        ],
        uses: "Premium gifting, ceremonial brewing, or indulgent personal use. Best brewed without milk to savour the complexity."
    },
    {
        name: "Green Tea",
        images: img('green-tea', 4),
        description: "Minimally processed green tea from Temi Estate, preserving the natural chlorophyll and catechins. Light, grassy, and refreshing with a clean finish.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Green Tea" },
            { label: "Format", value: "Loose Leaf" },
            { label: "Quality", value: "Export Grade" },
        ],
        uses: "Health-focused daily tea. Rich in EGCG antioxidants, aids metabolism and digestion. Best brewed at 80°C."
    },
    {
        name: "Temi Tea Dip",
        images: img('dip', 5),
        description: "Convenience meets quality — Temi Tea Dip bags are filled with finely cut leaves from the estate, delivering an authentic Temi experience in an easy-to-brew format.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Tea Bag" },
            { label: "Format", value: "Dip Bags" },
            { label: "Quality", value: "Premium Grade" },
        ],
        uses: "Quick brewing at home or office. Same authentic Temi flavour, no loose-leaf equipment needed."
    },
    {
        name: "Green Tea Premium",
        images: img('green-tea-premium', 6),
        description: "The finest grade of Temi green tea, hand-picked from select bushes at peak freshness. A rare, high-altitude green tea with a sweet vegetal note and delicate floral undertones.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Green Tea" },
            { label: "Grade", value: "Premium / Special" },
            { label: "Quality", value: "Export Grade" },
        ],
        uses: "Premium wellness tea. Exceptional antioxidant profile. Ideal for gifting and for green tea enthusiasts."
    },
    {
        name: "Premium Tea",
        images: img('premium-tea', 6),
        description: "The crown jewel of the Temi Tea range — an ultra-premium selection sourced from the top lots of the estate's best-performing garden sections, season after season.",
        details: [
            { label: "Category", value: "Beverages / Tea" },
            { label: "Type", value: "Orthodox Black Tea" },
            { label: "Grade", value: "Ultra Premium" },
            { label: "Quality", value: "Export Grade" },
        ],
        uses: "Luxury gifting and personal indulgence. Complex, layered flavour. Best enjoyed without milk in fine porcelain."
    },
];

export const Tea = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <div className="pt-20">
                <SectionWrapper>
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="text-center space-y-4 mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-dark">Temi Tea</h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Grown in the pristine hills of Sikkim, Temi Tea offers a range of carefully harvested and processed teas — from delicate first-flush black teas to health-forward green varieties.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-10">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row"
                                >
                                    <div className="md:w-5/12 bg-brand-50/50 flex items-center justify-center p-4">
                                        <ImageSlider
                                            images={product.images}
                                            interval={4000}
                                            className="w-full"
                                            imageFit="cover"
                                        />
                                    </div>

                                    <div className="p-6 md:p-8 md:w-7/12 flex flex-col">
                                        <h3 className="text-2xl font-bold text-brand-900 mb-3">{product.name}</h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-1">{product.description}</p>

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
                                            <Button
                                                variant="outline"
                                                className="flex-1 border-brand-200 text-brand-700 hover:bg-brand-50"
                                                onClick={() => setIsContactOpen(true)}
                                            >
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
