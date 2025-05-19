import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBaner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
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
      { name: "czarny", photo: TSv3MainPhotoBlack },
      { name: "biały", photo: TSv3MainPhotoWhite },
      { name: "szary", photo: TSv3MainPhotoGrey },
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
    color: ["czarny", "biały", "szary"],
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
    color: ["czarny", "biały", "szary"],
    price: 189.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
];
const [standTSv3, standTSv4, standTSv4PRO] = products;

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
            <div className="assortment__container__products__item frame">
              <div className="assortment__container__products__item__content">
                <ScrollEffectContainer
                  totalImages={1}
                  threshold={0}
                  animationTime={0.6}
                  animationTransform="translateY(0rem)"
                  rootMargin="50%"
                  className="assortment__container__products__item__content__img"
                >
                  {" "}
                  <img
                    className="assortment__container__products__item__content__img--photo"
                    alt="product of Mago3d"
                    src={standTSv3.colors[0].photo}
                  />
                </ScrollEffectContainer>

                <p className="assortment__container__products__item__content--text-product">
                  {standTSv3.name}
                </p>
                <p className="assortment__container__products__item__content--text-price">
                  {standTSv3.priceStringPl}{" "}
                </p>
                <p className="assortment__container__products__item__content--text-color">
                  Kolor:{" "}
                  {standTSv3.colors.map((color, index) => (
                    <span
                      key={index}
                      className="assortment__container__products__item__content--text-color--color"
                    >
                      {color.name}
                      {index < standTSv3.colors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <Btn className="btn assortment__container__products__item__content--btn">
                  Szczegóły
                </Btn>
                <Btn className="btn assortment__container__products__item__content--btn">
                  Kup
                </Btn>
              </div>
            </div>
            <div className="assortment__container__products__item frame">
              <div className="assortment__container__products__item__content">
                test
              </div>
            </div>
            <div className="assortment__container__products__item frame">
              <div className="assortment__container__products__item__content">
                test
              </div>
            </div>
            <div className="assortment__container__products__item frame">
              <div className="assortment__container__products__item__content">
                test
              </div>
            </div>
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
