import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { Link, useLocation } from 'react-router-dom';
import { ContactModal } from '../ui/ContactModal';

const navLinks = [
    { name: 'Home', href: '/' },
    {
        name: 'Company Profile',
        href: '#',
        subLinks: [
            { name: 'About Us', href: '/about-us' },
            { name: 'Our Team', href: '/company/team' },
            { name: 'Board Committees', href: '/company/board' },
            { name: 'Auditors and RTA', href: '/company/auditors' },
            { name: 'Our Farms', href: '/company/farms' },
        ]
    },
    {
        name: 'Offering',
        href: '#',
        subLinks: [
            { name: 'Natural Essential Oils', href: '/offering/essential-oils' },
            { name: 'Temi Tea', href: '/offering/tea' },
            { name: 'Seeds', href: '/offering/seeds' },
            { name: 'Nano Fertilizers', href: '/offering/fertilizers' },
            { name: 'Others', href: '/offering/others' },
            { name: 'Lemongrass Chunks', href: '/offering/lemongrass' },
        ]
    },
    { name: 'Investors', href: '/investors' },
    { name: 'Farmer Education', href: '/farmer-education' },
    { name: 'Group Companies', href: 'https://agronicaseeds.com/' },
    { name: 'Careers', href: '/careers' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const handleMouseEnter = (name: string) => {
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const isExternalLink = (href: string) => href.startsWith('http');

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
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.subLinks && handleMouseEnter(link.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {link.subLinks ? (
                                    <button
                                        className={cn(
                                            "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-900",
                                            activeDropdown === link.name ? "text-brand-700" : "text-brand-900/80"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />
                                    </button>
                                ) : (
                                    isExternalLink(link.href) ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium transition-colors hover:text-brand-900 text-brand-900/80"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className={cn(
                                                "text-sm font-medium transition-colors hover:text-brand-900",
                                                location.pathname === link.href ? "text-brand-700" : "text-brand-900/80"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {activeDropdown === link.name && link.subLinks && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 pt-4 w-64"
                                        >
                                            <div className="bg-white rounded-xl shadow-lg border border-brand-100 overflow-hidden py-2">
                                                {link.subLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.href}
                                                        className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <Button size="sm" variant="primary" onClick={() => setIsContactOpen(true)}>
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-brand-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="lg:hidden overflow-hidden bg-white border-b border-brand-100/20"
                >
                    <div className="px-6 py-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            <div key={link.name} className="space-y-4">
                                {link.subLinks ? (
                                    <>
                                        <div className="text-lg font-medium text-brand-900">{link.name}</div>
                                        <div className="pl-4 border-l border-brand-100 space-y-3">
                                            {link.subLinks.map(subLink => (
                                                <Link
                                                    key={subLink.name}
                                                    to={subLink.href}
                                                    className="block text-base text-gray-600"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="text-lg font-medium text-brand-900 block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
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

