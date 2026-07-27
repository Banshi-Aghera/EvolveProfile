import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SEO from '../components/SEO';
import { ArrowRight, Leaf, Recycle, ShieldCheck, ArrowUpRight, Factory, Armchair, Car, Building2, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import { features, blogs } from '../data/content';
import ShatterImage from '../components/ShatterImage';

const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const reveal = { hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } } };

const industries = [
    { title: "Industrial", icon: Factory, image: "/images/applications/industrial.jpg", desc: "Pipe support, steel packaging, machinery bases" },
    { title: "Civil & Infra", icon: Building2, image: "/images/applications/application44.jpeg", desc: "Bridges, fencing, boardwalks, marine structures" },
    { title: "Agriculture", icon: Leaf, image: "/images/applications/application2.jpg", desc: "Raised beds, boundary fencing, farm support" },
    { title: "Storage", icon: Warehouse, image: "/images/applications/storage/godown.jpg", desc: "Warehouse dunnage, pallet alternatives" },
    { title: "Automobile", icon: Car, image: "/images/applications/automobile.jpeg", desc: "Wheel chocks, transport packaging" },
    { title: "Furniture", icon: Armchair, image: "/images/applications/furniture1.jpeg", desc: "Benches, tables, outdoor seating" },
];

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

    const parallaxRef = useRef(null);
    const { scrollYProgress: prlx } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
    const prlxY = useTransform(prlx, [0, 1], [80, -80]);

    return (
        <div className="relative overflow-x-hidden bg-evolve-cream">
            <SEO
                title="EvolveWood by Evolve Profile Industries – Plastic Lumber Manufacturer"
                description="EvolveWood by Evolve Profile Industries - India's leading manufacturer of recycled plastic lumber. 100% eco-friendly, termite proof, waterproof, fire retardant profiles. Save The Nature."
                url="/"
                keywords="EvolveWood, Evolve Profile Industries, recycled plastic lumber, eco friendly packaging India, save the nature, termite proof, waterproof wood alternative"
            />

            {/* ═══ HERO — CINEMATIC FULL-BLEED ═══ */}
            <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden">
                {/* Hero Background Image with parallax zoom */}
                <motion.div style={{ scale: heroScale }} className="absolute inset-0 w-full h-full origin-center">
                    <img
                        src="/images/temp_logo/image.png"
                        alt="EvolveWood Built to Last"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                {/* Dark gradient overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

                {/* Grain texture */}
                <div className="absolute inset-0 grain opacity-30"></div>

                <motion.div style={{ y: textY }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
                    <div className="max-w-3xl">
                        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-20">
                            <motion.div variants={fade} className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-2.5">
                                <Leaf size={16} className="text-evolve-light-green" />
                                <span className="text-white/90 text-sm font-semibold">🌿 Save The Nature — EvolveWood</span>
                            </motion.div>
                            <motion.h1 variants={fade} className="mb-8 font-display text-[clamp(2rem,5vw,3.8rem)] font-black leading-[1.1] tracking-tight text-white max-w-4xl">
                                Evolve Wood is a Leading Plastic Lumber Manufacturer <br /> <span className="text-evolve-light-green">in Gujarat, India</span>
                            </motion.h1>
                            <motion.p variants={fade} className="mb-10 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
                                Premium plastic lumber — the perfect alternative to wood. Made from 100% recycled materials. Waterproof, termite proof, fire retardant, and completely eco-friendly.
                            </motion.p>
                            <motion.div variants={fade} className="flex flex-wrap gap-3 mb-10">
                                {['Eco Friendly', 'Built to Last', 'Easy to Work With', 'No Maintenance'].map((tag) => (
                                    <span key={tag} className="bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">{tag}</span>
                                ))}
                            </motion.div>
                            <motion.div variants={fade} className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                                <Link to="/products" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-evolve-green px-8 py-4 font-bold text-white shadow-[0_10px_40px_-10px_rgba(67,160,71,0.6)] transition-transform hover:scale-105">
                                    <span className="relative z-10 flex items-center">Explore Products <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" /></span>
                                </Link>
                                <Link to="/contact" className="group inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10">
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10"
                >
                    <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"></motion.div>
                </motion.div>
            </section>

            {/* ═══ MARQUEE STRIP ═══ */}
            <div className="bg-evolve-brown py-4 overflow-hidden relative">
                <div className="animate-marquee flex whitespace-nowrap gap-12 text-white/60 text-sm font-bold uppercase tracking-[0.3em]">
                    {[...Array(2)].map((_, i) => (
                        <span key={i} className="flex gap-12 items-center">
                            <span>Fire Retardant</span><span className="text-evolve-light-green">●</span>
                            <span>Waterproof</span><span className="text-evolve-light-green">●</span>
                            <span>Termite Proof</span><span className="text-evolve-light-green">●</span>
                            <span>Chemical Resistant</span><span className="text-evolve-light-green">●</span>
                            <span>Eco Friendly</span><span className="text-evolve-light-green">●</span>
                            <span>UV Protected</span><span className="text-evolve-light-green">●</span>
                            <span>Recyclable</span><span className="text-evolve-light-green">●</span>
                            <span>High Load Bearing</span><span className="text-evolve-light-green">●</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ═══ ABOUT — TEXT FOCUSED ═══ */}
            <section className="py-28 lg:py-40 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        <motion.span variants={reveal} className="text-evolve-green font-bold tracking-[0.25em] uppercase text-xs block mb-6">About EvolveWood</motion.span>
                        <motion.h2 variants={reveal} className="text-4xl md:text-6xl lg:text-7xl font-black font-display text-evolve-brown leading-[1.1] mb-12 max-w-4xl">
                            Turning Plastic Waste Into <span className="text-gradient">Industrial Value</span>
                        </motion.h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                            <motion.div variants={reveal} className="space-y-6 text-lg lg:text-xl text-evolve-text/65 leading-relaxed">
                                <p>Evolve Profile Industries is engaged in manufacturing of recycled plastic packaging materials. With rich experience and a team of professionals, we are able to cater the industry with innovative products.</p>
                                <p>Our <strong className="text-evolve-brown">EvolveWood</strong> products are made from 100% recycled plastic waste — turning pollution into durable, high-performance lumber that saves trees and reduces landfill burden.</p>
                            </motion.div>
                            <motion.div variants={reveal} className="space-y-6 text-lg lg:text-xl text-evolve-text/65 leading-relaxed">
                                <p><strong className="text-evolve-green">Sustainability from Start to Finish</strong> — from the manufacturing process to the finished material, every step is sustainable. Over the years, will keep millions of tons of plastic out of landfills.</p>
                                <p>Protecting the environment is in our DNA and will forever remain one of our key objectives. <strong className="text-evolve-brown">Save The Nature.</strong></p>
                            </motion.div>
                        </div>
                        {/* Stats row */}
                        <motion.div variants={reveal} className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-20 bg-evolve-brown/10 rounded-2xl overflow-hidden">
                            {[
                                { value: '3.5M+', label: 'Tonnes Plastic Waste/Year' },
                                { value: '15B', label: 'Trees Cut Annually' },
                                { value: '100%', label: 'Recyclable Product' },
                                { value: '50+', label: 'Industries Served' }
                            ].map((s, i) => (
                                <div key={i} className="bg-evolve-cream p-8 lg:p-10 text-center group hover:bg-white transition-colors duration-500">
                                    <h4 className="text-3xl lg:text-4xl font-black font-display text-evolve-green mb-2 group-hover:scale-110 transition-transform">{s.value}</h4>
                                    <p className="text-xs font-bold text-evolve-brown/50 uppercase tracking-wider">{s.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ FEATURES — HORIZONTAL SCROLL STYLE ═══ */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 section-line"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div>
                            <motion.span variants={reveal} className="text-evolve-green font-bold tracking-[0.25em] uppercase text-xs block mb-4">Features</motion.span>
                            <motion.h2 variants={reveal} className="text-4xl md:text-6xl font-black font-display text-evolve-brown leading-tight">Why Choose <span className="text-gradient">EvolveWood</span></motion.h2>
                        </div>
                        <motion.div variants={reveal}>
                            <Link to="/features" className="group inline-flex items-center text-evolve-brown font-bold text-lg">
                                <span className="border-b-2 border-evolve-brown/20 pb-1 group-hover:border-evolve-green transition-colors">All Features</span>
                                <span className="ml-3 bg-evolve-brown/5 p-2 rounded-full group-hover:bg-evolve-green group-hover:text-white transition-colors"><ArrowUpRight size={18} /></span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-y-16">
                        {features.slice(0, 8).map((f, i) => (
                            <motion.div key={i} variants={fade}
                                className="group flex flex-col items-center text-center cursor-default">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white mb-6 flex items-center justify-center p-3 overflow-hidden relative shadow-lg shadow-evolve-brown/5 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-evolve-brown/5">
                                    <div className="absolute inset-0 bg-evolve-green/0 group-hover:bg-evolve-green/10 transition-colors duration-500 z-10 rounded-full"></div>
                                    {f.image ? (
                                        <img src={f.image} alt={f.name} className="w-full h-full object-cover rounded-full filter brightness-95 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
                                    ) : (
                                        <div className="bg-evolve-green/5 w-full h-full rounded-full flex items-center justify-center text-evolve-green"><f.icon size={36} /></div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold font-display text-evolve-brown mb-2 group-hover:text-evolve-green transition-colors">{f.name}</h3>
                                <p className="text-sm text-evolve-text/60 leading-relaxed max-w-[200px]">{f.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══ INDUSTRIES — FULL-WIDTH PARALLAX ═══ */}
            <section ref={parallaxRef} className="relative py-28 lg:py-40 overflow-hidden">
                <div className="absolute inset-0 hero-gradient"></div>
                <div className="absolute inset-0 hero-overlay"></div>
                <div className="absolute inset-0 grain"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-20">
                        <motion.span variants={reveal} className="text-evolve-light-green/70 font-bold tracking-[0.25em] uppercase text-xs block mb-4">Applications</motion.span>
                        <motion.h2 variants={reveal} className="text-4xl md:text-6xl lg:text-7xl font-black font-display text-white leading-tight max-w-4xl">
                            Built for <span className="text-gradient-light">Every Industry</span>
                        </motion.h2>
                        <motion.p variants={reveal} className="text-white/40 text-lg mt-6 max-w-xl">From heavy industrial packaging to outdoor furniture — unmatched performance across sectors.</motion.p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {industries.map((ind, i) => (
                            <motion.div key={i} variants={fade} className="group flex flex-col items-center text-center cursor-pointer">
                                <div className="w-64 h-64 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-black/20 mb-6 flex items-center justify-center p-2 md:p-4 overflow-hidden relative shadow-lg shadow-black/20 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-white/5">
                                    <div className="absolute inset-0 bg-evolve-green/0 group-hover:bg-evolve-green/20 transition-colors duration-500 z-10 rounded-full mix-blend-overlay"></div>
                                    <img
                                        src={ind.image}
                                        alt={ind.title}
                                        className="w-full h-full object-cover rounded-full filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <ind.icon size={20} className="text-evolve-light-green group-hover:text-white transition-colors" />
                                    <h3 className="text-2xl font-bold font-display text-white group-hover:text-evolve-light-green transition-colors">{ind.title}</h3>
                                </div>
                                <p className="text-white/50 text-sm max-w-xs mx-auto leading-relaxed">{ind.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 text-center">
                        <Link to="/applications" className="group inline-flex items-center bg-white text-evolve-brown px-8 py-4 rounded-full font-bold hover:bg-evolve-light-green hover:text-white transition-colors shadow-2xl">
                            Explore All Applications <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ PRODUCT SHOWCASE — MINIMAL ═══ */}
            <section className="py-28 lg:py-40 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-20">
                        <motion.span variants={reveal} className="text-evolve-green font-bold tracking-[0.25em] uppercase text-xs block mb-4">Products</motion.span>
                        <motion.h2 variants={reveal} className="text-4xl md:text-6xl font-black font-display text-evolve-brown">Profile <span className="text-gradient">Range</span></motion.h2>
                        <motion.p variants={reveal} className="text-evolve-text/50 text-lg mt-4 max-w-xl mx-auto">Available in square, rectangle & round shapes. Custom sizes as per requirement.</motion.p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'Square Bars', desc: '60mm to 150mm sizes. High load bearing capacity.', img: '/images/square-bar.jpg' },
                            { title: 'Rectangle Bars', desc: '85x25mm, 100x50mm, 20x85mm and more.', img: '/images/rectangle-bar.jpg' },
                            { title: 'Customized Profiles', desc: 'Developed as per specific customer requirements.', img: '/images/customized-profile.jpg' },
                            { title: 'Fabricated Products', desc: 'Saddles, Dunnage, Pallets, and custom solutions.', img: '/images/fabricated-product.jpg' },
                        ].map((p, i) => (
                            <motion.div key={i} variants={fade} className="group flex items-center gap-6 p-6 rounded-2xl hover:bg-white transition-all duration-500 cursor-pointer border border-transparent hover:border-evolve-brown/5 hover:shadow-lg">
                                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-evolve-brown/5">
                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-evolve-brown mb-1 group-hover:text-evolve-green transition-colors">{p.title}</h3>
                                    <p className="text-evolve-text/50 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                                <ArrowRight size={18} className="ml-auto text-evolve-brown/20 group-hover:text-evolve-green group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
                        <Link to="/products" className="group inline-flex items-center text-evolve-brown font-bold text-lg">
                            <span className="border-b-2 border-evolve-brown/20 pb-1 group-hover:border-evolve-green transition-colors">View All Product</span>
                            <span className="ml-3 bg-evolve-brown/5 p-2 rounded-full group-hover:bg-evolve-green group-hover:text-white transition-colors"><ArrowUpRight size={18} /></span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══ CTA BANNER ═══ */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-evolve-brown via-[#4a3228] to-evolve-green rounded-[3rem] p-12 lg:p-20 overflow-hidden">
                        <div className="absolute inset-0 grain"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-evolve-green/20 rounded-full blur-[120px]"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-evolve-light-green/70 font-bold tracking-[0.2em] uppercase text-xs block mb-6">Get Started</span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white leading-tight mb-6">
                                    Ready to Go <span className="text-gradient-light">Green?</span>
                                </h2>
                                <p className="text-white/50 text-lg max-w-md leading-relaxed">Custom profiles developed as per your specific requirements and designs. Let's build something sustainable together.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                                <Link to="/contact" className="group inline-flex items-center justify-center bg-white text-evolve-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-evolve-light-green hover:text-white transition-colors shadow-2xl">
                                    Get a Quote <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:border-white/50 transition-colors">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
