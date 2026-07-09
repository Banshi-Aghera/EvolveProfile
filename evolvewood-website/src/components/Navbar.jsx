import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { navigation, contactInfo } from '../data/content';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
    const location = useLocation();
    return <NavbarInner key={location.pathname} />;
}

function NavbarInner() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);
            if (currentScrollY <= 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) setIsVisible(true);
    }, [isOpen]);

    return (
        <>
            {/* Top bar - contact info */}
            <div className={cn(
                "fixed top-0 inset-x-0 z-[61] bg-evolve-brown text-white transition-all duration-500",
                scrolled ? "h-0 opacity-0 overflow-hidden" : "h-8 opacity-100"
            )}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-xs">
                    <span className="hidden sm:flex items-center gap-2 text-white/70">
                        <Phone size={12} /> {contactInfo.phoneNumbers[0]}
                    </span>
                    <span className="text-white/50 text-[10px] tracking-widest uppercase font-bold">EvolveWood — Save The Nature</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-white/70 hover:text-white transition-colors hidden sm:block">{contactInfo.email}</a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={cn(
                "fixed inset-x-0 z-[60] flex justify-center px-3 pointer-events-none transition-all duration-500",
                scrolled ? "top-0 pt-2" : "top-8 pt-2",
                isVisible ? "translate-y-0" : "-translate-y-[calc(100%+3rem)]"
            )}>
                <nav className={cn(
                    "pointer-events-auto flex w-full min-w-0 items-center justify-between transition-all duration-500",
                    scrolled
                        ? "max-w-6xl bg-white/95 backdrop-blur-2xl rounded-xl px-4 py-2 shadow-xl shadow-evolve-brown/10 sm:px-6 border border-evolve-brown/5"
                        : "max-w-7xl bg-white/70 backdrop-blur-xl rounded-xl px-4 py-2 shadow-lg sm:px-6 md:px-8 border border-white/50"
                )}>
                    {/* Logo */}
                    <Link to="/" className="z-50 flex min-w-0 shrink items-center focus:outline-none">
                        <img
                            src="/images/logo.png"
                            alt="EvolveWood - Save The Nature"
                            className={cn(
                                "h-auto object-contain transition-all duration-500",
                                scrolled ? "max-h-7 sm:max-h-8" : "max-h-7 sm:max-h-9"
                            )}
                        />
                    </Link>

                    {/* Desktop Menu - Pill Style */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) => cn(
                                    "relative px-3 py-1.5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-300",
                                    isActive
                                        ? "nav-pill-active"
                                        : "text-evolve-brown/70 hover:text-evolve-brown hover:bg-evolve-brown/5"
                                )}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <div className="lg:hidden relative z-[70]">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="rounded-xl border border-evolve-brown/10 bg-evolve-brown/5 p-2.5 text-evolve-brown transition-colors hover:bg-evolve-brown/10 focus:outline-none active:scale-95"
                                aria-label="Open menu"
                            >
                                <Menu size={20} />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Full-Screen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex flex-col bg-evolve-cream overflow-hidden"
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-[0.03]">
                            <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-evolve-green blur-[120px]"></div>
                            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-evolve-brown blur-[120px]"></div>
                        </div>

                        {/* Mobile Header */}
                        <div className="flex shrink-0 items-center justify-between p-5 sm:p-6 relative z-10">
                            <Link to="/" onClick={() => setIsOpen(false)} className="focus:outline-none">
                                <img src="/images/logo.png" alt="EvolveWood" className="h-8 object-contain" />
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2.5 rounded-xl bg-evolve-brown/5 text-evolve-brown hover:bg-evolve-brown/10 transition-colors active:scale-95"
                                aria-label="Close menu"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-4 sm:px-8 relative z-10">
                            <div className="flex flex-col gap-2">
                                {navigation.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 + (i * 0.04), type: "spring", stiffness: 120 }}
                                    >
                                        <NavLink
                                            to={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) => cn(
                                                "flex items-center justify-between text-xl font-semibold py-4 px-4 rounded-2xl transition-all",
                                                isActive
                                                    ? "bg-evolve-green/10 text-evolve-green"
                                                    : "text-evolve-brown/70 hover:bg-evolve-brown/5 hover:text-evolve-brown"
                                            )}
                                        >
                                            {item.name}
                                            <ArrowRight size={18} className="opacity-30" />
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-auto pt-8 space-y-4"
                            >
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to="/contact"
                                    className="flex items-center justify-center bg-evolve-brown text-white px-8 py-4 rounded-2xl font-bold text-lg w-full hover:bg-evolve-green transition-colors shadow-xl active:scale-[0.98]"
                                >
                                    Get a Quote
                                    <ArrowRight size={18} className="ml-2" />
                                </Link>
                                <a
                                    href={contactInfo.primaryPhoneHref}
                                    className="flex items-center justify-center gap-2 text-evolve-brown/60 text-sm font-medium"
                                >
                                    <Phone size={14} /> {contactInfo.phoneNumbers[0]}
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
