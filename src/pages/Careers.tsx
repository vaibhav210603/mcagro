import { useState } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export const Careers = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/apply`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setShowSuccessModal(true);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to connect to the server. Please ensure the backend is running.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate('/');
    };

    return (
        <div className="pt-20">
            <SectionWrapper id="careers" className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8 text-center"
                    >
                        <h1 className="text-4xl font-bold text-dark">Careers</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join us in our mission to revolutionize sustainable farming. We are always looking for passionate individuals to join our growing team.
                        </p>

                        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 mt-12 max-w-2xl mx-auto text-left">
                            <h2 className="text-2xl font-semibold text-brand-800 mb-6 font-display">Apply Now</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full justify-center"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2" size={20} />
                                            Sending...
                                        </>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <Modal
                    isOpen={showSuccessModal}
                    onClose={handleCloseModal}
                    title="Application Sent!"
                    message="Thank you for your interest. We have sent a confirmation email to you, and our HR team has been notified. We will get back to you shortly."
                />
            </SectionWrapper>
        </div>
    );
};
