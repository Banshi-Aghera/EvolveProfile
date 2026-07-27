import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ArrowUpRight, Download, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { products } from '../data/content';
import { cn } from '../lib/utils';

const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="overflow-hidden bg-white min-h-screen">
            <SEO
                title="Collections – EvolveWood by Evolve Profile Industries"
                description="Browse EvolveWood product range: Square bars, rectangle bars, angle profiles, customized profiles, and fabricated products. Made from 100% recycled plastic."
                url="/products"
            />

            <PageHeader title="Product Profiles Range" subtitle="High-strength, durable, and eco-friendly alternatives to wood." />

            {/* Editorial Text & Collage Image Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black font-display text-evolve-brown mb-8 leading-tight">
                            The Smarter <span className="text-evolve-green">Alternative.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-evolve-text/70 leading-relaxed font-medium">
                            <p>
                                Made from 100% recycled materials, plastic lumber is the perfect alternative to wood.
                            </p>
                            <p>
                                Plastic lumber can be cut with a regular saw, routed, drilled, nailed and screwed. Our product is available in a variety of dimensional sizes similar to regular wood, such as: 2x2, 2x3, 2x4, 2x6, 2x8, 4x4 and 6x6. We offer it in both a <strong>Standard Grade</strong>, typically grey/black in colour and a <strong>Premium Grade</strong> in a variety of colours.
                            </p>
                            <p>
                                The fact that it’s made of plastic means that it’s <strong>Built to Last</strong>. Plastic lumber is environmentally friendly and made from 100% recycled materials. It doesn’t rot or splinter, and it’s very economically priced.
                            </p>
                            <p>
                                Available in a variety of colours eliminating the need for painting, staining or the use of other preservatives. Plastic Lumber can be used for many building projects including benches, decks, docks, fences, planter boxes, picnic tables, landscaping and boardwalks.
                            </p>
                            <p className="text-sm font-bold text-evolve-brown/50 uppercase tracking-widest mt-8">
                                Copyright © Evolve Profile Industries
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-evolve-brown/10 relative"
                    >
                        {/* 
                            IMPORTANT: Replace this src with the path to the collage image you uploaded! 
                            For example: /images/user_uploads/product_collage.jpg 
                        */}
                        <img
                            src="/images/applications/marine.jpg"
                            alt="Product Collage"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Product Catalogue Grid */}
            <section className="py-24 bg-evolve-cream border-t border-evolve-brown/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 text-center max-w-4xl mx-auto">
                        <span className="text-evolve-green font-bold tracking-[0.25em] uppercase text-xs block mb-4">Our Catalogue</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-evolve-brown leading-tight">
                            Available Profiles
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="w-full group flex flex-col bg-white rounded-[2rem] p-6 text-left hover:shadow-2xl hover:shadow-evolve-brown/10 transition-all duration-500 border border-evolve-brown/5"
                                >
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-evolve-cream mb-6 relative">
                                        <div className="absolute inset-0 bg-evolve-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                        {product.image ? (
                                            <img src={product.image} alt={product.title} className={cn("w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110", product.imageClassName || "mix-blend-multiply")} />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center font-display text-4xl font-black uppercase text-evolve-brown/30">{product.title.split(' ')[0]}</div>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-black font-display text-evolve-brown mb-2 group-hover:text-evolve-green transition-colors">{product.title}</h3>
                                    <p className="text-evolve-text/60 text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>

                                    <div className="mt-auto flex items-center text-evolve-green font-bold text-sm uppercase tracking-wider">
                                        View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Download Brochure Buttons */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="/Brochure/EVOLVE WOOD.pdf"
                            download="EvolveWood-Brochure.pdf"
                            className="inline-flex items-center gap-2 bg-evolve-brown hover:bg-evolve-brown/80 text-white px-10 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg text-center"
                        >
                            <Download size={18} />
                            Download EvolveWood Brochure
                        </a>

                        <a
                            href="/Brochure/EVOLVE CORNER PROTECTION.pdf"
                            download="EvolveWood-Corner-Protection-Brochure.pdf"
                            className="inline-flex items-center gap-2 bg-evolve-brown hover:bg-evolve-brown/80 text-white px-10 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg text-center"
                        >
                            <Download size={18} />
                            Download Corner Protection Brochure
                        </a>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-evolve-brown/60 p-4 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-10"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-evolve-cream text-evolve-brown hover:bg-evolve-green hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-full md:w-1/2 rounded-[2rem] bg-evolve-cream flex items-center justify-center p-8">
                                {selectedProduct.image && (
                                    <img src={selectedProduct.image} alt={selectedProduct.title} className={cn("w-full h-auto", selectedProduct.previewImageClassName || selectedProduct.imageClassName || "object-contain mix-blend-multiply")} />
                                )}
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <span className="text-evolve-green font-bold tracking-[0.2em] uppercase text-xs block mb-3">Profile Details</span>
                                <h3 className="text-3xl lg:text-4xl font-black font-display text-evolve-brown mb-6">{selectedProduct.title}</h3>
                                <p className="text-base text-evolve-text/70 leading-relaxed mb-8">{selectedProduct.description}</p>
                                <a
                                    href={`https://wa.me/919737835404?text=Hello%20EvolveWood%2C%20I%20am%20interested%20in%20your%20*${encodeURIComponent(selectedProduct.title.trim())}*%20product.%20Please%20share%20more%20details.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30 w-fit"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    Inquire Now
                                </a>
                                <a
                                    href="/Brochure/EVOLVE WOOD.pdf"
                                    download="EvolveWood-Brochure.pdf"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 bg-evolve-brown hover:bg-evolve-brown/80 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 w-fit mt-3"
                                >
                                    <Download size={18} />
                                    Download EvolveWood Brochure
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
