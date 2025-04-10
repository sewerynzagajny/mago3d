import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import photo1 from "../assets//materials/materials-1.png";
import photo2 from "../assets//materials/materials-2.png";
import ScrollEffectContainer from "../components/ScrollEffectContainer";

export default function Materials() {
  const [flag, setFlag] = useState(false);

  return (
    <section className="materials">
      <Navigation />
      <div className="materials__container">
        <ScrollEffectContainer
          totalImages={2}
          threshold={0.1}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
        >
          <h3 className="heading-tertiary">Materiały</h3>
          <h2 className="heading-secondary">
            <q>Z czego drukujemy</q>
          </h2>
          <div className="grid-2-col-0_5-2 grid-center grid-center-align u-margin-bottom-medium">
            <div className="materials__container__photo">
              <img
                src={photo1}
                alt="Example of Mago3d materials"
                loading="lazy"
              />
            </div>
            <ul className="materials__container__content">
              <li className="materials__container__content--list u-margin-bottom-xsmall">
                PETG (Polietylenotereftalan glikolu modyfikowany glikolem)
              </li>
              <p className="materials__container__content--text">
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
              </p>
            </ul>
          </div>
          <div className="grid-2-col-2-0_5 grid-center grid-center-align u-margin-bottom-large">
            <ul className="materials__container__content">
              <li className="materials__container__content--list u-margin-bottom-xsmall">
                PLA (Kwas polimlekowy)
              </li>
              <p className="materials__container__content--text">
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
              </p>
            </ul>
            <div className="materials__container__photo">
              <img
                src={photo2}
                alt="Example of Mago3d materials"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollEffectContainer>
        <ScrollEffectContainer
          totalImages={0}
          threshold={0.1}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
        >
          <h3 className="heading-tertiary">Druk 3d</h3>
          <h2 className="heading-secondary">
            <q>Modelowanie metodą stapiania i osadzania</q>
          </h2>

          <div className="grid-4-col grid-center-justify ">
            <p className="materials__container__content--text all-line">
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
            <div
              className="photo-frame u-margin-bottom-medium"
              style={{ justifySelf: "start" }}
            >
              <figure>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1034151744392067%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: "none", overflow: "hidden" }}
                  title="Facebook Video"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </figure>
            </div>
            <div className="second-column">
              <ScrollEffectContainer
                totalImages={0}
                threshold={1}
                animationTime={0.3}
                animationTransform="translateY(2rem)"
                rootMargin="-320px"
                flag={() => setFlag(true)}
              >
                <h4 className="heading-fourth">Kluczowe cechy</h4>
              </ScrollEffectContainer>
              {flag && (
                <ul className="materials__container__content">
                  <ScrollEffectContainer
                    totalImages={0}
                    threshold={1}
                    animationTime={0.3}
                    animationTransform="translateY(6rem)"
                    animationDelay={1}
                  >
                    <li className="materials__container__content--list">
                      Proces
                    </li>
                    <p className="materials__container__content--text u-margin-bottom-xsmall">
                      Filament jest topiony w temperaturze 180-260°C (zależnie
                      od materiału) i osadzany z dokładnością rzędu 0,1-0,3 mm
                    </p>
                  </ScrollEffectContainer>
                  <ScrollEffectContainer
                    totalImages={0}
                    threshold={1}
                    animationTime={0.3}
                    animationTransform="translateY(6rem)"
                    animationDelay={2}
                  >
                    <li className="materials__container__content--list">
                      Zalety
                    </li>
                    <p className="materials__container__content--text u-margin-bottom-xsmall">
                      Niski koszt, szeroki wybór materiałów, łatwość obsługi,
                      możliwość druku wielokolorowego
                    </p>
                  </ScrollEffectContainer>
                  <ScrollEffectContainer
                    totalImages={0}
                    threshold={1}
                    animationTime={0.3}
                    animationTransform="translateY(6rem)"
                    animationDelay={3}
                  >
                    <li className="materials__container__content--list">
                      Wady
                    </li>
                    <p className="materials__container__content--text u-margin-bottom-xsmall">
                      Widoczne warstwy w porównaniu do SLA (żywicy)
                    </p>
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
