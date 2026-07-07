import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import HeroCarousel from "../components/HeroCarousel";
import { siteConfig, whatsappLinks } from "../lib/site";

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="min-h-screen">
      <HeroCarousel />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm">
              FastPack GDL en Zapopan, Jalisco
            </span>

            <h1 className="text-3xl md:text-5xl font-black text-[#1e5f74] mt-3">
              Maquinaria de Empaque, Materiales de Embalaje y Soluciones
              Industriales
            </h1>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En FastPack GDL ayudamos a empresas de Guadalajara, Zapopan y
              todo México a mejorar sus procesos de empaque con llenadoras,
              etiquetadoras, básculas industriales, selladoras, flejadoras,
              película stretch, materiales de embalaje y asesoría técnica.
            </p>

            <p className="mt-4 text-gray-700 font-medium">
              Ubicación: {siteConfig.address.full}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/maquinaria"
              className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all border-l-4 border-[#1e5f74] group cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#1e5f74]">
                Maquinaria de Empaque →
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Llenadoras, etiquetadoras, básculas multicabezal, selladoras,
                flejadoras y maquinaria para optimizar líneas de producción.
              </p>
            </Link>

            <Link
              href="/materiales"
              className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all border-l-4 border-yellow-400 group cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600">
                Material de Embalaje →
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Película stretch, bobinas, materiales de protección y
                consumibles industriales para empaque, almacenaje y envíos.
              </p>
            </Link>

            <Link
              href="/servicios"
              className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all border-l-4 border-[#1e5f74] group cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#1e5f74]">
                Servicios y Logística →
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Asesoría, cotización, soluciones de empaque y apoyo logístico
                para negocios que buscan eficiencia y mejor presentación.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section id="catalogo" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm">
                Catálogo destacado
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#1e5f74] mt-2">
                Soluciones para Empaque Industrial
              </h2>

              <p className="text-gray-600 mt-3 max-w-2xl">
                Cotiza maquinaria y materiales para mejorar velocidad,
                presentación, protección y control en tus procesos de empaque.
              </p>
            </div>

            <Link
              href="/maquinaria"
              className="text-[#1e5f74] font-bold hover:text-yellow-600 hover:underline mt-4 md:mt-0"
            >
              Ver catálogo completo →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} en FastPack GDL`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-[#1e5f74]">
                    {product.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 text-sm mb-2 leading-tight line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-xs mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>

                  <a
                    href={whatsappLinks.quoteProduct(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-[#1e5f74] text-white text-center py-2 rounded text-sm font-medium hover:bg-[#133b4a] transition-colors"
                  >
                    Cotizar por WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}