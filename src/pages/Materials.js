import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import photo1 from "../assets//materials/materials-1.png";
import photo2 from "../assets//materials/materials-2.png";
import videomp4 from "../assets/materials/video-materials-1.mp4";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import { debounce } from "lodash";

export default function Materials() {
  const [flag, setFlag] = useState(false);
  const [rootMargin, setRootMargin] = useState("-220px");

  useEffect(() => {
    const updateRootMargin = debounce(() => {
      if (window.innerWidth <= 768) {
        setRootMargin("200px");
      } else {
        setRootMargin("-320px");
      }
    }, 0); // 200ms opóźnienia

    updateRootMargin();
    window.addEventListener("resize", updateRootMargin);

    return () => window.removeEventListener("resize", updateRootMargin);
  }, []);

  return (
    <section className="materials">
      <Navigation />
      <div className="materials__container">
        <ScrollEffectContainer
          totalImages={2}
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          rootMargin="50%"
        >
          <h2 className="heading-secondary">Materiały</h2>
          <h3 className="heading-tertiary">
            <q>Z czego drukujemy</q>
          </h3>
          <div className="grid-2-col-0_5-2-materials grid-center grid-center-align u-margin-bottom-medium">
            <div className="materials__container__photo photo">
              <img src={photo1} alt="Example of Mago3d materials" />
            </div>
            <ul className="materials__container__content text">
              <li className="materials__container__content--list u-margin-bottom-xsmall">
                PETG (Polietylenotereftalan glikolu modyfikowany glikolem)
              </li>
              <li className="materials__container__content--text-list">
                <strong>PETG</strong> to wytrzymały, elastyczny filament łączący
                zalety <strong>PLA</strong> i <strong>ABS</strong>. Jest odporny
                na uderzenia, temperaturę (do <strong>ok. 80°C)</strong> i
                chemikalia, a przy tym łatwy w druku – nie wymaga podgrzewanej
                komory. Idealny na funkcjonalne części, pojemniki czy prototypy.
                Mniej kruchy niż <strong>PLA</strong>, ale nieco trudniejszy w
                obróbce (np. szlifowaniu). <strong>PETG</strong> nadaje się do
                recyklingu mechanicznego (przetapiania), co jest jego
                ekologiczną zaletą, ale to proces wymagający odpowiedniej
                infrastruktury.
              </li>
            </ul>
          </div>
          <div className="grid-2-col-2-0_5-materials grid-center grid-center-align u-margin-bottom-large">
            <ul className="materials__container__content">
              <li className="materials__container__content--list u-margin-bottom-xsmall">
                PLA (Kwas polimlekowy)
              </li>
              <li className="materials__container__content--text-list">
                <strong>PLA</strong> to najpopularniejszy filament w druku 3D –
                biodegradowalny, wykonany z odnawialnych źródeł (np. kukurydzy).
                Łatwy w druku, nie wydziela szkodliwych zapachów, wymaga niskiej
                temperatury (<strong>ok. 190-220°C</strong>). Świetny na modele
                dekoracyjne i prototypy, ale kruchy i nieodporny na wysokie
                temperatury (topi się powyżej <strong>60°C</strong>). Kolory
                mogą blaknąć pod wpływem światła UV. Przeznaczony do użytku
                wewnętrznego. <strong>PLA</strong> jest biodegradowalny, bo
                pochodzi z kwasu mlekowego i rozkłada się w warunkach
                kompostowania przemysłowego (wysoka temperatura i wilgotność) w
                ciągu kilku miesięcy.
              </li>
            </ul>
            <div className="materials__container__photo">
              <img src={photo2} alt="Example of Mago3d materials" />
            </div>
          </div>
        </ScrollEffectContainer>
        <ScrollEffectContainer
          totalImages={0}
          threshold={0.1}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
        >
          <h2 className="heading-secondary">Druk 3d</h2>
          <h3 className="heading-tertiary">
            <q>Modelowanie metodą stapiania i osadzania</q>
          </h3>

          <div className="grid-2-col-materials grid-center-justify u-margin-bottom-medium">
            <p className="materials__container__content--text all-line u-text-justify content">
              <span className="company-name">
                FDM (Fused Deposition Modeling – Modelowanie metodą stapiania i
                osadzania)
              </span>{" "}
              to najpopularniejsza technologia druku 3D, oparta na nakładaniu
              warstw roztopionego filamentu (np. PLA, PETG, ABS) przez
              podgrzewaną dyszę. Materiał jest wyciskany na stół roboczy, gdzie
              zastyga, tworząc model warstwa po warstwie. Prosta, tania i
              wszechstronna – idealna dla hobbystów i prototypowania. Wymaga
              precyzyjnej kalibracji (temperatura, prędkość), a jakość zależy od
              ustawień i filamentu. Ograniczenia to widoczne warstwy i mniejsza
              precyzja w porównaniu do żywic (SLA).
            </p>
            <div className="video-frame video">
              <figure>
                <video autoPlay loop muted playsInline>
                  <source src={videomp4} type="video/mp4" />
                  {/* <source src={videoWebm} type="video/webm" /> */}
                  Your browser is not supported!
                </video>
              </figure>
            </div>
            <div className="second-column content">
              <ScrollEffectContainer
                totalImages={0}
                threshold={0}
                animationTime={0.3}
                animationTransform="translateY(2rem)"
                // rootMargin="-320px"
                rootMargin={rootMargin}
                flag={() => setFlag(true)}
              >
                <h1 className="heading-fourth">Kluczowe cechy</h1>
              </ScrollEffectContainer>
              {flag && (
                <ul className="materials__container__content">
                  <ScrollEffectContainer
                    totalImages={0}
                    threshold={0}
                    animationTime={0.3}
                    animationTransform="translateY(6rem)"
                    animationDelay={1}
                  >
                    <li className="materials__container__content--list">
                      Proces
                    </li>
                    <li className="materials__container__content--text-list u-margin-bottom-xsmall">
                      Filament jest topiony w temperaturze 180-260°C (zależnie
                      od materiału) i osadzany z dokładnością rzędu 0,1-0,3 mm
                    </li>
                  </ScrollEffectContainer>
                  <ScrollEffectContainer
                    totalImages={0}
                    threshold={0}
                    animationTime={0.3}
                    animationTransform="translateY(6rem)"
                    animationDelay={2}
                  >
                    <li className="materials__container__content--list">
                      Zalety
                    </li>
                    <li className="materials__container__content--text-list u-margin-bottom-xsmall">
                      Niski koszt, szeroki wybór materiałów, łatwość obsługi,
                      możliwość druku wielokolorowego
                    </li>
                  </ScrollEffectContainer>
                  <ScrollEffectContainer
                    totalImages={0}
                    threshold={0}
                    animationTime={0.3}
                    animationTransform="translateY(6rem)"
                    animationDelay={3}
                  >
                    <li className="materials__container__content--list">
                      Wady
                    </li>
                    <li className="materials__container__content--text-list u-margin-bottom-xsmall">
                      Widoczne warstwy w porównaniu do SLA (żywicy)
                    </li>
                  </ScrollEffectContainer>
                </ul>
              )}
            </div>
          </div>
        </ScrollEffectContainer>
      </div>
      <Footer />
    </section>
  );
}
