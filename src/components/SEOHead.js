import { useEffect } from "react";
import { siteConfig } from "../config/siteConfig";

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage,
  structuredData,
  productData,
  isHomePage = false,
}) {
  useEffect(() => {
    // Update document title
    document.title = title || siteConfig.seo.defaultTitle;

    // Update meta description
    updateMetaTag(
      "description",
      description || siteConfig.seo.defaultDescription
    );

    // Determine og:image - użyj product image lub domyślny
    const finalOgImage =
      ogImage || `${siteConfig.domain}${siteConfig.seo.defaultImage}`;

    // Update Open Graph tags
    updateMetaTag("og:title", title || siteConfig.seo.defaultTitle, "property");
    updateMetaTag(
      "og:description",
      description || siteConfig.seo.defaultDescription,
      "property"
    );
    updateMetaTag("og:image", finalOgImage, "property");
    updateMetaTag("og:url", canonicalUrl || siteConfig.domain, "property");

    // Różne og:type dla strony głównej vs produktu
    updateMetaTag("og:type", productData ? "product" : "website", "property");
    updateMetaTag("og:site_name", siteConfig.siteName, "property");

    // Update Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title || siteConfig.seo.defaultTitle);
    updateMetaTag(
      "twitter:description",
      description || siteConfig.seo.defaultDescription
    );
    updateMetaTag("twitter:image", finalOgImage);

    // Update canonical link
    updateCanonicalLink(canonicalUrl || siteConfig.domain);

    // Usuń stare meta keywords jeśli istnieją
    removeMetaTag("keywords");

    // Add structured data dla produktów
    if (productData) {
      addStructuredData({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: productData.name,
        image: finalOgImage,
        description: description,
        brand: {
          "@type": "Brand",
          name: siteConfig.companyName,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "PLN",
          price: productData.price,
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          seller: {
            "@type": "Organization",
            name: siteConfig.companyName,
            url: siteConfig.domain,
          },
        },
      });
    }

    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [
    title,
    description,
    canonicalUrl,
    ogImage,
    productData,
    structuredData,
    isHomePage,
  ]);

  return null;
}

// Helper functions
function updateMetaTag(name, content, attribute = "name") {
  if (!content) return;

  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    element.setAttribute("content", content);
    document.getElementsByTagName("head")[0].appendChild(element);
  }
}

function removeMetaTag(name) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) {
    element.remove();
  }
}

function updateCanonicalLink(href) {
  if (!href) return;

  let element = document.querySelector('link[rel="canonical"]');
  if (element) {
    element.setAttribute("href", href);
  } else {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    element.setAttribute("href", href);
    document.getElementsByTagName("head")[0].appendChild(element);
  }
}

function addStructuredData(data) {
  const existingScript = document.querySelector(
    'script[type="application/ld+json"][data-product]'
  );
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-product", "true");
  script.textContent = JSON.stringify(data);
  document.getElementsByTagName("head")[0].appendChild(script);
}
