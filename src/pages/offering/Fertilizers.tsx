import { SectionWrapper } from '../../components/ui/SectionWrapper';

export const Fertilizers = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Nano Fertilizers</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">
                            MRC Agrotech specializes in Nano Fertilizers, which are designed to increase nutrient efficiency
                            and improve crop yield while minimizing environmental impact.
                        </p>
                        <p>
                            Our fertilizers are developed using advanced nanotechnology to ensure better absorption by crops,
                            leading to healthier plants and sustainable farming practices.
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
