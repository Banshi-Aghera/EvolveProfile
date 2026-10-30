import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const siteName = 'Evolve Profile Industries';
const brandName = 'EvolveWood';
const siteUrl = 'https://www.evolveprofileindustries.com';
const defaultImage = `${siteUrl}/images/logo.png`;

// Page-specific SEO defaults — concise, keyword-targeted
const defaultTitle = 'Plastic Lumber Manufacturer in India | EvolveWood — Evolve Profile Industries';
const defaultDescription =
    'Evolve Profile Industries manufactures EvolveWood — India\'s premium recycled plastic lumber. Waterproof, termite-proof, fire-retardant HDPE profiles for industrial, civil & outdoor use. Morbi, Gujarat.';

const shouldUseExactTitle = (title = '') => {
    const normalized = title.toLowerCase();
    const knownNames = [siteName, brandName, 'evolveprofile', 'evolvewood'].map(n => n.toLowerCase());
    return knownNames.some(n => normalized.includes(n));
};

const normalizeUrl = (url, pathname) => {
    if (url) {
        return url.startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
    }
    return `${siteUrl}${pathname === '/' ? '' : pathname}`;
};

export default function SEO({ title, description, image, url, noindex = false, ogType = 'website', schema }) {
    const location = useLocation();
    const pageTitle = title ? (shouldUseExactTitle(title) ? title : `${title} | ${siteName}`) : defaultTitle;
    const metaDescription = description || defaultDescription;
    const canonicalUrl = normalizeUrl(url, location.pathname);
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    // Base structured data — injected on every page
    const baseStructuredData = [
        {
            '@context': 'https://schema.org',
            '@type': ['Organization', 'ManufacturingBusiness'],
            '@id': `${siteUrl}/#organization`,
            name: siteName,
            alternateName: [brandName, 'Evolve Profile Industries', 'EvolveWood'],
            url: siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: defaultImage,
                width: 512,
                height: 512
            },
            description: defaultDescription,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rajkot Highway, At- Sakat Sanala',
                addressLocality: 'Morbi',
                addressRegion: 'Gujarat',
                postalCode: '363641',
                addressCountry: 'IN'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-8141514311',
                contactType: 'sales',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi', 'Gujarati']
            },
            sameAs: [
                'https://www.evolveprofileindustries.com'
            ]
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            name: siteName,
            url: siteUrl,
            publisher: { '@id': `${siteUrl}/#organization` }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: siteUrl
                },
                location.pathname !== '/' ? {
                    '@type': 'ListItem',
                    position: 2,
                    name: title ? title.split(/[-|–|]/)[0].trim() : location.pathname.replace('/', '').replace(/-/g, ' '),
                    item: `${siteUrl}${location.pathname}`
                } : null
            ].filter(Boolean)
        }
    ];

    const extraSchema = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const structuredData = [...baseStructuredData, ...extraSchema];

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${siteName} — ${brandName}`} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
