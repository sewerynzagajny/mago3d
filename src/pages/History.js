import React from "react";
import Navigation from "../components/Navigation";

export default function History() {
  return (
    <section className="history">
      <Navigation />
      <div className="history__container">
        <h3 className="heading-tertiary">Historia</h3>
        <h2 className="heading-secondary">
          <q>Jak to się zaczęło...</q>
        </h2>
        <div className="grid-2-col">
          <p className="history__container__content">
            Cześć! Nazywam się Mateusz i jestem założycielem marki{" "}
            <span className="company-name">Mago3d.</span> Jestem szczliwym mężem
            i ojcem. Po sprzedaży pasieki (tak, wcześniej byłem pszczelarzem!
            😊), którą zdecydowałem się zamknąć głównie ze względu na niską
            opłacalność, czasochłonność oraz rychłe narodziny synka, zacząłem
            szukać nowego zajęcia. Chciałem czegoś, co pozwoli mi pracować z
            domu i jednocześnie zabezpieczy rodzinny budżet w razie
            nieprzewidzianych sytuacji.
          </p>
        </div>
      </div>
    </section>
  );
}
