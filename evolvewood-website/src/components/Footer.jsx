import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-evolve-brown text-white pt-20 pb-10 mt-auto relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="inline-block">
                            <img src="/images/logo.png" alt="EvolveWood" className="h-12 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm font-medium">
                            Evolve Profile Industries is engaged in the manufacturing of sustainable plastic packaging materials.
                            Dedicated to innovation and environmental responsibility from start to finish.
                        </p>

                        
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Company</h3>
                        <ul className="space-y-4 text-white/80 text-sm font-medium">
                            {['Home', 'About Us', 'Products', 'Applications', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="group flex items-center hover:text-evolve-green transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Reach Us</h3>
                        <ul className="space-y-6 text-sm text-white/80 font-medium">
                            <li className="flex items-start">
                                <MapPin size={18} strokeWidth={1.5} className="flex-shrink-0 text-evolve-green mt-0.5" />
                                <span className="ml-3 leading-relaxed">Rajkot Hwy, At- Sakat Sanala 363641<br />Ta- Morbi, Dist-Morbi</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} strokeWidth={1.5} className="flex-shrink-0 text-evolve-green" />
                                <span className="ml-3">+91 81415 14311 <br className="hidden md:block lg:hidden" /> <span className="hidden md:inline lg:hidden">|</span> +91 97378 35434</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} strokeWidth={1.5} className="flex-shrink-0 text-evolve-green" />
                                <span className="ml-3 truncate">evolveprofileindustries@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Initiatives */}
                    {/* <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Newsletter</h3>
                        <div className="flex flex-col space-y-4">
                            <p className="text-sm text-white/70 font-medium">Get updates on new materials and sustainable solutions.</p>
                            <div className="relative flex items-center">
                                <input 
                                    type="email" 
                                    placeholder="Email address" 
                                    className="bg-transparent border-b border-white/20 focus:border-evolve-green text-sm text-white px-0 py-3 w-full outline-none transition-colors placeholder:text-white/30 font-medium"
                                />
                                <button className="absolute right-0 text-evolve-green hover:text-white transition-colors focus:outline-none">
                                    <ArrowRight size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </div> */}

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-white/50">
                    <p>© {new Date().getFullYear()} Evolve Profile Industries. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
