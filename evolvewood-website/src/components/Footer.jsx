import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/content';

export default function Footer() {
    return (
        <footer className="bg-evolve-brown text-white pt-20 pb-10 mt-auto relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="inline-block">
                            <img src="/images/logo.png" alt="EvolveWood" className="h-12 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm font-medium">
                            Evolve Profile Industries is engaged in manufacturing of recycled plastic packaging materials.
                            With rich experience and a team of professionals, we cater the industry with innovative, eco-friendly products. Save The Nature.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Company</h3>
                        <ul className="space-y-4 text-white/80 text-sm font-medium">
                            {['Home', 'About Us', 'Products', 'Applications', 'Contact'].map((item) => {
                                let path = `/${item.toLowerCase().replace(' ', '-')}`;
                                if (item === 'Home') path = '/';
                                if (item === 'About Us') path = '/about';
                                return (
                                    <li key={item}>
                                        <Link to={path} className="group flex items-center hover:text-evolve-green transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Reach Us</h3>
                        <ul className="space-y-6 text-sm text-white/80 font-medium">
                            <li className="flex items-start">
                                <MapPin size={18} strokeWidth={1.5} className="flex-shrink-0 text-evolve-green mt-0.5" />
                                <span className="ml-3 leading-relaxed">
                                    {contactInfo.addressLines[0]}
                                    <br />
                                    {contactInfo.addressLines[1]}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} strokeWidth={1.5} className="flex-shrink-0 text-evolve-green" />
                                <span className="ml-3">
                                    {contactInfo.phoneNumbers.map((phone, i) => (
                                        <span key={i}>
                                            {i > 0 && <><br className="hidden md:block lg:hidden" /> <span className="hidden md:inline lg:hidden">|</span> </>}
                                            {phone}
                                        </span>
                                    ))}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} strokeWidth={1.5} className="flex-shrink-0 text-evolve-green" />
                                <span className="ml-3 truncate">{contactInfo.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-xs font-medium text-white/50">
                    <p>&copy; {new Date().getFullYear()} Evolve Profile Industries. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
