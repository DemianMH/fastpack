export default function Footer() {
  return (
    <footer className="bg-[#133b4a] text-white pt-12 pb-6" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Branding y Redes */}
        <div>
          <h2 className="text-2xl font-black mb-4">Fast<span className="text-yellow-400">Pack</span>.</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Expertos en soluciones integrales de empaque y maquinaria en Jalisco. 
            Optimizamos tu línea de producción con tecnología de punta.
          </p>
          
          {/* Iconos de Redes Sociales */}
          <div className="flex space-x-5">
            {/* Facebook */}
            <a href="https://www.facebook.com/fast.pack.2025?_rdr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors" title="Facebook">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/fast_pack126/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors" title="Instagram">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.148 3.228-1.667 4.771-4.919 4.919-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-3.228-.148-4.771-1.667-4.919-4.919C2.175 15.585 2.163 15.205 2.163 12s.012-3.585.069-4.85C2.38 3.922 3.923 2.38 7.15 2.233 8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.272 2.695.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.623 6.78 6.981 6.98 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.623 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.623-6.78-6.98-6.98C15.667.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@fast.pack" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition-colors" title="TikTok">
             <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v10.45c0 3.47-2.81 6.29-6.29 6.29-3.47 0-6.29-2.81-6.29-6.29 0-3.47 2.81-6.29 6.29-6.29.8 0 1.6.16 2.33.47v4.43c-.4-.23-.85-.35-1.31-.35-1.09 0-1.97.88-1.97 1.97 0 1.09.88 1.97 1.97 1.97 1.09 0 1.97-.88 1.97-1.97V.02z"/></svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com/@fastpackgdl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition-colors" title="YouTube">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Contacto Directo */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Contacto Ventas</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-yellow-400">📍</span>
              <span>Av. Guadalajara #2716,<br/>Zapopan, Jalisco.</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-yellow-400">📱</span>
              <a href="https://wa.me/5213319932097" className="hover:text-yellow-300">33 1993 2097</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-yellow-400">📱</span>
              <a href="https://wa.me/5213321696031" className="hover:text-yellow-300">33 2169 6031</a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Mapa */}
        <div className="w-full h-48 bg-gray-600 rounded-lg overflow-hidden relative">
             {/* Se puede optimizar luego usando Google Maps Embed API oficial si se desea */}
             <iframe 
                src="https://www.google.com/maps?q=Av.+Guadalajara+2716,+Zapopan,+Jalisco&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy">
             </iframe>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-8 pt-4 border-t border-gray-700">
        © {new Date().getFullYear()} FastPack GDL. Todos los derechos reservados.
      </div>
    </footer>
  );
}