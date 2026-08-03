import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const siteName = 'Evolve Profile Industries';
const brandName = 'EvolveWood';
const secondaryBrandName = 'Evolveprofile Industries';
const alternateBrands = [brandName, secondaryBrandName, 'Evolveprofile', 'EvolveWood'];
const defaultTitle = 'EvolveWood | Evolve Profile Industries - Recycled Plastic Lumber | Save The Nature | Plastic Lumber Manufacturer in India | HDPE Plastic Lumber | Recycled Plastic Lumber | Evolve Profile Industries';
const defaultDescription = 'EvolveWood by Evolve Profile Industries - India\'s leading manufacturer of recycled plastic lumber. 100% eco-friendly, termite proof, waterproof, fire retardant profiles for industrial, civil & furniture applications. Save The Nature. Evolve Profile Industries is a leading Plastic Lumber Manufacturer in India offering HDPE Plastic Lumber, Recycled Plastic Lumber, Plastic Wood, Plastic Boards, Plastic Profiles and sustainable plastic extrusion products for industrial, commercial and infrastructure applications.';
const defaultKeywords = 'EvolveWood, Evolve Profile Industries, Evolveprofile Industries, recycled plastic lumber, eco friendly packaging, termite proof wood, waterproof lumber, fire retardant profiles, save the nature, plastic wood India, evolveprofileindustries.com, Plastic Lumber, Plastic Lumber Manufacturer, Plastic Lumber Supplier, Plastic Lumber Exporter, Plastic Lumber India, HDPE Plastic Lumber, Recycled Plastic Lumber, Plastic Wood, Plastic Wood Boards, Plastic Timber, Plastic Lumber Products, Plastic Lumber Company, Plastic Profiles, Plastic Extrusion Manufacturer, Plastic Building Material, Plastic Industrial Profiles, Engineering Plastic Profiles, Eco Friendly Plastic Lumber, Plastic Composite Lumber, Industrial Plastic Boards, Construction Plastic Lumber, Heavy Duty Plastic Lumber, Plastic Lumber Manufacturer Gujarat, Plastic Lumber Manufacturer Rajkot, Plastic Lumber Exporter India, Plastic Lumber Supplier India, HDPE Plastic Boards, HDPE Plastic Sheets, Recycled Plastic Boards, Plastic Furniture Material, Plastic Outdoor Boards, Plastic Garden Lumber, Plastic Decking Material, Plastic Fence Boards, Plastic Lumber Planks, Plastic Lumber Sheets, Plastic Structural Profiles, Plastic Section Manufacturer, Plastic Extrusion Products, Plastic Industrial Components, Plastic Profile Supplier, Plastic Extrusion Company, Plastic Wood Alternatives, Maintenance Free Lumber, Weather Resistant Plastic Lumber, UV Resistant Plastic Lumber, Termite Proof Plastic Lumber, Green Building Material, Best Plastic Lumber Manufacturer in India, Best Plastic Lumber Supplier, Top Plastic Lumber Company, Plastic Lumber Exporter Gujarat, Plastic Lumber Price India, Buy Plastic Lumber Online, Plastic Boards Manufacturer, Plastic Lumber for Construction, Plastic Lumber for Furniture, Plastic Lumber for Outdoor Furniture, Plastic Lumber for Garden Furniture, Plastic Lumber for Marine Applications, Plastic Lumber for Landscaping, Plastic Lumber for Decking, Plastic Lumber for Fencing, Plastic Lumber for Park Benches, Plastic Lumber for Industrial Applications, Plastic Lumber Supplier Near Me, Wholesale Plastic Lumber India, Bulk Plastic Lumber Supplier, Plastic Lumber Ahmedabad, Plastic Lumber Morbi, Plastic Lumber Company India, Plastic Profile Manufacturer Gujarat, Plastic Extrusion Gujarat, Plastic Lumber Price, Plastic Wood Supplier, Plastic Boards Supplier, plastic lumber, plastic lumber gujrat, plastic lumber india';
const runtimeOrigin = typeof window !== 'undefined' ? window.location.origin : '';
const siteUrl = (import.meta.env.VITE_SITE_URL || runtimeOrigin || 'https://evolveprofileindustries.com').replace(/\/$/, '');
const defaultImage = `${siteUrl}/images/logo.png`;

const shouldUseExactTitle = (title = '') => {
    const normalizedTitle = title.toLowerCase();
    const knownNames = [siteName, ...alternateBrands].map((name) => name.toLowerCase());

    return knownNames.some((name) => normalizedTitle.includes(name));
};

const normalizeUrl = (url, pathname) => {
    if (url) {
        return url.startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
    }

    return `${siteUrl}${pathname === '/' ? '' : pathname}`;
};

export default function SEO({ title, description, image, url, keywords }) {
    const location = useLocation();
    const pageTitle = title ? (shouldUseExactTitle(title) ? title : `${title} | ${siteName}`) : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const canonicalUrl = normalizeUrl(url, location.pathname);
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            alternateName: brandName,
            url: siteUrl,
            logo: defaultImage,
            description: defaultDescription,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            alternateName: `${brandName} | ${secondaryBrandName}`,
            url: siteUrl,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': siteUrl
                },
                location.pathname !== '/' ? {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': title ? title.split(/[-|–]/)[0].trim() : location.pathname.split('/')[1],
                    'item': `${siteUrl}${location.pathname}`
                } : null
            ].filter(Boolean)
        }
    ];

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={metaImage} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
