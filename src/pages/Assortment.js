import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBaner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
// import Product from "../components/Product";
import ProductList from "../components/ProductList";
import { products } from "../data/products";
import SEOHead from "../components/SEOHead";
import { generateAssortmentUrl, siteConfig } from "../config/siteConfig";

export default function Assortment() {
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);

  // SEO dla strony asortymentu
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.fullname,
        image: `${siteConfig.domain}${product.colors[0].photo}`,
        brand: {
          "@type": "Brand",
          name: siteConfig.companyName,
          alternateName: "Druki3d.com",
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "PLN",
        },
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={`Asortyment | MaGo3d`}
        description="Pełen asortyment produktów druku 3D: podstawki pod Thermomix, adaptery IKEA, stojaki Hot Wheels i wiele więcej. Wysoka jakość, konkurencyjne ceny."
        canonicalUrl={generateAssortmentUrl()}
        structuredData={structuredData}
      />

      <section className="assortment">
        <Navigation />

        <div className="assortment__container">
          <ScrollEffectContainer
            threshold={0}
            animationTime={0.6}
            animationTransform="translateY(2rem)"
            rootMargin="50%"
          >
            <h2 className="heading-secondary">Asortyment</h2>
            <h3 className="heading-tertiary">
              <q>Lista naszych produktów</q>
            </h3>

            <ProductList
              onMenuVisible={onMenuVisible}
              setOnMenuVisible={setOnMenuVisible}
              orderModalProductId={orderModalProductId}
              setOrderModalProductId={setOrderModalProductId}
            />
            {/* 
          <div className="assortment__container__btns">
          <Btn
          className="btn btn_href assortment__container__btns__shop-btn"
          href="https://www.etsy.com/pl/shop/MaGo3dPL"
          >
          {" "}
          <EtsyIcon className="assortment__container__btns__shop-btn--link" />
          <span className="assortment__container__btns__shop-btn--text-etsy">
          tsy
          </span>
          </Btn>
          <Btn
          href="https://allegro.pl/uzytkownik/MaGo3d"
              className="btn btn_href assortment__container__btns__shop-btn"
            >
              <AllegroIcon className="assortment__container__btns__shop-btn--link" />{" "}
              <span className="assortment__container__btns__shop-btn--text-allegro">
                Allegro
              </span>
              </Btn>
              </div> */}
          </ScrollEffectContainer>
        </div>
        <Footer />
        <CookieBaner />
      </section>
    </>
  );
}
