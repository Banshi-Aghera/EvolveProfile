import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const applicationData = [
    {
        id: "industrial",
        category: "Industrial Application",
        description: "Heavy-duty recycled plastic profiles engineered for the most demanding industrial environments. Our profiles provide exceptional load-bearing capacity without the risk of rot, rust, or chemical degradation.",
        image: "/images/applications/application1.jpg",
        items: [
            { id: 'ia1', title: "Structural Support", image: "/images/applications/application1.jpg", description: "Aluminum-reinforced recycled profiles for heavy structural support." },
            { id: 'ia2', title: "Pipe & Steel", image: "/images/applications/pipe-and-steel.jpg", description: "Durable spacers and dunnage for pipe and steel storage." },
            { id: 'ia5', title: "Heavy Machinery", image: "/images/applications/heavy-machinery.jpg", description: "Load-bearing profiles for machinery bases and equipment packaging." },
        ]
    },
    {
        id: "civil",
        category: "Civil & Infrastructure",
        description: "Weatherproof, termite-resistant lumber for public infrastructure. EvolveWood withstands harsh outdoor environments, making it the perfect choice for coastal, marine, and urban civil projects.",
        image: "/images/applications/application44.jpeg",
        items: [
            { id: 'ca1', title: "Bridge & Boardwalk", image: "/images/applications/application44.jpeg", description: "Recycled plastic lumber for durable, waterproof pedestrian bridges." },
            { id: 'ca3', title: "Marine Applications", image: "/images/applications/marine.jpg", description: "Waterproof profiles ideal for docks, jetties, and coastal infrastructure." },
            { id: 'ca2', title: "Road Fencing", image: "/images/applications/application3.jpeg", description: "Long-lasting fencing solutions for roads, highways, and boundaries." },
        ]
    },
    {
        id: "storage",
        category: "Storage & Packaging",
        description: "Industrial-grade profiles for warehouse dunnage, pallet alternatives, and safe goods storage. EvolveWood eliminates the contamination risks associated with traditional wooden pallets.",
        image: "/images/applications/war.png",
        items: [
            { id: 'sa1', title: "Warehouse Storage", image: "/images/applications/war.png", description: "Recycled plastic dunnage for organized, safe warehouse storage." },
            { id: 'sa2', title: "Godown Solutions", image: "/images/applications/godown.jpg", description: "Durable floor supports and spacers for godown storage operations." },
            { id: 'sa4', title: "Spacer Applications", image: "/images/applications/spacer-uses.jpg", description: "Versatile spacer profiles for separating and protecting goods." },
        ]
    },
    {
        id: "agriculture",
        category: "Agriculture & Garden",
        description: "Eco-friendly raised beds, boundary fencing, and agricultural support structures that never rot or leach chemicals into the soil, ensuring safe and sustainable farming.",
        image: "/images/applications/application2.jpg",
        items: [
            { id: 'ag1', title: "Raised Garden Beds", image: "/images/applications/application2.jpg", description: "Durable, waterproof raised planters for gardens and urban agriculture." },
            { id: 'ag3', title: "Animal Boundary", image: "/images/applications/animal-boundary.jpg", description: "Strong boundary fencing for livestock enclosures and rural applications." },
            { id: 'ag4', title: "Plants Raised Beds", image: "/images/applications/plants-raised-beds.jpg", description: "Premium raised bed solutions for nurseries and terrace gardens." },
        ]
    },
    {
        id: "auto",
        category: "Automobile & Transport",
        description: "Recycled plastic components for automotive support — from heavy-duty wheel chocks to transport packaging that protects valuable vehicular assets during transit.",
        image: "/images/applications/automobile.jpeg",
        items: [
            { id: 'au1', title: "Wheel Chocks", image: "/images/applications/automobile.jpeg", description: "Heavy-duty recycled plastic wheel chocks for vehicle safety." },
            { id: 'au2', title: "Aircraft Support", image: "/images/applications/aircraft.jpg", description: "Lightweight yet strong profiles for aircraft ground support." },
        ]
    },
    {
        id: "furniture",
        category: "Furniture & Outdoor",
        description: "Maintenance-free, weather-resistant benches, tables, and outdoor furniture built to last decades without ever needing painting, staining, or sealing.",
        image: "/images/applications/bench.jpeg",
        items: [
            { id: 'fu1', title: "Benches", image: "/images/applications/bench.jpeg", description: "Sleek, maintenance-free benches for parks and public spaces." },
            { id: 'fu3', title: "Tables", image: "/images/applications/table.jpg", description: "Durable recycled plastic tables for outdoor dining and picnic areas." },
        ]
    }
];

export default function Applications() {
    return (
        <div className="bg-evolve-cream min-h-screen">
            <SEO title="Applications | EvolveWood Recycled Plastic Profiles" />

            {/* Cinematic Hero Banner */}
            <section className="relative min-h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/temp_logo/image.png"
                        alt="EvolveWood Applications"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-evolve-brown/95 via-evolve-brown/50 to-evolve-brown/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 pt-40">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-evolve-light-green font-bold tracking-[0.3em] uppercase text-sm block mb-4">Applications</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white leading-[1.0] mb-6">
                            Built for <span className="text-evolve-light-green">Every</span><br/>Industry.
                        </h1>
                        <p className="text-white/60 text-xl max-w-xl leading-relaxed">
                            Unmatched performance across every sector — from heavy industry to outdoor furniture.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="flex flex-col">
                {applicationData.map((app, index) => (
                    <IndustryBlock key={app.id} app={app} index={index} />
                ))}
            </div>
            
            <section className="py-32 text-center bg-white relative">
                <div className="absolute inset-0 bg-evolve-brown/5"></div>
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-black font-display text-evolve-brown mb-8">Need a Custom Solution?</h2>
                    <p className="text-xl text-evolve-text/60 mb-10">We develop customized profiles as per your specific customer requirements and designs.</p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-evolve-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-evolve-brown transition-colors shadow-2xl">
                        Contact Our Experts <ArrowRight size={20} className="ml-3" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

function IndustryBlock({ app, index }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={ref} className="relative w-full min-h-screen flex items-center overflow-hidden border-b border-white">
            {/* Immersive Parallax Background */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y: imgY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                    <div className="absolute inset-0 bg-evolve-brown/95 mix-blend-multiply z-10"></div>
                    <img src={app.image} alt={app.category} className="w-full h-full object-cover filter grayscale opacity-20" />
                </motion.div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Sticky Industry Info */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit text-white mb-12 lg:mb-0">
                        <span className="text-evolve-light-green font-bold tracking-[0.3em] uppercase text-sm block mb-6">0{index + 1} / Industry</span>
                        <h2 className="text-5xl lg:text-6xl font-black font-display mb-8 leading-[1.1]">{app.category}</h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-12">
                            {app.description}
                        </p>
                        <div className="w-12 h-1 bg-evolve-green rounded-full"></div>
                    </div>
                    
                    {/* Specific Applications Scroll Grid */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-12 lg:gap-20">
                        {app.items.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`group flex flex-col ${i % 2 !== 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-6 sm:gap-10 items-center`}
                            >
                                <div className="w-full sm:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                                    <div className="absolute inset-0 bg-evolve-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-px bg-evolve-light-green"></div>
                                        <h4 className="text-2xl font-black font-display text-white group-hover:text-evolve-light-green transition-colors">{item.title}</h4>
                                    </div>
                                    <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
