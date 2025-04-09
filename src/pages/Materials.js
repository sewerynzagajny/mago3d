import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import photo1 from "../assets//materials/materials-1.png";

export default function Materials() {
  return (
    <section className="materials">
      <Navigation />
      <div className="materials__container">
        <h3 className="heading-tertiary">Materiały</h3>
        <h2 className="heading-secondary">
          <q>Z czego drukujemy</q>
        </h2>
        <div className="grid-2-col-0_5-2 grid-center grid-center-align ">
          <div className="materials__container__photo">
            <img
              src={photo1}
              alt="Example of Mago3d materials"
              loading="lazy"
            />
          </div>
          <ul className="materials__container__content">
            <li className="materials__container__content--list">
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
              recyklingu mechanicznego (przetapiania), co jest jego ekologiczną
              zaletą, ale to proces wymagający odpowiedniej infrastruktury.
            </p>
          </ul>
        </div>
        <div className="grid-2-col-2-0_5 grid-center grid-center-align ">
          <ul className="materials__container__content">
            <li className="materials__container__content--list">
              PLA (Kwas polimlekowy)
            </li>
            <p className="materials__container__content--text">
              PLA to najpopularniejszy filament w druku 3D – biodegradowalny,
              wykonany z odnawialnych źródeł (np. kukurydzy). Łatwy w druku, nie
              wydziela szkodliwych zapachów, wymaga niskiej temperatury (ok.
              190-220°C). Świetny na modele dekoracyjne i prototypy, ale kruchy
              i nieodporny na wysokie temperatury (topi się powyżej 60°C).
              Kolory mogą blaknąć pod wpływem światła UV. Przeznaczony do użytku
              wewnętrznego. PLA jest biodegradowalny, bo pochodzi z kwasu
              mlekowego i rozkłada się w warunkach kompostowania przemysłowego
              (wysoka temperatura i wilgotność) w ciągu kilku miesięcy.
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
      </div>
      <Footer />
    </section>
  );
}
