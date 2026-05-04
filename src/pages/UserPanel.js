import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";

export default function UserPanel() {
  return (
    <>
      <section className="user-panel">
        <Navigation />
        <ScrollEffectContainer
          totalImages={0}
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          rootMargin="50%"
        >
          <div className="user-panel__container">
            <h2 className="heading-secondary">Panel klienta</h2>
            <h3 className="heading-tertiary">Koszyk</h3>
            <ShoppingCart />
          </div>
          <Footer />
        </ScrollEffectContainer>
        <CookieBanner />
      </section>
    </>
  );
}
