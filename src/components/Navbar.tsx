'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Para saber en qué página estamos y marcar el link activo

  const isActive = (path: string) => pathname === path ? "text-yellow-400" : "text-white hover:text-yellow-300";
  const isActiveMobile = (path: string) => pathname === path ? "bg-[#1e5f74] text-yellow-400" : "text-gray-200 hover:bg-[#1e5f74] hover:text-white";


  return (
    <nav className="bg-[#133b4a] shadow-lg sticky top-0 z-50 border-b border-[#1e5f74]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
             <div className="bg-white p-1 rounded-md group-hover:shadow-md transition-all">
                {/* Reemplazar src con '/image_661363.png' */}
               <h1 className="text-2xl font-black tracking-tighter text-[#1e5f74]">
                 Fast<span className="text-yellow-400">Pack</span>
               </h1>
             </div>
             <span className="text-xs md:text-sm font-light text-gray-200 hidden sm:block">Maquinaria de Empaque</span>
          </Link>
          
          {/* Desktop Menu Links (Rutas Absolutas) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm font-bold transition-colors uppercase tracking-wider`}>Inicio</Link>
              <Link href="/maquinaria" className={`${isActive('/maquinaria')} px-3 py-2 rounded-md text-sm font-bold transition-colors uppercase tracking-wider`}>Maquinaria</Link>
              <Link href="/materiales" className={`${isActive('/materiales')} px-3 py-2 rounded-md text-sm font-bold transition-colors uppercase tracking-wider`}>Materiales</Link>
              <Link href="/servicios" className={`${isActive('/servicios')} px-3 py-2 rounded-md text-sm font-bold transition-colors uppercase tracking-wider`}>Servicios</Link>
              <Link href="#contacto" className="bg-yellow-400 text-[#1e5f74] hover:bg-yellow-300 ml-4 px-5 py-2 rounded-full text-sm font-black transition-transform transform hover:scale-105 uppercase tracking-wider shadow-md">
                Cotizar
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#1e5f74] inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#133b4a] border-t border-[#1e5f74]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className={`${isActiveMobile('/')} block px-3 py-2 rounded-md text-base font-bold uppercase`}>Inicio</Link>
            <Link href="/maquinaria" onClick={() => setIsOpen(false)} className={`${isActiveMobile('/maquinaria')} block px-3 py-2 rounded-md text-base font-bold uppercase`}>Maquinaria</Link>
            <Link href="/materiales" onClick={() => setIsOpen(false)} className={`${isActiveMobile('/materiales')} block px-3 py-2 rounded-md text-base font-bold uppercase`}>Materiales</Link>
             <Link href="/servicios" onClick={() => setIsOpen(false)} className={`${isActiveMobile('/servicios')} block px-3 py-2 rounded-md text-base font-bold uppercase`}>Servicios</Link>
            <Link href="#contacto" onClick={() => setIsOpen(false)} className="block bg-yellow-400 text-[#1e5f74] px-3 py-2 rounded-md text-base font-black mt-4 text-center uppercase shadow-md">
              Cotizar Ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}