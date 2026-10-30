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
    phoneNumbers: ['+91 8141514311', '+91 9737835404'],
    primaryPhoneHref: 'tel:+918141514311',
    email: 'evolveprofileindustries@gmail.com',
    whatsappNumber: '+91 8141514311',
    whatsappUrl: 'https://wa.me/918141514311?text=Hello%20EvolveWood%2C%20I%20am%20interested%20in%20your%20products.',
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
        description: '30mm x 30mm to 150mm x 150mm sizes available. Customizable load bearing capacity.',
        image: '/images/square-bar.jpg'
    },
    {
        id: 'rectangle-bars',
        title: 'Rectangles Bars',
        description: 'Various sizes available: 85x25mm,85× 35 mm , 100x50mm, 20x85mm etc. Developed as per customer design.',
        image: '/images/rectangle-bar.jpg'
    },
    {
        id: 'Round Bars ',
        title: 'Round Bars ',
        description: '32mm,40mm,50mm,65mm,80mm,100mm,125mm, etc Various Sizes Available in DiameterWise',
        image: '/images/Round-bars.jpeg',
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
        image: '/images/fabricated-product.jpg',
        imageClassName: 'object-contain p-4 mix-blend-normal'
    },
    {
        id: 'Corner protection ',
        title: 'Corner protection ',
        description: 'L-shaped recycled plastic profiles for edges, framing, support, and protective packaging applications.',
        image: '/images/Corner-protection.jpeg',
        frameClassName: 'bg-[#8e8e8e]',
        imageClassName: 'object-contain p-5 mix-blend-normal',
        previewFrameClassName: 'bg-[#8e8e8e]',
        previewImageClassName: 'w-full max-w-4xl object-contain p-8'
    },

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
        slug: 'what-is-plastic-lumber',
        title: 'What Is Plastic Lumber? Complete Guide to Applications, Benefits & Types',
        category: 'Education',
        date: 'October 30, 2026',
        author: 'EvolveWood Team',
        excerpt: 'Plastic lumber is a sustainable alternative to traditional wood made from recycled plastic. Learn what it is, how it is made, where it is used, and why it is a smarter choice for modern construction.',
        content: `## What Is Plastic Lumber?

Plastic lumber is a wood-alternative product manufactured primarily from recycled plastic materials such as High-Density Polyethylene (HDPE), Low-Density Polyethylene (LDPE), or Polypropylene (PP). It is engineered to replicate the dimensions, workability, and structural properties of traditional timber — without any of wood's natural weaknesses.

At Evolve Profile Industries, we manufacture EvolveWood plastic lumber from 100% recycled plastic waste. Every profile we produce diverts plastic from landfills and replaces timber that would otherwise require cutting down trees.

## How Is Plastic Lumber Made?

The manufacturing process follows a straightforward sequence:

**1. Plastic Collection & Sorting:** Post-consumer and post-industrial plastic waste is collected and sorted by polymer type. HDPE (the same plastic used in milk bottles and industrial containers) is the most common feedstock for structural plastic lumber.

**2. Cleaning & Shredding:** The sorted plastic is thoroughly washed to remove contaminants, labels, and organic residues. It is then shredded into uniform flakes for consistent processing.

**3. Compounding & Additives:** The clean plastic flakes are blended with performance additives including UV stabilizers (to prevent sun degradation), fire retardants (for safety compliance), colorants, and sometimes reinforcing fillers for enhanced strength.

**4. Extrusion:** The blended material is fed into industrial extrusion machinery that melts, mixes, and forces the plastic through a precision die. The shape and size of the die determines the final profile — square bars, rectangle bars, round bars, or custom shapes.

**5. Cooling & Cutting:** The extruded profile is cooled in a water bath, then cut to the required lengths. At this stage the lumber achieves its final dimensional stability.

## Types of Plastic Lumber

EvolveWood manufactures several profile types to suit different applications:

**Square Bars:** Available from 30mm x 30mm up to 150mm x 150mm. Ideal for structural support, industrial dunnage, pipe separators, and furniture frames.

**Rectangle Bars:** Available in sizes like 85x25mm, 100x50mm, 85x35mm, and custom dimensions. Used for pallet frames, wall panelling, fencing rails, and shelving.

**Round Bars:** Available in diameters from 32mm to 125mm. Used for posts, handles, rollers, and marine piling.

**Corner Protection Profiles:** L-shaped profiles for edge protection, framing, and industrial packaging.

**Customized Profiles:** Designed and extruded to customer specifications — any shape, any dimension.

**Fabricated Products:** Complete assemblies including pallets, dunnage systems, saddles, and warehouse storage solutions.

## Key Properties of Plastic Lumber

What makes plastic lumber genuinely useful compared to wood is its combination of properties that timber simply cannot match in demanding environments:

- **100% Waterproof:** Plastic lumber absorbs virtually no moisture. It will not rot, swell, warp, or develop mold — even after decades of exposure to rain, humidity, or direct water contact.
- **Termite & Pest Proof:** Being 100% synthetic, plastic lumber provides no organic nutrition for termites, marine borers, or fungi. No chemical treatments are required.
- **Fire Retardant:** Our profiles include fire-retardant additives that significantly reduce flame spread in industrial environments.
- **UV Stabilized:** Colour pigments and UV stabilizers are compounded directly into the material, preventing fading, chalking, and surface degradation from prolonged sunlight exposure.
- **Chemical Resistant:** Plastic lumber withstands exposure to acids, alkalis, oils, and industrial solvents without degrading.
- **Zero Maintenance:** No painting, staining, sealing, or preservative treatments are ever needed. Clean with water.
- **Workable with Standard Tools:** Can be cut with a circular saw, drilled, routed, nailed, and screwed exactly like wood.

## Where Is Plastic Lumber Used?

The versatility of plastic lumber has led to its adoption across a wide range of industries:

**Industrial Applications:** Pipe and steel dunnage, structural supports, machinery bases, spacer profiles, billets packing, and export packaging.

**Civil & Infrastructure:** Pedestrian bridges, boardwalks, park furniture, road and garden fencing, retaining walls, and coastal marine structures.

**Storage & Warehousing:** Pallet alternatives, warehouse floor supports, godown storage solutions, and goods separators.

**Agriculture & Garden:** Raised garden beds, animal boundary fencing, trellis configurations, and farm support structures.

**Outdoor Furniture:** Park benches, picnic tables, outdoor seating, and landscaping elements that require zero maintenance.

**Automobile & Transport:** Heavy-duty wheel chocks, vehicle transport packaging, and aircraft ground support profiles.

## Plastic Lumber vs. Traditional Wood: A Direct Comparison

The choice between plastic lumber and wood often comes down to total cost of ownership over a project's lifetime, not just the upfront material cost.

Traditional wood requires regular maintenance: painting every 2-3 years, chemical treatment for termite prevention, replacement when rot sets in, and eventual disposal. In outdoor or industrial environments, wood typically needs replacing within 5-15 years.

EvolveWood plastic lumber, once installed, requires no maintenance, has an estimated service life exceeding 50 years, and can be recycled again at end of life. For applications in moisture-prone, chemical-exposed, or termite-risk environments, the lifecycle economics almost always favour plastic lumber.

## Why Choose EvolveWood Plastic Lumber?

Evolve Profile Industries manufactures EvolveWood profiles at our facility in Morbi, Gujarat — India's industrial hub. We supply to manufacturers, contractors, civil engineers, and institutions across India.

Our products are available in standard grades (natural grey/black) and can be manufactured in custom colours, custom dimensions, and custom cross-section profiles as per buyer specifications.

For quotes, technical specifications, or sample requests, contact us at evolveprofileindustries@gmail.com or call +91 8141514311.`,
        image: '/images/applications/warehouse.jpg'
    },
    {
        slug: 'the-future-of-recycled-packaging',
        title: 'The Future of Recycled Packaging in Industry',
        category: 'Sustainability',
        date: 'February 15, 2026',
        author: 'EvolveWood Team',
        excerpt: 'How recycled composite materials are reshaping the industrial packaging landscape — and why businesses are making the switch.',
        content: `## The Future of Recycled Packaging in Industry

The industrial packaging sector is undergoing a fundamental transformation. Driven by tightening environmental regulations, rising raw material costs, and genuine corporate commitment to sustainability, businesses across India and globally are actively replacing conventional wood and metal packaging with recycled composite alternatives.

At the forefront of this shift is recycled plastic lumber — a durable, weather-resistant material manufactured from post-consumer and post-industrial plastic waste. As a manufacturer of recycled plastic profiles since our founding, Evolve Profile Industries has witnessed this transition firsthand.

## Why Industrial Packaging Is Changing

**Regulatory Pressure:** India's Plastic Waste Management Rules, and international standards in export markets, increasingly restrict the use of untreated wood packaging (ISPM 15 requirements). Plastic lumber requires no phytosanitary treatment, simplifying export compliance.

**Supply Chain Economics:** Traditional wooden packaging is subject to timber price volatility, seasonal availability, and significant waste in cutting and fabrication. Recycled plastic profiles are manufactured to precise dimensions with minimal waste.

**Contamination Risk:** Wooden dunnage and pallets absorb moisture, harbour bacteria, fungi, and insects. For pharmaceutical, food, and electronics industries — where contamination can result in costly product losses — plastic packaging eliminates this risk entirely.

**Total Cost of Ownership:** Wood pallets and dunnage need frequent replacement due to breakage, rot, and pest damage. Recycled plastic equivalents last 5-10x longer under the same conditions, dramatically reducing replacement and disposal costs.

## Applications in Industrial Packaging

Recycled plastic lumber is used throughout industrial supply chains:

**Dunnage Systems:** Custom-fabricated plastic dunnage holds components safely during transit, eliminating part-to-part contact and vibration damage. Unlike foam or wood alternatives, plastic dunnage can be cleaned, sanitised, and reused indefinitely.

**Pipe & Steel Separator Profiles:** Square and rectangle plastic bars separate coiled steel, pipes, and heavy profiles during storage and transport. They prevent surface damage and provide stable stacking without risk of rot or moisture absorption.

**Export Packaging:** Plastic lumber frames and bases for export crates meet international phytosanitary standards without fumigation or heat treatment.

**Machinery Bases:** Heavy equipment is often shipped on plastic skids that provide stable, moisture-proof support during sea freight.

## The Environmental Case

India generates approximately 3.5 million tonnes of plastic waste annually, of which a significant portion enters landfills or open environments. Manufacturing recycled plastic lumber from this waste stream diverts plastic from disposal while simultaneously displacing the need to harvest timber.

For every tonne of recycled plastic lumber produced, approximately one tonne of plastic waste is diverted from landfill. At the same time, because it replaces wood, it reduces the pressure on natural forests — which continue to be lost at a rate of approximately 10 billion trees per year net globally.

## Looking Forward

As sustainability reporting becomes mandatory for listed companies in India under SEBI's BRSR framework, procurement teams are under increasing pressure to document the environmental credentials of their supply chains — including packaging materials.

Recycled plastic lumber provides a measurable, documentable sustainability credential: a known quantity of recycled content, a verifiable reduction in virgin material consumption, and a longer service life that reduces packaging disposal frequency.

For industrial buyers looking to upgrade their packaging to a solution that is durable, compliant, and genuinely sustainable — EvolveWood recycled plastic lumber is worth evaluating. Contact us at evolveprofileindustries@gmail.com or +91 8141514311.`,
        image: '/images/applications/warehouse.jpg'
    },
    {
        slug: 'why-choose-evolve-wood',
        title: 'Why Choose EvolveWood Plastic Lumber?',
        category: 'Green Manufacturing',
        date: 'January 28, 2026',
        author: 'EvolveWood Team',
        excerpt: 'A comparative analysis of durability, cost, and environmental impact — why EvolveWood plastic lumber is the smarter long-term choice.',
        content: '### Why Choose EvolveWood Plastic Lumber?\n\nWhen evaluating long-term materials for modern construction, outdoor living, and industrial projects, traditional timber faces persistent challenges—rot, insect infestation, water damage, and high recurring maintenance costs. **EvolveWood** (by Evolve Profile Industries) addresses these limitations by engineering high-performance plastic lumber from recycled high-density polyethylene (HDPE).\n\n#### Key Reasons to Choose EvolveWood:\n\n1. **Maximum Durability & Weather Resistance:**\n* **Impervious to Moisture:** Unlike wood, EvolveWood absorbs practically no water, making it completely resistant to rotting, warping, swelling, and mold growth.\n* **Termite & Pest Proof:** Being 100% synthetic, it offers zero organic nutrients for termites, marine borers, or fungi.\n* **UV & Thermal Stability:** Built with UV-stabilized additives to withstand harsh sunlight without peeling, flaking, or major fading.\n\n2. **Low Cost of Ownership & Zero Maintenance:**\n* **No Painting or Staining:** Color pigments are embedded directly into the material core.\n* **Hassle-Free Cleaning:** Requires only soap and water to wash down, eliminating expensive chemical treatments or yearly sealing.\n\n3. **100% Eco-Friendly & Sustainable:**\n* Diverts tons of post-consumer and industrial plastic waste away from landfills and oceans.\n* Protects natural forests by serving as a direct substitute for natural timber.\n\n4. **Easy Workability with Standard Tools:**\n* Can be sawed, drilled, routed, and fastened using standard woodworking tools without splitting, chipping, or splintering.',
        image: '/images/image.png',
        insideImage: '/images/why-choose-evolvewood-inside.jpg'
    },
    {
        slug: 'waste-to-best',
        title: 'Waste to Best: The Eco-Lumber Revolution',
        category: 'Innovation',
        date: 'July 20, 2026',
        author: 'EvolveWood Team',
        excerpt: 'Discover our innovative manufacturing process that transforms discarded plastic waste into premium, highly durable structural profiles.',
        content: '## The Eco-Lumber Revolution: Closing the Loop with Plastic Waste\n\nIn a world drowning in plastic pollution, a groundbreaking innovation is offering a glimpse into a sustainable future. Plastic lumber, a durable and versatile material made entirely from recycled plastics, is emerging as a critical component in the fight against climate change and waste management.\n\nThis isn\'t just about reusing a few bottles; it\'s a fundamental shift in how we view and utilize waste. The journey of plastic waste, from discarded items to high-quality construction material, is a testament to human ingenuity and a vital step towards a circular economy.\n\nThe process, as beautifully illustrated in this educational display, is a meticulously engineered sequence:\n\n**1. Sourcing and Sorting:** The journey begins at the recycling center. A vast array of plastic waste, from household bottles and containers to industrial scraps, is gathered and sorted. This initial phase is crucial, as different types of plastic (HDPE, LDPE, PP, etc.) have varying properties and require specific processing.\n\n**2. Transformation Through Technology:** The sorted plastics are then fed into powerful machines that shred them into small, manageable flakes. This is followed by a thorough washing process to remove any contaminants, such as labels, adhesive residues, or organic matter. The resulting clean plastic flakes are then melted down and combined with additives. These additives enhance the material\'s properties, improving its strength, UV resistance, and color stability.\n\n**3. Extrusion and Finishing:** The molten plastic blend is then extruded under high pressure through a die, forming continuous lengths of plastic lumber. The shape and size of the die determine the final dimensions of the planks and boards, allowing for a wide range of products, from 2x4s and 4x4s to intricate decking profiles.\n\n**4. The Final Product: A Sustainable Alternative:** The resulting plastic lumber is a remarkable material. It\'s exceptionally durable, resisting rot, insects, and splintering, making it ideal for outdoor applications like decking, benches, landscaping, and fencing. It\'s also virtually maintenance-free, requiring no staining, sealing, or painting.\n\n**The Benefits Extend Far Beyond Durability:**\n\n* **Waste Reduction:** Plastic lumber diverts massive amounts of plastic from landfills and oceans, directly addressing the global waste crisis.\n* **Resource Conservation:** By using recycled materials, we reduce our reliance on virgin resources like timber, protecting forests and natural habitats.\n* **Carbon Footprint Reduction:** The production of plastic lumber generally has a lower carbon footprint than traditional materials like pressure-treated wood.\n* **End-of-Life Recycling:** Plastic lumber can often be recycled again at the end of its long life cycle, truly closing the loop on plastic waste.',
        image: '/images/waste-to-best-main.jpg',
        insideImage: '/images/waste-to-best-inside.jpg'
    },
    {
        slug: 'go-green-sustainable-building',
        title: 'Go Green: Sustainable Alternatives for Construction',
        category: 'Sustainability',
        date: 'July 15, 2026',
        author: 'EvolveWood Team',
        excerpt: 'Embrace sustainable construction practices with our 100% recycled eco-friendly products that require zero maintenance.',
        content: 'The construction and landscaping industries are among the highest consumers of natural resources, particularly timber. The "Go Green" movement emphasizes the urgent need to switch to sustainable, eco-friendly alternatives. EvolveWood provides the perfect solution by offering 100% recycled plastic lumber that serves as a direct drop-in replacement for traditional wood.\n\nChoosing EvolveWood means saving trees and reducing deforestation. Furthermore, our products require absolutely zero maintenance—no painting, no staining, and no toxic chemical treatments are needed. This significantly reduces the chemical runoff into soil and water bodies, ensuring that your building projects are genuinely green from the ground up. Build smarter, build stronger, and go green with EvolveWood.',
        image: '/images/go-green-main.png',
        insideImage: '/images/go-green-inside.png'
    }
];
