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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
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

    return (
        <>
            <div className="fixed top-0 inset-x-0 z-[60] flex justify-center pt-4 px-4 pointer-events-none">
                <nav className={cn(
                    "pointer-events-auto transition-all duration-500 rounded-full border flex items-center justify-between w-full",
                    scrolled
                        ? "bg-white/90 backdrop-blur-2xl border-white/50 py-3 px-6 max-w-5xl shadow-xl"
                        : "bg-white/60 backdrop-blur-xl border-white/30 py-4 px-6 md:px-8 max-w-7xl shadow-lg"
                )}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center z-50 focus:outline-none">
                        <img
                            src="/images/logo.png"
                            alt="EvolveWood"
                            className={cn(
                                "w-auto object-contain transition-all duration-500",
                                scrolled ? "h-7 md:h-8 lg:h-10" : "h-8 md:h-10 lg:h-12"
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
                            className="p-2 rounded-xl focus:outline-none transition-colors bg-white/50 text-evolve-brown border border-white/50 shadow-sm hover:bg-white active:scale-95"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
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
                        <div className="flex items-center justify-between p-6 md:p-8 shrink-0 border-b border-evolve-brown/5">
                            <Link to="/" onClick={() => setIsOpen(false)} className="focus:outline-none">
                                <img
                                    src="/images/logo.png"
                                    alt="EvolveWood"
                                    className="h-8 object-contain"
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
                        <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col">
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
