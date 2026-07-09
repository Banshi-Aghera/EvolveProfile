import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { blogs } from '../data/content';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Blog() {
    // Separate the first blog to be the 'featured' post
    const featuredBlog = blogs[0];
    const regularBlogs = blogs.slice(1);

    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="Blog & Insights | EvolveWood" description="Latest news and insights on sustainable manufacturing and packaging." />
            
            <PageHeader title="Insights & News" subtitle="Exploring sustainability, recycling, and industry trends." />

            <section className="py-16 lg:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Featured Blog Post */}
                {featuredBlog && (
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={fade} 
                        className="mb-20"
                    >
                        <div className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl flex flex-col lg:flex-row">
                            <div className="w-full lg:w-3/5 aspect-[16/10] lg:aspect-auto overflow-hidden relative">
                                <div className="absolute inset-0 bg-evolve-brown/10 group-hover:bg-evolve-brown/0 transition-colors duration-500 z-10"></div>
                                <img 
                                    src={featuredBlog.image} 
                                    alt={featuredBlog.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                                <div className="absolute top-6 left-6 z-20 bg-evolve-green text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                    Featured
                                </div>
                            </div>
                            <div className="w-full lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center bg-evolve-brown text-white">
                                <div className="flex items-center text-xs font-bold tracking-wider text-evolve-light-green uppercase mb-4 gap-4">
                                    <span className="flex items-center"><Calendar size={14} className="mr-2" /> {featuredBlog.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display mb-6 leading-tight group-hover:text-evolve-light-green transition-colors">
                                    <Link to={`/blog/${featuredBlog.slug}`}>{featuredBlog.title}</Link>
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed mb-10">
                                    {featuredBlog.excerpt}
                                </p>
                                <Link to={`/blog/${featuredBlog.slug}`} className="inline-flex items-center bg-white text-evolve-brown w-fit px-8 py-3 rounded-full font-bold hover:bg-evolve-light-green hover:text-white transition-all shadow-xl">
                                    Read Article <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Grid of Remaining Blogs */}
                {regularBlogs.length > 0 && (
                    <motion.div 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.1 }} 
                        variants={stagger}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {regularBlogs.map((blog) => (
                            <motion.div key={blog.slug} variants={fade} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-evolve-brown/5">
                                <div className="w-full aspect-[4/3] overflow-hidden relative">
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-evolve-brown text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                                        {blog.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs font-bold tracking-wider text-evolve-text/40 uppercase mb-4 gap-4">
                                        <span className="flex items-center"><Calendar size={14} className="mr-2" /> {blog.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black font-display text-evolve-brown mb-4 leading-tight group-hover:text-evolve-green transition-colors">
                                        <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h3>
                                    <p className="text-evolve-text/60 text-base leading-relaxed mb-8 flex-grow">
                                        {blog.excerpt}
                                    </p>
                                    <Link to={`/blog/${blog.slug}`} className="inline-flex items-center text-evolve-green font-bold uppercase text-sm tracking-widest group-hover:text-evolve-brown transition-colors">
                                        Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </section>
        </div>
    )
}
