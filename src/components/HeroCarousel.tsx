'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Automatiza y Protege",
    highlight: "Tu Producción",
    description: "Soluciones integrales en maquinaria de empaque y materiales de embalaje. Tecnología que optimiza costos y logística.",
    image: "https://placehold.co/600x600/png?text=Paletizadora+ACMI", 
    link: "/maquinaria",
    cta: "Ver Maquinaria"
  },
  {
    id: 2,
    title: "Embalaje Seguro con",
    highlight: "Sistema Pregis",
    description: "Papel 100% reciclable y moldeable para proteger tus productos durante el envío. Sustentabilidad y resistencia garantizada.",
    image: "https://placehold.co/600x600/png?text=Sistema+Papel",
    link: "/materiales",
    cta: "Ver Materiales"
  },
  {
    id: 3,
    title: "Logística Integral",
    highlight: "Estratégica",
    description: "Servicio de recolección, gestión aduanal y envío de mercancía a todo México. Soluciones de transporte eficientes.",
    image: "https://placehold.co/600x600/png?text=Logistica+Nacional",
    link: "/servicios",
    cta: "Ver Servicios"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative bg-[#1e5f74] overflow-hidden min-h-[600px] flex items-center">
        
        {/* Fondo sutil (Opacidad reducida) */}
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/133b4a/ffffff?text=FastPack+Industrial')] bg-cover opacity-5 mix-blend-overlay"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Contenido de Texto (Izquierda) */}
            <div className="md:w-1/2 z-10 relative min-h-[300px] flex items-center">
               {slides.map((slide, index) => (
                 <div 
                    key={slide.id} 
                    className={`transition-all duration-1000 absolute top-0 left-0 w-full ${index === current ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
                 >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
                      {slide.title} <br/>
                      <span className="text-yellow-400">{slide.highlight}</span>
                    </h1>
                    <p className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
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
                        className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white hover:text-[#1e5f74] transition-all"
                      >
                        Asesoría Gratuita
                      </a>
                    </div>
                 </div>
               ))}
            </div>

            {/* Imagen Cambiante (Derecha) - Ajustada para ser menos "grande" */}
            <div className="md:w-1/2 flex justify-center relative h-[320px] w-full items-center mt-8 md:mt-0">
                {/* Marco decorativo (Más pequeño y centrado) */}
                <div className="absolute w-[80%] h-[90%] border-2 border-white/20 rounded-xl transform rotate-2"></div>
                
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                         {/* Contenedor de imagen más compacto */}
                         <div className="relative w-[85%] h-full p-6 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl border border-white/10">
                            <Image 
                                src={slide.image} 
                                alt={slide.title} 
                                width={500} 
                                height={500} 
                                className="object-contain max-h-full drop-shadow-xl"
                                priority={index === 0}
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