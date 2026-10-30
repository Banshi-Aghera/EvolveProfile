/**
 * prerender.mjs — Static HTML pre-rendering for SEO
 *
 * This script runs after `vite build` and generates static HTML copies
 * of each route with correct SEO metadata pre-injected in the <head>.
 *
 * When Googlebot crawls these URLs, it sees meaningful content immediately
 * without needing to execute JavaScript — solving the CSR visibility problem.
 *
 * Usage: node scripts/prerender.mjs
 * Called automatically via: npm run build (see package.json postbuild)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = resolve(__dirname, '../dist');

// SEO metadata for each route — must match SEO.jsx page-level props
const ROUTES = {
    '/': {
        title: 'Plastic Lumber Manufacturer in India | EvolveWood — Evolve Profile Industries',
        description: 'Evolve Profile Industries manufactures EvolveWood recycled plastic lumber in Morbi, Gujarat. 100% eco-friendly, waterproof, termite-proof and fire-retardant HDPE profiles for industry.',
        h1: 'India\'s Premier Recycled Plastic Lumber Manufacturer',
        bodySnippet: 'EvolveWood by Evolve Profile Industries is India\'s leading manufacturer of recycled plastic lumber (HDPE). Our products are 100% eco-friendly, waterproof, termite-proof, fire-retardant and maintenance-free. We supply plastic lumber profiles to industrial, civil, agriculture, storage and furniture sectors across India. Based in Morbi, Gujarat.'
    },
    '/about': {
        title: 'About Evolve Profile Industries | Recycled Plastic Lumber Manufacturer, Morbi Gujarat',
        description: 'Evolve Profile Industries — manufacturers of EvolveWood recycled plastic lumber in Morbi, Gujarat. Turning plastic waste into durable, eco-friendly industrial profiles since inception.',
        h1: 'About Evolve Profile Industries',
        bodySnippet: 'Evolve Profile Industries is engaged in manufacturing of recycled plastic packaging materials. Our flagship brand EvolveWood transforms plastic waste into durable, waterproof, termite-proof lumber for industrial and civil use.'
    },
    '/why-us': {
        title: 'Plastic Lumber vs Wood | Why Choose EvolveWood — Evolve Profile Industries',
        description: 'Discover why EvolveWood recycled plastic lumber outperforms traditional wood. Zero maintenance, 100% waterproof, termite-proof, fire-retardant, and eco-friendly. Made in Morbi, Gujarat.',
        h1: 'Why Choose EvolveWood Over Traditional Wood?',
        bodySnippet: 'EvolveWood plastic lumber is 100% termite-proof, waterproof, fire-retardant, and requires zero maintenance — unlike traditional wood which rots, warps, and needs regular chemical treatment. Made from 100% recycled plastic waste in Morbi, Gujarat.'
    },
    '/products': {
        title: 'Recycled Plastic Lumber Profiles | HDPE Square, Rectangle & Round Bars — EvolveWood',
        description: 'Buy EvolveWood recycled HDPE plastic lumber profiles: square bars (30–150mm), rectangle bars, round bars, corner protection & custom fabricated solutions. Manufacturer in Morbi, Gujarat.',
        h1: 'Recycled Plastic Lumber Profile Range',
        bodySnippet: 'EvolveWood manufactures square bars (30mm–150mm), rectangle bars, round bars, corner protection profiles, customized profiles, and fabricated products from 100% recycled HDPE plastic. All profiles are waterproof, termite-proof, and maintenance-free.'
    },
    '/products/square-bars': {
        title: 'Plastic Square Bars | Recycled HDPE Lumber 30mm–150mm — EvolveWood',
        description: 'EvolveWood recycled HDPE plastic square bars available from 30x30mm to 150x150mm. High load-bearing capacity, waterproof, termite-proof. Manufacturer in Morbi, Gujarat, India.',
        h1: 'Recycled Plastic Square Bar Profiles',
        bodySnippet: 'EvolveWood square bars are manufactured from recycled HDPE in sizes 30x30mm to 150x150mm. Ideal for industrial dunnage, pipe support, structural spacers, and furniture frames.'
    },
    '/products/rectangle-bars': {
        title: 'Plastic Rectangle Bars | Recycled HDPE Lumber Profiles — EvolveWood',
        description: 'EvolveWood recycled HDPE plastic rectangle bars: 85x25mm, 85x35mm, 100x50mm, and custom dimensions. Waterproof, termite-proof. Manufacturer in Gujarat, India.',
        h1: 'Recycled Plastic Rectangle Bar Profiles',
        bodySnippet: 'EvolveWood rectangle bars are available in standard sizes (85x25mm, 100x50mm) and custom dimensions. Used for pallets, fencing rails, shelving, and packaging frames.'
    },
    '/products/round-bars': {
        title: 'Plastic Round Bars | Recycled HDPE 32mm–125mm Diameter — EvolveWood',
        description: 'EvolveWood recycled HDPE plastic round bars from 32mm to 125mm diameter. Waterproof, termite-proof, UV-resistant. Plastic lumber manufacturer in Morbi, Gujarat.',
        h1: 'Recycled Plastic Round Bar Profiles',
        bodySnippet: 'EvolveWood round bars are available from 32mm to 125mm diameter. Used for posts, rollers, marine piling, and structural applications.'
    },
    '/products/customized-profiles': {
        title: 'Custom Plastic Lumber Profiles | Made to Order — EvolveWood',
        description: 'Evolve Profile Industries manufactures custom recycled plastic lumber profiles to any shape and dimension. HDPE extrusion profiles made to your specifications. Morbi, Gujarat.',
        h1: 'Custom Recycled Plastic Lumber Profiles',
        bodySnippet: 'EvolveWood customized profiles are manufactured to your exact dimensions and cross-section specifications using recycled HDPE plastic extrusion technology.'
    },
    '/products/fabricated-products': {
        title: 'Fabricated Plastic Lumber Products | Pallets, Dunnage & Saddles — EvolveWood',
        description: 'EvolveWood fabricated plastic lumber products: pallets, dunnage systems, saddles, and custom industrial assemblies. 100% recycled HDPE. Manufacturer in Gujarat, India.',
        h1: 'Fabricated Recycled Plastic Products',
        bodySnippet: 'EvolveWood fabricated products include industrial pallets, dunnage systems, pipe saddles, and custom assemblies made from 100% recycled HDPE plastic lumber.'
    },
    '/products/corner-protection': {
        title: 'Plastic Corner Protection Profiles | Recycled HDPE — EvolveWood',
        description: 'EvolveWood L-shaped recycled HDPE plastic corner protection profiles for packaging, framing, and edge protection. Waterproof and termite-proof. Morbi, Gujarat manufacturer.',
        h1: 'Recycled Plastic Corner Protection Profiles',
        bodySnippet: 'EvolveWood corner protection profiles are L-shaped recycled HDPE extrusions used for edge protection in packaging, construction framing, and industrial applications.'
    },
    '/applications': {
        title: 'Plastic Lumber Applications | Industrial, Civil, Marine & Outdoor Uses — EvolveWood',
        description: 'Explore EvolveWood recycled plastic lumber applications: industrial pipe support, bridge & boardwalk, warehouse dunnage, outdoor furniture, fencing, marine structures & agriculture.',
        h1: 'Plastic Lumber Applications Across Industries',
        bodySnippet: 'EvolveWood is used in industrial dunnage, pipe support, civil bridges, marine structures, warehouse storage, agriculture, outdoor furniture, fencing, and automobile transport applications.'
    },
    '/features': {
        title: 'EvolveWood Features | Waterproof, Termite-Proof, Fire-Retardant Plastic Lumber',
        description: 'EvolveWood plastic lumber is 100% waterproof, termite & pest proof, fire retardant, UV-protected, chemical resistant, and maintenance-free. Superior to traditional wood in every way.',
        h1: 'EvolveWood Plastic Lumber Features & Properties',
        bodySnippet: 'EvolveWood plastic lumber features: 100% waterproof, termite & pest proof, fire retardant, chemical resistant, UV-protected, thermal resistant, odorless, and maintenance-free.'
    },
    '/blog': {
        title: 'Blog & Insights | Plastic Lumber, Sustainability & Green Building — EvolveWood',
        description: 'Read the EvolveWood blog: insights on recycled plastic lumber, sustainable construction, eco-friendly materials, and green building practices in India.',
        h1: 'EvolveWood Blog — Insights on Sustainable Materials',
        bodySnippet: 'Latest articles on plastic lumber, recycled materials, sustainable construction, and green building from the EvolveWood team at Evolve Profile Industries.'
    },
    '/blog/what-is-plastic-lumber': {
        title: 'What Is Plastic Lumber? Complete Guide — EvolveWood',
        description: 'Learn what plastic lumber is, how it is made from recycled HDPE, its properties, applications across industries, and why it outperforms traditional wood.',
        h1: 'What Is Plastic Lumber? Complete Guide to Applications, Benefits & Types',
        bodySnippet: 'Plastic lumber is a wood-alternative product manufactured from recycled HDPE plastic. It is waterproof, termite-proof, maintenance-free, and used across industrial, civil, and outdoor applications.'
    },
    '/blog/the-future-of-recycled-packaging': {
        title: 'The Future of Recycled Packaging in Industry — EvolveWood Blog',
        description: 'How recycled composite plastic lumber is reshaping industrial packaging — dunnage, pallets, and export packaging with zero contamination risk and superior durability.',
        h1: 'The Future of Recycled Packaging in Industry',
        bodySnippet: 'Recycled plastic lumber is transforming industrial packaging — from pipe dunnage and export crates to pharmaceutical-grade pallets — offering durability, compliance, and genuine sustainability.'
    },
    '/blog/why-choose-evolve-wood': {
        title: 'Why Choose EvolveWood Plastic Lumber? — EvolveWood Blog',
        description: 'A comparative analysis of EvolveWood plastic lumber vs traditional timber — durability, maintenance costs, environmental impact, and workability.',
        h1: 'Why Choose EvolveWood Plastic Lumber?',
        bodySnippet: 'EvolveWood plastic lumber outperforms traditional timber in durability, maintenance cost, weather resistance, and environmental impact.'
    },
    '/blog/waste-to-best': {
        title: 'Waste to Best: The Eco-Lumber Revolution — EvolveWood Blog',
        description: 'How Evolve Profile Industries transforms discarded plastic waste into premium structural lumber profiles through an engineered recycling process.',
        h1: 'Waste to Best: The Eco-Lumber Revolution',
        bodySnippet: 'The journey from plastic waste to premium plastic lumber: collection, sorting, shredding, compounding, extrusion, and the finished durable product.'
    },
    '/blog/go-green-sustainable-building': {
        title: 'Go Green: Sustainable Alternatives for Construction — EvolveWood Blog',
        description: 'Embrace sustainable construction with 100% recycled EvolveWood plastic lumber — zero maintenance, no painting, no chemical treatments required.',
        h1: 'Go Green: Sustainable Alternatives for Construction',
        bodySnippet: 'EvolveWood provides 100% recycled plastic lumber as a drop-in replacement for wood in construction and landscaping — zero maintenance, zero chemical runoff.'
    },
    '/contact': {
        title: 'Contact Evolve Profile Industries | Request a Plastic Lumber Quote — Morbi, Gujarat',
        description: 'Contact Evolve Profile Industries for recycled plastic lumber quotes. Manufacturer in Morbi, Gujarat. Call +91 8141514311 or email evolveprofileindustries@gmail.com.',
        h1: 'Contact Evolve Profile Industries',
        bodySnippet: 'Get in touch with Evolve Profile Industries for recycled plastic lumber quotes, custom profile specifications, and technical enquiries. Located in Morbi, Gujarat.'
    }
};

const SITE_URL = 'https://www.evolveprofileindustries.com';

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function buildPrerenderedHtml(baseHtml, route, meta) {
    const canonicalUrl = `${SITE_URL}${route === '/' ? '' : route}`;
    const safeTitle = escapeHtml(meta.title);
    const safeDesc = escapeHtml(meta.description);
    const safeH1 = escapeHtml(meta.h1);
    const safeSnippet = escapeHtml(meta.bodySnippet);

    // Replace static index.html title & description
    let html = baseHtml
        .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
        .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${safeDesc}" />`)
        .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" />`);

    // Inject prerendered content into root div for SEO (hidden visually but readable by crawlers)
    // React will hydrate over this on client load
    const prerenderContent = `
    <div id="root" data-prerendered="true">
      <div style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap" aria-hidden="true">
        <h1>${safeH1}</h1>
        <p>${safeSnippet}</p>
        <nav>
          <ul>
            <li><a href="/">Home — Plastic Lumber Manufacturer India</a></li>
            <li><a href="/products">Products — Recycled Plastic Lumber Profiles</a></li>
            <li><a href="/applications">Applications — Industrial &amp; Civil Uses</a></li>
            <li><a href="/about">About Evolve Profile Industries</a></li>
            <li><a href="/why-us">Why Choose EvolveWood?</a></li>
            <li><a href="/features">Features — Waterproof, Termite-Proof, Fire-Retardant</a></li>
            <li><a href="/blog">Blog &amp; Insights</a></li>
            <li><a href="/contact">Contact — Morbi, Gujarat</a></li>
          </ul>
        </nav>
      </div>
    </div>`;

    html = html.replace('<div id="root"></div>', prerenderContent);

    // Add Open Graph & Twitter for this specific page
    const ogTags = `
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />`;

    html = html.replace('</head>', `${ogTags}\n  </head>`);

    return html;
}

async function prerender() {
    console.log('\n🔍 Starting prerender process...\n');

    if (!existsSync(distDir)) {
        console.error('❌ dist/ directory not found. Run `npm run build` first.');
        process.exit(1);
    }

    const indexHtmlPath = join(distDir, 'index.html');
    if (!existsSync(indexHtmlPath)) {
        console.error('❌ dist/index.html not found.');
        process.exit(1);
    }

    const baseHtml = readFileSync(indexHtmlPath, 'utf-8');
    let successCount = 0;

    for (const [route, meta] of Object.entries(ROUTES)) {
        const html = buildPrerenderedHtml(baseHtml, route, meta);

        if (route === '/') {
            // Overwrite root index.html
            writeFileSync(indexHtmlPath, html);
            console.log(`✅ /  →  dist/index.html`);
        } else {
            // Create route directory and index.html
            const routeDir = join(distDir, route);
            mkdirSync(routeDir, { recursive: true });
            const outPath = join(routeDir, 'index.html');
            writeFileSync(outPath, html);
            console.log(`✅ ${route}  →  dist${route}/index.html`);
        }
        successCount++;
    }

    console.log(`\n🎉 Prerendering complete! Generated ${successCount} pages.\n`);
    console.log('📋 Next step: Deploy the dist/ folder to Vercel.\n');
}

prerender().catch(err => {
    console.error('❌ Prerender failed:', err);
    process.exit(1);
});
