import {
    ShieldCheck, Droplets, Flame, Recycle, Sun,
    Thermometer, Hammer, Wind, Leaf, Award,
    Factory, Warehouse, Ship, Armchair, Zap
} from 'lucide-react';

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'Features', href: '/features' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export const contactInfo = {
    address: 'Rajkot Highway, At- Sakat Sanala, Pin-363641, Ta- Morbi, Dist-Morbi',
    addressLines: ['Rajkot Hwy, At- Sakat Sanala 363641', 'Ta- Morbi, Dist-Morbi'],
    phoneNumbers: ['+91 9737835404'],
    primaryPhoneHref: 'tel:+919737835404',
    email: 'evolveprofileindustries@gmail.com',
    whatsappNumber: '+91 9737835404',
    whatsappUrl: 'https://wa.me/919737835404?text=Hello%20EvolveWood%2C%20I%20am%20interested%20in%20your%20products.',
};

export const features = [
    {
        name: 'Fire Retardant',
        icon: Flame,
        image: '/images/ppt_extracted/ppt_image_6.jpg',
        description: 'High fire-retardant properties ensure operational safety in industrial and civil environments.'
    },
    {
        name: 'Chemical Resistant',
        icon: Factory,
        image: '/images/ppt_extracted/ppt_image_7.jpg',
        description: 'Withstands exposure to harsh chemicals, acids, and industrial solvents without degradation.'
    },
    {
        name: 'Eco Friendly',
        icon: Leaf,
        image: '/images/ppt_extracted/ppt_image_8.jpg',
        description: 'Made from 100% recycled plastic waste, saving trees and reducing landfill burden.'
    },
    {
        name: 'Termite Proof',
        icon: ShieldCheck,
        image: '/images/ppt_extracted/ppt_image_9.jpg',
        description: '100% termite and pest proof — unlike traditional wood, no risk of biological decay.'
    },
    {
        name: 'Easy Installation',
        icon: Hammer,
        image: '/images/ppt_extracted/ppt_image_10.jpg',
        description: 'Works exactly like wood — can be cut, drilled, screwed, and nailed with standard tools.'
    },
    {
        name: 'Waterproof',
        icon: Droplets,
        image: '/images/ppt_extracted/ppt_image_11.jpg',
        description: 'Completely waterproof and moisture resistant. Will not rot, swell, or warp.'
    },
    {
        name: 'Durable & Strong',
        icon: Award,
        image: '/images/ppt_extracted/ppt_image_12.jpg',
        description: 'Exceptional structural strength and load-bearing capacity for heavy-duty industrial use.'
    },
    {
        name: 'Recyclable',
        icon: Recycle,
        image: '/images/ppt_extracted/ppt_image_13.jpg',
        description: '100% recyclable at end of life — a true circular economy product.'
    },
    {
        name: 'UV Protection',
        icon: Sun,
        image: '/images/ppt_extracted/ppt_image_14.jpg',
        description: 'UV stabilized to prevent fading, chalking, and degradation from prolonged sun exposure.'
    },
    {
        name: 'No Odor',
        icon: Wind,
        image: '/images/ppt_extracted/ppt_image_15.jpg',
        description: 'Completely odorless — free from harmful chemical smells and safe for all environments.'
    },
    {
        name: 'Thermal Resistant',
        icon: Thermometer,
        image: '/images/ppt_extracted/ppt_image_16.jpg',
        description: 'Excellent thermal insulation properties, reducing heat transfer in structures.'
    },
];

export const products = [
    {
        id: 'square-bars',
        title: 'Square Bars',
        description: '60mm x 60mm to 150mm x 150mm sizes available. Customizable load bearing capacity.',
        image: '/images/square-bar.jpg'
    },
    {
        id: 'rectangle-bars',
        title: 'Rectangles Bars',
        description: 'Various sizes available: 85x25mm, 100x50mm, 20x85mm etc. Developed as per customer design.',
        image: '/images/rectangle-bar.jpg'
    },
    {
        id: 'angle-profiles',
        title: 'Angle Profiles',
        description: 'L-shaped recycled plastic profiles for edges, framing, support, and protective packaging applications.',
        image: '/images/angle-profile.svg',
        frameClassName: 'bg-[#8e8e8e]',
        imageClassName: 'object-contain p-5 mix-blend-normal',
        previewFrameClassName: 'bg-[#8e8e8e]',
        previewImageClassName: 'w-full max-w-4xl object-contain p-8'
    },
    {
        id: 'customized-profiles',
        title: 'Customized Profiles',
        description: 'Profiles developed as per specific customer requirements and designs.',
        image: '/images/customized-profile.jpg'
    },
    {
        id: 'fabricated-products',
        title: 'Fabricated Products',
        description: 'Saddles, Dunnage, Pallets, and other custom fabrication solutions.',
        image: '/images/fabricated-product.jpg'
    }
];

export const industries = [
    {
        title: 'Industrial Application',
        items: [
            { name: 'Pipe and Steel', image: '/images/applications/pipe-and-steel.jpg' },
            { name: 'Chemical', image: '/images/applications/chemical.jpg' },
            { name: 'Pharmaceutical', image: '/images/applications/pharmaceutical.jpg' },
            { name: 'Metal Coil Export', image: '/images/applications/metal-coil.jpg' },
            { name: 'Structural', image: '/images/applications/structural.jpg' },
            { name: 'Heavy Machinery', image: '/images/applications/heavy-machinery.jpg' },
            { name: 'Billets Packing', image: '/images/applications/billets-packing.jpg' },
            { name: 'Spacer Uses', image: '/images/applications/spacer-uses.jpg' },
            { name: 'Aircraft', image: '/images/applications/aircraft.jpg' }
        ]
    },
    {
        title: 'Storage Application',
        items: [
            { name: 'Warehouse', image: '/images/applications/warehouse.jpg' },
            { name: 'Godown', image: '/images/applications/godown.jpg' },
            { name: 'Potato Flakes', image: '/images/applications/potato-flakes.jpg' }
        ]
    },
    {
        title: 'Civil Application',
        items: [
            { name: 'Marine', image: '/images/applications/marine.jpg' },
            { name: 'Garden Fencing', image: '/images/applications/garden-fencing.jpg' },
            { name: 'Road Fencing', image: '/images/applications/road-fencing.jpg' },
            { name: 'Fencing', image: '/images/applications/fencing.jpg' },
            { name: 'Garden Street', image: '/images/applications/garden-street.jpg' },
            { name: 'Retaining Walls', image: '/images/applications/retaining-walls.jpg' },
            { name: 'Mountain Staircase', image: '/images/applications/mountain-staircase.jpg' },
            { name: 'Plants Raised Beds', image: '/images/applications/plants-raised-beds.jpg' },
            { name: 'Agriculture', image: '/images/applications/agriculture.jpg' },
            { name: 'Animal Boundary', image: '/images/applications/animal-boundary.jpg' }
        ]
    },
    {
        title: 'Furniture',
        items: [
            { name: 'Benches', image: '/images/applications/benches.jpg' },
            { name: 'Table', image: '/images/applications/table.jpg' }
        ]
    }
];

export const blogs = [
    {
        slug: 'the-future-of-recycled-packaging',
        title: 'The Future of Recycled Packaging in Industry',
        category: 'Sustainability',
        date: 'February 15, 2026',
        author: 'Environment Team',
        excerpt: 'How recycled composite materials are reshaping the industrial packaging landscape.',
        content: 'Full article content goes here...',
        image: '/images/applications/warehouse.jpg'
    },
    {
        slug: 'why-choose-evolve-wood',
        title: 'Why Choose Evolve Wood Over Traditional Timber',
        category: 'Green Manufacturing',
        date: 'January 28, 2026',
        author: 'Tech Lead',
        excerpt: 'A comparative analysis of durability, cost, and environmental impact.',
        content: 'Full article content goes here...',
        image: '/images/applications/benches.jpg'
    }
];
