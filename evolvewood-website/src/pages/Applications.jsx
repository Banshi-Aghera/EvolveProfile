import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const applicationData = [
    {
        id: "industrial",
        category: "Industrial Application",
        description: "Heavy-duty recycled plastic profiles engineered for the most demanding industrial environments. Our profiles provide exceptional load-bearing capacity without the risk of rot, rust, or chemical degradation.",
        image: "/images/applications/application1.jpg",
        items: [
            {
                id: 'ia1', title: "Structural Support", images: [
                    "/images/applications/application1.jpg",
                    "/images/applications/subapplications/s1.jpg",
                    "/images/applications/subapplications/s2.jpg",
                    "/images/applications/subapplications/s3.jpg",
                    "/images/applications/subapplications/s5.jpg",
                    "/images/applications/spacer-uses.jpg",
                ], description: "Aluminum-reinforced recycled profiles for heavy structural support."
            },
            {
                id: 'ia2', title: "Pipe & Steel", images: [
                    "/images/applications/pipe-and-steel.jpg",
                    "/images/applications/subapplications/steel1.jpg",
                    "/images/applications/subapplications/steel2.jpg",
                    "/images/applications/subapplications/steel3.jpg",


                ], description: "Durable spacers and dunnage for pipe and steel storage."
            },
            {
                id: "ia5",
                title: "Heavy Machinery",
                images: [
                    "/images/applications/heavy-machinery.jpg",
                    "/images/applications/subapplications/hevy1.jpg",
                    "/images/applications/subapplications/hevy3.jpg",
                    "/images/applications/subapplications/hevy2.jpg",

                ],
                description: "Load-bearing profiles for machinery bases and equipment packaging."
            }
        ]
    },
    {
        id: "civil",
        category: "Civil & Infrastructure",
        description: "Weatherproof, termite-resistant lumber for public infrastructure. EvolveWood withstands harsh outdoor environments, making it the perfect choice for coastal, marine, and urban civil projects.",
        image: "/images/applications/application44.jpeg",
        items: [
            {
                id: 'ca1', title: "Bridge & Boardwalk", images: [
                    "/images/applications/application44.jpeg",
                    "/images/applications/subapplications/bridge1.jpg",
                    "/images/applications/subapplications/bridge2.jpg",
                    "/images/applications/subapplications/bridge3.jpg",
                    "/images/applications/subapplications/bridge4.jpg",
                    "/images/applications/subapplications/bridge5.jpg",
                    "/images/applications/subapplications/bridge6.jpg",
                ], description: "Recycled plastic lumber for durable, waterproof pedestrian bridges."
            },
            {
                id: 'ca3', title: "Marine Applications", images: [
                    "/images/applications/subapplications/marinapplication.jpeg",
                    "/images/applications/subapplications/marin1.jpg",
                    "/images/applications/subapplications/marin2.jpg",
                    "/images/applications/subapplications/marin3.jpg",
                    "/images/applications/subapplications/marin4.jpg",
                    "/images/applications/subapplications/marin5.jpg",
                    "/images/applications/subapplications/marin6.jpg",
                ], description: "Waterproof profiles ideal for docks, jetties, and coastal infrastructure."
            },
            {
                id: 'ca2', title: "Fencing", images: [
                    "/images/applications/application3.jpeg",
                    "/images/applications/subapplications/f1.jpg",
                    "/images/applications/subapplications/f2.jpg",
                    "/images/applications/subapplications/f3.jpg",
                    "/images/applications/subapplications/f4.jpg",
                    "/images/applications/subapplications/f5.jpg",
                    "/images/applications/subapplications/f6.jpg",
                    "/images/applications/subapplications/f7.jpg",
                    "/images/applications/subapplications/f8.jpg",
                ], description: "Long-lasting fencing solutions for roads, highways, and boundaries."
            },
        ]
    },
    {
        id: "storage",
        category: "Storage & Packaging",
        description: "Industrial-grade profiles for warehouse dunnage, pallet alternatives, and safe goods storage. EvolveWood eliminates the contamination risks associated with traditional wooden pallets.",
        image: "/images/applications/war.png",
        items: [
            {
                id: 'sa1', title: "Warehouse Storage", images: [
                    "/images/applications/subapplications/Warehousestorage1.jpg",
                    "/images/applications/subapplications/warehouse1.jpg",
                    "/images/applications/subapplications/warehouse2.jpg",
                    "/images/applications/subapplications/warehouse3.jpg",
                ], description: "Recycled plastic dunnage for organized, safe warehouse storage."
            },
            { id: 'sa2', title: "Godown Solutions", image: "/images/applications/subapplications/godown.jpg", description: "Durable floor supports and spacers for godown storage operations." },
            {
                id: 'sa4', title: "Spacer Applications", images: [
                    "/images/applications/subapplications/spacer-uses.jpg",
                    "/images/applications/subapplications/Speser1.jpg",
                    "/images/applications/subapplications/Speser2.jpg",

                ], description: "Versatile spacer profiles for separating and protecting goods."
            },
        ]
    },
    {
        id: "agriculture",
        category: "Agriculture & Garden",
        description: "Eco-friendly raised beds, boundary fencing, and agricultural support structures that never rot or leach chemicals into the soil, ensuring safe and sustainable farming.",
        image: "/images/applications/application2.jpg",
        items: [
            {
                id: 'ag1', title: "Trellis configurations", images: [
                    "/images/applications/subapplications/trailing1.jpg",
                    "/images/applications/subapplications/trailing2.jpg",

                ], description: "Durable, waterproof raised planters for gardens and urban agriculture."
            },
            { id: 'ag3', title: "Animal Boundary", image: "/images/applications/subapplications/animalboundry.jpg", description: "Strong boundary fencing for livestock enclosures and rural applications." },
            {
                id: 'ag4', title: "Plants Raised Beds", images: [
                    "/images/applications/application2.jpg",
                    "/images/applications/subapplications/raisedbeds1.jpg",
                    "/images/applications/subapplications/raisedbeds2.jpg",
                    "/images/applications/subapplications/raisedbeds3.jpg",
                    "/images/applications/subapplications/raisedbeds4.jpg",
                    "/images/applications/subapplications/raisedbeds5.jpg",
                ], description: "Premium raised bed solutions for nurseries and terrace gardens."
            },
        ]
    },
    {
        id: "auto",
        category: "Automobile & Transport",
        description: "Recycled plastic components for automotive support — from heavy-duty wheel chocks to transport packaging that protects valuable vehicular assets during transit.",
        image: "/images/applications/automobile.jpeg",
        items: [
            { id: 'au1', title: "Wheel Chocks", image: "/images/applications/automobile.jpeg", description: "Heavy-duty recycled plastic wheel chocks for vehicle safety." },
            { id: 'au2', title: "Aircraft Support", image: "/images/applications/subapplications/aircraftimage.jpg", description: "Lightweight yet strong profiles for aircraft ground support." },
        ]
    },
    {
        id: "furniture",
        category: "Furniture & Outdoor",
        description: "Maintenance-free, weather-resistant benches, tables, and outdoor furniture built to last decades without ever needing painting, staining, or sealing.",
        image: "/images/applications/bench.jpeg",
        items: [
            {
                id: 'fu1', title: "Benches", images: [
                    "/images/applications/furniture1.jpeg",
                    "/images/applications/subapplications/bench1.jpg",
                    "/images/applications/subapplications/bench2.jpg",
                    "/images/applications/subapplications/bench3.jpg",
                    "/images/applications/subapplications/bench4.jpg",
                    "/images/applications/subapplications/bench5.jpg",
                ], description: "Sleek, maintenance-free benches for parks and public spaces."
            },
            {
                id: 'fu3', titles: "Tables", images: [
                    "/images/applications/table.jpg",
                    "/images/applications/subapplications/table1.jpg",
                    "/images/applications/subapplications/table2.jpg",
                    "/images/applications/subapplications/table3.jpg",
                    "/images/applications/subapplications/table4.jpg",
                    "/images/applications/subapplications/table5.jpg",
                ], description: "Durable recycled plastic tables for outdoor dining and picnic areas."
            },
        ]
    }
];

export default function Applications() {
    const [lightboxData, setLightboxData] = useState(null);

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
                            Built for <span className="text-evolve-light-green">Every</span><br />Industry.
                        </h1>
                        <p className="text-white/60 text-xl max-w-xl leading-relaxed">
                            Unmatched performance across every sector — from heavy industry to outdoor furniture.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="flex flex-col">
                {applicationData.map((app, index) => (
                    <IndustryBlock key={app.id} app={app} index={index} onImageClick={setLightboxData} />
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxData(null)}
                        className="fixed inset-0 z-[150] flex items-center justify-center bg-evolve-brown/60 p-4 backdrop-blur-md cursor-zoom-out"
                    >
                        <button
                            onClick={() => setLightboxData(null)}
                            className="absolute right-3 top-3 sm:right-6 sm:top-6 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 sm:bg-white/10 text-white hover:bg-white/30 transition-colors backdrop-blur-md"
                        >
                            <X size={20} className="sm:w-6 sm:h-6" />
                        </button>

                        {/* Lightbox Navigation Arrows */}
                        {lightboxData.images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxData(prev => ({
                                            ...prev,
                                            currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
                                        }));
                                    }}
                                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md"
                                >
                                    <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxData(prev => ({
                                            ...prev,
                                            currentIndex: prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1
                                        }));
                                    }}
                                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md"
                                >
                                    <ChevronRight size={24} className="sm:w-8 sm:h-8" />
                                </button>
                            </>
                        )}

                        <motion.img
                            key={lightboxData.currentIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={lightboxData.images[lightboxData.currentIndex]}
                            alt="Application preview"
                            className="w-full sm:w-auto max-w-full sm:max-w-5xl max-h-[85vh] sm:max-h-[80vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Dots indicator for Lightbox */}
                        {lightboxData.images.length > 1 && (
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                                {lightboxData.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === lightboxData.currentIndex ? 'bg-white' : 'bg-white/40'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function IndustryBlock({ app, index, onImageClick }) {
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
                            <ApplicationItem key={i} item={item} i={i} onImageClick={onImageClick} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function ApplicationItem({ item, i, onImageClick }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -clientWidth : clientWidth, behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group flex flex-col ${i % 2 !== 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-6 sm:gap-10 items-center`}
        >
            <div className="w-full sm:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-evolve-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                {item.images ? (
                    <>
                        <div ref={scrollRef} className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                            {item.images.map((img, idx) => (
                                <div key={idx} className="min-w-full h-full flex-shrink-0 snap-center relative">
                                    <img
                                        src={img}
                                        alt={`${item.title} ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                                        onClick={() => onImageClick({ images: item.images, currentIndex: idx })}
                                    />
                                </div>
                            ))}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                                {item.images.map((_, idx) => (
                                    <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                                ))}
                            </div>
                        </div>
                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); scroll('left'); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); scroll('right'); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                ) : (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                        onClick={() => onImageClick({ images: [item.image], currentIndex: 0 })}
                    />
                )}
            </div>
            <div className="w-full sm:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-evolve-light-green"></div>
                    <h4 className="text-2xl font-black font-display text-white group-hover:text-evolve-light-green transition-colors">{item.title}</h4>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
            </div>
        </motion.div>
    );
}
