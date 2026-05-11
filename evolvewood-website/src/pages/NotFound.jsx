import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col flex-1 items-center justify-center text-center px-4 bg-evolve-cream relative overflow-hidden">
            <SEO title="Page Not Found" />
            
            <div className="blob bg-evolve-green/10 w-[500px] h-[500px] top-[10%] left-[-10%]"></div>
            <div className="blob bg-evolve-brown/10 w-[600px] h-[600px] bottom-[10%] right-[-10%]"></div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative z-10 glass bg-white/60 p-12 lg:p-24 rounded-[4rem] shadow-2xl shadow-evolve-brown/10 border border-white/60"
            >
                <div className="relative">
                    <h1 className="text-[12rem] lg:text-[18rem] leading-none font-black font-display text-transparent bg-clip-text bg-gradient-to-br from-evolve-green/30 to-evolve-brown/30 select-none drop-shadow-sm">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl lg:text-6xl font-black text-evolve-brown tracking-tight bg-white/80 backdrop-blur-md px-8 py-4 rounded-3xl shadow-xl border border-white/50">
                            Page <span className="text-gradient">Not Found</span>
                        </h2>
                    </div>
                </div>
                
                <p className="text-evolve-text/80 text-xl font-medium mt-12 mb-10 max-w-xl mx-auto leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                
                <Link to="/" className="inline-block bg-evolve-brown text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-evolve-green hover:-translate-y-1 transition-all duration-300">
                    Take Me Home
                </Link>
            </motion.div>
        </div>
    )
}
