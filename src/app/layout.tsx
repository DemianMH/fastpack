import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa"; 

// URL base de tu sitio (cámbialo cuando tengas el dominio final, por ahora usa el de Netlify o el final)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fastpackgdl.com"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FastPack | Maquinaria de Empaque y Embalaje en Guadalajara",
    template: "%s | FastPack GDL"
  },
  description: "Venta de maquinaria de empaque (llenadoras, etiquetadoras, básculas), materiales de embalaje y servicios logísticos en Zapopan, Jalisco. Soluciones industriales.",
  keywords: [
    "maquinaria de empaque", "embalaje guadalajara", "selladoras de cajas", 
    "etiquetadoras automaticas", "básculas industriales", "playo", 
    "llenadoras de liquidos", "automatización industrial", "Zapopan", "Jalisco"
  ],
  authors: [{ name: "FastPack GDL" }],
  creator: "FastPack",
  publisher: "FastPack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph para Facebook/WhatsApp
  openGraph: {
    title: "FastPack | Soluciones de Empaque Industrial",
    description: "Expertos en maquinaria de empaque y materiales en Jalisco. Optimiza tu producción hoy.",
    url: siteUrl,
    siteName: "FastPack GDL",
    images: [
      {
        url: "/maquinaria/llenadora.jpeg", // Usamos una de tus mejores fotos
        width: 800,
        height: 600,
        alt: "Maquinaria FastPack",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  // Robots para asegurar indexación
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
  // Geo-tags para SEO Local
  other: {
    "geo.region": "MX-JAL",
    "geo.placename": "Zapopan",
    "geo.position": "20.7235;-103.3850", // Coordenadas aprox de Av Guadalajara
    "ICBM": "20.7235, -103.3850"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Esquema de Datos Estructurados para Negocio Local (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FastPack Maquinaria de Empaque",
    "image": `${siteUrl}/apple-touch-icon.png`,
    "description": "Proveedores de maquinaria de empaque, materiales de embalaje y logística en Guadalajara y todo México.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Guadalajara #2716",
      "addressLocality": "Zapopan",
      "addressRegion": "Jalisco",
      "postalCode": "45000", 
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.7235, 
      "longitude": -103.3850
    },
    "url": siteUrl,
    "telephone": "+523319932097",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fast.pack.2025",
      "https://www.instagram.com/fast_pack126/",
      "https://www.tiktok.com/@fast.pack",
      "https://youtube.com/@fastpackgdl"
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Inyectamos el JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-50">
        
        <Navbar />
        {children}
        <Footer />
        
        {/* Botones Flotantes */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a 
            href="https://wa.me/5213319932097" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 relative"
            title="Ventas General"
            aria-label="Contactar por WhatsApp Ventas"
          >
            <FaWhatsapp className="text-white text-4xl" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Ventas
            </span>
          </a>
          
          <a 
            href="https://wa.me/5213330125998" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-[#128C7E] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 relative"
            title="Soporte Técnico"
            aria-label="Contactar por WhatsApp Soporte"
          >
            <FaWhatsapp className="text-white text-4xl" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Soporte
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}