import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/content';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email)}`;

const contactMethods = [
    {
        icon: MapPin,
        title: 'Visit Us',
        description: contactInfo.address,
        actionLabel: 'Open in Maps',
        href: mapUrl,
        openInNewTab: true,
    },
    {
        icon: Phone,
        title: 'Call Us',
        description: contactInfo.phoneNumbers.join('\n'),
        actionLabel: 'Call Now',
        href: contactInfo.primaryPhoneHref,
    },
    {
        icon: Mail,
        title: 'Email Us',
        description: contactInfo.email,
        actionLabel: 'Open Email',
        href: emailComposeUrl,
        openInNewTab: true,
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        description: contactInfo.whatsappNumber,
        actionLabel: 'Chat on WhatsApp',
        href: contactInfo.whatsappUrl,
        openInNewTab: true,
    },
];

export default function Contact() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="Contact Us" description="Get in touch with Evolve Profile Industries for your industrial packaging and profile needs." />

            <PageHeader title="Contact Us" subtitle="Reach us directly through map, phone, email, or WhatsApp." />

            <section className="py-12 lg:py-24 relative">
                <div className="blob bg-evolve-green/10 w-[600px] h-[600px] top-[20%] left-[-200px]"></div>
                <div className="blob bg-evolve-brown/10 w-[500px] h-[500px] bottom-[-100px] right-[-100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-14"
                    >
                        <h2 className="text-4xl lg:text-5xl font-black font-display text-evolve-brown mb-4 tracking-tight">
                            Company <span className="text-gradient">Information</span>
                        </h2>
                        <p className="text-evolve-text/60 text-lg">
                            Click any card below to open directions, call us, send an email, or start a WhatsApp chat instantly.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {contactMethods.map((item, index) => (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                target={item.openInNewTab ? '_blank' : undefined}
                                rel={item.openInNewTab ? 'noreferrer' : undefined}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="group block p-8 glass bg-white/70 rounded-[2rem] hover:bg-white transition-all duration-300 shadow-xl shadow-evolve-brown/5"
                            >
                                <div className="flex items-start justify-between gap-4 mb-8">
                                    <div className="bg-evolve-green/10 p-4 rounded-2xl group-hover:bg-evolve-green transition-colors">
                                        <item.icon className="text-evolve-green group-hover:text-white transition-colors" size={28} />
                                    </div>
                                    <ArrowUpRight className="text-evolve-brown/30 group-hover:text-evolve-green transition-colors" size={24} />
                                </div>

                                <h3 className="text-2xl font-black font-display text-evolve-brown mb-3">{item.title}</h3>
                                <p className="text-evolve-text/70 leading-relaxed whitespace-pre-line mb-8 min-h-24">{item.description}</p>

                                <div className="inline-flex items-center rounded-full bg-evolve-brown text-white px-5 py-3 font-bold group-hover:bg-evolve-green transition-colors">
                                    {item.actionLabel}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
