import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollEffectContainer from "../components/ScrollEffectContainer";

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
          <div className="grid-2-col-0_5-2 column-gap-0_8"></div>
        </div>
        <Footer />
      </ScrollEffectContainer>
    </section>
  );
}
