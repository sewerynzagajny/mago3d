import Btn from "../components/Btn";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          {/* Prefesjonalny Druk 3D <br /> Oganicza Nas tylko Nasza wyobraźnia! */}
          MaGo3d – Kreatywna pracownia druku 3d
        </h1>
        <p className="hero__description">
          {/* Tworzymy unikalne stojaki i akcesoria, które są w pełni funkcjonalne i
          pasują do Twojego stylu. <br /> Sprawdź naszą ofertę! */}
          Tworzymy unikalne produkty i akcesoria, które zaskarbiły sobie uznanie
          wielu zadowolonych klientów. <br /> Sprawdź naszą ofertę.
        </p>{" "}
        <Btn className=" btn hero__btn" as={Link} to="/asortyment">
          Zobacz Produkty!
        </Btn>
      </div>
    </section>
  );
}
