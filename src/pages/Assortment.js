import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBaner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Btn from "../components/Btn";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";

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
            <q>Wybierz platformę sprzedażową</q>
          </h3>
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
