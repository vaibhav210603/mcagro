import { SectionWrapper } from '../../components/ui/SectionWrapper';

export const OurFarms = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Our Farms</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">
                            MRC Agrotech operates farming operations spanning over 100 acres of land.
                            Our primary focus is on chemical-free, regenerative, and commercial-scale
                            farming practices, with a specialization in aromatic crops.
                        </p>
                        <p className="mb-6">
                            We are committed to mitigating the environmental impact of agriculture
                            and aiming to build a robust, agriculture-based economy. As a debt-free entity,
                            we have established strong foundations for sustainable growth.
                        </p>
                        <p className="mb-6">
                            Our operations integrate modern techniques with traditional wisdom to ensuring
                            high-quality yield while preserving soil health and biodiversity.
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
