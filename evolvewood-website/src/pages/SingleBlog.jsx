import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/content';
import SEO from '../components/SEO';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SingleBlog() {
    const { slug } = useParams();
    const blog = blogs.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-evolve-cream">
                <h1 className="text-4xl lg:text-5xl font-display font-black text-evolve-brown mb-6">Blog Post <span className="text-gradient">Not Found</span></h1>
                <Link to="/blog" className="inline-flex items-center bg-white px-8 py-4 rounded-full shadow-lg text-evolve-green font-bold hover:-translate-y-1 transition-transform border border-evolve-brown/10">
                    <ArrowLeft className="mr-3" /> Return to Blog
                </Link>
            </div>
        );
    }

    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.excerpt,
        image: blog.image ? (blog.image.startsWith('http') ? blog.image : `https://evolveprofileindustries.com${blog.image}`) : undefined,
        datePublished: blog.date ? new Date(blog.date).toISOString() : undefined,
        author: {
            '@type': 'Person',
            name: blog.author || 'EvolveProfile Team'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Evolve Profile Industries',
            logo: {
                '@type': 'ImageObject',
                url: 'https://evolveprofileindustries.com/images/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://evolveprofileindustries.com/blog/${blog.slug}`
        }
    };

    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO
                title={blog.title}
                description={blog.excerpt}
                image={blog.image}
                url={`/blog/${blog.slug}`}
                ogType="article"
                schema={blogSchema}
            />
            
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[4rem] shadow-2xl z-10">
                <div className="absolute inset-0 bg-evolve-brown">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                >
                    <div className="inline-flex items-center justify-center space-x-2 bg-evolve-green/20 backdrop-blur-md text-evolve-light-green font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-8">
                        <Tag size={14} /> <span>{blog.category}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-display mb-8 leading-tight text-white drop-shadow-lg">{blog.title}</h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 font-medium text-sm md:text-base">
                        <span className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><Calendar size={18} className="mr-2 text-evolve-light-green" /> {blog.date}</span>
                        <span className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><User size={18} className="mr-2 text-evolve-light-green" /> {blog.author}</span>
                    </div>
                </motion.div>
            </div>

            <article className="py-12 lg:py-24 relative">
                <div className="blob bg-evolve-green/10 w-[600px] h-[600px] top-[10%] left-[-200px]"></div>
                <div className="blob bg-evolve-brown/10 w-[500px] h-[500px] bottom-[20%] right-[-100px]"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass bg-white/80 p-8 lg:p-16 rounded-[3rem] shadow-2xl shadow-evolve-brown/10 border border-white/50"
                    >
                        <div className="prose prose-lg lg:prose-xl prose-brown max-w-none">
                            <p className="lead text-2xl text-evolve-brown font-medium mb-10 leading-relaxed font-display">{blog.excerpt}</p>
                            
                            <div className="bg-gradient-to-br from-evolve-green/10 to-transparent p-10 rounded-[2rem] border-l-8 border-evolve-green mb-10 shadow-inner">
                                <div className="text-evolve-brown text-lg leading-relaxed whitespace-pre-wrap">
                                    {blog.content && blog.content.split('\n').map((line, i) => {
                                        if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-black font-display text-evolve-brown mt-10 mb-4">{line.replace('## ', '')}</h2>;
                                        if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-black font-display text-evolve-brown mt-8 mb-3">{line.replace('### ', '')}</h3>;
                                        if (line.startsWith('#### ')) return <h4 key={i} className="text-xl font-bold text-evolve-brown mt-6 mb-2">{line.replace('#### ', '')}</h4>;
                                        if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold text-evolve-brown my-2">{line.replace(/\*\*/g, '')}</p>;
                                        if (line.startsWith('* ')) return <li key={i} className="ml-6 list-disc text-evolve-text/80 my-1">{line.replace('* ', '')}</li>;
                                        if (line.match(/^\d+\./)) return <p key={i} className="ml-4 text-evolve-text/80 my-1 font-medium">{line}</p>;
                                        if (line.trim() === '') return <br key={i} />;
                                        return <p key={i} className="text-evolve-text/80 my-3 leading-relaxed">{line}</p>;
                                    })}
                                </div>
                                {blog.insideImage && (
                                    <div className="mt-10 flex justify-center">
                                        <img src={blog.insideImage} alt={`${blog.title} — EvolveWood`} className="rounded-2xl max-w-full h-auto shadow-lg object-contain bg-white/50 p-2 border border-evolve-green/20" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <Link to="/blog" className="inline-flex items-center font-bold text-lg bg-evolve-brown text-white px-8 py-4 rounded-full hover:bg-evolve-green transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            <ArrowLeft size={24} className="mr-3" /> Back to All Articles
                        </Link>
                    </motion.div>
                </div>
            </article>
        </div>
    )
}
