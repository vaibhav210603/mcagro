import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Users, UserCircle2, FileText } from 'lucide-react';

const committees = [
    {
        name: "Audit Committee",
        members: ["Jainendra Baxi (Chairperson)", "Shweta Mundra (Member)", "Swati Sharma (Member)"]
    },
    {
        name: "Nomination and Remuneration Committee",
        members: ["Swati Sharma (Chairperson)", "Shweta Mundra (Member)", "Jainendra Baxi (Member)"]
    },
    {
        name: "Stakeholders Relationship Committee",
        members: ["Swati Sharma (Chairperson)", "Jainendra Baxi (Member)", "Shweta Mundra (Member)"]
    },
    {
        name: "Risk Management Committee",
        members: ["Sudha Navin Agrawal (Chairperson)", "Jainendra Baxi (Member)", "Ashok Kumar Singh (Member)", "Shweta Mundra (Member)"]
    },
    {
        name: "Corporate Social Responsibility Committee",
        members: ["Sudha Navin Agrawal (Chairperson)", "Jainendra Baxi (Member)", "Swati Sharma (Member)", "Shweta Mundra (Member)"]
    }
];

export const BoardCommittees = () => {
    return (
        <div className="pt-20 bg-gray-50/30 min-h-screen">
            <SectionWrapper>
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 border-b border-gray-200 pb-8">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Board Committees</h1>
                            <p className="text-gray-600 max-w-xl text-lg text-justify md:text-left">Our diverse and experienced board committees play a vital role in MRC Agrotech's corporate governance and strategic execution.</p>
                        </div>
                        <a 
                            href="/documentforwebsiteupdate/MRC_reconstitutionofcommittees.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-brand-50 text-brand-700 font-semibold py-3 px-6 rounded-full border border-brand-200 shadow-sm transition-all duration-300 hover:shadow whitespace-nowrap flex items-center gap-2"
                        >
                            <FileText className="w-5 h-5" /> Read PDF Report
                        </a>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {committees.map((committee, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-100/50 to-transparent rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10 flex items-center gap-3">
                                    <span className="p-3 bg-brand-50 rounded-xl text-brand-600 shadow-inner">
                                        <Users className="w-6 h-6" />
                                    </span>
                                    {committee.name}
                                </h3>
                                
                                <ul className="space-y-4 relative z-10 grow">
                                    {committee.members.map((member, idx) => {
                                        const isChair = member.includes('Chairperson');
                                        return (
                                            <li key={idx} className={`flex items-center p-4 rounded-xl border transition-colors ${isChair ? 'bg-amber-50/40 border-amber-100' : 'bg-gray-50/50 border-gray-100/80 hover:bg-gray-50'}`}>
                                                <UserCircle2 className={`w-6 h-6 mr-3 ${isChair ? 'text-amber-500' : 'text-gray-400'}`} />
                                                <span className={`font-semibold ${isChair ? 'text-gray-900' : 'text-gray-700'}`}>
                                                    {member.replace(/\(.*?\)/, '').trim()}
                                                </span>
                                                <span className={`ml-auto text-xs px-3 py-1 rounded-full ${isChair ? 'bg-amber-100 text-amber-700 font-bold tracking-wide' : 'bg-gray-200 text-gray-600 font-medium'}`}>
                                                    {isChair ? 'Chair' : 'Member'}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
