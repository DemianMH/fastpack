export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string; // URL de la imagen
  slug: string; // Nuevo campo para la URL amigable
}

export const products: Product[] = [
  // --- MAQUINARIA (Prioridad Alta) ---
  { 
    id: 1, 
    name: "Báscula Multicabezal Automática (10 Cabezales)", 
    category: "Pesaje", 
    description: "Pesadora multicabezal de alta precisión con 10 tolvas de 2.5L. Ideal para productos a granel. Rango de 10-1000g y velocidad de 65 p/m. Pantalla táctil industrial.", 
    image: "/maquinaria/basculacontadora.jpeg",
    slug: "bascula-multicabezal-automatica-10-cabezales"
  },
  { 
    id: 2, 
    name: "Etiquetadora Automática de Botellas MT-200", 
    category: "Maquinaria", 
    description: "Máquina etiquetadora para envases cilíndricos y redondos (2-12cm diámetro). Alta producción industrial de 60-90 botellas por minuto. Etiquetado sin burbujas.", 
    image: "/maquinaria/etiquetadora.jpeg",
    slug: "etiquetadora-automatica-botellas-mt200"
  },
  { 
    id: 3, 
    name: "Llenadora Lineal de Líquidos Viscosos GT4", 
    category: "Maquinaria", 
    description: "Llenadora industrial de 4 boquillas para líquidos, geles y viscosos. Rango de llenado 100ml-1000ml. Acero inoxidable grado alimenticio y sistema neumático.", 
    image: "/maquinaria/llenadora.jpeg",
    slug: "llenadora-lineal-liquidos-viscosos-gt4"
  },
  { 
    id: 4, 
    name: "Selladora de Cajas de Cartón (Top & Bottom)", 
    category: "Maquinaria", 
    description: "Cerradora de cajas automática con cinta adhesiva superior e inferior. Bandas laterales para ajuste de cajas. Optimiza el final de línea de empaque.", 
    image: "/maquinaria/selladora.jpeg",
    slug: "selladora-cajas-carton-automatica"
  },
  { 
    id: 5, 
    name: "Flejadora Semiautomática de Mesa", 
    category: "Maquinaria", 
    description: "Flejadora de paquetes rápida y silenciosa. Ideal para asegurar cajas de cartón con fleje de polipropileno. Indispensable para logística y envíos.", 
    image: "/maquinaria/flejadora.jpeg",
    slug: "flejadora-semiautomatica-mesa"
  },

  // --- MATERIALES (Insumos) ---
  { 
    id: 16, 
    name: "Bobinas de Poliolefina y Polipropileno", 
    category: "Materiales", 
    description: "Película plástica termoencogible de alta transparencia y resistencia. Bobinas industriales para empaque de productos múltiples y protección.", 
    image: "/maquinaria/bobinas.jpeg",
    slug: "bobinas-poliolefina-polipropileno"
  },
  { 
    id: 17, 
    name: "Rollo de Burbuja Industrial (Protección)", 
    category: "Materiales", 
    description: "Material de empaque de burbuja de aire para amortiguación. Protege productos frágiles contra golpes durante el transporte y envíos.", 
    image: "https://placehold.co/600x400/1e5f74/ffffff?text=Rollo+Burbuja",
    slug: "rollo-burbuja-industrial"
  },
  { 
    id: 18, 
    name: "Película Stretch (Playo) Alto Rendimiento", 
    category: "Materiales", 
    description: "Playo industrial para paletizar. Película estirable de alta resistencia al rasgado con menos capas. Asegura tu carga en tarimas.", 
    image: "https://placehold.co/600x400/1e5f74/ffffff?text=Playo+Stretch",
    slug: "pelicula-stretch-playo-industrial"
  },
  
  // --- OTROS & LOGÍSTICA ---
  { 
    id: 6, 
    name: "Paletizadora Automática ACMI", 
    category: "Maquinaria", 
    description: "Robot paletizador de alta velocidad para botellas, latas y cajas. Estabilidad de carga garantizada.", 
    image: "https://placehold.co/600x400/1e5f74/ffffff?text=Paletizadora+ACMI", 
    slug: "paletizadora-automatica-acmi" 
  },
  { 
    id: 25, 
    name: "Sistema de Carga Abatible Vehicular", 
    category: "Vehicular", 
    description: "Adaptación para Mercedes-Benz y vans de carga: convierte asientos en área plana para maximizar espacio.", 
    image: "https://placehold.co/600x400/1e5f74/ffffff?text=Sistema+Abatible", 
    slug: "sistema-carga-abatible-vehiculos" 
  },
  { 
    id: 7, 
    name: "Túnel de Termoencogido", 
    category: "Maquinaria", 
    description: "Acabado profesional para empaques múltiples usando calor controlado.", 
    image: "https://placehold.co/600x400/1e5f74/ffffff?text=Tunel+Termo", 
    slug: "tunel-termoencogido-industrial" 
  },
  { 
    id: 30, 
    name: "Logística y Paquetería Tijuana-GDL", 
    category: "Servicios", 
    description: "Servicio integral de importación, recolección y envío de mercancía desde Tijuana a todo el interior de la República.", 
    image: "https://placehold.co/600x400/1e5f74/ffffff?text=Logistica+Aduanal", 
    slug: "servicio-logistica-paqueteria-tijuana" 
  },
];