import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const siteName = 'Evolve Profile Industries';
const brandName = 'EvolveWood';
const defaultTitle = `${siteName} | Recycled Plastic Packaging Materials`;
const defaultDescription = 'Evolve Profile Industries manufactures recycled plastic packaging materials, angle profiles, square bars, rectangular bars, customized profiles, and eco-friendly industrial solutions in India.';
const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://evolveprofileindustries.vercel.app').replace(/\/$/, '');
const defaultImage = `${siteUrl}/images/logo.png`;

export default function SEO({ title, description, image, url }) {
    const location = useLocation();
    const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const canonicalUrl = url || `${siteUrl}${location.pathname === '/' ? '' : location.pathname}`;
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            alternateName: brandName,
            url: siteUrl,
            logo: defaultImage,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            alternateName: brandName,
            url: siteUrl,
        },
    ];

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
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
