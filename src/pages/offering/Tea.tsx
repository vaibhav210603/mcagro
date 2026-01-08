import { SectionWrapper } from '../../components/ui/SectionWrapper';

const teas = [
    { name: "Oolong Tea", description: "Rich and robust flavor profile." },
    { name: "Green Tea", description: "Classic green tea known for its health benefits." },
    { name: "Ginger Tea", description: "Spicy and refreshing blend." },
];

export const Tea = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Temi Tea</h1>
                    <div className="prose prose-lg text-gray-600 mb-8">
                        <p>
                            Our selection of Temi Tea brings you the finest aromatic experiences.
                            Grown in pristine environments, our teas are carefully processed to retain their natural aroma and flavor.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {teas.map((tea, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-primary mb-2">{tea.name}</h3>
                                <p className="text-gray-600">{tea.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
