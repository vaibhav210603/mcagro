import { SectionWrapper } from '../../components/ui/SectionWrapper';

const teamMembers = [
    { name: "Name", role: "Designation", bio: "Brief bio of the team member goes here. Description of their role and experience." },
    { name: "Name", role: "Designation", bio: "Brief bio of the team member goes here. Description of their role and experience." },
    { name: "Name", role: "Designation", bio: "Brief bio of the team member goes here. Description of their role and experience." },
    { name: "Name", role: "Designation", bio: "Brief bio of the team member goes here. Description of their role and experience." },
];

export const OurTeam = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-6xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Our Team</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                                <h3 className="text-xl font-semibold text-center text-dark">{member.name}</h3>
                                <p className="text-secondary text-center mb-3 font-medium">{member.role}</p>
                                <p className="text-gray-600 text-sm text-center">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
