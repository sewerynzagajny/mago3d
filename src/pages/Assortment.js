import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Btn from "../components/Btn";

export default function Assortment() {
  return (
    <section className="assortment">
      <Navigation />

      <ScrollEffectContainer
        threshold={0}
        animationTime={0.6}
        animationTransform="translateY(2rem)"
        rootMargin="50%"
      >
        <div className="assortment__container">
          <h2 className="heading-secondary">Asortyment</h2>
          <h3 className="heading-tertiary">
            <q>Wybierz platformę sprzedażową</q>
          </h3>
          <div className="assortment__container__btns">
            <Btn href="https://www.etsy.com/pl/shop/MaGo3dPL">Etsy</Btn>
            <Btn href="https://allegro.pl/uzytkownik/MaGo3d">Allegro</Btn>
          </div>
        </div>
        <Footer />
      </ScrollEffectContainer>
    </section>
  );
}
