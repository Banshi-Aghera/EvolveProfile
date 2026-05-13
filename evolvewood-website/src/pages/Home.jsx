import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowRight, Leaf, Recycle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, features, blogs } from '../data/content';
import ProductCard from '../components/ProductCard';

export default function Home() {
    // Animation Variants
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const textRevealVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="relative overflow-x-hidden bg-evolve-cream">
            <SEO title="Home" description="EvolveWood - Premium Eco-Industrial Recycled Material Manufacturer" />

            {/* Background Blobs */}
            <div className="blob bg-evolve-green/20 w-[500px] h-[500px] top-[-100px] left-[-150px]"></div>
            <div className="blob bg-evolve-brown/20 w-[600px] h-[600px] top-[20%] right-[-200px]" style={{ animationDelay: '2s' }}></div>

            {/* Hero Section */}
            <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-8">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="relative z-20"
                        >
                            <motion.div 
                                variants={fadeUpVariants}
                                className="glass mb-8 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full px-4 py-2.5 sm:flex-nowrap sm:gap-3 sm:px-5"
                            >
                                <span className="bg-evolve-green p-1.5 rounded-full text-white">
                                    <Leaf size={14} /> 
                                </span>
                                <span className="text-evolve-brown text-xs font-semibold tracking-wide sm:text-sm">Eco-Friendly Industrial Solutions</span>
                            </motion.div>
                            
                            <motion.h1 variants={fadeUpVariants} className="mb-8 font-display text-[clamp(3rem,14vw,5.5rem)] font-black leading-[1.05] tracking-tight text-evolve-text">
                                Perfect way <br /> 
                                <span className="text-gradient">to pack.</span>
                            </motion.h1>
                            
                            <motion.p variants={fadeUpVariants} className="mb-10 max-w-xl text-lg leading-relaxed font-light text-evolve-text/70 sm:text-xl md:text-2xl">
                                Evolve Profile Industries is delivering sustainable, high-performance recycled plastic lumber for industrial, civil, and furniture applications.
                            </motion.p>
                            
                            <motion.div variants={fadeUpVariants} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
                                <Link to="/products" className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-evolve-brown px-6 py-4 font-bold text-white shadow-[0_10px_40px_-10px_rgba(93,64,55,0.6)] transition-transform hover:scale-105 sm:w-auto sm:px-8">
                                    <span className="relative z-10 flex items-center">
                                        Explore Products <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-evolve-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                </Link>
                                <Link to="/contact" className="group glass flex w-full items-center justify-center rounded-full px-6 py-4 font-bold text-evolve-brown transition-all hover:bg-white/60 sm:w-auto sm:px-8">
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                            className="relative flex items-center justify-center overflow-hidden lg:h-[700px] lg:justify-end"
                        >
                            <div className="relative mt-10 aspect-[4/5] w-full max-w-[min(100%,28rem)] lg:mt-0 lg:max-w-lg">
                                <motion.div 
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-tr from-evolve-brown/80 to-evolve-green/80 rounded-[2.5rem] rotate-3 shadow-2xl glass-dark"
                                ></motion.div>
                                <div className="absolute inset-0 bg-evolve-brown/10 backdrop-blur-sm rounded-[2.5rem] -rotate-3 transition-transform hover:rotate-0 duration-500 shadow-xl overflow-hidden flex items-center justify-center">
                                     <Recycle size={120} className="text-white/40" />
                                </div>
                                
                                {/* Floating Badge */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute right-0 top-4 max-w-[180px] rounded-3xl glass p-3 shadow-2xl sm:right-4 sm:top-6 sm:max-w-[240px] sm:p-5 lg:-right-8 lg:top-1/4 lg:max-w-none lg:p-6"
                                >
                                    <div className="mb-3 inline-block rounded-2xl bg-evolve-green/20 p-3 text-evolve-green sm:p-4">
                                        <ShieldCheck size={28} className="sm:size-8" />
                                    </div>
                                    <div className="font-display text-lg font-bold text-evolve-brown sm:text-xl">100% Termite Proof</div>
                                    <div className="text-xs text-evolve-text/60 sm:text-sm">Guaranteed Protection</div>
                                </motion.div>
                                
                                {/* Recyle Icon Badge */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 }}
                                    className="absolute bottom-4 left-2 flex items-center justify-center rounded-full border bg-white p-3 text-evolve-green shadow-2xl sm:bottom-6 sm:left-4 sm:p-5 lg:-left-6 lg:bottom-16"
                                >
                                    <Recycle size={28} className="sm:size-8" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section className="relative py-32 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5">
                            <motion.div 
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.span variants={textRevealVariants} className="text-evolve-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">About Us</motion.span>
                                <motion.h2 variants={textRevealVariants} className="text-5xl lg:text-7xl font-black font-display text-evolve-brown mb-8 leading-tight">
                                    About <br /> <span className="text-gradient">EvolveWood</span>
                                </motion.h2>
                                <motion.div variants={textRevealVariants}>
                                    <Link to="/about" className="group inline-flex items-center text-evolve-brown text-lg font-bold">
                                        <span className="border-b border-evolve-brown/20 pb-1 group-hover:border-evolve-brown transition-colors">Read Our Story</span>
                                        <span className="ml-3 bg-evolve-brown/5 p-2 rounded-full group-hover:bg-evolve-green group-hover:text-white transition-colors">
                                            <ArrowUpRight size={20} />
                                        </span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                        
                        <div className="lg:col-span-7">
                            <motion.div 
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="space-y-8 text-evolve-text/80 text-xl font-light leading-relaxed mb-16"
                            >
                                <motion.p variants={fadeUpVariants}>
                                    Evolve Profile Industries is engaged in the manufacturing of plastic packaging materials.
                                    With a rich experience and a team of professionals, we are able to cater the industry with an innovative products.
                                </motion.p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
                                    <motion.div variants={fadeUpVariants} className="glass bg-white/50 p-6 rounded-3xl border border-evolve-brown/10">
                                        <h4 className="text-evolve-brown font-bold font-display text-xl mb-3 flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-evolve-green mr-3"></div>
                                            Dedication to Innovation
                                        </h4>
                                        <p className="text-evolve-text/70">We've revolutionized the industry with safer, stronger, and more environmentally-friendly products.</p>
                                    </motion.div>
                                    <motion.div variants={fadeUpVariants} className="glass bg-white/50 p-6 rounded-3xl border border-evolve-brown/10">
                                        <h4 className="text-evolve-brown font-bold font-display text-xl mb-3 flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-evolve-green mr-3"></div>
                                            Sustainable Life Cycle
                                        </h4>
                                        <p className="text-evolve-text/70">Our holistic approach to green products promotes positive effects on the environment throughout.</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                            {/* Stats */}
                            <motion.div 
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                {[
                                    { value: '10M+', label: 'Tons Recycled' },
                                    { value: '50+', label: 'Industries' },
                                    { value: '100%', label: 'Eco Friendly' },
                                    { value: '24/7', label: 'Support' }
                                ].map((stat, i) => (
                                    <motion.div 
                                        key={i}
                                        variants={fadeUpVariants}
                                        className="text-center p-6 border border-evolve-brown/10 bg-white/30 rounded-3xl relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-white/50 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                                        <h4 className="text-3xl lg:text-4xl font-black font-display text-evolve-green mb-2 relative z-10">{stat.value}</h4>
                                        <p className="text-xs font-bold text-evolve-brown/60 uppercase tracking-wider relative z-10">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 relative">
                <div className="blob bg-evolve-green/10 w-[700px] h-[700px] top-[10%] left-[-20%]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div 
                            variants={staggerContainer} 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.span variants={textRevealVariants} className="bg-evolve-brown/5 text-evolve-brown px-4 py-2 rounded-full font-bold tracking-widest uppercase text-xs mb-6 inline-block">Why EvolveWood</motion.span>
                            <motion.h2 variants={textRevealVariants} className="text-4xl lg:text-6xl font-black font-display text-evolve-brown/90 mt-4 leading-tight">
                                Turning 3.5M Tonnes of <br className="hidden lg:block"/> <span className="text-gradient">Waste into Value</span>
                            </motion.h2>
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={staggerContainer} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.slice(0, 4).map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                variants={fadeUpVariants}
                                className="glass bg-white/60 p-8 rounded-[2.5rem] hover:bg-white/90 transition-colors duration-500 group"
                            >
                                <div className="bg-gradient-to-br from-evolve-green/20 to-evolve-green/5 w-16 h-16 rounded-2xl flex items-center justify-center text-evolve-green mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold font-display text-evolve-brown mb-4">{feature.name}</h3>
                                <p className="text-evolve-text/60 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Product Range */}
            <section className="py-32 relative text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-evolve-brown/20 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        variants={staggerContainer} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.5 }}
                        className="mb-16 flex flex-col items-center justify-center"
                    >
                        <motion.span variants={textRevealVariants} className="text-evolve-green font-bold tracking-[0.2em] uppercase text-sm block mb-4">Our Excellence</motion.span>
                        <motion.h2 variants={textRevealVariants} className="text-4xl md:text-6xl font-black font-display text-evolve-brown mt-2 mb-8">Product Profiles</motion.h2>
                        <motion.div variants={fadeUpVariants}>
                            <Link to="/products" className="group glass bg-white/50 px-8 py-4 rounded-full flex items-center text-evolve-brown font-bold hover:bg-white transition-all shadow-sm">
                                View Full Catalogue 
                                <span className="bg-evolve-brown/10 p-2 rounded-full ml-3 group-hover:bg-evolve-brown group-hover:text-white transition-colors">
                                    <ArrowRight size={18} />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {products.slice(0, 4).map((product, idx) => (
                            <motion.div key={product.id} variants={fadeUpVariants} className="h-full">
                                <ProductCard product={product} index={idx} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Initiatives & Articles */}
            <section className="py-32 relative bg-white rounded-t-[4rem] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-center mb-20"
                    >
                        <motion.h2 variants={textRevealVariants} className="text-4xl lg:text-6xl font-black font-display text-evolve-brown">
                            Initiatives <span className="text-evolve-brown/30">&</span> Insights
                        </motion.h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Initiative Block */}
                        <motion.div 
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="lg:col-span-2 relative bg-evolve-cream p-10 lg:p-12 rounded-[3rem] overflow-hidden flex flex-col justify-between"
                        >
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-evolve-light-green/20 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex flex-wrap gap-4 mb-10">
                                    <div className="glass bg-white/60 px-6 py-4 rounded-2xl">
                                        <div className="text-2xl lg:text-3xl font-black font-display text-evolve-green">Clean<br /><span className="text-evolve-brown">India</span></div>
                                    </div>
                                    <div className="glass bg-white/60 px-6 py-4 rounded-2xl">
                                    <div className="text-2xl lg:text-3xl font-black font-display text-evolve-green">Go<br /><span className="text-evolve-brown">Green</span></div>
                                    </div>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black font-display text-evolve-brown mb-6">West to Best</h3>
                                <p className="text-evolve-text/70 text-lg mb-8 leading-relaxed max-w-sm">
                                    Supporting the national mission for a cleaner, greener environment through sustainable, high-impact manufacturing.
                                </p>
                            </div>
                            <Link to="/about" className="group inline-flex items-center text-evolve-green font-bold text-lg relative z-10">
                                Discover More 
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Recent Article Block */}
                        <motion.div 
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="lg:col-span-3 bg-evolve-brown p-10 lg:p-12 rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-end min-h-[400px]"
                        >
                            <div className="absolute inset-0 bg-[#4A322C]"></div>
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-evolve-green/20 via-transparent to-transparent"></div>
                            
                            <div className="relative z-10">
                                <span className="glass-dark inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-evolve-light-green mb-8">
                                    Latest Insight
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black font-display mb-6 leading-tight">
                                    {blogs[0].title}
                                </h3>
                                <p className="text-white/60 text-lg mb-10 max-w-xl line-clamp-2">
                                    {blogs[0].excerpt}
                                </p>
                                <Link to={`/blog`} className="group inline-flex items-center bg-white text-evolve-brown px-8 py-4 rounded-full font-bold hover:bg-evolve-light-green transition-colors">
                                    Read Full Article <ArrowUpRight size={20} className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
