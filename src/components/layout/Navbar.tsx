import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { Link, useLocation } from 'react-router-dom';
import { ContactModal } from '../ui/ContactModal';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Investors', href: '/investors' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                    isScrolled ? 'bg-white/80 backdrop-blur-md border-brand-100/20 py-4 shadow-sm' : 'bg-transparent py-6'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold tracking-tight text-brand-900 group-hover:text-brand-700 transition-colors">
                            MRC Agro
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-brand-900",
                                    location.pathname === link.href ? "text-brand-700" : "text-brand-900/80"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" variant="primary" onClick={() => setIsContactOpen(true)}>
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-brand-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="md:hidden overflow-hidden bg-white border-b border-brand-100/20"
                >
                    <div className="px-6 py-8 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-lg font-medium text-brand-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            className="w-full"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsContactOpen(true);
                            }}
                        >
                            Get In Touch
                        </Button>
                    </div>
                </motion.div>
            </nav>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

