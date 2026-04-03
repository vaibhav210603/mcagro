import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Award, Users } from 'lucide-react';

const teamMembers = [
    { name: "Mr. Ashokk Singh", role: "Chairman & Director", image: "/team/ashokk_singh.jpg", bio: "He is a First Generation Entrepreneur with Hands on experience of more than a Decade in Financial World. He is having In Depth knowledge of his core domain Financial Services. He is known for his knowledge base on National and Global Capital Markets with finest Portfolio Management. He has started his career in 2007 and worked with India's Best Financial Services Companies. He is a well-known Team Player and having mastery in Team Building and Management. He has secured a Post-Graduate Diploma in Management from the Welingkar Institute of Management Development and Research." },
    { name: "Parmar Vishal Surendra", role: "Additional Director", image: "/team/vishal.jpeg", bio: "Vishal brings extensive experience in corporate governance and strategic execution." },
    { name: "Mr. Jainendra Baxi", role: "Non-Executive - Independent Director", image: "/team/jainendra_baxi.jpg", bio: "Jainendra Baxi have more than 25 years of experience in various consulting domains like Finance, Business Development (Media & Entertainment) Marketing and Business Advisory. Studied Film Production from the Prestigious & Renowned Notre Dame Communication Centre Patna Year 1999. Have been an internal Part in the complete making of Film- Based on the Best Selling Novel, Carnage by Angels -Authored by Mr. Y.P Singh Ex IPS." },
    { name: "Ms. Swati Sharma", role: "Non-Executive - Independent Woman Director", image: "/team/swati.jpg", bio: "Swati Sharma has hands on experience of 21 years which includes 11 years at Loyola college of education, Jamshedpur and 10 years at Mumbai Universal college od education and Nirmala college of education. Her educational qualifications in M.Sc. MED. From Patna University, along with Ph.D. from University of Mumbai Professor, Nirmala college of education." },
    { name: "Mrs. Sudha Navin Agarwal", role: "Non-Executive - Independent Director", image: "/team/sudha.jpeg", bio: "Sudha Navin Agarwal is an experienced leader contributing to the inclusive growth and strategic vision of the company." },
    { name: "Shweta Mundra", role: "Non-Executive - Independent Woman Director", image: "/team/shweta.jpg", bio: "She has a rich experience and exposure in corporates since long time. She is working as Compliance Professional and Eminent Management Advisor for many Companies and Corporates from different sectors such as finance, Media, Real estate, Petroleum, IT, Trading and Manufacturing. Overall, she has a diverse and wide- ranging experience and knowledge of various corporate affairs. Currently serving MRC as an Independent Director" },
    { name: "Mr. Rahul Mathur", role: "Company Secretary and Compliance Officer", image: "/team/rahul_mathur.jpg", bio: "Rahul Mathur is appointed Company Secretary and Compliance Officer of the company." },
    { name: "Deepak Kilania", role: "President - Global Affairs", image: "/team/deepak_kilania.jpg", bio: "He is a 1st Gen Entrepreneur with several years of hands-on experience in the real estate and agro-industry sectors. With a strong foundation in Law after completing his bachelor's from NLU Patiala, he combines legal expertise with deep knowledge of Overseas Trade and Agricultural Business Management. As the President of MRC Agrotech, he is recognized for his professionalism, honesty, and commitment towards delivering the highest quality services. He is a strategic leader known for his ability to drive growth and build effective teams in dynamic business environments." },
   {
  name: "Mr. Vaibhav Upadhyay",
  role: "Technology and Operations Associate",
  image: "/team/vaibhav.png",
  bio: "Vaibhav Upadhyay holds a B.Tech from the Indian Institute of Information Technology, Himachal Pradesh (9 CGPA), with strong academic performance. He has experience across both hardware and software technologies. He builds scalable systems and software that optimize operational workflows and reduce day-to-day costs."
},
    { name: "Mr. Vijay Patil", role: "Operations", image: "/team/vijay5.jpeg", bio: "Vijay Patil oversees day-to-day operations at MRC Agrotech, ensuring seamless coordination across supply chain, logistics, and production. With a strong background in operational management and process optimization, he plays a vital role in maintaining quality standards and driving efficiency across all business verticals." },
];

const advisoryBoard = [
    { name: "Mr. Tyler Beaver", role: "Technology Consultant", image: "/team/tyler.jpg", bio: "Is an accomplished strategist and business development expert with a proven track record in governmental affairs, public policy, and international business. As a Principal at Executive Strategies, Tyler specializes in helping clients navigate complex legislative and regulatory environments while securing strategic partnerships that drive growth. With extensive experience across sectors such as agriculture, technology, energy, space, AI, and smart cities, Tyler has successfully managed high-profile political campaigns and crafted targeted media messaging that generates grassroots enthusiasm for both candidates and policy initiatives. His lobbying successes include working with notable organizations founded by members of the Kennedy family and collaborating with influential super PACs. In addition to his political expertise, Tyler has brokered over $100 million in agricultural trade and protein sourcing across the United States." },
    { name: "Mehul Kamdar", role: "Consultant for Global Business", image: "/team/mehul.jpg", bio: "Has over 25 years of experience in research, strategy, planning and licensing. Speaker of nine languages who started his working career as a radio journalist, Mehul has most recently been involved in the organic ingredients, health foods, natural cosmetics and seed and growing supplies industries. For a long time before this, he was an Associate and later a Partner at a Technology licensing practice." },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <motion.div 
        variants={cardVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-none w-[85%] sm:w-[calc(50%-12px)] md:w-auto bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group snap-start border border-gray-100 flex flex-col group"
    >
        <div className="h-72 overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
            <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=random&size=512' }} 
            />
        </div>
        <div className="p-8 grow flex flex-col">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors duration-300">{member.name}</h3>
                <div className="flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-widest mt-2">
                    <Award className="w-4 h-4" />
                    {member.role}
                </div>
            </div>
            <div className="relative group/bio">
                <p className="text-gray-500 text-sm leading-relaxed text-left line-clamp-4 group-hover:line-clamp-none transition-all duration-700 ease-in-out">
                    {member.bio}
                </p>
            </div>
        </div>
    </motion.div>
);

export const OurTeam = () => {
    return (
        <div className="pt-20 bg-gray-50/50 min-h-screen font-sans">
            <SectionWrapper>
                <div className="max-w-7xl mx-auto space-y-12 pb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
                        <div className="max-w-2xl">
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block"
                            >
                                Executive Leadership
                            </motion.span>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl lg:text-5xl font-black text-dark tracking-tight leading-none"
                            >
                                Meet the Architects of <br className="hidden md:block" />
                                <span className="text-brand-600">Our Vision</span>
                            </motion.h1>
                        </div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-500 font-medium md:max-w-sm text-justify leading-relaxed"
                        >
                            Our diverse team of experts brings together decades of experience to drive innovation and transformation in sustainable agriculture across global markets.
                        </motion.p>
                    </div>

                    {/* Core Team */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex overflow-x-auto gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10 snap-x snap-mandatory overflow-y-hidden hide-scrollbar"
                    >
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} member={member} />
                        ))}
                    </motion.div>

                    {/* Advisory Board Section */}
                    <div className="border-t border-gray-200 pt-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8 mb-8">
                            <div className="max-w-2xl">
                                <motion.span 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block"
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        Advisory Board
                                    </span>
                                </motion.span>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl md:text-4xl font-black text-dark tracking-tight leading-none"
                                >
                                    Global <span className="text-brand-600">Advisors</span>
                                </motion.h2>
                            </div>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-500 font-medium md:max-w-sm text-justify leading-relaxed"
                            >
                                Our advisory board comprises distinguished professionals who bring global perspectives and strategic guidance to our operations.
                            </motion.p>
                        </div>

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex overflow-x-auto gap-6 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pb-10 snap-x snap-mandatory overflow-y-hidden hide-scrollbar max-w-4xl mx-auto"
                        >
                            {advisoryBoard.map((member, index) => (
                                <TeamCard key={index} member={member} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
