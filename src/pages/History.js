// import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import photo1 from "../assets//history/history-1.jpg";
import photo2 from "../assets//history/history-2.jpg";

export default function History() {
  return (
    <section className="history">
      <Navigation />
      <ScrollEffectContainer
        totalImages={2}
        threshold={0.1}
        animationTime={0.6}
        animationTransform="translateY(2rem)"
        className="history__container"
      >
        <h3 className="heading-tertiary">Historia</h3>
        <h2 className="heading-secondary">
          <q>Jak to się zaczęło...</q>
        </h2>
        <div className="grid-2-col grid-center ">
          <div
            className="history__container__photo photo-frame"
            style={{ marginBottom: "5.2rem" }}
          >
            <figure>
              <img
                src={photo1}
                alt="Example of Mago3d history"
                loading="lazy"
              />
            </figure>
          </div>
          <p className="history__container__content">
            Cześć! Nazywam się Mateusz i jestem założycielem marki{" "}
            <span className="company-name">MaGo3d.</span> Jestem szczliwym mężem
            i ojcem. Po sprzedaży pasieki (tak, wcześniej byłem pszczelarzem!
            😊), którą zdecydowałem się zamknąć głównie ze względu na niską
            opłacalność, czasochłonność oraz rychłe narodziny synka, zacząłem
            szukać nowego zajęcia. Chciałem czegoś, co pozwoli mi pracować z
            domu i jednocześnie zabezpieczy rodzinny budżet w razie
            nieprzewidzianych sytuacji. Ponieważ miałem doświadczenie w
            modelowaniu CAD, naturalnym krokiem stało się dla mnie odkrycie
            druku 3D.
          </p>
          <p className="history__container__content">
            Pierwszym produktem, który opracowałem, były podstawki pod
            Thermomix. Pomysł wziął się z codziennej obserwacji – widząc, jak
            moja żona z trudem przesuwa to ciężkie urządzenie, postanowiłem
            znaleźć rozwiązanie. Ku mojemu zaskoczeniu, po przeszukaniu
            Internetu okazało się, że nikt nie oferuje podstawek z kółkami.
            Wykorzystując umiejętności projektowania w CAD, stworzyłem i
            wydrukowałem pierwsze prototypy – oczywiście pod czujnym okiem żony!
            Okazały się bardzo udane, więc przekazaliśmy kilka egzemplarzy
            znajomym do testów.
          </p>
          <p
            className="history__container__content"
            style={{ gridColumn: "1/2" }}
          >
            Ich pozytywne opinie utwierdziły nas w przekonaniu, że to może być
            strzał w dziesiątkę. Postanowiliśmy wystawić produkt na sprzedaż w
            grupach Facebookowych związanych z Thermomixem. Odzew przerósł nasze
            oczekiwania – prawie 600 komentarzy potwierdziło, że trafiliśmy w
            realną potrzebę użytkowników. Zdecydowaliśmy się zastrzec wzór
            użytkowy w EUIPO. Była to spora inwestycja na początek, ale szybko
            się opłaciła – pozwoliła nam skutecznie odstraszyć konkurencję,
            która błyskawicznie zaczęła kopiować nasz produkt.
          </p>
          <div
            className="history__container__photo photo-frame"
            style={{ gridRow: "2/ 4", gridColumn: "2/-1" }}
          >
            <figure>
              <img
                src={photo2}
                alt="Example of Mago3d history"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </ScrollEffectContainer>
    </section>
  );
}
