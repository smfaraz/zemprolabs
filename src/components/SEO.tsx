import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  image = '/brand/zemprolabs-logo.png'
}) => {
  useEffect(() => {
    // 1. Update Title: strictly formatted as [Page Title] | Zemprolabs
    const cleanTitle = title.replace(/\s*\|\s*Zemprolabs.*$/i, '').trim();
    const fullTitle = `${cleanTitle} | Zemprolabs`;
    document.title = fullTitle;

    // 2. Helper to set or update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Set standard meta tags
    updateMetaTag('description', description);

    // 4. Set Open Graph tags
    updateMetaTag('og:site_name', 'Zemprolabs', true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', `https://zemprolabs.com${canonicalPath}`, true);
    updateMetaTag('og:image', `https://zemprolabs.com${image}`, true);

    // 5. Set Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `https://zemprolabs.com${image}`);

    // 6. Set Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://zemprolabs.com${canonicalPath}`);
  }, [title, description, canonicalPath, image]);

  return null;
};
