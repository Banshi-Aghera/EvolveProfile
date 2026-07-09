import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { features } from '../data/content';

export default function Features() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="EvolveWood Features | Premium Quality Attributes"
                description="Explore the 11 core attributes of EvolveWood, from fire retardant and chemical resistant to 100% waterproof and termite proof."
                url="/features"
            />
            
            <PageHeader title="Uncompromising Quality" subtitle="The architectural grade properties of EvolveWood." />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black font-display text-evolve-brown mb-6"
                    >
                        Engineered for <span className="text-gradient">Excellence.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-evolve-text/60 font-medium"
                    >
                        Discover the 11 core reasons why EvolveWood is the superior choice for industrial, civil, and architectural applications.
                    </motion.p>
                </div>

                {/* Circular Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Circular Image Container */}
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-evolve-cream mb-6 flex items-center justify-center p-4 overflow-hidden relative shadow-lg shadow-evolve-brown/5 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-evolve-brown/5">
                                <div className="absolute inset-0 bg-evolve-green/0 group-hover:bg-evolve-green/10 transition-colors duration-500 z-10 rounded-full"></div>
                                <img 
                                    src={feature.image} 
                                    alt={feature.name} 
                                    className="w-full h-full object-cover rounded-full filter brightness-95 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" 
                                />
                            </div>
                            
                            {/* Typography */}
                            <h3 className="text-2xl font-black font-display text-evolve-brown mb-3 group-hover:text-evolve-green transition-colors">
                                {feature.name}
                            </h3>
                            
                            <p className="text-sm text-evolve-text/60 leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
