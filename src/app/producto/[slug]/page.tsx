import { products } from "../../../data/products";
import { productContent } from "../../../data/productContent";
import { siteConfig, whatsappLinks } from "../../../lib/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

function absoluteImage(src: string) {
  return src.startsWith("http") ? src : `${siteConfig.siteUrl}${src}`;
}

function categoryHref(category: string) {
  if (category === "Materiales") return "/materiales";
  if (["Maquinaria", "Pesaje", "Alimentos", "Seguridad"].includes(category))
    return "/maquinaria";
  return "/servicios";
}

// 1. GENERAR METADATOS SEO PARA CADA PRODUCTO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  const content = productContent[product.slug];
  const title = content?.seoTitle ?? `${product.name} en Guadalajara`;
  const description =
    content?.seoDescription ??
    `${product.name} en Tonalá y Guadalajara. ${product.description}`;
  const url = `${siteConfig.siteUrl}/producto/${product.slug}`;
  const image = absoluteImage(product.image);

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.name} Guadalajara`,
      `${product.name} Tonalá`,
      ...siteConfig.keywords.slice(0, 6),
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_MX",
      type: "website",
      images: [{ url: image, alt: product.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// 2. GENERAR RUTAS ESTÁTICAS (Para carga rápida)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const content = productContent[product.slug];
  const url = `${siteConfig.siteUrl}/producto/${product.slug}`;

  // 3. DATOS ESTRUCTURADOS (Producto, migas de pan y preguntas frecuentes)
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: absoluteImage(product.image),
      description: content?.seoDescription ?? product.description,
      category: product.category,
      brand: { "@type": "Brand", name: "FastPack" },
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: "MXN",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: siteConfig.name },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: siteConfig.siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: product.category,
          item: `${siteConfig.siteUrl}${categoryHref(product.category)}`,
        },
        { "@type": "ListItem", position: 3, name: product.name, item: url },
      ],
    },
    ...(content?.faqs.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : []),
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#1e5f74]">Inicio</Link> 
          <span className="mx-2">/</span>
          <Link href={categoryHref(product.category)} className="hover:text-[#1e5f74]">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Imagen del Producto */}
            <div className="relative h-[400px] md:h-[600px] bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Información y CTA */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="mb-6">
                <span className="inline-block bg-yellow-400 text-[#1e5f74] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-[#1e5f74] mb-6 leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mb-10 text-gray-600">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Entrega Inmediata en GDL
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Garantía y Soporte Técnico
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Asesoría de Instalación
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLinks.quoteProduct(product.name)}
                  target="_blank"
                  className="flex-1 bg-[#25D366] text-white text-center py-4 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/></svg>
                  Cotizar por WhatsApp
                </a>
                <Link 
                  href="/#contacto"
                  className="flex-1 border-2 border-[#1e5f74] text-[#1e5f74] text-center py-4 rounded-xl font-bold hover:bg-[#1e5f74] hover:text-white transition-all"
                >
                  Más Información
                </Link>
              </div>
            </div>
          </div>
        </div>

        {content && (
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-100 p-8">
              <h2 className="text-2xl font-black text-[#1e5f74] mb-4">
                Descripción de {product.name}
              </h2>
              {content.longDescription.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              <h2 className="text-2xl font-black text-[#1e5f74] mt-8 mb-4">
                Preguntas frecuentes
              </h2>
              <div className="space-y-4">
                {content.faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-bold text-gray-800">{f.q}</h3>
                    <p className="text-gray-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="space-y-8">
              <section className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-black text-[#1e5f74] mb-4">Características</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {content.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
              <section className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-black text-[#1e5f74] mb-4">Aplicaciones</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {content.applications.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
              <section className="bg-[#1e5f74] text-white rounded-2xl p-8">
                <h2 className="text-xl font-black mb-2">Visítanos</h2>
                <p className="text-sm text-gray-100">{siteConfig.address.full}</p>
              </section>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}