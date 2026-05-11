import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Target, Eye, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="About Us" description="Learn about Evolve Profile Industries and our mission to save nature through recycling." />
            
            <PageHeader title="About Us" subtitle="Dedicated to innovation and sustainability from start to finish." />

            <section className="py-12 lg:py-24 relative">
                {/* Decorative Blobs */}
                <div className="blob bg-evolve-green/10 w-[700px] h-[700px] top-[10%] right-[-250px]"></div>
                <div className="blob bg-evolve-brown/10 w-[600px] h-[600px] bottom-[20%] left-[-200px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        
                        {/* Who We Are Content */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/60 glass p-10 lg:p-14 rounded-[3rem] shadow-xl shadow-evolve-brown/5 border border-white/50"
                        >
                            <h2 className="text-4xl lg:text-5xl font-black text-evolve-brown font-display mb-8 tracking-tight">Who <span className="text-gradient">We Are</span></h2>
                            <div className="prose prose-lg text-evolve-text/80">
                                <p className="text-lg leading-relaxed mb-6 font-medium">
                                    Evolve profile industries is engaged in manufacturing of a plastic packaging materials.
                                    With a reach experience and a team of professionals, we are able to cater the industry with an innovative products.
                                </p>
                                
                                <div className="mt-10 mb-8 flex items-center space-x-4">
                                    <Leaf className="text-evolve-green" size={28} />
                                    <h3 className="text-2xl font-bold font-display text-evolve-brown m-0">Dedication to Innovation</h3>
                                </div>
                                <ul className="space-y-4 text-evolve-text/70">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-evolve-green mt-2.5 mr-3 flex-shrink-0"></div>
                                        <span>We've revolutionized the industry with safer, stronger, and more environmentally-friendly products.</span>
                                    </li>
                                </ul>

                                <div className="mt-10 mb-8 flex items-center space-x-4">
                                    <Target className="text-evolve-brown" size={28} />
                                    <h3 className="text-2xl font-bold font-display text-evolve-brown m-0">Sustainability First</h3>
                                </div>
                                <ul className="space-y-4 text-evolve-text/70 mb-0">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-evolve-green mt-2.5 mr-3 flex-shrink-0"></div>
                                        <span>Our holistic approach to green products promotes positive effects on the environment throughout the entire life cycle.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-evolve-green mt-2.5 mr-3 flex-shrink-0"></div>
                                        <span>From the manufacturing process to the finished material, we go the extra mile to make sure every step is sustainable.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-evolve-green mt-2.5 mr-3 flex-shrink-0"></div>
                                        <span>Protecting the environment is in our DNA and will forever remain one of our key objectives.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Mission & Vision */}
                        <div className="grid gap-8 lg:mt-12">
                            <motion.div 
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="group bg-white p-10 rounded-[3rem] shadow-2xl shadow-evolve-brown/10 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-evolve-green/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10 flex items-center space-x-6 mb-6">
                                    <div className="bg-evolve-green/10 p-4 rounded-2xl group-hover:bg-evolve-green transition-colors duration-300">
                                        <Target className="text-evolve-green group-hover:text-white transition-colors duration-300" size={36} />
                                    </div>
                                    <h3 className="text-3xl font-black font-display text-evolve-brown">Our Mission</h3>
                                </div>
                                <p className="text-evolve-text/70 text-lg leading-relaxed relative z-10">To replace wood and plastic with sustainable recycled solutions, minimizing environmental impact while maximizing durability.</p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="group bg-white p-10 rounded-[3rem] shadow-2xl shadow-evolve-brown/10 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-evolve-brown/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10 flex items-center space-x-6 mb-6">
                                    <div className="bg-evolve-brown/10 p-4 rounded-2xl group-hover:bg-evolve-brown transition-colors duration-300">
                                        <Eye className="text-evolve-brown group-hover:text-white transition-colors duration-300" size={36} />
                                    </div>
                                    <h3 className="text-3xl font-black font-display text-evolve-brown">Our Vision</h3>
                                </div>
                                <p className="text-evolve-text/70 text-lg leading-relaxed relative z-10">To become the global leader in recycled industrial profiles and pave the way for a greener, cleaner future.</p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
