import Image from "next/image";
import Link from "next/link"; // Importar Link
import { products } from "../../data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maquinaria de Empaque | FastPack Guadalajara",
  description: "Catálogo de paletizadoras, selladoras de cajas, túneles de encogido y maquinaria de final de línea en Jalisco.",
};

export default function MaquinariaPage() {
  const filteredProducts = products.filter(p => 
    ["Maquinaria", "Pesaje", "Alimentos", "Seguridad"].includes(p.category)
  );

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-[#1e5f74] text-white py-16 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/133b4a/ffffff?text=Fondo+Maquinaria')] bg-cover bg-center opacity-20"></div>
         <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Catálogo de <span className="text-yellow-400">Maquinaria</span></h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">Automatización y eficiencia para tu final de línea.</p>
         </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100">
                <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full text-[#1e5f74] shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 text-xl mb-3 leading-tight">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{product.description}</p>
                  
                  {/* Botones de acción */}
                  <div className="flex flex-col gap-3">
                      <Link 
                        href={`/producto/${product.slug}`}
                        className="w-full block border-2 border-[#1e5f74] text-[#1e5f74] text-center py-2 rounded-lg font-bold hover:bg-[#1e5f74] hover:text-white transition-colors"
                      >
                        Ver Detalles
                      </Link>

                      <a 
                        href={`https://wa.me/5213319932097?text=Hola,%20estoy%20interesado%20en%20la%20maquinaria:%20${product.name}`}
                        target="_blank"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/></svg>
                        Cotizar
                      </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}