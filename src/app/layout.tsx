import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig, whatsappLinks } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

  title: {
    default:
      "FastPack GDL | Maquinaria de Empaque y Embalaje en Zapopan, Jalisco",
    template: "%s | FastPack GDL",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  alternates: {
    canonical: siteConfig.siteUrl,
  },

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  openGraph: {
    title: "FastPack GDL | Maquinaria de Empaque en Zapopan",
    description: siteConfig.shortDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/maquinaria/llenadora.jpeg",
        width: 1200,
        height: 630,
        alt: "FastPack GDL - maquinaria de empaque en Zapopan, Jalisco",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FastPack GDL | Maquinaria de Empaque en Zapopan",
    description: siteConfig.shortDescription,
    images: ["/maquinaria/llenadora.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "industrial",

  other: {
    "geo.region": "MX-JAL",
    "geo.placename": "Zapopan, Jalisco",
    "business:contact_data:country_name": "Mexico",
    "business:contact_data:region": "Jalisco",
    "business:contact_data:locality": "Zapopan",
    "business:contact_data:postal_code": siteConfig.address.postalCode,
    "business:contact_data:street_address": `${siteConfig.address.street}, ${siteConfig.address.neighborhood}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    image: `${siteConfig.siteUrl}/maquinaria/llenadora.jpeg`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phones.main.e164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.neighborhood}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Zapopan",
      },
      {
        "@type": "City",
        name: "Guadalajara",
      },
      {
        "@type": "State",
        name: "Jalisco",
      },
      {
        "@type": "Country",
        name: "México",
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.youtube,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phones.main.e164,
        contactType: "sales",
        areaServed: "MX",
        availableLanguage: ["Spanish"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phones.secondary.e164,
        contactType: "sales",
        areaServed: "MX",
        availableLanguage: ["Spanish"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <html lang="es-MX" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>

      <body className="antialiased bg-slate-50">
        <Navbar />

        {children}

        <Footer />

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a
            href={whatsappLinks.main}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 relative"
            title={`WhatsApp ventas ${siteConfig.phones.main.label}`}
            aria-label={`Contactar por WhatsApp al ${siteConfig.phones.main.label}`}
          >
            <FaWhatsapp className="text-white text-4xl" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Ventas
            </span>
          </a>

          <a
            href={whatsappLinks.secondary}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-[#128C7E] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 relative"
            title={`WhatsApp ventas ${siteConfig.phones.secondary.label}`}
            aria-label={`Contactar por WhatsApp al ${siteConfig.phones.secondary.label}`}
          >
            <FaWhatsapp className="text-white text-4xl" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Ventas 2
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}