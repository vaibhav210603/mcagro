import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Linkedin, Facebook, Instagram } from 'lucide-react';
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
            { name: 'Lemongrass Chunks', href: '/offering/lemongrass' },
            { name: 'Temi Tea', href: 'https://temiteaestate.com' },
            { name: 'Seeds', href: '/offering/seeds' },
            { name: 'Nano Fertilizers', href: '/offering/fertilizers' },
            { name: 'Guar Gum', href: '/offering/guar-gum' },
           // { name: 'Others', href: '/offering/others' },
            
        ]
    },
    { 
        name: 'Investors Corner', 
        href: '#',
        subLinks: [
            { name: 'Code Of Conduct & Policy', href: '/investors/code-of-conduct' },
            { name: 'Financial Reporting', href: '/investors/financial-reporting' },
            { name: 'Shareholders Information', href: '/investors/shareholders-info' },
            { name: 'Corporate Announcement', href: '/investors/corporate-announcement' },
            { name: 'Investors Contact', href: '/investors/contact' },
            { name: 'Prospectus', href: '/investors/prospectus' },
            { name: 'REG.46 & 62', href: '/investors/reg-46-62' }
        ]
    },
    { name: 'Farmer Education', href: '/farmer-education' },
    { 
        name: 'Group Companies', 
        href: '#',
        subLinks: [
            { name: 'Agronica Seeds', href: 'https://agronicaseeds.com/' }
        ]
    },
    { name: 'Careers', href: '/careers' },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const location = useLocation();

    const handleMouseEnter = (name: string) => {
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const isExternalLink = (href: string) => href.startsWith('http') || href.endsWith('.pdf');

    const toggleMobileDropdown = (name: string) => {
        setMobileDropdown(mobileDropdown === name ? null : name);
    };

    return (
        <>
            <header className="fixed top-0 w-full z-50">
                {/* Top Social Bar */}
                <div className="bg-brand-900 text-white border-b border-white/10 py-1.5">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] sm:text-xs uppercase tracking-widest font-medium">
                        <div className="flex items-center gap-2">
                            <span className="text-white/80">Find us on social media</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <a href="https://www.linkedin.com/company/mrcagrotech" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                                <Linkedin className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">LinkedIn</span>
                            </a>
                            <a href="https://www.facebook.com/people/MRC-Agrotech-Ltd/61581326431597/?mibextid=wwXIfr&rdid=YnniAiuU2bcqpIPP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18HrcBXHxT%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                                <Facebook className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/mrcagrotech/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                                <Instagram className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <nav className="w-full bg-white border-b border-brand-100/20 py-3 shadow-sm">
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src="/MRC.png" alt="MRCAgrotech ltd logo" className="h-12 md:h-12 w-auto object-contain" />
                            <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-900 group-hover:text-brand-700 transition-colors">
                                MRCAgrotech
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-5">
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
                                                        isExternalLink(subLink.href) ? (
                                                            <a
                                                                key={subLink.name}
                                                                href={subLink.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
                                                            >
                                                                {subLink.name}
                                                            </a>
                                                        ) : (
                                                            <Link
                                                                key={subLink.name}
                                                                to={subLink.href}
                                                                className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        )
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
                            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setMobileDropdown(null); }}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="lg:hidden overflow-hidden bg-white border-b border-brand-100/20"
                            >
                                <div className="px-6 py-4 flex flex-col max-h-[80vh] overflow-y-auto">
                                    {navLinks.map((link) => (
                                        <div key={link.name} className="border-b border-gray-100 last:border-0">
                                            {link.subLinks ? (
                                                <>
                                                    <button
                                                        onClick={() => toggleMobileDropdown(link.name)}
                                                        className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-brand-900"
                                                    >
                                                        {link.name}
                                                        <ChevronDown className={cn(
                                                            "w-5 h-5 text-gray-400 transition-transform duration-300",
                                                            mobileDropdown === link.name ? "rotate-180 text-brand-600" : ""
                                                        )} />
                                                    </button>
                                                    <AnimatePresence>
                                                        {mobileDropdown === link.name && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.25 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-4 pb-3 space-y-1 border-l-2 border-brand-200 ml-1">
                                                                    {link.subLinks.map(subLink => (
                                                                        isExternalLink(subLink.href) ? (
                                                                            <a
                                                                                key={subLink.name}
                                                                                href={subLink.href}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="block py-2 text-sm text-gray-600 hover:text-brand-700 transition-colors"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                {subLink.name}
                                                                            </a>
                                                                        ) : (
                                                                            <Link
                                                                                key={subLink.name}
                                                                                to={subLink.href}
                                                                                className="block py-2 text-sm text-gray-600 hover:text-brand-700 transition-colors"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                {subLink.name}
                                                                            </Link>
                                                                        )
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    to={link.href}
                                                    className="block py-3.5 text-base font-semibold text-brand-900"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                    <div className="pt-4 pb-2">
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
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>


            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

