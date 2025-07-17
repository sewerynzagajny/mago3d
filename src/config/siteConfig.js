export const siteConfig = {
  domain: "https://mago3d.pl",
  siteName: "MaGo3d",
  companyName: "MaGo3d",
  seoDomain: "https://druki3d.com",

  paths: {
    productDetails: "/szczegoly/druki-3d",
    assortment: "/asortyment",
  },

  seo: {
    defaultTitle: "MaGo3d - Profesjonalny druk 3D",
    titleSeparator: " | ",
    defaultDescription:
      "Profesjonalny druk 3D najwyższej jakości. Podstawki pod Thermomix, adaptery IKEA, stojaki Hot Wheels. Sprawdź ofertę MaGo3d!",
    siteName: "MaGo3d",
    defaultImage: "/logo192.png", // Dodaj domyślny obrazek
  },
};

// Funkcje pomocnicze
export const generateProductUrl = (productSlug) => {
  return `${siteConfig.domain}${siteConfig.paths.productDetails}/${productSlug}`;
};

export const generateAssortmentUrl = () => {
  return `${siteConfig.domain}${siteConfig.paths.assortment}`;
};

export const generateProductTitle = (productName, maxLength = 60) => {
  const baseTitle = `${productName} | ${siteConfig.siteName}`;
  return baseTitle.length > maxLength
    ? `${productName.substring(
        0,
        maxLength - siteConfig.siteName.length - 3
      )}... | ${siteConfig.siteName}`
    : baseTitle;
};
