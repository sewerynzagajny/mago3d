import ScrollEffectContainer from "../ScrollEffectContainer";
import photo1 from "../../assets/about_us/about-us-1.webp";

export default function Mission({ className = "" }) {
  return (
    <div className={`${className}__mission`}>
      <ScrollEffectContainer
        totalImages={0}
        threshold={0.1}
        animationTime={0.6}
        animationTransform="translateY(2rem)"
        // rootMargin="50%"
      >
        <div className={`${className}__container`}>
          <h2 className="heading-secondary">O nas</h2>
          <h3 className="heading-tertiary">Idea i nasza misja</h3>
          <div className="grid-2-col-about-us grid-center-justify u-margin-bottom-medium">
            <p className={`${className}__container__content all-line`}>
              {" "}
              W <span className="company-name">MaGo3d</span> łączymy
              technologiczną precyzję z kreatywnym myśleniem. Nasza pracownia
              powstała z potrzeby tworzenia rzeczy wyjątkowych - takich, które
              nie tylko cieszą oko, ale również spełniają realne potrzeby
              użytkowników. Druk 3D to dla nas coś więcej niż tylko nowoczesna
              technologia - to narzędzie, które pozwala przekuwać pomysły w
              realne, trwałe i funkcjonalne rozwiązania.
            </p>
            <p className={`${className}__container__content all-line`}>
              Specjalizujemy się w projektowaniu i produkcji unikalnych
              akcesoriów i elementów użytkowych, które łączą wysoką jakość
              wykonania z dbałością o detale. Nasze produkty powstają z myślą o
              pasjonatach, hobbystach, kolekcjonerach i wszystkich tych, którzy
              szukają niestandardowych rozwiązań dopasowanych do ich potrzeb.
            </p>

            <ScrollEffectContainer
              totalImages={1}
              threshold={0}
              animationTime={0.6}
              animationTransform="translateY(0)"
              rootMargin="50%"
              className={`${className}__container__photo photo-frame`}
            >
              <figure>
                <img src={photo1} alt="O nas - MaGo3d - druki3d" />
              </figure>
            </ScrollEffectContainer>
            <div>
              <p
                className={`${className}__container__content--text u-text-justify content`}
              >
                <strong style={{ fontSize: "3rem" }}>Nasza misja? </strong>
              </p>
              <p
                className={`${className}__container__content--text u-text-justify content`}
              >
                <br />
                Pokazać, że druk 3D to nie tylko technologia dla inżynierów - to
                dostępne i praktyczne narzędzie, które może ułatwić codzienne
                życie, pomóc rozwinąć pasję lub zrealizować nawet najbardziej
                nietypowy pomysł. Każdy projekt traktujemy indywidualnie -
                analizujemy potrzeby, projektujemy od podstaw i testujemy, by
                końcowy produkt był dokładnie tym, czego oczekujesz. Wierzymy,
                że rzeczy tworzone z pasją i zrozumieniem mają prawdziwą
                wartość. Dlatego w <span className="company-name">
                  MaGo3d
                </span>{" "}
                nie ma miejsca na półśrodki - stawiamy na jakość, solidność i
                pomysłowość.
              </p>
            </div>
          </div>

          {/* <p className={`${className}__container__content paragraph`}>
            Dlaczego warto nas wybrać? ✅ Realizujemy autorskie projekty, od
            pomysłu po gotowy produkt ✅ Gwarantujemy wysoką jakość druku i
            materiałów ✅ Oferujemy rozwiązania praktyczne, estetyczne i trwałe
            ✅ Jesteśmy elastyczni — dopasowujemy się do potrzeb klienta ✅
            Stawiamy na rzetelność, terminowość i dobry kontakt
          </p>

          <p className={`${className}__container__content paragraph`}>
            Czym się zajmujemy? ➡️ Druk 3D na zamówowania ➡️ Produkcja akcesoriów
            do kolekcjonerstwa, modelarstwa i wnętrz ➡️ Opracowywanie i
            testowanie nowych rozwiązań w technologii FDM ➡️ Konsultacje i
            doradztwo w zakresie druku 3D Jesteśmy obecni także w social mediach
            — sprawdź, co u nas nowego!
          </p> */}
        </div>
      </ScrollEffectContainer>
    </div>
  );
}
