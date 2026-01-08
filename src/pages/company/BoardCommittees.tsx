import { SectionWrapper } from '../../components/ui/SectionWrapper';

const committees = [
    {
        name: "Audit Committee",
        members: ["Member Name (Chairman)", "Member Name", "Member Name"]
    },
    {
        name: "Stakeholders Relationship Committee",
        members: ["Member Name (Chairman)", "Member Name", "Member Name"]
    },
    {
        name: "Nomination & Remuneration Committee",
        members: ["Member Name (Chairman)", "Member Name", "Member Name"]
    },
];

export const BoardCommittees = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Board Committees</h1>
                    <div className="space-y-8">
                        {committees.map((committee, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-semibold text-primary mb-4">{committee.name}</h3>
                                <ul className="space-y-2">
                                    {committee.members.map((member, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                            {member}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
