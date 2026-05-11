import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const applicationData = [
    {
        category: "Storage Application",
        items: [
            { id: 'sa1', title: "Warehouse", image: "/images/applications/war.png" },
            { id: 'sa2', title: "Godown", image: "/images/applications/godown.jpg" },
            { id: 'sa3', title: "Potato flakes", image: "/images/applications/potato-flakes.jpg" },
            { id: 'sa4', title: "Sheet Bundle Packaging", image: "/images/applications/sheet-bundle-packaging.svg" },
            { id: 'sa5', title: "Wrapped Pallet", image: "/images/applications/wrapped-pallet.svg" },
            { id: 'sa6', title: "Protected Sheet Stack", image: "/images/applications/protected-sheet-stack.svg" },
        ]
    },
    {
        category: "Civil Application",
        items: [
            { id: 'ca1', title: "Marine", image: "/images/applications/civil/Marine.png" },
            { id: 'ca2', title: "Garden Fencing", image: "/images/applications/civil/Garden Fencing.png" },
            { id: 'ca3', title: "Road Fencing", image: "/images/applications/civil/Road Fencing.png" },
            { id: 'ca4', title: "Fencing", image: "/images/applications/civil/Fencing.png" },
            { id: 'ca5', title: "Garden Street", image: "/images/applications/civil/Garden Street.png" },
            { id: 'ca6', title: "Retaining Walls", image: "/images/applications/civil/Retaining Walls.png" },
            { id: 'ca7', title: "Mountain Staircase", image: "/images/applications/civil/Mountain Staircase.png" },
            { id: 'ca8', title: "Plants Raised Bads", image: "/images/applications/civil/Plants Raised Bads.png" },
            { id: 'ca9', title: "Agriculture", image: "/images/applications/civil/Agriculture.png" },
            { id: 'ca10', title: "Animal Boundary", image: "/images/applications/civil/Animal Boundary.png" },
        ]
    },
    {
        category: "Furniture",
        items: [
            { id: 'f1', title: "Banches", image: "/images/applications/benches.jpg" },
            { id: 'f2', title: "Table", image: "/images/applications/table.jpg" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export default function Applications() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Applications | Evolve Profile Industries</title>
                <meta name="description" content="Discover the diverse applications of Evolvewood across storage, civil engineering, and furniture sectors." />
            </Helmet>

            {/* Main Container matching the color of the brochure */}
            <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                    {/* Main Title section mimicking the design */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-20"
                    >
                        <div className="inline-block">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A5D54] tracking-wide uppercase mb-2">
                                APPLICATION IN VARIOUS SECTOR
                            </h1>
                            {/* Brown underline accent */}
                            <div className="h-[3px] bg-[#A47C5A] w-3/4 max-w-[400px]"></div>
                        </div>
                    </motion.div>

                    {/* Applications Layout */}
                    <div className="space-y-16 lg:space-y-24">
                        {applicationData.map((section) => (
                            <motion.div
                                key={section.category}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                className="w-full"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="text-[#6A7161] text-xl">◆</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#6A7161]">
                                        {section.category}
                                    </h2>
                                </div>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
                                    {section.items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.03 }}
                                            className="flex flex-col items-center group cursor-pointer"
                                        >
                                            <div className="w-full aspect-[4/3] overflow-hidden mb-4 shadow-sm border border-[#EBE8DE]">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <h3 className="text-sm md:text-base font-bold text-[#6A7161] text-center transition-colors group-hover:text-[#A47C5A]">
                                                {item.title}
                                            </h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </main>
        </>
    );
}
