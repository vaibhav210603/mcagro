import { motion } from 'framer-motion';

export const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-950"
        >
            <div className="overflow-hidden">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                    className="relative"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        MRC Agrotech
                    </h1>
                </motion.div>
            </div>

            <motion.div
                className="mt-4 h-[1px] bg-white/20 w-48 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <motion.div
                    className="h-full bg-brand-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                />
            </motion.div>
        </motion.div>
    );
};
