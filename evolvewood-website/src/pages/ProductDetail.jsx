import { useParams, Link } from 'react-router-dom';
import { products } from '../data/content';
import SEO from '../components/SEO';
import { ArrowLeft, Download, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Map URL slug → product id
function findProduct(productId) {
    return products.find(p => {
        const id = (p.id || '').trim();
        const slug = id.toLowerCase().replace(/\s+/g, '-');
        return id === productId || slug === productId;
    });
}

export default function ProductDetail() {
    const { productId } = useParams();
    const product = findProduct(productId);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-evolve-cream gap-8 px-4">
                <h1 className="text-4xl font-black font-display text-evolve-brown text-center">Product Not Found</h1>
                <p className="text-evolve-text/60 text-center">This product does not exist. Browse our full range below.</p>
                <Link to="/products" className="inline-flex items-center gap-3 bg-evolve-green text-white px-8 py-4 rounded-full font-bold hover:bg-evolve-brown transition-colors">
                    <ArrowLeft size={20} /> Back to All Products
                </Link>
            </div>
        );
    }

    const productSlug = (product.id || '').trim().toLowerCase().replace(/\s+/g, '-');

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.image ? `https://www.evolveprofileindustries.com${product.image}` : undefined,
        brand: { '@type': 'Brand', name: 'EvolveWood' },
        manufacturer: {
            '@type': 'Organization',
            name: 'Evolve Profile Industries',
            url: 'https://www.evolveprofileindustries.com'
        },
        material: '100% Recycled HDPE Plastic',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            areaServed: 'IN',
            seller: { '@type': 'Organization', name: 'Evolve Profile Industries' }
        }
    };

    const otherProducts = products.filter(p => (p.id || '').trim() !== (product.id || '').trim()).slice(0, 3);

    return (
        <div className="bg-evolve-cream min-h-screen">
            <SEO
                title={`${product.title} | Recycled Plastic Lumber Profile — EvolveWood`}
                description={`${product.description} Manufactured from 100% recycled HDPE by Evolve Profile Industries, Morbi, Gujarat. Waterproof, termite-proof, fire-retardant, and maintenance-free.`}
                url={`/products/${productSlug}`}
                image={product.image}
                schema={productSchema}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-evolve-brown overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="absolute top-0 right-0 w-96 h-96 bg-evolve-green/20 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} /> All Products
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-evolve-light-green font-bold tracking-[0.25em] uppercase text-xs block mb-4">
                                EvolveWood Recycled Plastic Profile
                            </span>
                            <h1 className="text-5xl md:text-6xl font-black font-display text-white leading-tight mb-6">
                                {product.title}
                            </h1>
                            <p className="text-white/60 text-xl leading-relaxed mb-10">{product.description}</p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={`https://wa.me/918141514311?text=Hello%20EvolveWood%2C%20I%20am%20interested%20in%20your%20*${encodeURIComponent((product.title || '').trim())}*%20profile.%20Please%20share%20more%20details%20and%20pricing.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-green-500/30"
                                >
                                    <MessageCircle size={20} /> Enquire Now
                                </a>
                                <a
                                    href="/Brochure/EVOLVE WOOD.pdf"
                                    download="EvolveWood-Brochure.pdf"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all"
                                >
                                    <Download size={20} /> Download Brochure
                                </a>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[2.5rem] overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center p-8 min-h-[380px]"
                        >
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={`${product.title} — EvolveWood Recycled Plastic Lumber Profile`}
                                    className="w-full h-auto max-h-[380px] object-contain"
                                />
                            ) : (
                                <div className="text-white/20 text-8xl font-black font-display">
                                    {(product.title || 'P').charAt(0)}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Product Info */}
                        <div className="lg:col-span-2 space-y-10">
                            <div>
                                <h2 className="text-3xl font-black font-display text-evolve-brown mb-6">About This Profile</h2>
                                <div className="space-y-4 text-lg text-evolve-text/70 leading-relaxed">
                                    <p>
                                        <strong className="text-evolve-brown">{product.title}</strong> is manufactured by Evolve Profile Industries
                                        using 100% recycled HDPE plastic waste. Our profiles are engineered to match the dimensional standards
                                        of traditional timber while delivering superior performance in demanding industrial and outdoor environments.
                                    </p>
                                    <p>{product.description}</p>
                                    <p>
                                        EvolveWood plastic lumber profiles can be cut with a regular saw, drilled, routed, nailed, and screwed
                                        using standard woodworking tools. Available in Standard Grade (natural grey/black) and custom colours
                                        per order specifications.
                                    </p>
                                </div>
                            </div>

                            {/* Key Properties */}
                            <div>
                                <h3 className="text-2xl font-black font-display text-evolve-brown mb-6">Key Properties</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {[
                                        { label: '100% Waterproof', icon: '💧' },
                                        { label: 'Termite Proof', icon: '🛡️' },
                                        { label: 'Fire Retardant', icon: '🔥' },
                                        { label: 'UV Protected', icon: '☀️' },
                                        { label: 'Zero Maintenance', icon: '✅' },
                                        { label: 'Eco-Friendly', icon: '🌿' },
                                        { label: 'Chemical Resistant', icon: '⚗️' },
                                        { label: 'High Load Bearing', icon: '🏗️' },
                                        { label: '100% Recyclable', icon: '♻️' },
                                    ].map((feat, i) => (
                                        <div key={i} className="bg-white rounded-2xl p-4 flex items-center gap-3 border border-evolve-brown/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                            <span className="text-xl">{feat.icon}</span>
                                            <span className="font-bold text-evolve-brown text-sm">{feat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Applications */}
                            <div>
                                <h3 className="text-2xl font-black font-display text-evolve-brown mb-4">Applications</h3>
                                <p className="text-lg text-evolve-text/70 leading-relaxed mb-4">
                                    EvolveWood profiles are suitable for industrial dunnage and pipe support, civil engineering structures,
                                    warehouse storage solutions, outdoor furniture, agricultural fencing, and marine applications.
                                </p>
                                <Link to="/applications" className="inline-flex items-center gap-2 text-evolve-green font-bold hover:text-evolve-brown transition-colors">
                                    View All Applications <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Sticky CTA Card */}
                        <div>
                            <div className="bg-gradient-to-br from-evolve-brown to-evolve-green rounded-[2.5rem] p-8 text-white sticky top-32 shadow-2xl">
                                <h3 className="text-2xl font-black font-display mb-2">Request a Quote</h3>
                                <p className="text-white/70 mb-8 leading-relaxed text-sm">
                                    Custom sizes, shapes, and colours available. Our team responds within 24 hours.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href={`https://wa.me/918141514311?text=Hello%20EvolveWood%2C%20I%20need%20a%20quote%20for%20*${encodeURIComponent((product.title || '').trim())}*%20profile.`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-white text-evolve-brown px-6 py-3 rounded-full font-bold hover:bg-evolve-light-green hover:text-white transition-colors"
                                    >
                                        <MessageCircle size={18} /> WhatsApp Us
                                    </a>
                                    <a
                                        href="tel:+918141514311"
                                        className="w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
                                    >
                                        📞 +91 8141514311
                                    </a>
                                    <a
                                        href="mailto:evolveprofileindustries@gmail.com"
                                        className="w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
                                    >
                                        ✉️ Send Email
                                    </a>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/20 text-white/60 text-xs leading-relaxed">
                                    <strong className="text-white block mb-1">Evolve Profile Industries</strong>
                                    Rajkot Highway, Sakat Sanala, Morbi, Gujarat 363641, India
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Related Products */}
            {otherProducts.length > 0 && (
                <section className="py-16 bg-white border-t border-evolve-brown/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-black font-display text-evolve-brown mb-10">Other Profiles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherProducts.map(p => {
                                const pSlug = (p.id || '').trim().toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <Link
                                        key={p.id}
                                        to={`/products/${pSlug}`}
                                        className="group flex items-center gap-5 p-5 rounded-2xl bg-evolve-cream hover:bg-white transition-colors border border-transparent hover:border-evolve-brown/10 hover:shadow-lg"
                                    >
                                        {p.image && (
                                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                                                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                        )}
                                        <div className="flex-grow min-w-0">
                                            <h3 className="font-bold text-evolve-brown group-hover:text-evolve-green transition-colors truncate">{p.title}</h3>
                                            <p className="text-sm text-evolve-text/50 line-clamp-2">{p.description}</p>
                                        </div>
                                        <ArrowRight size={18} className="text-evolve-brown/30 group-hover:text-evolve-green flex-shrink-0 transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
