import Image from "next/image";
import { products } from "../../data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Logísticos y Vehiculares | FastPack",
  description: "Soluciones de paquetería desde Tijuana, gestión aduanal y adaptaciones de carga para vehículos.",
};

export default function ServiciosPage() {
    // Filtramos logística, vehicular y servicios
  const filteredProducts = products.filter(p => 
    ["Logística", "Vehicular", "Servicios"].includes(p.category)
  );

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-[#1e5f74] text-white py-16 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/0f2e3d/ffffff?text=Fondo+Logistica')] bg-cover bg-center opacity-20"></div>
         <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Servicios <span className="text-yellow-400">Logísticos</span></h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">Más allá del empaque: soluciones de transporte y adaptaciones vehiculares.</p>
         </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100">
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#133b4a]/80 to-transparent h-1/2"></div>
                  <div className="absolute bottom-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full text-[#1e5f74]">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 text-xl mb-3 leading-tight">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{product.description}</p>
                  <a 
                    href={`https://wa.me/5213319932097?text=Hola,%20necesito%20información%20sobre%20el%20servicio:%20${product.name}`}
                    target="_blank"
                     className="w-full flex items-center justify-center gap-2 bg-[#1e5f74] text-white text-center py-3 rounded-lg font-bold hover:bg-[#133b4a] transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/></svg>
                    Más Información
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}