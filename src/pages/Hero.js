import React from "react";
import Btn from "../components/Btn";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Prefesjonalny Druk 3D <br /> Oganicza Nas tylko Nasza wyobraźnia!
        </h1>
        <p className="hero__description">
          Tworzymy unikalne stojaki i akcesoria, które są w pełni funkcjonalne i
          pasują do Twojego stylu. <br /> Sprawdź naszą ofertę!
        </p>
        <Btn>Zobacz Produkty!</Btn>
      </div>
    </section>
  );
}
