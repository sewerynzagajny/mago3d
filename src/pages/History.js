// import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import photo1 from "../assets//history/history-1.jpg";
import photo2 from "../assets//history/history-2.jpg";
import Footer from "../components/Footer";

export default function History() {
  return (
    <section className="history">
      <Navigation />
      <ScrollEffectContainer
        totalImages={2}
        animationTime={0.6}
        animationTransform="translateY(2rem)"
      >
        <div className="history__container">
          <h2 className="heading-secondary">Historia</h2>
          <h3 className="heading-tertiary">
            <q>Jak to się zaczęło...</q>
          </h3>
          <div className="grid-2-col grid-center-justify ">
            <p className="history__container__content all-line paragraph ">
              Cześć! Nazywam się Mateusz i jestem założycielem marki{" "}
              <span className="company-name">MaGo3d.</span> Jestem szczliwym
              mężem i ojcem. Po sprzedaży pasieki (tak, wcześniej byłem
              pszczelarzem! 😊), którą zdecydowałem się zamknąć głównie ze
              względu na niską opłacalność, czasochłonność oraz rychłe narodziny
              synka, zacząłem szukać nowego zajęcia.
            </p>
            <div className="history__container__photo photo-frame photo">
              <figure>
                <img
                  src={photo1}
                  alt="Example of Mago3d history"
                  loading="lazy"
                />
              </figure>
            </div>

            <p className="history__container__content paragraph">
              Chciałem czegoś, co pozwoli mi pracować z domu i jednocześnie
              zabezpieczy rodzinny budżet w razie nieprzewidzianych sytuacji.
              Ponieważ miałem doświadczenie w modelowaniu CAD, naturalnym
              krokiem stało się dla mnie odkrycie druku 3D. Pierwszym produktem,
              który opracowałem, były podstawki pod Thermomix. Pomysł wziął się
              z codziennej obserwacji – widząc, jak moja żona z trudem przesuwa
              to ciężkie urządzenie, postanowiłem znaleźć rozwiązanie. Ku mojemu
              zaskoczeniu, po przeszukaniu Internetu okazało się, że nikt nie
              oferuje podstawek z kółkami.
            </p>
            <p className="history__container__content paragraph">
              Wykorzystując umiejętności projektowania w CAD, stworzyłem i
              wydrukowałem pierwsze prototypy – oczywiście pod czujnym okiem
              żony! Okazały się one bardzo udane, więc przekazaliśmy kilka
              egzemplarzy znajomym do testów. Ich pozytywne opinie utwierdziły
              nas w przekonaniu, że to może być strzał w dziesiątkę.
              Postanowiliśmy wystawić produkt na sprzedaż w grupach
              Facebookowych związanych z Thermomixem. Odzew przerósł nasze
              oczekiwania – prawie 600 komentarzy potwierdziło, że trafiliśmy w
              realną potrzebę użytkowników. Liczba zamówień rosła z dnia na
              dzień, co tylko utwierdzało nas w słuszności obranej drogi.
            </p>
            <p className="history__container__content paragraph">
              To był moment, w którym poczuliśmy, że naprawdę tworzymy coś
              wartościowego. Zdecydowaliśmy się zastrzec wzór użytkowy w EUIPO.
              Była to spora inwestycja na początek, ale szybko się opłaciła –
              pozwoliła nam skutecznie odstraszyć konkurencję, która
              błyskawicznie zaczęła kopiować nasz produkt. Zadowolenie klientów
              dodało nam skrzydeł i stało się motywacją do dalszego rozwijania
              oferty. Choć prowadzenie własnej działalności bywa wyzwaniem, z
              optymizmem patrzymy w przyszłość i nieustannie pracujemy nad
              nowymi pomysłami.
            </p>
            <div
              className="history__container__photo photo-frame text-2_photo-1-left photo"
              // style={{ gridRow: "3/ 5", gridColumn: "2/-1" }}
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
          <p className="history__container__content--signature">
            Pozdrawiamy serdecznie i zapraszamy do zakupów!
            <br />
            <span className="company-name">
              Mateusz, Gosia i Maksiu Nowosieleccy
            </span>
          </p>
        </div>
        <Footer />
      </ScrollEffectContainer>
    </section>
  );
}
