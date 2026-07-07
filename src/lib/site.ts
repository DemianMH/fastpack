export const siteConfig = {
  name: "FastPack GDL",
  legalName: "FastPack Maquinaria de Empaque",
  siteUrl: "https://fastpackgdl.com",

  slogan: "Maquinaria de empaque, materiales de embalaje y soluciones industriales en Jalisco",

  description:
    "FastPack GDL ofrece maquinaria de empaque, materiales de embalaje, básculas industriales, etiquetadoras, llenadoras, selladoras, flejadoras y soluciones logísticas para empresas en Zapopan, Guadalajara y todo México.",

  shortDescription:
    "Maquinaria de empaque, materiales de embalaje y soluciones logísticas en Zapopan, Jalisco.",

  address: {
    street: "Calle Ávila 439",
    neighborhood: "Col. Lomas de Zapopan",
    city: "Zapopan",
    state: "Jalisco",
    postalCode: "45130",
    country: "MX",
    full: "Calle Ávila 439, Col. Lomas de Zapopan, CP 45130, Zapopan, Jalisco",
  },

  phones: {
    main: {
      label: "33 1993 2097",
      e164: "+523319932097",
      whatsapp: "5213319932097",
    },
    secondary: {
      label: "33 2169 6031",
      e164: "+523321696031",
      whatsapp: "5213321696031",
    },
  },

  social: {
    facebook: "https://www.facebook.com/fast.pack.2025?_rdr",
    instagram: "https://www.instagram.com/fast_pack126/",
    tiktok: "https://www.tiktok.com/@fast.pack",
    youtube: "https://youtube.com/@fastpackgdl",
  },

  mapQuery:
    "Calle Ávila 439, Col. Lomas de Zapopan, CP 45130, Zapopan, Jalisco",

  keywords: [
    "maquinaria de empaque en Guadalajara",
    "maquinaria de empaque en Zapopan",
    "maquinaria de embalaje en Guadalajara",
    "llenadoras industriales",
    "etiquetadoras automáticas",
    "básculas industriales",
    "selladoras de cajas",
    "flejadoras",
    "material de embalaje",
    "playo stretch",
    "empaque industrial",
    "proveedor de maquinaria de empaque en Jalisco",
    "FastPack GDL",
    "maquinaria para empaque en México",
  ],
};

export const whatsappLinks = {
  main: `https://wa.me/${siteConfig.phones.main.whatsapp}`,
  secondary: `https://wa.me/${siteConfig.phones.secondary.whatsapp}`,
  quoteProduct: (productName: string) =>
    `https://wa.me/${siteConfig.phones.main.whatsapp}?text=${encodeURIComponent(
      `Hola, vi en su página el producto: ${productName}. Me gustaría recibir una cotización.`
    )}`,
  generalQuote: `https://wa.me/${siteConfig.phones.main.whatsapp}?text=${encodeURIComponent(
    "Hola, vi su página de FastPack GDL. Me gustaría recibir asesoría sobre maquinaria de empaque."
  )}`,
};

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.mapQuery
)}&output=embed`;