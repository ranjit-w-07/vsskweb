import { useEffect } from 'react';

const SEOHelmet = ({
  title = 'श्री विठ्ठल सहकारी साखर कारखाना लि., वेणुनगर / गुरसाळे',
  description = 'Factory Information Portal - Complete information about sugar factory operations, farmer services, and cooperative society details.',
  keywords = 'श्री विठ्ठल सहकारी साखर कारखाना, sugar factory, junnar, ambegaon, cooperative society, factory information, farmer services, महाराष्ट्र, Maharashtra',
  canonical = 'https://factory-info-portal.vercel.app',
  ogImage = '/og-image.jpg',
  structuredData = null,
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Marathi, Hindi, English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:site_name', 'श्री विठ्ठल सहकारी साखर कारखाना', true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Update structured data
    const defaultStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'श्री विठ्ठल सहकारी साखर कारखाना लि.',
      url: 'https://factory-info-portal.vercel.app',
      description: description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Junnar/Ambegaon',
        addressRegion: 'Maharashtra',
        addressCountry: 'India',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
      },
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData || defaultStructuredData);
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null;
};

export default SEOHelmet;
