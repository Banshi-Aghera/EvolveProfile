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
    { name: 'Waterproof', icon: Droplets, description: 'Resistant to water damage and rot.' },
    { name: 'Fire Resistant', icon: Flame, description: 'High operational safety with fire retardant properties.' },
    { name: 'Termite Proof', icon: ShieldCheck, description: '100% termite and pest proof material.' },
    { name: 'Chemical Resistant', icon: Factory, description: 'Withstands exposure to harsh chemicals.' },
    { name: 'UV Protection', icon: Sun, description: 'UV stabilized to prevent fading and degradation.' },
    { name: 'Recyclable', icon: Recycle, description: '100% recyclable and eco-friendly.' },
    { name: 'Eco Friendly', icon: Leaf, description: 'Made from recycled materials, saving trees.' },
    { name: 'Durable', icon: Award, description: 'Long-lasting and tough for heavy-duty use.' },
    { name: 'Thermal Resistant', icon: Thermometer, description: 'Excellent thermal insulation properties.' },
    { name: 'Easy Installation', icon: Hammer, description: 'Works like wood, no special tools required.' },
    { name: 'No Odor', icon: Wind, description: 'Free from harmful chemical odors.' },
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
