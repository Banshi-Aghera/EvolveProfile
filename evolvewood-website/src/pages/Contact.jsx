import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/content';
import { Link } from 'react-router-dom';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email)}`;

const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const reveal = { hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } } };

const contactMethods = [
    {
        icon: MapPin,
        title: 'Headquarters',
        description: contactInfo.address,
        actionLabel: 'Get Directions',
        href: mapUrl,
        openInNewTab: true,
    },
    {
        icon: Phone,
        title: 'Direct Line',
        description: contactInfo.phoneNumbers.join('\n'),
        actionLabel: 'Call Us Now',
        href: contactInfo.primaryPhoneHref,
    },
    {
        icon: Mail,
        title: 'Email Address',
        description: contactInfo.email,
        actionLabel: 'Send an Email',
        href: emailComposeUrl,
        openInNewTab: true,
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp Chat',
        description: contactInfo.whatsappNumber,
        actionLabel: 'Start Chat',
        href: contactInfo.whatsappUrl,
        openInNewTab: true,
    },
];

export default function Contact() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO
                title="Contact EvolveWood | Get in Touch Today"
                description="Get in touch with Evolve Profile Industries - makers of EvolveWood. Reach our team for queries, orders, and custom recycled plastic lumber requirements."
                url="/contact"
                keywords="contact Evolve Profile Industries, EvolveWood enquiry, contact EvolveWood"
            />

            <PageHeader title="Get in Touch" subtitle="We're here to help you build a sustainable future." />

            <section className="py-24 lg:py-32 relative">
                <div className="blob bg-evolve-green/10 w-[800px] h-[800px] top-[10%] left-[-300px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        
                        {/* Left Side - Large Typography */}
                        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="lg:col-span-5">
                            <motion.span variants={reveal} className="text-evolve-green font-bold tracking-[0.25em] uppercase text-xs block mb-6">Contact Us</motion.span>
                            <motion.h2 variants={reveal} className="text-4xl md:text-5xl lg:text-7xl font-black font-display text-evolve-brown leading-[1.1] mb-8">
                                Let's Talk <br/><span className="text-gradient">Business.</span>
                            </motion.h2>
                            <motion.p variants={reveal} className="text-xl text-evolve-text/60 leading-relaxed mb-12">
                                Whether you need custom profiles or want to learn more about our sustainable manufacturing process, our team is ready to assist.
                            </motion.p>

                            <motion.div variants={reveal} className="bg-evolve-brown/5 rounded-3xl p-8 lg:p-10 border border-evolve-brown/10">
                                <h3 className="text-xl font-bold font-display text-evolve-brown mb-4">Why choose EvolveWood?</h3>
                                <ul className="space-y-4 text-evolve-text/70">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-evolve-green mt-2 flex-shrink-0"></div>
                                        <span>100% Recycled Plastic Lumber</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-evolve-green mt-2 flex-shrink-0"></div>
                                        <span>Custom sizes and shapes available</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-evolve-green mt-2 flex-shrink-0"></div>
                                        <span>Waterproof and termite-proof</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Interactive List Format */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="lg:col-span-7 flex flex-col justify-center">
                            <div className="space-y-px bg-evolve-brown/10 rounded-3xl overflow-hidden">
                                {contactMethods.map((item, index) => (
                                    <motion.a
                                        key={item.title}
                                        href={item.href}
                                        target={item.openInNewTab ? '_blank' : undefined}
                                        rel={item.openInNewTab ? 'noreferrer' : undefined}
                                        variants={fade}
                                        className="group block bg-evolve-cream hover:bg-white p-8 lg:p-12 transition-all duration-500"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                            <div className="flex items-start sm:items-center gap-6 lg:gap-8">
                                                <div className="text-evolve-brown/30 group-hover:text-evolve-green transition-colors duration-500">
                                                    <item.icon size={36} strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-evolve-green mb-2">{item.title}</h3>
                                                    <p className="text-lg lg:text-xl font-medium text-evolve-brown whitespace-pre-line group-hover:translate-x-2 transition-transform duration-500">{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-evolve-brown/20 group-hover:border-evolve-green group-hover:bg-evolve-green group-hover:text-white text-evolve-brown transition-all duration-500">
                                                <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
