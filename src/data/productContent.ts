export interface ProductContent {
  seoTitle: string;
  seoDescription: string;
  longDescription: string[];
  features: string[];
  applications: string[];
  faqs: { q: string; a: string }[];
}

const loc = "Tonalá, Guadalajara y todo Jalisco";

export const productContent: Record<string, ProductContent> = {
  "bascula-multicabezal-automatica-10-cabezales": {
    seoTitle: "Báscula Multicabezal Automática de 10 Cabezales en Guadalajara",
    seoDescription:
      "Pesadora multicabezal de 10 tolvas de 2.5 L, rango 10-1000 g y hasta 65 paquetes por minuto. Pantalla táctil, asesoría e instalación en Tonalá, Guadalajara y todo Jalisco. Cotiza por WhatsApp.",
    longDescription: [
      "La báscula multicabezal automática de 10 cabezales dosifica y pesa productos a granel con alta precisión, repartiendo la carga entre varias tolvas para alcanzar el peso objetivo en cada porción. Es el equipo central de una línea de empaque vertical (VFFS) o de llenado de bolsas y doypacks.",
      "Cuenta con 10 tolvas de 2.5 litros, rango de pesaje de 10 a 1000 gramos y velocidad de hasta 65 pesadas por minuto, con pantalla táctil industrial para guardar recetas por producto y cambiar de formato en segundos.",
      `En FastPack GDL te asesoramos en la selección, puesta en marcha y capacitación del equipo, con atención en ${loc}.`,
    ],
    features: [
      "10 cabezales con tolvas de 2.5 L",
      "Rango de pesaje de 10 a 1000 g",
      "Hasta 65 pesadas por minuto",
      "Pantalla táctil industrial con memoria de recetas",
      "Reduce la merma y el exceso de producto por bolsa",
      "Se integra a envasadoras verticales y líneas de bolsa prearmada",
    ],
    applications: [
      "Botanas, frutos secos y semillas",
      "Dulces, galletas y cereales",
      "Café, granos y legumbres",
      "Alimento para mascotas",
      "Tornillería y piezas pequeñas",
    ],
    faqs: [
      { q: "¿Qué productos puede pesar?", a: "Productos a granel de libre flujo como botanas, frutos secos, granos, dulces, alimento para mascotas y piezas pequeñas." },
      { q: "¿Qué precisión tiene?", a: "La combinación de varias tolvas permite acercarse al peso objetivo con muy poca variación, lo que reduce el regalo de producto por bolsa." },
      { q: "¿Incluyen instalación y capacitación?", a: "Te acompañamos en la puesta en marcha y capacitamos a tu operador. Consulta condiciones por WhatsApp." },
    ],
  },
  "etiquetadora-automatica-botellas-mt200": {
    seoTitle: "Etiquetadora Automática de Botellas MT-200 en Guadalajara",
    seoDescription:
      "Etiquetadora automática para envases redondos de 2 a 12 cm, de 60 a 90 botellas por minuto, sin burbujas ni arrugas. Venta y asesoría en Tonalá y Guadalajara. Cotiza por WhatsApp.",
    longDescription: [
      "La etiquetadora automática MT-200 aplica etiquetas autoadheribles en botellas, frascos y envases cilíndricos con un acabado uniforme, sin burbujas ni arrugas, ideal para producción continua.",
      "Maneja envases de 2 a 12 cm de diámetro y una velocidad de 60 a 90 botellas por minuto, lo que la hace adecuada tanto para talleres en crecimiento como para plantas con producción media.",
      `Equipo con soporte técnico y refacciones. Atendemos ${loc}.`,
    ],
    features: [
      "Envases cilíndricos de 2 a 12 cm de diámetro",
      "60 a 90 botellas por minuto",
      "Etiquetado sin burbujas ni arrugas",
      "Ajuste rápido para cambiar de formato",
      "Operación sencilla y mantenimiento básico",
    ],
    applications: [
      "Cosméticos, shampoo y cremas",
      "Alimentos, salsas y aderezos",
      "Bebidas y licores",
      "Productos de limpieza",
      "Farmacéutico y suplementos",
    ],
    faqs: [
      { q: "¿Sirve para botellas de distintos tamaños?", a: "Sí, trabaja con envases redondos de 2 a 12 cm de diámetro con ajustes simples." },
      { q: "¿Qué tipo de etiqueta usa?", a: "Etiquetas autoadheribles en rollo, con el tamaño y core indicados en la ficha del equipo." },
      { q: "¿Tienen refacciones?", a: "Contamos con soporte técnico y refacciones. Consúltalo por WhatsApp." },
    ],
  },
  "llenadora-lineal-liquidos-viscosos-gt4": {
    seoTitle: "Llenadora Lineal de 4 Boquillas para Líquidos y Viscosos GT4",
    seoDescription:
      "Llenadora industrial de 4 boquillas para líquidos, geles y productos viscosos, llenado de 100 a 1000 ml, acero inoxidable y sistema neumático. Venta en Tonalá y Guadalajara.",
    longDescription: [
      "La llenadora lineal GT4 dosifica líquidos, geles, cremas y productos viscosos de forma rápida y repetible con 4 boquillas simultáneas, reduciendo tiempos y desperdicio frente al llenado manual.",
      "Su construcción en acero inoxidable de grado alimenticio y su sistema neumático la hacen apta para alimentos, cosméticos y químicos de uso general. El rango de llenado va de 100 ml a 1000 ml, ajustable según tu envase.",
      `Te asesoramos para elegir boquillas y configuración según la viscosidad de tu producto en ${loc}.`,
    ],
    features: [
      "4 boquillas de llenado simultáneo",
      "Rango de 100 ml a 1000 ml",
      "Acero inoxidable grado alimenticio",
      "Sistema neumático de alta durabilidad",
      "Apta para líquidos, geles y viscosos",
    ],
    applications: [
      "Salsas, miel, aceites y aderezos",
      "Shampoo, jabones y geles",
      "Cremas y cosméticos",
      "Productos de limpieza y desinfectantes",
      "Lubricantes y químicos de uso general",
    ],
    faqs: [
      { q: "¿Llena productos espesos?", a: "Sí, está diseñada para líquidos, geles y viscosos; te ayudamos a definir la boquilla adecuada." },
      { q: "¿Cuántas piezas por minuto llena?", a: "Depende del volumen y la viscosidad del producto. Cuéntanos tu caso por WhatsApp y te damos un estimado." },
      { q: "¿Es de acero inoxidable?", a: "Sí, las partes en contacto con el producto son de acero inoxidable de grado alimenticio." },
    ],
  },
  "selladora-cajas-carton-automatica": {
    seoTitle: "Selladora Automática de Cajas de Cartón (Top & Bottom) en Guadalajara",
    seoDescription:
      "Cerradora automática de cajas con cinta adhesiva superior e inferior y bandas laterales ajustables. Optimiza tu final de línea. Venta y asesoría en Tonalá y Guadalajara.",
    longDescription: [
      "La selladora automática de cajas de cartón cierra y sella con cinta adhesiva por la parte superior e inferior de forma continua, con bandas laterales que guían y ajustan la caja al tamaño correcto.",
      "Elimina el sellado manual, acelera el final de línea, reduce la fatiga del personal y deja un cierre uniforme y seguro para tus envíos y almacenamiento.",
      `Ideal para bodegas, centros de distribución y fábricas de ${loc}.`,
    ],
    features: [
      "Sellado superior e inferior con cinta adhesiva",
      "Bandas laterales para ajuste de cajas",
      "Cierre uniforme y resistente",
      "Reduce tiempos y mano de obra",
      "Operación continua en final de línea",
    ],
    applications: [
      "Centros de distribución y e-commerce",
      "Fábricas de alimentos y bebidas",
      "Bodegas y logística",
      "Maquila y paquetería",
    ],
    faqs: [
      { q: "¿Sirve para cajas de distintos tamaños?", a: "Sí, las bandas laterales se ajustan al ancho y alto de la caja dentro del rango del equipo." },
      { q: "¿Qué cinta usa?", a: "Cinta adhesiva de empaque estándar. También podemos surtirte la cinta." },
      { q: "¿Ocupa mucho espacio?", a: "Se integra a transportadores de final de línea o se usa de forma independiente." },
    ],
  },
  "flejadora-semiautomatica-mesa": {
    seoTitle: "Flejadora Semiautomática de Mesa para Cajas y Paquetes",
    seoDescription:
      "Flejadora de mesa semiautomática, rápida y silenciosa, para asegurar cajas y paquetes con fleje de polipropileno. Ideal para logística y envíos. Venta en Tonalá y Guadalajara.",
    longDescription: [
      "La flejadora semiautomática de mesa asegura cajas y paquetes con fleje de polipropileno de forma rápida, silenciosa y con tensión uniforme, evitando que la carga se abra o se mueva durante el transporte.",
      "Es una solución compacta y económica para bodegas, paqueterías y talleres que necesitan flejar con regularidad sin recurrir al flejado manual.",
      `Disponible con asesoría y consumibles (fleje y sellos) en ${loc}.`,
    ],
    features: [
      "Flejado rápido y silencioso",
      "Fleje de polipropileno (PP)",
      "Tensión y sellado uniformes",
      "Diseño compacto de mesa",
      "Ideal para logística y paquetería",
    ],
    applications: [
      "Paquetería y envíos",
      "Bodegas y centros de distribución",
      "Imprentas y papelerías",
      "Fábricas y maquila",
    ],
    faqs: [
      { q: "¿Qué fleje utiliza?", a: "Fleje de polipropileno. También podemos suministrarte el fleje." },
      { q: "¿Es difícil de operar?", a: "No, es semiautomática y se aprende a usar en minutos." },
      { q: "¿Cuánta carga soporta?", a: "Está pensada para paquetes y cajas; consúltanos el peso de tu carga para recomendarte el modelo." },
    ],
  },
  "bobinas-poliolefina-polipropileno": {
    seoTitle: "Bobinas de Poliolefina y Polipropileno Termoencogible en Guadalajara",
    seoDescription:
      "Película plástica termoencogible de alta transparencia y resistencia en bobinas industriales de poliolefina y polipropileno. Venta en Tonalá y Guadalajara. Cotiza por WhatsApp.",
    longDescription: [
      "Las bobinas de poliolefina y polipropileno son película termoencogible de alta transparencia, brillo y resistencia, usada para empacar productos individuales o múltiples y protegerlos del polvo y la humedad.",
      "Se encogen con calor en túneles de termoencogido o selladoras en L, dejando un acabado profesional y ajustado al producto, con excelente presentación en anaquel.",
      `Surtimos distintos anchos y calibres para ${loc}.`,
    ],
    features: [
      "Alta transparencia y brillo",
      "Buena resistencia al rasgado y al sellado",
      "Disponible en varios anchos y calibres",
      "Compatible con túneles de termoencogido",
      "Poliolefina para alimentos y productos de consumo",
    ],
    applications: [
      "Cajas, libros y papelería",
      "Productos de higiene y cosméticos",
      "Alimentos y bebidas empacadas",
      "Paquetes múltiples (packs)",
    ],
    faqs: [
      { q: "¿Cuál es la diferencia entre poliolefina y polipropileno?", a: "La poliolefina es más suave y resistente al sellado; el polipropileno es más rígido y económico. Te ayudamos a elegir según tu producto." },
      { q: "¿Qué anchos manejan?", a: "Manejamos varios anchos y calibres. Pídenos tus medidas por WhatsApp." },
      { q: "¿Hacen envíos?", a: `Entregamos en ${loc} y enviamos a todo México.` },
    ],
  },
  "rollo-burbuja-industrial": {
    seoTitle: "Rollo de Burbuja Industrial para Embalaje en Guadalajara",
    seoDescription:
      "Rollo de plástico burbuja para proteger productos frágiles en envíos y almacenaje. Venta por rollo y mayoreo en Tonalá y Guadalajara. Cotiza por WhatsApp.",
    longDescription: [
      "El rollo de burbuja industrial es material de amortiguación con celdas de aire que absorben golpes y vibraciones, protegiendo productos frágiles durante el transporte y el almacenaje.",
      "Es ligero, flexible y fácil de cortar, ideal para envolver vidrio, cerámica, electrónica, refacciones y artículos delicados.",
      `Venta por rollo y mayoreo con entrega en ${loc}.`,
    ],
    features: [
      "Excelente amortiguación contra golpes",
      "Ligero y fácil de cortar",
      "Disponible en distintos anchos",
      "Ideal para mayoreo",
    ],
    applications: [
      "Vidrio, cerámica y decoración",
      "Electrónica y equipo",
      "Refacciones y autopartes",
      "Mudanzas y paquetería",
    ],
    faqs: [
      { q: "¿Venden por rollo o por metro?", a: "Vendemos por rollo y en mayoreo. Consúltanos por WhatsApp." },
      { q: "¿Qué ancho tienen?", a: "Manejamos varias medidas, pregunta por disponibilidad." },
    ],
  },
  "pelicula-stretch-playo-industrial": {
    seoTitle: "Película Stretch (Playo) Industrial para Tarimas en Guadalajara",
    seoDescription:
      "Playo industrial de alto rendimiento para paletizar y asegurar carga en tarimas. Alta resistencia al rasgado con menos capas. Venta en Tonalá y Guadalajara.",
    longDescription: [
      "La película stretch o playo industrial es una película estirable que se enrolla alrededor de la carga para asegurarla en la tarima y protegerla del polvo y la humedad durante el transporte.",
      "Nuestra versión de alto rendimiento ofrece gran resistencia al rasgado y mayor estiramiento, de modo que necesitas menos capas y consumes menos material por tarima.",
      `Disponible para uso manual y en máquinas envolvedoras, con entrega en ${loc}.`,
    ],
    features: [
      "Alta resistencia al rasgado y a la perforación",
      "Mayor estiramiento: menos capas por tarima",
      "Apto para uso manual y en máquina",
      "Excelente adherencia entre capas",
    ],
    applications: [
      "Paletizado de cajas y sacos",
      "Bodegas y logística",
      "Fábricas y distribuidores",
      "Mudanzas y envíos",
    ],
    faqs: [
      { q: "¿Sirve para máquina envolvedora?", a: "Tenemos opciones para uso manual y para máquina." },
      { q: "¿Venden por caja o por rollo?", a: "Ambas opciones, con descuento por volumen." },
    ],
  },
  "paletizadora-automatica-acmi": {
    seoTitle: "Paletizadora Automática ACMI para Cajas, Botellas y Latas",
    seoDescription:
      "Robot paletizador automático de alta velocidad para botellas, latas y cajas, con estabilidad de carga garantizada. Asesoría en Tonalá, Guadalajara y todo Jalisco.",
    longDescription: [
      "La paletizadora automática ACMI acomoda cajas, botellas y latas sobre la tarima con patrones definidos, a alta velocidad y con estabilidad de carga garantizada, eliminando el trabajo manual pesado y repetitivo.",
      "Mejora la productividad del final de línea, reduce lesiones y errores de acomodo y entrega tarimas uniformes listas para embarcar.",
      `Te asesoramos en la integración con tu línea en ${loc}.`,
    ],
    features: [
      "Paletizado automático de alta velocidad",
      "Múltiples patrones de acomodo",
      "Estabilidad de carga garantizada",
      "Reduce mano de obra y lesiones",
    ],
    applications: [
      "Bebidas, botellas y latas",
      "Cajas de cartón y producto terminado",
      "Alimentos y consumo masivo",
      "Centros de distribución",
    ],
    faqs: [
      { q: "¿Se integra a mi línea actual?", a: "Evaluamos tu línea y layout para integrarla correctamente." },
      { q: "¿Cuántas cajas por minuto?", a: "Depende del peso y patrón. Cuéntanos tu producción y te recomendamos el modelo." },
    ],
  },
  "sistema-carga-abatible-vehiculos": {
    seoTitle: "Sistema de Carga Abatible para Vans y Vehículos Mercedes-Benz",
    seoDescription:
      "Adaptación de asientos abatibles que crea un área plana de carga en vans y vehículos Mercedes-Benz para maximizar el espacio. Asesoría en Guadalajara y Jalisco.",
    longDescription: [
      "El sistema de carga abatible convierte los asientos de vans y vehículos Mercedes-Benz en una superficie plana de carga, aprovechando al máximo el espacio interior para mercancía y paquetería.",
      "Es una adaptación práctica para negocios de reparto, logística y servicios que necesitan mayor capacidad sin cambiar de vehículo.",
      `Solicita información y compatibilidad desde ${loc}.`,
    ],
    features: [
      "Área de carga plana y aprovechable",
      "Adaptación para vans y Mercedes-Benz",
      "Mayor capacidad sin cambiar de unidad",
    ],
    applications: [
      "Reparto y paquetería",
      "Servicios técnicos",
      "Logística de última milla",
    ],
    faqs: [
      { q: "¿Es compatible con mi vehículo?", a: "Envíanos marca, modelo y año por WhatsApp y confirmamos la compatibilidad." },
    ],
  },
  "tunel-termoencogido-industrial": {
    seoTitle: "Túnel de Termoencogido Industrial en Guadalajara",
    seoDescription:
      "Túnel de termoencogido con calor controlado para un acabado profesional en empaques individuales y múltiples. Venta y asesoría en Tonalá y Guadalajara.",
    longDescription: [
      "El túnel de termoencogido aplica calor controlado a la película termoencogible para que se ajuste al producto, dejando un empaque firme, protegido y con excelente presentación.",
      "Funciona junto con bobinas de poliolefina o PVC y una selladora, y es ideal para cajas, botellas, paquetes múltiples, libros y productos de consumo.",
      `Equipo con asesoría de uso y película disponible en ${loc}.`,
    ],
    features: [
      "Temperatura y velocidad ajustables",
      "Acabado profesional y uniforme",
      "Compatible con poliolefina y PVC",
      "Operación continua con banda transportadora",
    ],
    applications: [
      "Packs de botellas y latas",
      "Cajas, libros y papelería",
      "Cosméticos y productos de higiene",
      "Alimentos empacados",
    ],
    faqs: [
      { q: "¿Qué película necesito?", a: "Bobinas de poliolefina o PVC; también las surtimos." },
      { q: "¿Qué voltaje usa?", a: "Consulta la ficha del modelo; te confirmamos por WhatsApp." },
    ],
  },
  "servicio-logistica-paqueteria-tijuana": {
    seoTitle: "Logística y Paquetería Tijuana a Guadalajara: Importación y Envíos",
    seoDescription:
      "Servicio integral de importación, recolección y envío de mercancía desde Tijuana a Guadalajara y todo México. Cotiza tu envío con FastPack GDL.",
    longDescription: [
      "Ofrecemos un servicio integral de logística que incluye importación, recolección en Tijuana y envío de mercancía hacia Guadalajara y el resto de la República Mexicana.",
      "Nos encargamos del proceso para que recibas tu mercancía de forma segura y en tiempo, con seguimiento y atención personalizada.",
      `Cotiza tu envío con nosotros desde ${loc}.`,
    ],
    features: [
      "Recolección en Tijuana",
      "Importación y gestión de mercancía",
      "Envío a todo México",
      "Atención personalizada",
    ],
    applications: [
      "Compras en Estados Unidos",
      "Mercancía para negocio",
      "Maquinaria y refacciones",
    ],
    faqs: [
      { q: "¿Cuánto tarda el envío?", a: "Depende del tipo de carga y destino. Cotiza por WhatsApp y te damos tiempos estimados." },
      { q: "¿Envían fuera de Guadalajara?", a: "Enviamos a todo el interior de la República." },
    ],
  },
};
