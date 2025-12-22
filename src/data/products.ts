export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string; // URL de la imagen
}

export const products: Product[] = [
  // Maquinaria Pesada / Final de Línea
  { id: 1, name: "Paletizadora Automática ACMI", category: "Maquinaria", description: "Agrupación de alta velocidad para botellas y latas con máxima estabilidad.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Paletizadora+ACMI" },
  { id: 2, name: "Envolvedora de Tarimas Robotizada", category: "Maquinaria", description: "Optimiza el uso de film estirable y asegura la carga para transporte seguro.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Envolvedora" },
  { id: 3, name: "Selladora de Cajas Automática", category: "Maquinaria", description: "Cierra cajas superior e inferiormente con cinta adhesiva de forma uniforme.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Selladora+Cajas" },
  { id: 4, name: "Túnel de Termoencogido Industrial", category: "Maquinaria", description: "Acabado profesional para empaques múltiples usando calor controlado.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Tunel+Termo" },
  { id: 5, name: "Máquina Blistera de Alta Producción", category: "Maquinaria", description: "Ideal para farmacéutica y ferretería. Empaque visible y seguro.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Blistera" },
  { id: 6, name: "Llenadora Volumétrica de Líquidos", category: "Maquinaria", description: "Precisión exacta para botellas de agua, jugos o productos químicos.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Llenadora" },
  { id: 7, name: "Etiquetadora Rotativa", category: "Maquinaria", description: "Aplicación de etiquetas envolventes a alta velocidad.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Etiquetadora" },
  { id: 8, name: "Flejadora Semiautomática de Arco", category: "Maquinaria", description: "Asegura cajas y paquetes rápidamente con fleje plástico.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Flejadora" },
  
  // Básculas y Medición
  { id: 9, name: "Báscula de Plataforma 500kg", category: "Pesaje", description: "Robusta, digital y precisa para recepción de mercancía en bodega.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Bascula+Plataforma" },
  { id: 10, name: "Báscula Contadora de Piezas", category: "Pesaje", description: "Agiliza inventarios contando tornillería o piezas pequeñas por peso.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Bascula+Contadora" },
  { id: 11, name: "Chequeador de Peso en Línea", category: "Pesaje", description: "Verificación automática de peso dinámico en bandas transportadoras.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Checkweigher" },

  // Empaque de Alimentos
  { id: 12, name: "Empacadora al Vacío Doble Campana", category: "Alimentos", description: "Extiende la vida útil de alimentos perecederos. Acero inoxidable.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Vacio+Doble" },
  { id: 13, name: "Clipadora de Embutidos", category: "Alimentos", description: "Cierre hermético con clip de aluminio para salchichas y graneles.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Clipadora" },
  { id: 14, name: "Dosificadora de Polvos", category: "Alimentos", description: "Para especias, harinas y suplementos. Evita desperdicios.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Dosificadora" },
  { id: 15, name: "Flow Pack Horizontal", category: "Alimentos", description: "Empaque tipo almohada para galletas, panes y barras.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Flow+Pack" },

  // Materiales y Protección (Pregis)
  { id: 16, name: "Sistema de Papel Easypack", category: "Materiales", description: "Crea relleno de papel 100% reciclado para proteger envíos.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Papel+Easypack" },
  { id: 17, name: "Rollo de Burbuja Industrial", category: "Materiales", description: "Protección clásica contra impactos para productos frágiles.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Rollo+Burbuja" },
  { id: 18, name: "Película Stretch (Playo) Alto Rendimiento", category: "Materiales", description: "Mayor resistencia al rasgado con menos capas. Ahorro garantizado.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Playo+Stretch" },
  { id: 19, name: "Cinta Adhesiva Personalizada", category: "Materiales", description: "Cierra tus cajas y promociona tu marca simultáneamente.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Cinta+Impresa" },
  { id: 20, name: "Esquineros de Cartón Rígido", category: "Materiales", description: "Protege las esquinas de tus tarimas durante la estiba.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Esquineros" },

  // Logística y Varios
  { id: 21, name: "Banda Transportadora Modular", category: "Logística", description: "Sistemas configurables para mover producto en planta.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Banda+Transportadora" },
  { id: 22, name: "Patín Hidráulico 3 Toneladas", category: "Logística", description: "Herramienta esencial para movimiento de tarimas en almacén.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Patin+Hidraulico" },
  { id: 23, name: "Codificadora Inkjet Industrial", category: "Maquinaria", description: "Imprime lote y caducidad sobre cualquier superficie.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Codificadora" },
  { id: 24, name: "Máquina Formadora de Cajas", category: "Maquinaria", description: "Arma cajas de cartón automáticamente listas para llenado.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Formadora+Cajas" },
  
  // Vehicular / Especiales
  { id: 25, name: "Sistema de Carga Abatible", category: "Vehicular", description: "Solución para Mercedes-Benz: convierte asientos en área de carga plana.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Sistema+Abatible" },
  
  // Más Maquinaria
  { id: 26, name: "Selladora en 'L' Manual", category: "Maquinaria", description: "Económica y versátil para producciones pequeñas y medianas.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Selladora+L" },
  { id: 27, name: "Detector de Metales Industrial", category: "Seguridad", description: "Garantiza la inocuidad de tus productos alimenticios.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Detector+Metales" },
  { id: 28, name: "Cosedora de Costales Portátil", category: "Maquinaria", description: "Cierre fuerte para sacos de rafia, papel o yute.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Cosedora+Sacos" },
  { id: 29, name: "Dispensador de Cinta Electrónico", category: "Materiales", description: "Corta cinta engomada a medidas exactas para sellado ecológico.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Dispensador+Cinta" },
  { id: 30, name: "Servicio de Logística Tijuana-GDL", category: "Servicios", description: "Gestión aduanal, recolección y envío seguro de mercancía.", image: "https://placehold.co/600x400/1e5f74/ffffff?text=Logistica+Aduanal" },
];