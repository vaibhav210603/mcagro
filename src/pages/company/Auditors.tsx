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
                                <p className="font-medium text-dark">Name of the Firm</p>
                                <p className="text-gray-600">Chartered Accountants</p>
                                <p className="text-gray-600">Address Line 1</p>
                                <p className="text-gray-600">City, State - Zip Code</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-primary mb-4">Secretarial Auditors</h3>
                            <div className="space-y-2">
                                <p className="font-medium text-dark">Name of the Firm</p>
                                <p className="text-gray-600">Company Secretaries</p>
                                <p className="text-gray-600">Address Line 1</p>
                                <p className="text-gray-600">City, State - Zip Code</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
                            <h3 className="text-xl font-semibold text-primary mb-4">Registrar & Share Transfer Agent (RTA)</h3>
                            <div className="space-y-2">
                                <p className="font-medium text-dark">Name of the RTA</p>
                                <p className="text-gray-600">Address Line 1</p>
                                <p className="text-gray-600">City, State - Zip Code</p>
                                <p className="text-gray-600">Email: contact@example.com</p>
                                <p className="text-gray-600">Phone: +91 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};
