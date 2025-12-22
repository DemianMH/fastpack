import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  // Filtramos algunos productos destacados para la home (ej. los primeros 8)
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SECTION CON CARRUSEL */}
      <HeroCarousel />

      {/* 2. QUIÉNES SOMOS / SECTORES (Extracto) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e5f74]">Expertos en Procesos Industriales</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              En FastPack no solo vendemos máquinas, proveemos soluciones de ingeniería para reducir mermas y asegurar que tu producto llegue impecable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/maquinaria" className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all border-l-4 border-[#1e5f74] group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#1e5f74]">Maquinaria de Empaque →</h3>
              <p className="text-gray-600 text-sm">
                Distribuidores de marcas líderes. Automatiza el final de tu línea con tecnología de punta.
              </p>
            </Link>
            <Link href="/materiales" className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all border-l-4 border-yellow-400 group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600">Material de Embalaje →</h3>
              <p className="text-gray-600 text-sm">
                Sistemas sustentables y consumibles de alta resistencia para proteger tu carga.
              </p>
            </Link>
            <Link href="/servicios" className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all border-l-4 border-[#1e5f74] group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#1e5f74]">Servicios y Logística →</h3>
              <p className="text-gray-600 text-sm">
                Soluciones integrales de paquetería y adaptaciones vehiculares de carga.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTOS DESTACADOS (Breve vistazo) */}
      <section id="catalogo" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm">Vistazo Rápido</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e5f74] mt-2">Soluciones Destacadas</h2>
            </div>
            <Link href="/maquinaria" className="text-[#1e5f74] font-bold hover:text-yellow-600 hover:underline mt-4 md:mt-0">
                Ver Catálogo Completo →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-[#1e5f74]">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 text-sm mb-2 leading-tight line-clamp-2">{product.name}</h3>
                   {/* Descripción más corta para la home */}
                  <p className="text-gray-500 text-xs mb-4 line-clamp-2 flex-1">{product.description}</p>
                  <a 
                    href={`https://wa.me/5213319932097?text=Hola,%20vi%20en%20su%20página%20de%20inicio%20el%20producto:%20${product.name}`}
                    target="_blank"
                    className="w-full block bg-[#1e5f74] text-white text-center py-2 rounded text-sm font-medium hover:bg-[#133b4a] transition-colors"
                  >
                    Cotizar Rápido
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}