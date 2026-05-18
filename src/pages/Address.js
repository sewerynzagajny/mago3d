import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Footer from "../components/Footer";

import AddEditAddress from "../components/user-panel/AddEditAddress";

export default function Address() {
  return (
    <>
      <section className="address">
        <Navigation />
        <ScrollEffectContainer
          totalImages={0}
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          rootMargin="50%"
        >
          <div className="address__container">
            <AddEditAddress />
          </div>
          <Footer />
        </ScrollEffectContainer>
        <CookieBanner />
      </section>
    </>
  );
}
