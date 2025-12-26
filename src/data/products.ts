export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string; // URL de la imagen
}

export const products: Product[] = [
  // --- PRODUCTOS CON FOTOS REALES (Prioridad Alta) ---
  { 
    id: 1, 
    name: "Báscula Multicabezal (10 Cabezales)", 
    category: "Pesaje", 
    description: "Pesadora de alta precisión con 10 tolvas de 2.5L. Rango de pesado 10-1000g y velocidad de hasta 65 paquetes por minuto. Pantalla táctil de 7\" para control total.", 
    image: "/maquinaria/basculacontadora.jpeg" 
  },
  { 
    id: 2, 
    name: "Etiquetadora Automática MT-200", 
    category: "Maquinaria", 
    description: "Especializada para envases cilíndricos (2-12cm diámetro). Alta producción de 60-90 botellas/min. Sistema de precisión para un etiquetado sin burbujas ni arrugas.", 
    image: "/maquinaria/etiquetadora.jpeg" 
  },
  { 
    id: 3, 
    name: "Llenadora Lineal GT4 (Viscosos)", 
    category: "Maquinaria", 
    description: "Equipo de 4 boquillas ideal para líquidos y viscosos (geles, cremas). Rango de llenado 100ml-1000ml. Estructura sanitaria de fácil limpieza y bajo consumo de aire.", 
    image: "/maquinaria/llenadora.jpeg" 
  },
  { 
    id: 4, 
    name: "Selladora de Cajas Industrial", 
    category: "Maquinaria", 
    description: "Automatiza el cerrado de cajas de cartón con cinta adhesiva superior e inferior. Bandas de tracción laterales para un flujo constante y cierre uniforme.", 
    image: "/maquinaria/selladora.jpeg" 
  },
  { 
    id: 5, 
    name: "Flejadora Semiautomática", 
    category: "Maquinaria", 
    description: "Solución robusta de mesa para asegurar paquetes rápidamente con fleje. Operación sencilla, silenciosa y eficiente para líneas de empaque continuo.", 
    image: "/maquinaria/flejadora.jpeg" 
  },

  // --- OTROS PRODUCTOS (Complementarios) ---
  { id: 6, name: "Paletizadora Automática ACMI", category: "Maquinaria", description: "Agrupación de alta velocidad para botellas y latas con máxima estabilidad.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Paletizadora+ACMI" },
  { id: 7, name: "Túnel de Termoencogido", category: "Maquinaria", description: "Acabado profesional para empaques múltiples usando calor controlado.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Tunel+Termo" },
  
  // Materiales (Pregis / Consumibles)
  { id: 16, name: "Sistema de Papel Easypack", category: "Materiales", description: "Crea relleno de papel 100% reciclado para proteger envíos.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Papel+Easypack" },
  { id: 17, name: "Rollo de Burbuja Industrial", category: "Materiales", description: "Protección clásica contra impactos para productos frágiles.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Rollo+Burbuja" },
  { id: 18, name: "Película Stretch (Playo)", category: "Materiales", description: "Mayor resistencia al rasgado con menos capas. Ahorro garantizado.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Playo+Stretch" },
  
  // Logística
  { id: 25, name: "Sistema de Carga Abatible", category: "Vehicular", description: "Solución para Mercedes-Benz: convierte asientos en área de carga plana.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Sistema+Abatible" },
  { id: 30, name: "Servicio Logística Tijuana", category: "Servicios", description: "Gestión aduanal, recolección y envío seguro de mercancía.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Logistica+Aduanal" },
];