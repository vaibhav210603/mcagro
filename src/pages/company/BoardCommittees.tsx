import { SectionWrapper } from '../../components/ui/SectionWrapper';

const committees = [
    {
        name: "Audit Committee",
        members: ["Jainendra Baxi (Chairperson)", "Ms. Shweta Mundra (Member)"]
    },
    {
        name: "Nomination and Remuneration Committee",
        members: ["Ms. Shweta Mundra (Chairperson)", "Ms. Swati Sharma (Member)"]
    },
    {
        name: "Stakeholder Relationship Committee",
        members: ["Swati Sharma (Chairperson)", "Jainendra Baxi (Member)", "Ms. Shweta Mundra (Member)"]
    },
    {
        name: "Risk Management Committee",
        members: ["Jitendra Dhanraj Jain (Chairperson)", "Jainendra Baxi (Member)", "Ashok Kumar Singh (Member)", "Ms. Shweta Mundra (Member)"]
    },
    {
        name: "Corporate Social Responsibility",
        members: ["Jainendra Baxi (Chairperson)", "Jitendra Dhanraj Jain (Director Member)", "Swati Sharma (Member)", "Ms. Shweta Mundra (Member)"]
    }
];

export const BoardCommittees = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex justify-between items-end">
                        <h1 className="text-4xl font-bold text-dark">Board Committees</h1>
                        <a 
                            href="/documentforwebsiteupdate/MRC_reconstitutionofcommittees.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-brand-600 hover:text-brand-800 font-medium flex items-center gap-2 border-b border-brand-600"
                        >
                            Reconstitution of Committees Report
                        </a>
                    </div>
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
