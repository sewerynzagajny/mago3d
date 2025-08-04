import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBaner from "../components/CookieBanner";
import photo1 from "../assets/materials/materials-1.webp";
import photo2 from "../assets/materials/materials-2.webp";
import videomp4 from "../assets/materials/video-materials-1.mp4";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import { debounce } from "lodash";
import SEOHead from "../components/SEOHead";
import { useNavigationType } from "react-router-dom";

export default function Materials() {
  // Klucz specyficzny dla tej strony
  const FLAG_KEY = "materials-page-flag";
  const navigationType = useNavigationType();
  if (typeof window !== "undefined" && navigationType !== "POP") {
    sessionStorage.removeItem(FLAG_KEY);
  }

  const [pageVisited, setPageVisited] = useState(() => {
    const savedFlag = sessionStorage.getItem(FLAG_KEY);
    return savedFlag === "true";
  });
  const [flag, setFlag] = useState(false);
  const [rootMargin, setRootMargin] = useState("220px");
  const rootMarginMobile = "150%";

  const seoData = {
    title: "Materiały do druku 3D - MaGo3d | PLA, PETG, FDM",
    description:
      "Poznaj materiały używane przez MaGo3d w druku 3D. PLA, PETG, technologia FDM. Dowiedz się więcej o procesie drukowania i jakości produktów.",
    canonicalUrl: "https://mago3d.pl/materialy",
    ogImage: "https://mago3d.pl/assets/materials/materials-1.webp",
  };

  const listItems = [
    {
      title: "Proces",
      text: "Filament jest topiony w temperaturze 180-260°C (zależnie od materiału) i osadzany z dokładnością rzędu 0,1-0,3 mm",
    },
    {
      title: "Zalety",
      text: "Niski koszt, szeroki wybór materiałów, łatwość obsługi, możliwość druku wielokolorowego",
    },
    {
      title: "Wady",
      text: "Widoczne warstwy w porównaniu do SLA (żywicy)",
    },
  ];

  // useEffect(() => {
  //   if (navigationType !== "POP") {
  //     sessionStorage.removeItem(FLAG_KEY);
  //     setPageVisited(false);
  //     setFlag(false);
  //   }
  // }, [navigationType]);

  // Zapisz flagę do sessionStorage gdy się zmieni
  useEffect(() => {
    if (pageVisited) {
      sessionStorage.setItem(FLAG_KEY, "true");
    }
  }, [pageVisited]);

  // Wyczyść flagę przy opuszczeniu strony (nowa nawigacja)
  useEffect(() => {
    const handleBeforeUnload = () => {
      const navigationEntry = performance.getEntriesByType("navigation")[0];
      if (navigationEntry && navigationEntry.type !== "back_forward") {
        sessionStorage.removeItem(FLAG_KEY);
      }
    };

    // Lepsze rozwiązanie - użyj Page Visibility API
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // Sprawdź czy użytkownik opuszcza stronę przez nawigację
        const navigation = performance.getEntriesByType("navigation")[0];
        if (navigation && navigation.type !== "back_forward") {
          sessionStorage.removeItem(FLAG_KEY);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const updateRootMargin = () => {
      if (window.innerWidth <= 832) {
        // setRootMargin("-10px");
        setRootMargin("-80px");
      } else if (window.innerWidth <= 960) {
        setRootMargin("-260px");
      } else if (window.innerWidth <= 1216) {
        setRootMargin("-300px");
      } else {
        setRootMargin("-320px");
      }
    };

    // Wywołanie funkcji przy pierwszym renderze
    updateRootMargin();

    // Dodanie nasłuchiwania na zmianę rozmiaru okna
    const debouncedUpdate = debounce(updateRootMargin, 100); // 100ms opóźnienia
    window.addEventListener("resize", debouncedUpdate);

    // Czyszczenie nasłuchiwania przy odmontowaniu komponentu
    return () => window.removeEventListener("resize", debouncedUpdate);
  }, []);

  return (
    <>
      <SEOHead {...seoData} />
      <section className="materials">
        <Navigation />
        <div className="materials__container">
          <ScrollEffectContainer
            totalImages={0}
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
              {" "}
              <ScrollEffectContainer
                totalImages={1}
                threshold={0}
                animationTime={0.6}
                animationTransform="translateY(0rem)"
                rootMargin="50%"
                className="materials__container__photo photo"
              >
                <img src={photo1} alt="Materiały do druku 3D PETG - MaGo3d" />
              </ScrollEffectContainer>
              {/* <div className="materials__container__photo photo">
              <img src={photo1} alt="Example of Mago3d materials" />
            </div> */}
              <ul className="materials__container__content text">
                <li className="materials__container__content--list u-margin-bottom-xsmall">
                  PETG (Polietylenotereftalan glikolu modyfikowany glikolem)
                </li>
                <li className="materials__container__content--text-list">
                  <strong>PETG</strong> to wytrzymały, elastyczny filament
                  łączący zalety <strong>PLA</strong> i <strong>ABS</strong>.
                  Jest odporny na uderzenia, temperaturę (do{" "}
                  <strong>ok. 80°C)</strong> i chemikalia, a przy tym łatwy w
                  druku - nie wymaga podgrzewanej komory. Idealny na
                  funkcjonalne części, pojemniki czy prototypy. Mniej kruchy niż{" "}
                  <strong>PLA</strong>, ale nieco trudniejszy w obróbce (np.
                  szlifowaniu). <strong>PETG</strong> nadaje się do recyklingu
                  mechanicznego (przetapiania), co jest jego ekologiczną zaletą,
                  ale to proces wymagający odpowiedniej infrastruktury.
                </li>
              </ul>
            </div>
            <div className="grid-2-col-2-0_5-materials grid-center grid-center-align u-margin-bottom-large">
              <ul className="materials__container__content">
                <li className="materials__container__content--list u-margin-bottom-xsmall">
                  PLA (Kwas polimlekowy)
                </li>
                <li className="materials__container__content--text-list">
                  <strong>PLA</strong> to najpopularniejszy filament w druku 3D
                  - biodegradowalny, wykonany z odnawialnych źródeł (np.
                  kukurydzy). Łatwy w druku, nie wydziela szkodliwych zapachów,
                  wymaga niskiej temperatury (<strong>ok. 190-220°C</strong>).
                  Świetny na modele dekoracyjne i prototypy, ale kruchy i
                  nieodporny na wysokie temperatury (topi się powyżej{" "}
                  <strong>60°C</strong>). Kolory mogą blaknąć pod wpływem
                  światła UV. Przeznaczony do użytku wewnętrznego.{" "}
                  <strong>PLA</strong> jest biodegradowalny, bo pochodzi z kwasu
                  mlekowego i rozkłada się w warunkach kompostowania
                  przemysłowego (wysoka temperatura i wilgotność) w ciągu kilku
                  miesięcy.
                </li>
              </ul>
              <ScrollEffectContainer
                totalImages={1}
                threshold={0}
                animationTime={0.6}
                animationTransform="translateY(0rem)"
                rootMargin="50%"
                className="materials__container__photo photo"
              >
                <img src={photo2} alt="Materiały do druku 3D PLA - MaGo3d" />
              </ScrollEffectContainer>
              {/* <div className="materials__container__photo">
              <img src={photo2} alt="Example of Mago3d materials" />
              </div> */}
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
                  FDM (Fused Deposition Modeling - Modelowanie metodą stapiania
                  i osadzania)
                </span>{" "}
                to najpopularniejsza technologia druku 3D, oparta na nakładaniu
                warstw roztopionego filamentu (np. PLA, PETG, ABS) przez
                podgrzewaną dyszę. Materiał jest wyciskany na stół roboczy,
                gdzie zastyga, tworząc model warstwa po warstwie. Prosta, tania
                i wszechstronna - idealna dla hobbystów i prototypowania. Wymaga
                precyzyjnej kalibracji (temperatura, prędkość), a jakość zależy
                od ustawień i filamentu. Ograniczenia to widoczne warstwy i
                mniejsza precyzja w porównaniu do żywic (SLA).
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
              {!pageVisited ? (
                <div className="second-column content">
                  <ScrollEffectContainer
                    totalImages={0}
                    threshold={0}
                    animationTime={0.3}
                    animationTransform="translateY(2rem)"
                    // rootMargin="-320px"
                    rootMargin={rootMargin}
                    flag={() => {
                      setFlag(true);
                      setTimeout(() => {
                        setPageVisited(true);
                      }, 1600);
                    }}
                  >
                    <h1 className="heading-fourth">Kluczowe cechy</h1>
                  </ScrollEffectContainer>
                  {flag && (
                    <ul className="materials__container__content">
                      {listItems.map((item, index) => (
                        <ScrollEffectContainer
                          key={index}
                          totalImages={0}
                          threshold={0}
                          animationTime={0.3}
                          animationTransform="translateY(6rem)"
                          animationDelay={(index + 1) * 0.4}
                          rootMargin={rootMarginMobile}
                        >
                          <li className="materials__container__content--list">
                            {item.title}
                          </li>
                          <li className="materials__container__content--text-list u-margin-bottom-xsmall">
                            {item.text}
                          </li>
                        </ScrollEffectContainer>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div className="second-column content">
                  <h1 className="heading-fourth">Kluczowe cechy</h1>

                  <ul className="materials__container__content">
                    {listItems.map((item, index) => (
                      <>
                        <li className="materials__container__content--list">
                          {item.title}
                        </li>
                        <li className="materials__container__content--text-list u-margin-bottom-xsmall">
                          {item.text}
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ScrollEffectContainer>
        </div>
        <Footer />
        <CookieBaner />
      </section>
    </>
  );
}
