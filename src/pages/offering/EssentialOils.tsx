import { SectionWrapper } from '../../components/ui/SectionWrapper';

const oils = [
    "Ajwain Essential Oil",
    "Cinnamon Essential Oil",
    "Cumin Seed Essential Oil",
    "Lemongrass Essential Oil",
    "Palmarosa Essential Oil",
    "Peppermint Essential Oil"
];

export const EssentialOils = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Natural Essential Oils</h1>
                    <div className="prose prose-lg text-gray-600 mb-8">
                        <p>
                            We offer a wide range of natural essential oils derived from high-quality aromatic crops.
                            Our essential oils are used in various industries including pharmaceuticals, home and personal care,
                            food and beverages, and aromatherapy.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {oils.map((oil, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                <span className="text-gray-700 font-medium">{oil}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
