import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductCard({ product, index }) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    useEffect(() => {
        if (!isPreviewOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsPreviewOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isPreviewOpen]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-full"
            >
                <button
                    type="button"
                    onClick={() => setIsPreviewOpen(true)}
                    className="group relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-4 text-left shadow-xl shadow-evolve-brown/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-evolve-brown/10"
                >
                    <div
                        className={cn(
                            'relative mb-6 flex h-72 items-center justify-center overflow-hidden rounded-[2rem] bg-evolve-cream',
                            product.frameClassName,
                        )}
                    >
                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-evolve-brown/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.title}
                                className={cn(
                                    'h-full w-full transition-transform duration-700 ease-in-out group-hover:scale-110',
                                    product.imageClassName || 'object-cover mix-blend-multiply',
                                )}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div
                            className="flex h-full w-full items-center justify-center bg-evolve-brown/5 font-display text-5xl font-black uppercase tracking-widest text-evolve-brown/30 transition-transform duration-700 group-hover:scale-110"
                            style={{ display: product.image ? 'none' : 'flex' }}
                        >
                            {product.title.split(' ')[0]}
                        </div>

                        <span className="absolute bottom-4 right-4 z-20 flex h-12 w-12 translate-y-20 items-center justify-center rounded-full bg-white text-evolve-brown opacity-0 shadow-lg transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:hover:bg-evolve-green group-hover:hover:text-white">
                            <ArrowUpRight size={20} />
                        </span>
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col px-4 pb-4">
                        <div className="mb-3 flex items-start justify-between">
                            <h3 className="text-2xl font-black font-display text-evolve-brown transition-colors duration-300 group-hover:text-evolve-green">
                                {product.title}
                            </h3>
                        </div>
                        <p className="mb-4 min-h-[4.5rem] flex-1 text-evolve-text/60 font-light leading-relaxed line-clamp-3">
                            {product.description}
                        </p>
                        <div className="mt-auto w-full overflow-hidden rounded-full bg-evolve-brown/5 h-0.5">
                            <div className="h-full w-0 bg-evolve-green transition-all duration-700 ease-out group-hover:w-full"></div>
                        </div>
                    </div>
                </button>
            </motion.div>

            <AnimatePresence>
                {isPreviewOpen ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsPreviewOpen(false)}
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-evolve-brown/45 p-4 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 18 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/85 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.28)]"
                        >
                            <button
                                type="button"
                                onClick={() => setIsPreviewOpen(false)}
                                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-evolve-brown shadow-lg transition-colors hover:bg-evolve-green hover:text-white"
                                aria-label={`Close ${product.title} preview`}
                            >
                                <X size={20} />
                            </button>

                            <div
                                className={cn(
                                    'flex min-h-[65vh] items-center justify-center overflow-hidden rounded-[2rem] bg-evolve-cream',
                                    product.previewFrameClassName || product.frameClassName,
                                )}
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className={cn(
                                        'max-h-[80vh] w-full',
                                        product.previewImageClassName || product.imageClassName || 'object-contain',
                                    )}
                                />
                            </div>

                            <div className="px-4 pb-6 pt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                                <div>
                                    <h3 className="text-3xl font-black font-display text-evolve-brown">{product.title}</h3>
                                    <p className="mt-2 max-w-3xl text-base text-evolve-text/70">{product.description}</p>
                                </div>
                                <a
                                    href={`https://wa.me/919737835404?text=Hello%20EvolveWood%2C%20I%20am%20interested%20in%20your%20*${encodeURIComponent(product.title.trim())}*%20product.%20Please%20share%20more%20details.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex-shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <MessageCircle size={20} />
                                    Inquire Now
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
