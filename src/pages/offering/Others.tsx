import { SectionWrapper } from '../../components/ui/SectionWrapper';

export const Others = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Other Offerings</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">
                            Beyond our core agricultural products, MRC Agrotech also deals in a range of Fast-Moving Consumer Goods (FMCGs).
                        </p>
                        <p>
                            We continue to expand our product portfolio to meet the evolving needs of our customers, ensuring
                            quality and sustainability in every product we offer.
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
