import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://fastpackgdl.com/sitemap.xml', // Asegúrate que coincida con tu dominio
  };
}