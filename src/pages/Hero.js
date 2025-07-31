import Btn from "../components/Btn";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

export default function Hero() {
  const seoData = {
    title:
      "MaGo3d - Kreatywna pracownia druku 3D | Stojaki, akcesoria, projekty",
    description:
      "Profesjonalny druk 3D na zamówienie. Unikalne produkty, stojaki i akcesoria do domu i biura. Sprawdź ofertę MaGo3d!",
    canonicalUrl: "https://mago3d.pl/",
    ogImage: "https://mago3d.pl/assets/logo.png",
  };
  return (
    <>
      <SEOHead {...seoData} />
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            {/* Prefesjonalny Druk 3D <br /> Oganicza Nas tylko Nasza wyobraźnia! */}
            MaGo3d - Kreatywna pracownia druku 3d
          </h1>
          <p className="hero__description">
            {/* Tworzymy unikalne stojaki i akcesoria, które są w pełni funkcjonalne i
          pasują do Twojego stylu. <br /> Sprawdź naszą ofertę! */}
            Tworzymy unikalne produkty i akcesoria, które zaskarbiły sobie
            uznanie wielu zadowolonych klientów. <br /> Sprawdź naszą ofertę.
          </p>{" "}
          <div className="hero__buttons">
            <Btn className=" btn hero__btn" as={Link} to="/asortyment">
              Zobacz Produkty!
            </Btn>
            <Btn className=" btn hero__btn" as={Link} to="/#o-nas">
              O nas &darr;
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}
