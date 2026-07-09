import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Target, Eye, Leaf, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function About() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO
                title="About Us | Evolve Profile Industries - EvolveWood Recycled Plastic Lumber"
                description="Evolve Profile Industries manufactures EvolveWood — innovative recycled plastic lumber made from waste plastic and wood. Eco-friendly, high load bearing, sustainable packaging solutions. Save The Nature."
                url="/about"
                keywords="about Evolve Profile Industries, EvolveWood company, recycled plastic lumber India, eco friendly packaging, Evolveprofile Industries, save the nature"
            />
            
            <PageHeader title="About Us" subtitle="Dedicated to innovation and sustainability from start to finish." />

            <section className="py-16 lg:py-28 relative">
                <div className="blob bg-evolve-green/10 w-[700px] h-[700px] top-[10%] right-[-250px]"></div>
                <div className="blob bg-evolve-brown/10 w-[600px] h-[600px] bottom-[20%] left-[-200px]"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Who We Are - Text focused */}
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-24"
                    >
                        <motion.span variants={fadeUp} className="text-evolve-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Who We Are</motion.span>
                        <motion.h2 variants={fadeUp} className="text-4xl lg:text-6xl font-black text-evolve-brown font-display mb-10 tracking-tight leading-tight">
                            Evolve Profile <span className="text-gradient">Industries</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-xl lg:text-2xl leading-relaxed text-evolve-text/70 mb-8">
                            Evolve Profile Industries is engaged in manufacturing of recycled plastic packaging materials. With rich experience and a team of professionals, we are able to cater the industry with innovative products.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-xl lg:text-2xl leading-relaxed text-evolve-text/70">
                            Our flagship brand <strong className="text-evolve-brown">EvolveWood</strong> transforms plastic waste into durable, waterproof, termite-proof lumber — supporting India's Swachh Bharat and Clean Green India missions while delivering superior performance.
                        </motion.p>
                    </motion.div>

                    {/* Divider */}
                    <div className="section-line mb-24"></div>

                    {/* What is EvolveWood - Text focused */}
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-24"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                            <div className="bg-evolve-green/10 p-3 rounded-2xl">
                                <Leaf className="text-evolve-green" size={28} />
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-black text-evolve-brown font-display">What is <span className="text-gradient-green">EvolveWood?</span></h2>
                        </motion.div>
                        
                        <div className="space-y-6 text-lg lg:text-xl text-evolve-text/70 leading-relaxed">
                            <motion.p variants={fadeUp}>
                                <strong className="text-evolve-brown">"EvolveWood"</strong> is an innovative product by Evolve Profile Industries — made out of <strong className="text-evolve-green">recycled plastic and waste wood</strong>. An ECO FRIENDLY PRODUCT.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                EvolveWood can be produced in <strong className="text-evolve-brown">various sizes as per customer requirement</strong>. It comes in <strong className="text-evolve-green">square, rectangle, and round shapes</strong>.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                EvolveWood gives <strong className="text-evolve-green">high load bearing capacity</strong>. It is user friendly and can be fabricated in various products as it is easy to use and convert.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                Plastic lumber can be cut to size or shape, nailed, drilled, screwed. It is available in a variety of dimensions similar to regular woods such as 2x4, 2x6, 2x8, 2x10, 4x4, and 6x6. Comes in Standard Grade, Luxury Black or Natural Colour and a Premium surface in a variety of finishes.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="section-line mb-24"></div>

                    {/* Sustainability - Text focused */}
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-24"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                            <div className="bg-evolve-brown/10 p-3 rounded-2xl">
                                <Target className="text-evolve-brown" size={28} />
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-black text-evolve-brown font-display">Sustainability from <span className="text-gradient">Start to Finish</span></h2>
                        </motion.div>
                        
                        <div className="space-y-6 text-lg lg:text-xl text-evolve-text/70 leading-relaxed">
                            <motion.p variants={fadeUp}>
                                Our holistic approach to green products promotes positive effects on the environment throughout the entire life cycle of any project.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                From the manufacturing process to the finished material, we go the extra mile to make sure every step is sustainable. Over the years, will keep <strong className="text-evolve-green">millions of tons of plastic out of landfills</strong>.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                Protecting the environment is in our DNA and will forever remain one of our key objectives.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="section-line mb-24"></div>

                    {/* Mission & Vision - Text focused, side by side */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
                    >
                        <motion.div variants={fadeUp}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-evolve-green/10 p-3 rounded-2xl">
                                    <Target className="text-evolve-green" size={28} />
                                </div>
                                <h3 className="text-3xl font-black font-display text-evolve-brown">Our Mission</h3>
                            </div>
                            <p className="text-lg lg:text-xl text-evolve-text/70 leading-relaxed">
                                To replace traditional wood with sustainable recycled plastic profiles, minimizing environmental impact and deforestation while maximizing durability, strength, and value for industry.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-evolve-brown/10 p-3 rounded-2xl">
                                    <Eye className="text-evolve-brown" size={28} />
                                </div>
                                <h3 className="text-3xl font-black font-display text-evolve-brown">Our Vision</h3>
                            </div>
                            <p className="text-lg lg:text-xl text-evolve-text/70 leading-relaxed">
                                To become the global leader in recycled plastic lumber and profiles — transforming India's 3.5 million tonnes of annual plastic waste into high-value, eco-friendly products for a greener, cleaner future.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Why Evolve Group - Text focused with gradient background */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-evolve-brown to-evolve-green p-12 lg:p-16"
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <Recycle className="text-white/80" size={32} />
                                <h3 className="text-3xl lg:text-4xl font-black font-display text-white">Why Evolve Group?</h3>
                            </div>
                            <div className="space-y-6 text-lg lg:text-xl text-white/80 leading-relaxed">
                                <p><strong className="text-white">Dedication to innovation</strong> — we've revolutionized the industry with safer, stronger, and more environmentally-friendly products.</p>
                                <p>As an initiative to reduce carbon footprint and plastic landfill, <strong className="text-white">Evolve Group</strong> started making EvolveWood Composite — the best substitute to wooden and plastic products.</p>
                                <p>EvolveWood is more environmental friendly and requires less maintenance than the alternatives of solid wood treated with preservatives or solid wood of rot-resistant species.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
