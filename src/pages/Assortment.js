import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBaner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Product from "../components/Product";
import Btn from "../components/Btn";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";

import TSv3MainPhotoBlack from "../assets/assortment/TSv3/main_black.jpg";
import TSv3MainPhotoWhite from "../assets/assortment/TSv3/main_white.jpg";
import TSv3MainPhotoGrey from "../assets/assortment/TSv3/main_grey.jpg";

const products = [
  {
    name: "Podstawka pod Thermomix TM5 TM6 TSv3",
    colors: [
      { name: "czarny", nameEn: "black", photo: TSv3MainPhotoBlack },
      { name: "biały", nameEn: "white", photo: TSv3MainPhotoWhite },
      { name: "szary", nameEn: "grey", photo: TSv3MainPhotoGrey },
    ],
    price: 109.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Podstawka pod Thermomix TM5 TM6 TSv4",
    colors: [
      { name: "czarny", nameEn: "black", photo: TSv3MainPhotoBlack },
      { name: "biały", nameEn: "white", photo: TSv3MainPhotoWhite },
      { name: "szary", nameEn: "grey", photo: TSv3MainPhotoGrey },
    ],
    price: 109.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Podstawka pod Thermomix TM5 TM6 TSv4PRO",
    colors: [
      { name: "czarny", nameEn: "black", photo: TSv3MainPhotoBlack },
      { name: "biały", nameEn: "white", photo: TSv3MainPhotoWhite },
      { name: "szary", nameEn: "grey", photo: TSv3MainPhotoGrey },
    ],
    price: 189.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
];

export default function Assortment() {
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
              {products.map((product, i) => (
                <Product
                  key={i}
                  product={product}
                  className="assortment__container__products__item"
                />
              ))}
            </>
          </div>

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
          </div>
        </ScrollEffectContainer>
      </div>
      <Footer />
      <CookieBaner />
    </section>
  );
}
