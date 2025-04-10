import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import photo1 from "../assets//materials/materials-1.png";
import ScrollEffectContainer from "../components/ScrollEffectContainer";

export default function Materials() {
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
                src={photo1}
                alt="Example of Mago3d materials"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollEffectContainer>
        <ScrollEffectContainer
          totalImages={1}
          threshold={0.1}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
        >
          <h3 className="heading-tertiary">Druk 3d</h3>
          <h2 className="heading-secondary">
            <q>Modelowanie metodą stapiania i osadzania</q>
          </h2>

          <div className="grid-2-col grid-center-justify ">
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
            <div className="history__container__photo photo-frame u-margin-bottom-medium">
              <figure>
                <img
                  src={photo1}
                  alt="Example of Mago3d history"
                  loading="lazy"
                />
              </figure>
            </div>
            <div>
              <p className="">Kluczowe cechy</p>
              <ul className="materials__container__content--list">
                <li>Łatwość użycia</li>
                <li>Wszechstronność materiałów</li>
                <li>Ekonomiczność</li>
                <li>Duża dostępność filamentów</li>
                <li>Możliwość druku dużych modeli</li>
              </ul>
            </div>
          </div>
        </ScrollEffectContainer>
      </div>
      <Footer />
    </section>
  );
}
