import { SectionWrapper } from '../../components/ui/SectionWrapper';

export const Auditors = () => {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-dark">Auditors and RTA</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-primary mb-4">Statutory Auditors</h3>
                            <div className="space-y-2">
                                <p className="font-medium text-dark">M/S Choudhary Choudhary & Company, (CA).(India) Pvt. Ltd.</p>
                                <p className="text-gray-600">338 V Mall Asha Nagar Thakur Complex, Industrial Estate,</p>
                                <p className="text-gray-600">Saidham Temple, WEH, Lower Parel (E), Kandivali E, Mumbai 400 101.</p>
                                <p className="text-gray-600">Email: firmcco@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-primary mb-4">Secretarial Auditors</h3>
                            <div className="space-y-2">
                                <p className="font-medium text-dark">M/S P Dhanuka & Associates</p>
                                <p className="text-gray-600">14 Sir Hariram Goenka Street,</p>
                                <p className="text-gray-600">Kolkata 700 007.</p>
                                <p className="text-gray-600">Email: pinku.agarwal00@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
                            <h3 className="text-xl font-semibold text-primary mb-4">Registrar & Share Transfer Agent (RTA)</h3>
                            <div className="space-y-2">
                                <p className="font-medium text-dark">Purva Shareregistry</p>
                                <p className="text-gray-600">Unit no 9, Shiv Shakti J.R. Boricha Marg,</p>
                                <p className="text-gray-600">Mumbai 400 011.</p>
                                <p className="text-gray-600">Email: support@purvashare.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
