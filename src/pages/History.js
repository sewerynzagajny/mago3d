// import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import photo1 from "../assets/history/history-1.webp";
import photo2 from "../assets/history/history-2.webp";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

export default function History() {
  const seoData = {
    title: "Historia - MaGo3d | Jak wszystko się zaczęło",
    description:
      "Poznaj historię MaGo3d. Od pasieki do drukarni 3D. Jak powstały podstawki pod Thermomix i dlaczego warto nam zaufać.",
    canonicalUrl: "https://mago3d.pl/historia",
    ogImage: "https://mago3d.pl/assets/history/history-1.webp",
  };
  return (
    <>
      <SEOHead {...seoData} />
      <section className="history">
        <Navigation />
        <ScrollEffectContainer
          totalImages={0}
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          rootMargin="50%"
        >
          <div className="history__container">
            <h2 className="heading-secondary">Historia</h2>
            <h3 className="heading-tertiary">
              <q>Jak to się zaczęło...</q>
            </h3>
            <div className="grid-2-col-history grid-center-justify ">
              <p className="history__container__content all-line paragraph ">
                Cześć! Nazywam się Mateusz i jestem założycielem marki{" "}
                <span className="company-name">MaGo3d.</span> Jestem szczęśliwym
                mężem i ojcem. Po sprzedaży pasieki (tak, wcześniej byłem
                pszczelarzem! 😊), którą zdecydowałem się zamknąć głównie ze
                względu na niską opłacalność, czasochłonność oraz rychłe
                narodziny synka, zacząłem szukać nowego zajęcia.
              </p>
              <ScrollEffectContainer
                totalImages={1}
                threshold={0}
                animationTime={0.6}
                animationTransform="translateY(0)"
                rootMargin="50%"
                className="history__container__photo photo-frame photo"
              >
                <figure>
                  <img src={photo1} alt="Historia MaGo3d - druki3d" />
                </figure>
              </ScrollEffectContainer>
              {/* <div className="history__container__photo photo-frame photo">
              <figure>
              <img src={photo1} alt="Example of Mago3d history" />
              </figure>
              </div> */}

              <p className="history__container__content paragraph">
                Chciałem czegoś, co pozwoli mi pracować z domu i jednocześnie
                zabezpieczy rodzinny budżet w razie nieprzewidzianych sytuacji.
                Ponieważ miałem doświadczenie w modelowaniu CAD, naturalnym
                krokiem stało się dla mnie odkrycie druku 3D. Pierwszym
                produktem, który opracowałem, były podstawki pod Thermomix.
                Pomysł wziął się z codziennej obserwacji - widząc, jak moja żona
                z trudem przesuwa to ciężkie urządzenie, postanowiłem znaleźć
                rozwiązanie. Ku mojemu zaskoczeniu, po przeszukaniu Internetu
                okazało się, że nikt nie oferuje podstawek z kółkami.
              </p>
              <p className="history__container__content paragraph">
                Wykorzystując umiejętności projektowania w CAD, stworzyłem i
                wydrukowałem pierwsze prototypy - oczywiście pod czujnym okiem
                żony! Okazały się one bardzo udane, więc przekazaliśmy kilka
                egzemplarzy znajomym do testów. Ich pozytywne opinie utwierdziły
                nas w przekonaniu, że to może być strzał w dziesiątkę.
                Postanowiliśmy wystawić produkt na sprzedaż w grupach
                Facebookowych związanych z Thermomixem. Odzew przerósł nasze
                oczekiwania - prawie 600 komentarzy potwierdziło, że trafiliśmy
                w realną potrzebę użytkowników. Liczba zamówień rosła z dnia na
                dzień, co tylko utwierdzało nas w słuszności obranej drogi.
              </p>
              <p className="history__container__content paragraph">
                To był moment, w którym poczuliśmy, że naprawdę tworzymy coś
                wartościowego. Zdecydowaliśmy się zastrzec wzór użytkowy w
                EUIPO. Była to spora inwestycja na początek, ale szybko się
                opłaciła - pozwoliła nam skutecznie odstraszyć konkurencję,
                która błyskawicznie zaczęła kopiować nasz produkt. Zadowolenie
                klientów dodało nam skrzydeł i stało się motywacją do dalszego
                rozwijania oferty. Choć prowadzenie własnej działalności bywa
                wyzwaniem, z optymizmem patrzymy w przyszłość i nieustannie
                pracujemy nad nowymi pomysłami.
              </p>
              <ScrollEffectContainer
                totalImages={1}
                threshold={0}
                animationTime={0.6}
                animationTransform="translateY(0)"
                rootMargin="50%"
                className="history__container__photo photo-frame text-2_photo-1-left photo"
              >
                <figure>
                  <img src={photo2} alt="Historia MaGo3d - druki3d" />
                </figure>
              </ScrollEffectContainer>
              {/* <div
              className="history__container__photo photo-frame text-2_photo-1-left photo"
              // style={{ gridRow: "3/ 5", gridColumn: "2/-1" }}
              >
              <figure>
              <img src={photo2} alt="Example of Mago3d history" />
              </figure>
            </div> */}
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
        <CookieBanner />
      </section>
    </>
  );
}
