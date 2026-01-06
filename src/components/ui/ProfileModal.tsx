import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: {
        name: string;
        role: string;
        image: string | null;
        bio: string;
    } | null;
}

export const ProfileModal = ({ isOpen, onClose, member }: ProfileModalProps) => {
    if (!member) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col pointer-events-auto"
                    >
                        <div className="relative h-48 sm:h-64 bg-brand-900 shrink-0">
                            {member.image ? (
                                <>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-brand-800">
                                    <span className="text-8xl font-bold text-white/10">{member.name.charAt(4)}</span>
                                </div>
                            )}

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-brand-200 font-medium text-lg">{member.role}</p>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 overflow-y-auto">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">About</h4>
                            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-wrap">
                                {member.bio}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

