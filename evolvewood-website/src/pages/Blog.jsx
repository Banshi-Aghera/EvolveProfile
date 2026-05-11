import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { blogs } from '../data/content';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="Blog" description="Latest news and insights on sustainable manufacturing and packaging." />
            
            <PageHeader title="Our Blog" subtitle="Insights on sustainability, recycling, and industry trends." />

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
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {blogs.map((blog) => (
                            <motion.div 
                                variants={{ 
                                    hidden: { opacity: 0, scale: 0.95, y: 30 }, 
                                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80 } } 
                                }} 
                                key={blog.slug}
                            >
                                <Link to={`/blog/${blog.slug}`} className="group block glass bg-white/70 rounded-[3rem] overflow-hidden shadow-xl shadow-evolve-brown/5 hover:shadow-2xl hover:shadow-evolve-brown/10 transition-all duration-500 hover:-translate-y-2 border border-white/50 h-full flex flex-col relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-evolve-green/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                    <div className="h-56 bg-evolve-brown/10 relative overflow-hidden m-4 rounded-[2rem] z-10">
                                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-evolve-brown text-xs font-bold px-4 py-2 rounded-full shadow-lg">{blog.category}</div>
                                    </div>
                                    <div className="p-8 pt-4 flex-1 flex flex-col relative z-10">
                                        <div className="flex items-center text-xs font-medium text-evolve-text/50 mb-4 space-x-4">
                                            <span className="flex items-center bg-evolve-cream/50 px-3 py-1.5 rounded-full"><Calendar size={14} className="mr-2 text-evolve-green" /> {blog.date}</span>
                                            <span className="flex items-center bg-evolve-cream/50 px-3 py-1.5 rounded-full"><User size={14} className="mr-2 text-evolve-brown" /> {blog.author}</span>
                                        </div>
                                        <h3 className="text-2xl font-black font-display text-evolve-brown mb-4 group-hover:text-evolve-green transition-colors leading-snug">{blog.title}</h3>
                                        <p className="text-evolve-text/70 line-clamp-3 text-base leading-relaxed mb-6 font-medium">{blog.excerpt}</p>
                                        
                                        <div className="mt-auto flex items-center text-evolve-brown font-bold group-hover:text-evolve-green transition-colors">
                                            Read More <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" size={18} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
