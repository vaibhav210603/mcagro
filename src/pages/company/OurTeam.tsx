import { SectionWrapper } from '../../components/ui/SectionWrapper';

const teamMembers = [
    { name: "Mr. Ashokk Singh", role: "Chairman & Director", image: "/team/ashokk_singh.jpg", bio: "He is a First Generation Entrepreneur with Hands on experience of more than a Decade in Financial World. He is having In Depth knowledge of his core domain Financial Services. He is known for his knowledge base on National and Global Capital Markets with finest Portfolio Management. He has started his career in 2007 and worked with India's Best Financial Services Companies. He is a well-known Team Player and having mastery in Team Building and Management. He has secured a Post-Graduate Diploma in Management from the Welingkar Institute of Management Development and Research." },
    { name: "Ms. Swati Sharma", role: "Non-Executive - Independent Woman Director", image: "/team/swati.jpg", bio: "Swati Sharma has hands on experience of 21 years which includes 11 years at Loyola college of education, Jamshedpur and 10 years at Mumbai Universal college od education and Nirmala college of education. Her educational qualifications in M.Sc. MED. From Patna University, along with Ph.D. from University of Mumbai Professor, Nirmala college of education." },
    { name: "Mr. Jainendra Baxi", role: "Non-Executive - Independent Director", image: "/team/jainendra_baxi.jpg", bio: "Jainendra Baxi have more than 25 years of experience in various consulting domains like Finance, Business Development (Media & Entertainment) Marketing and Business Advisory. Studied Film Production from the Prestigious & Renowned Notre Dame Communication Centre Patna Year 1999. Have been an internal Part in the complete making of Film- Based on the Best Selling Novel, Carnage by Angels -Authored by Mr. Y.P Singh Ex IPS." },
    { name: "Mr. Rahul Mathur", role: "Company Secretary", image: "/team/rahul_mathur.jpg", bio: "Rahul Mathur is appointed Company Secretary and Compliance Officer of the company." },
    { name: "Shweta Mundra", role: "Non-Executive - Independent Woman Director", image: "/team/shweta.jpg", bio: "She has a rich experience and exposure in corporates since long time. She is working as Compliance Professional and Eminent Management Advisor for many Companies and Corporates from different sectors such as finance, Media, Real estate, Petroleum, IT, Trading and Manufacturing. Overall, she has a diverse and wide- ranging experience and knowledge of various corporate affairs. Currently serving MRC as an Independent Director" },
    { name: "Mr. Tyler Beaver", role: "Technology Consultant", image: "/team/tyler.jpg", bio: "Is an accomplished strategist and business development expert with a proven track record in governmental affairs, public policy, and international business. As a Principal at Executive Strategies, Tyler specializes in helping clients navigate complex legislative and regulatory environments while securing strategic partnerships that drive growth. With extensive experience across sectors such as agriculture, technology, energy, space, AI, and smart cities, Tyler has successfully managed high-profile political campaigns and crafted targeted media messaging that generates grassroots enthusiasm for both candidates and policy initiatives. His lobbying successes include working with notable organizations founded by members of the Kennedy family and collaborating with influential super PACs. In addition to his political expertise, Tyler has brokered over $100 million in agricultural trade and protein sourcing across the United States." },
    { name: "Mehul Kamdar", role: "Consultant for Global Business", image: "/team/mehul.jpg", bio: "Has over 25 years of experience in research, strategy, planning and licensing. Speaker of nine languages who started his working career as a radio journalist, Mehul has most recently been involved in the organic ingredients, health foods, natural cosmetics and seed and growing supplies industries. For a long time before this, he was an Associate and later a Partner at a Technology licensing practice." },
    { name: "Deepak Kilania", role: "President - Global Affairs", image: "/team/deepak_kilania.jpg", bio: "He is a 1st Gen Entrepreneur with several years of hands-on experience in the real estate and agro-industry sectors. With a strong foundation in Law after completing his bachelor's from NLU Patiala, he combines legal expertise with deep knowledge of Overseas Trade and Agricultural Business Management. As the President of MRC Agrotech, he is recognized for his professionalism, honesty, and commitment towards delivering the highest quality services. He is a strategic leader known for his ability to drive growth and build effective teams in dynamic business environments." },
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
                                <div className="w-24 h-24 mb-4 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
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
