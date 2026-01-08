import { SectionWrapper } from '../../components/ui/SectionWrapper';

export const Lemongrass = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Lemongrass Chunks & Tea Cuts</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">
                            We offer high-quality Lemongrass chunks and tea cuts, perfect for use in teas, culinary applications,
                            and herbal infusions.
                        </p>
                        <p>
                            Our lemongrass is harvested at the peak of freshness and processed to retain its distinct
                            citrusy aroma and flavor profile.
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
