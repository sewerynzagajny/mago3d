import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBaner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

export default function Details() {
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
          <h2 className="heading-secondary">Szczegóły</h2>
          <h3 className="heading-tertiary">
            <q>Pracujemy nad tym, aby zapewnić najlepsze wrażenia</q>{" "}
            <span style={{ fontStyle: "normal" }}>🛠️</span>
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5rem",
              marginBottom: "2.4rem",
            }}
          >
            {" "}
            <Btn className="btn hero__btn" as={Link} to="/asortyment">
              Powrót
            </Btn>
          </div>
        </ScrollEffectContainer>
      </div>
      <Footer />
      <CookieBaner />
    </section>
  );
}
