import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { industries } from '../data/content';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Industries() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="Industries We Serve" description="Evolve Wood serves various sectors including Industrial, Storage, Civil, and Furniture." />
            
            <PageHeader title="Industries We Serve" subtitle="Versatile solutions for a wide range of industrial and commercial applications." />

            <section className="py-12 lg:py-24 relative">
                {/* Decorative Blobs */}
                <div className="blob bg-evolve-green/10 w-[600px] h-[600px] top-[10%] left-[-200px]"></div>
                <div className="blob bg-evolve-brown/10 w-[500px] h-[500px] bottom-[20%] right-[-100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        {industries.map((ind, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95, y: 30 },
                                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
                                }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group glass bg-white/70 p-10 lg:p-14 rounded-[3rem] shadow-xl shadow-evolve-brown/5 border border-white/50 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-48 h-48 bg-evolve-green/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-3xl font-black font-display text-evolve-brown mb-8 pb-6 border-b border-evolve-brown/10 group-hover:text-evolve-green transition-colors duration-300 relative z-10">
                                    {ind.title}
                                </h3>
                                <ul className="space-y-5 relative z-10">
                                    {ind.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-evolve-text/80 text-lg font-medium group/item hover:text-evolve-brown transition-colors">
                                            <div className="bg-evolve-green/10 p-2 rounded-xl mr-4 group-hover/item:bg-evolve-green transition-colors duration-300">
                                                <CheckCircle2 size={24} className="text-evolve-green group-hover/item:text-white transition-colors duration-300" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
