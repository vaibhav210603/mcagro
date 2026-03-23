import { SectionWrapper } from '../../components/ui/SectionWrapper';

const maharashtraFarms = [
    "/farms/mh_farm1.jpg",
    "/farms/mh_farm2.jpg",
    "/farms/mh_farm3.jpg",
    "/farms/mh_farm4.jpg"
];

const upFarms = [
    "/farms/up_farm1.jpg",
    "/farms/up_farm2.jpg",
    "/farms/up_farm3.jpg",
    "/farms/up_farm4.jpg"
];

export const OurFarms = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold text-dark">Our Farms</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            MRC Agrotech operates farming operations spanning over 100 acres of land. 
                            Our primary focus is on chemical-free, regenerative, and commercial-scale 
                            farming practices, with a specialization in aromatic crops.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-primary border-b pb-4">Farms in Maharashtra</h2>
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            {maharashtraFarms.map((img, i) => (
                                <div key={i} className="rounded-2xl overflow-hidden shadow-sm h-64 md:h-96">
                                    <img src={img} alt={`Maharashtra Farm ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-primary border-b pb-4">Farms in Uttar Pradesh</h2>
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            {upFarms.map((img, i) => (
                                <div key={i} className="rounded-2xl overflow-hidden shadow-sm h-64 md:h-96">
                                    <img src={img} alt={`Uttar Pradesh Farm ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
