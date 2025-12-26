'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Automatiza tu Llenado",
    highlight: "Precisión Total",
    description: "Llenadoras lineales para líquidos y viscosos. Control exacto de dosificación para evitar desperdicios y aumentar tu producción.",
    image: "/maquinaria/llenadora.jpeg",
    link: "/maquinaria",
    cta: "Ver Llenadoras"
  },
  {
    id: 2,
    title: "Pesaje Inteligente",
    highlight: "Multicabezal",
    description: "Básculas de 10 cabezales con pantalla táctil. Velocidad de hasta 65 paquetes por minuto para optimizar tu proceso de empaque.",
    image: "/maquinaria/basculacontadora.jpeg",
    link: "/maquinaria",
    cta: "Ver Básculas"
  },
  {
    id: 3,
    title: "Etiquetado Perfecto",
    highlight: "Serie MT-200",
    description: "Soluciones automáticas para envases cilíndricos. Alta velocidad y acabado profesional sin arrugas para tu marca.",
    image: "/maquinaria/etiquetadora.jpeg",
    link: "/maquinaria",
    cta: "Ver Etiquetadoras"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Evita problemas de hidratación con el video
  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  return (
    // CAMBIO 1: Quitamos el bg-[#1e5f74] de aquí y lo ponemos como fallback abajo
    <section id="inicio" className="relative overflow-hidden min-h-[600px] flex items-center bg-gray-900">
        
        {/* --- VIDEO DE FONDO --- */}
        <div className="absolute inset-0 z-0">
            {/* Fallback color por si el video tarda en cargar */}
            <div className="absolute inset-0 bg-[#1e5f74] z-[-1]"></div>
            
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                {/* Verifica que este sea el nombre EXACTO en tu carpeta public/maquinaria */}
                <source src="/videopruccion.mp4" type="video/mp4" />
            </video>
            
            {/* Capa oscura semitransparente para que el texto resalte */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* --- CONTENIDO --- */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0 z-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Texto (Izquierda) */}
            <div className="md:w-1/2 relative min-h-[300px] flex items-center">
               {slides.map((slide, index) => (
                 <div 
                    key={slide.id} 
                    className={`transition-all duration-1000 absolute top-0 left-0 w-full ${index === current ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
                 >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
                      {slide.title} <br/>
                      <span className="text-yellow-400">{slide.highlight}</span>
                    </h1>
                    <p className="text-lg text-gray-100 mb-8 max-w-lg leading-relaxed drop-shadow-lg font-medium">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href={slide.link} 
                        className="bg-yellow-400 text-[#1e5f74] px-8 py-3 rounded-full font-bold text-center hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/50"
                      >
                        {slide.cta}
                      </Link>
                      <a 
                        href="https://wa.me/5213319932097" 
                        target="_blank" 
                        className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white hover:text-[#1e5f74] transition-all backdrop-blur-sm"
                      >
                        Asesoría Gratuita
                      </a>
                    </div>
                 </div>
               ))}
            </div>

            {/* Imagen Cambiante (Derecha) */}
            <div className="md:w-1/2 flex justify-center relative h-[350px] w-full items-center mt-8 md:mt-0">
                <div className="absolute w-[80%] h-[90%] border-2 border-white/30 rounded-xl transform rotate-2"></div>
                
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                         <div className="relative w-[85%] h-full p-4 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-2xl border border-white/20 overflow-hidden">
                            <Image 
                                src={slide.image} 
                                alt={slide.title} 
                                fill
                                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                         </div>
                    </div>
                ))}
            </div>

          </div>
        </div>
      </section>
  );
}