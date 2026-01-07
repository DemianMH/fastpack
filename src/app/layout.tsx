import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// 1. Importamos el icono oficial de WhatsApp desde la librería que acabas de instalar
import { FaWhatsapp } from "react-icons/fa"; 

export const metadata: Metadata = {
  title: "FastPack | Maquinaria de Empaque y Embalaje en Guadalajara",
  description: "Expertos en maquinaria de empaque, selladoras, básculas y materiales de embalaje en Jalisco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-slate-50">
        <Navbar />
        {children}
        <Footer />
        
        {/* Botones Flotantes con React Icons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          
          {/* Botón 1: Ventas General (Verde Clásico WhatsApp) */}
          <a 
            href="https://wa.me/5213321696031" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 relative"
            title="Ventas General"
          >
            {/* Usamos el componente FaWhatsapp directamente */}
            <FaWhatsapp className="text-white text-4xl" />
            
            {/* Tooltip opcional (Etiqueta flotante) */}
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Ventas
            </span>
          </a>
          
          {/* Botón 2: Soporte / Otra línea (Verde Oscuro Institucional) */}
          <a 
            href="https://wa.me/5213319932097" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-[#128C7E] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 relative"
            title="Soporte Técnico"
          >
            <FaWhatsapp className="text-white text-4xl" />
             
             {/* Tooltip opcional */}
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Soporte
            </span>
          </a>

        </div>
      </body>
    </html>
  );
}