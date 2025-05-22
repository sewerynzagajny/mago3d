import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBaner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Product from "../components/Product";
import { products } from "../data/products";
// import Btn from "../components/Btn";
// import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
// import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";

export default function Assortment() {
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  return (
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

          <div className="assortment__container__products grid-3-col_assortment">
            <>
              {/* Nakładka blokująca interakcje */}
              {onMenuVisible && (
                <div
                  style={{
                    position: "absolute",
                    zIndex: 10,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(255,255,255,0)",
                    cursor: "pointer",
                  }}
                />
              )}
              {products.map((product, i) => (
                <Product
                  key={i}
                  product={product}
                  className="assortment__container__products__item"
                  onMenuChange={setOnMenuVisible}
                  style={onMenuVisible ? { opacity: "0.4" } : {}}
                />
              ))}
            </>
          </div>
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
  );
}
