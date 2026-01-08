import { SectionWrapper } from '../../components/ui/SectionWrapper';

const seeds = [
    "Cotton Seeds",
    "Maize Seeds",
    "Mustard Seeds",
    "Paddy Seeds"
];

export const Seeds = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">High-Quality Seeds</h1>
                    <div className="prose prose-lg text-gray-600 mb-8">
                        <p>
                            We provide high-quality seeds that ensure better yield and resistance to diseases.
                            Our seeds are tested for quality and suitability for various soil types.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {seeds.map((seed, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                <span className="text-gray-700 font-medium">{seed}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
