import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navigation } from '../data/content';
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

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        }
    }, [isOpen]);

    return (
        <>
            <div className={cn(
                "fixed top-0 inset-x-0 z-[60] flex justify-center px-3 pt-3 pointer-events-none transition-transform duration-300 sm:px-4 sm:pt-4",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}>
                <nav className={cn(
                    "pointer-events-auto flex w-full min-w-0 items-center justify-between rounded-full border transition-all duration-500",
                    scrolled
                        ? "max-w-5xl bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-2xl sm:px-5 md:px-6"
                        : "max-w-7xl bg-white/60 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-6 md:px-8"
                )}>
                    {/* Logo */}
                    <Link to="/" className="z-50 flex min-w-0 shrink items-center focus:outline-none">
                        <img
                            src="/images/logo.png"
                            alt="EvolveWood"
                            className={cn(
                                "h-auto max-w-[132px] object-contain transition-all duration-500 sm:max-w-[160px] md:max-w-[190px] lg:max-w-none",
                                scrolled ? "max-h-7 sm:max-h-8 lg:max-h-10" : "max-h-8 sm:max-h-10 lg:max-h-12"
                            )}
                        />
                    </Link>

                    {/* Desktop Menu - Clean Line Indicator */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className="relative py-2 text-sm font-semibold tracking-wide transition-colors group"
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-evolve-green" : "text-evolve-brown/80 group-hover:text-evolve-brown"}>
                                            {item.name}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-line"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-evolve-green rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {!isActive && (
                                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-evolve-brown/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>


                    {/* Mobile Button Open */}
                    <div className="lg:hidden relative z-[70]">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="rounded-xl border border-white/50 bg-white/50 p-2 text-evolve-brown shadow-sm transition-colors hover:bg-white focus:outline-none active:scale-95"
                            aria-label="Open menu"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Minimal Mobile Menu Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] flex flex-col bg-white/95 backdrop-blur-3xl overflow-hidden pointer-events-auto"
                    >
                        {/* Mobile Menu Header - Matching main nav positioning */}
                        <div className="flex shrink-0 items-center justify-between border-b border-evolve-brown/5 p-4 sm:p-6 md:p-8">
                            <Link to="/" onClick={() => setIsOpen(false)} className="focus:outline-none">
                                <img
                                    src="/images/logo.png"
                                    alt="EvolveWood"
                                    className="h-7 max-w-[150px] object-contain sm:h-8 sm:max-w-[180px]"
                                />
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl focus:outline-none transition-colors bg-evolve-brown/5 text-evolve-brown hover:bg-evolve-brown/10 active:scale-95"
                                aria-label="Close menu"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Minimal Scrollable Nav Links */}
                        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-8 sm:px-8 sm:py-12">
                            <div className="flex flex-col space-y-8 w-full">
                                {navigation.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05), type: "spring", stiffness: 100 }}
                                    >
                                        <NavLink
                                            to={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) => cn(
                                                "flex items-center justify-between text-2xl font-medium tracking-wide transition-all border-b border-evolve-brown/5 pb-4",
                                                isActive ? "text-evolve-green" : "text-evolve-brown/70 hover:text-evolve-brown"
                                            )}
                                        >
                                            {item.name}
                                            <ArrowRight size={20} className="text-evolve-brown/20" strokeWidth={1} />
                                        </NavLink>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (navigation.length * 0.05) }}
                                    className="pt-8 mt-auto"
                                >
                                    <Link onClick={() => setIsOpen(false)} to="/contact" className="flex items-center justify-center bg-evolve-brown text-white px-8 py-4 rounded-xl font-medium text-lg w-full hover:bg-evolve-green transition-colors shadow-lg active:scale-95 text-center">
                                        Get a Quote
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
