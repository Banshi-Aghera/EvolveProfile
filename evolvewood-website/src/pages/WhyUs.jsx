import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUs() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="Why Choose Us" />
            <PageHeader title="Why EvolveWood?" subtitle="The smart, sustainable choice for modern industry." />

            <section className="py-12 lg:py-24 relative">
                {/* Decorative Blobs */}
                <div className="blob bg-evolve-green/10 w-[600px] h-[600px] top-[10%] left-[-200px]"></div>
                <div className="blob bg-evolve-brown/10 w-[500px] h-[500px] bottom-[20%] right-[-100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/80 glass rounded-[3rem] shadow-2xl shadow-evolve-brown/10 overflow-hidden mb-24 border border-white/50"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 lg:p-16 bg-evolve-brown/95 text-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                                <h2 className="text-4xl font-black font-display mb-10 tracking-tight">Traditional <span className="text-red-300">Wood</span></h2>
                                <ul className="space-y-8">
                                    <li className="flex items-start opacity-80 group hover:opacity-100 transition-opacity">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0 mt-1" size={28} />
                                        <span className="text-lg">Susceptible to termite attacks and decay</span>
                                    </li>
                                    <li className="flex items-start opacity-80 group hover:opacity-100 transition-opacity">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0 mt-1" size={28} />
                                        <span className="text-lg">Requires regular maintenance and painting</span>
                                    </li>
                                    <li className="flex items-start opacity-80 group hover:opacity-100 transition-opacity">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0 mt-1" size={28} />
                                        <span className="text-lg">Contributes to deforestation</span>
                                    </li>
                                    <li className="flex items-start opacity-80 group hover:opacity-100 transition-opacity">
                                        <XCircle className="text-red-400 mr-4 flex-shrink-0 mt-1" size={28} />
                                        <span className="text-lg">Absorbs moisture and rot</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-12 lg:p-16 bg-white/60 backdrop-blur-md text-evolve-brown relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-evolve-green/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
                                <h2 className="text-4xl font-black font-display mb-10 tracking-tight">Evolve<span className="text-gradient">Wood</span></h2>
                                <ul className="space-y-8">
                                    <li className="flex items-start group">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform" size={28} />
                                        <span className="font-bold text-lg">100% Termite Proof & Rot Resistant</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform" size={28} />
                                        <span className="font-bold text-lg">Maintenance Free - No painting required</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform" size={28} />
                                        <span className="font-bold text-lg">Eco-Friendly - Saves Trees</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform" size={28} />
                                        <span className="font-bold text-lg">Waterproof & Weather Resistant</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto glass bg-white/50 p-12 lg:p-16 rounded-[3rem] border border-white/50 shadow-xl shadow-evolve-brown/5"
                    >
                        <h3 className="text-4xl font-black font-display text-evolve-brown mb-8 tracking-tight">Our <span className="text-gradient">Commitment</span></h3>
                        <p className="text-evolve-text/80 text-xl leading-relaxed font-medium">
                            India is generating about 3.5 million tonnes of plastic waste annually.
                            EvolveWood products help reduce this burden by recycling plastic into durable, high-utility profiles.
                            Around 60% of the generated plastic waste is reportedly recycled and remaining quantities were disposed in landfills.
                            <br/><br/>
                            <span className="text-2xl font-black text-evolve-green font-display">We are changing that.</span>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
