import { SectionWrapper } from '../components/ui/SectionWrapper';
import { motion } from 'framer-motion';

export const GetInTouch = () => {
    return (
        <div className="pt-20">
            <SectionWrapper id="contact-info" className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold mb-8 text-dark">Get In Touch</h1>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-brand-100 rounded-lg text-brand-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-brand-800 mb-2">Office Address</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            Block 404, 4th floor, Sagar Tech Plaza, B Wing,<br />
                                            Off Andheri Kurla Road, Sakinaka, Andheri East,<br />
                                            Mumbai, Maharashtra - 400072.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-brand-100 rounded-lg text-brand-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-brand-800 mb-2">Phone No.</h3>
                                        <p className="text-gray-600 text-lg">022 - 40156765</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-brand-100 rounded-lg text-brand-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-brand-800 mb-2">E-mail</h3>
                                        <p className="text-gray-600 text-lg">
                                            <a href="mailto:info@mrcagro.com" className="hover:text-brand-600 transition-colors">
                                                info@mrcagro.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};
