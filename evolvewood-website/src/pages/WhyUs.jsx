import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { CheckCircle2, XCircle, TreePine, Trash2, Recycle, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const envStats = [
    { icon: Trash2, value: "3.5M", unit: "Tonnes", label: "Plastic waste India generates annually", color: "text-red-500", bg: "bg-red-50" },
    { icon: TrendingDown, value: "60%", unit: "Only", label: "Of generated plastic waste is reportedly recycled", color: "text-amber-500", bg: "bg-amber-50" },
    { icon: TreePine, value: "15B", unit: "Trees/Year", label: "Humans cut down ~15 billion trees a year and replant only 5 billion", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: Recycle, value: "300", unit: "Years", label: "At current rate, we would lose all trees within the next 300 years", color: "text-evolve-green", bg: "bg-evolve-green/10" },
];

export default function WhyUs() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO
                title="Why Choose EvolveWood Plastic Lumber"
                description="Why choose EvolveWood over traditional wood? India generates 3.5 million tonnes of plastic waste annually. EvolveWood converts recycled plastic into durable, eco-friendly lumber. Save The Nature."
                url="/why-us"
                keywords="why EvolveWood, recycled plastic vs wood, eco friendly lumber India, Evolve Profile Industries, save the nature, plastic waste recycling"
            />
            <PageHeader title="Why EvolveWood?" subtitle="The smart, sustainable choice for modern industry." />

            <section className="py-12 lg:py-24 relative">
                <div className="blob bg-evolve-green/10 w-[600px] h-[600px] top-[10%] left-[-200px]"></div>
                <div className="blob bg-evolve-brown/10 w-[500px] h-[500px] bottom-[20%] right-[-100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Environmental Crisis Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-black font-display text-evolve-brown text-center mb-4">The Environmental <span className="text-gradient">Crisis</span></h2>
                        <p className="text-evolve-text/60 text-center mb-12 max-w-2xl mx-auto">India's plastic waste problem is growing. Here's why EvolveWood matters.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-evolve-brown/10 rounded-3xl overflow-hidden">
                            {envStats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-evolve-cream hover:bg-white p-8 text-center transition-colors duration-500 group"
                                >
                                    <div className={`${stat.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                        <stat.icon className={stat.color} size={28} />
                                    </div>
                                    <div className={`text-4xl font-black font-display ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>{stat.value}</div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-evolve-text/40 mb-4">{stat.unit}</div>
                                    <p className="text-sm text-evolve-text/60 leading-relaxed font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why EvolveWood - Initiative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-evolve-brown to-evolve-green rounded-[3rem] p-10 lg:p-16 mb-20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-8">Why EvolveWood?</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-5 text-white/80 text-lg leading-relaxed">
                                    <p>As an initiative to reduce carbon footprint and plastic landfill, <strong className="text-white">Evolve Group</strong> started making EvolveWood Composite.</p>
                                    <p>EvolveWood products are environmental friendly and are the best substitute to wooden and plastic products. Dunnage/Pallet which is used for transporting, storing material in various climatic conditions.</p>
                                </div>
                                <div className="space-y-5 text-white/80 text-lg leading-relaxed">
                                    <p>EvolveWood is more environmental friendly and requires less maintenance than the alternatives of solid wood treated with preservatives or solid wood of rot-resistant species.</p>
                                    <p>The commonly used petroleum-based polymers have a negative environmental impact because they rely on non-renewable raw materials and the non-biodegradability of plastics.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Comparison Table */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/80 glass rounded-[3rem] shadow-2xl shadow-evolve-brown/10 overflow-hidden mb-20 border border-white/50"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 lg:p-16 bg-evolve-brown/95 text-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                                <h2 className="text-4xl font-black font-display mb-10 tracking-tight">Traditional <span className="text-red-300">Wood</span></h2>
                                <ul className="space-y-8">
                                    {[
                                        "Susceptible to termite attacks and decay",
                                        "Requires regular maintenance and painting",
                                        "Contributes to deforestation",
                                        "Absorbs moisture, rots, and warps",
                                        "Not fire retardant or chemical resistant"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start opacity-80 hover:opacity-100 transition-opacity">
                                            <XCircle className="text-red-400 mr-4 flex-shrink-0 mt-1" size={28} />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-12 lg:p-16 bg-white/60 backdrop-blur-md text-evolve-brown relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-evolve-green/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
                                <h2 className="text-4xl font-black font-display mb-10 tracking-tight">Evolve<span className="text-gradient">Wood</span></h2>
                                <ul className="space-y-8">
                                    {[
                                        "100% Termite Proof & Rot Resistant",
                                        "Maintenance Free — No painting required",
                                        "Eco-Friendly — Made from recycled plastic, saves trees",
                                        "Waterproof & Weather Resistant",
                                        "Fire Retardant & Chemical Resistant"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start group">
                                            <CheckCircle2 className="text-evolve-green mr-4 flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform" size={28} />
                                            <span className="font-bold text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Commitment CTA */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto glass bg-white/50 p-12 lg:p-16 rounded-[3rem] border border-white/50 shadow-xl shadow-evolve-brown/5"
                    >
                        <h3 className="text-4xl font-black font-display text-evolve-brown mb-8 tracking-tight">Our <span className="text-gradient">Commitment</span></h3>
                        <p className="text-evolve-text/70 text-xl leading-relaxed font-medium mb-4">
                            Today, annual tree harvest vs. production on a world-wide scale shows that humans cut down approximately <strong className="text-red-500">15 billion trees a year</strong> and re-plant about 5 billion. That's a net loss of <strong className="text-red-500">10 billion trees every year</strong>.
                        </p>
                        <p className="text-evolve-text/60 text-lg leading-relaxed mb-8">
                            At that rate, we would mean the loss of all trees within the next 300 years. EvolveWood is our answer to this crisis.
                        </p>
                        <span className="inline-block text-3xl font-black text-evolve-green font-display">We are changing that. Save The Nature.</span>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
