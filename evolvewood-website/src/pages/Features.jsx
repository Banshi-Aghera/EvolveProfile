import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { features } from '../data/content';
import { motion } from 'framer-motion';

export default function Features() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="Features" description="Discover the superior features of Evolve Wood: Waterproof, Termite Proof, Fire Resistant, and more." />
            
            <PageHeader title="Why EvolveWood Represents Quality" subtitle="Engineered for performance, sustainability, and durability." />

            <section className="py-12 lg:py-24 relative">
                {/* Decorative Blobs */}
                <div className="blob bg-evolve-green/10 w-[600px] h-[600px] top-[20%] right-[-200px]"></div>
                <div className="blob bg-evolve-brown/10 w-[500px] h-[500px] bottom-[-100px] left-[-100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                                }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="glass bg-white/70 p-8 rounded-[2rem] shadow-xl shadow-evolve-brown/5 border border-white/50 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-evolve-green/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="bg-evolve-green/10 w-16 h-16 rounded-2xl flex items-center justify-center text-evolve-green mb-6 group-hover:bg-evolve-green group-hover:text-white transition-all duration-300 relative z-10 transform group-hover:rotate-6">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold font-display text-evolve-brown mb-3 relative z-10">{feature.name}</h3>
                                <p className="text-sm text-evolve-text/70 leading-relaxed font-medium relative z-10">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
