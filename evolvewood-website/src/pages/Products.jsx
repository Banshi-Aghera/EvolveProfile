import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { products } from '../data/content';
import { motion } from 'framer-motion';

export default function Products() {
    return (
        <div className="overflow-hidden bg-evolve-cream min-h-screen">
            <SEO title="Products" description="Explore our range of recycled lumber products including square bars, rectangles, and customized profiles." />
            
            <PageHeader title="Product Profiles Range" subtitle="High-strength, durable, and eco-friendly alternatives to wood." />

            <section className="py-12 lg:py-24 relative">
                {/* Decorative Blobs */}
                <div className="blob bg-evolve-green/10 w-[800px] h-[800px] top-[10%] left-[-300px]"></div>
                <div className="blob bg-evolve-light-green/10 w-[600px] h-[600px] bottom-[10%] right-[-200px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {products.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
