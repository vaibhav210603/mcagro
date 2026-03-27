import { SectionWrapper } from '../components/ui/SectionWrapper';

export const TermsAndConditions = () => {
    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <SectionWrapper className="py-12">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold text-dark mb-8">Terms and Conditions</h1>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <section>
                            <h2 className="text-2xl font-semibold text-dark mb-3">1. Introduction</h2>
                            <p>
                                Welcome to MRC Agrotech Ltd. By accessing this website, we assume you accept these terms and conditions. Do not continue to use MRC Agrotech if you do not agree to take all of the terms and conditions stated on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-dark mb-3">2. License</h2>
                            <p>
                                Unless otherwise stated, MRC Agrotech Ltd and/or its licensors own the intellectual property rights for all material on MRC Agrotech. All intellectual property rights are reserved. You may access this from MRC Agrotech for your own personal use subjected to restrictions set in these terms and conditions.
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>You must not republish material from MRC Agrotech.</li>
                                <li>You must not sell, rent or sub-license material from MRC Agrotech.</li>
                                <li>You must not reproduce, duplicate or copy material from MRC Agrotech.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-dark mb-3">3. User Information</h2>
                            <p>
                                Certain parts of this website offer the opportunity for users to submit personal data or quotation requests. You warrant that any information you submit is accurate and you grant us a non-exclusive license to use, reproduce and edit any of your comments or information for business purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-dark mb-3">4. Limitation of Liability</h2>
                            <p>
                                In no event shall MRC Agrotech Ltd, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website. MRC Agrotech Ltd, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-dark mb-3">5. Disclaimer</h2>
                            <p>
                                The materials on MRC Agrotech's website are provided on an 'as is' basis. MRC Agrotech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </section>

                        <p className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500 text-center">
                            Last updated: {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
