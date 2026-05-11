export default function PageHeader({ title, subtitle }) {
    return (
        <div className="bg-gradient-to-b from-evolve-green/10 to-evolve-cream text-evolve-brown pt-36 pb-20 lg:pt-48 lg:pb-28 rounded-b-[4rem] mb-12 relative overflow-hidden text-center shadow-[0_10px_40px_-15px_rgba(93,64,55,0.05)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(93,64,55,0.12)_1px,transparent_0)] bg-[length:24px_24px] opacity-40 mix-blend-multiply"></div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 right-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-evolve-green/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-white/20 text-evolve-green font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm shadow-sm">{title}</span>
                <h1 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tight">{title}</h1>
                {subtitle && <p className="text-xl text-evolve-text/70 max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>}
            </div>
        </div>
    )
}
