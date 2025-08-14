import { useState, useEffect, useCallback } from "react";
import ScrollEffectContainer from "../ScrollEffectContainer";
import { debounce } from "lodash";
import { useLocation, useNavigationType } from "react-router-dom";
import Btn from "../Btn";
import { Link } from "react-router-dom";

export default function ChooseUs({ className = "" }) {
  // Klucze specyficzne dla każdej sekcji
  // Klucze specyficzne dla każdej sekcji
  const FLAG_KEY_1 = "choose-us-section1-flag";
  const FLAG_KEY_2 = "choose-us-section2-flag";

  const navigationType = useNavigationType();
  const location = useLocation();

  // Funkcja do sprawdzania czy to nawigacja wstecz/wprzód
  const isBackForwardNavigation = useCallback(() => {
    if (typeof window === "undefined") return false;

    // Sprawdź useNavigationType
    if (navigationType === "POP") return true;

    // Sprawdź performance API
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    if (navigationEntry && navigationEntry.type === "back_forward") return true;

    // Dla PUSH i REPLACE - zawsze traktuj jako nową nawigację
    return false;
  }, [navigationType]);

  // Czyszczenie flag przy nowej nawigacji (nie back/forward)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isBackForwardNavigation()) {
        sessionStorage.removeItem(FLAG_KEY_1);
        sessionStorage.removeItem(FLAG_KEY_2);
      }
    }
  }, [location.pathname, isBackForwardNavigation]);

  const [pageVisited1, setPageVisited1] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedFlag = sessionStorage.getItem(FLAG_KEY_1);
    return savedFlag === "true" && isBackForwardNavigation();
  });

  const [pageVisited2, setPageVisited2] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedFlag = sessionStorage.getItem(FLAG_KEY_2);
    return savedFlag === "true" && isBackForwardNavigation();
  });

  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [rootMargin1, setRootMargin1] = useState("220px");
  const [rootMargin2, setRootMargin2] = useState("220px");
  // const rootMarginMobile = "150%";
  const [rootMarginMobile, setRootMarginMobile] = useState("150%");

  const chooseUsListItems = [
    {
      linkText: "sklepie",
      linkUrl: "asortyment",
      text: "Realizujemy autorskie projekty i gotowe produkty dostępne w naszym ",
    },
    {
      text: "Gwarantujemy wysoką jakość druku i sprawdzone materiały",
    },
    {
      text: "Tworzymy praktyczne, estetyczne i trwałe rozwiązania",
    },
    {
      text: "Działamy elastycznie i indywidualnie - każde zlecenie to nowe wyzwanie",
    },
    {
      text: "Stawiamy na terminowość, rzetelność i dobry kontakt",
    },
  ];

  const WeDoListItems = [
    {
      text: "Projektowanie i produkcja unikalnych akcesoriów użytkowych",
    },
    {
      text: "Druk 3D na zamówienie",
    },
    {
      text: "Projektowanie i testowanie rozwiązań w technologii FDM",
    },
    {
      text: "Konsultacje i doradztwo w zakresie druku 3D",
    },
  ];

  // Zapisz flagi do sessionStorage gdy się zmienią
  useEffect(() => {
    if (pageVisited1) {
      sessionStorage.setItem(FLAG_KEY_1, "true");
    }
  }, [pageVisited1]);

  useEffect(() => {
    if (pageVisited2) {
      sessionStorage.setItem(FLAG_KEY_2, "true");
    }
  }, [pageVisited2]);

  useEffect(() => {
    const updateRootMargin = () => {
      // Sprawdź czy to orientacja landscape na mobile
      const isLandscape =
        window.innerHeight < window.innerWidth && window.innerWidth <= 832;

      if (window.innerWidth <= 832) {
        setRootMargin1("-80px");
        setRootMargin2("-100px");
        // Dla landscape użyj mniejszej wartości rootMargin
        setRootMarginMobile(isLandscape ? "50%" : "150%");
      } else if (window.innerWidth <= 960) {
        setRootMargin1("-260px");
        setRootMargin2("-260px");
      } else if (window.innerWidth <= 1216) {
        setRootMargin1("-300px");
        setRootMargin2("-300px");
      } else {
        setRootMargin1("-320px");
        setRootMargin2("-320px");
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
    <div className={`${className}__choose-us`}>
      <div className={`${className}__container`}>
        <div
          className={`grid-2-col-${className}2 grid-center-justify u-margin-bottom-medium-large`}
        >
          {!pageVisited1 ? (
            <div>
              <ScrollEffectContainer
                totalImages={0}
                threshold={0}
                animationTime={0.3}
                animationTransform="translateY(2rem)"
                rootMargin={rootMargin1}
                flag={() => {
                  setFlag1(true);
                  setTimeout(() => {
                    setPageVisited1(true);
                  }, 2400);
                }}
              >
                <h3 className="heading-tertiary">Dlaczego warto nas wybrać?</h3>
              </ScrollEffectContainer>
              {flag1 && (
                <ul className={`${className}__choose-us__list`}>
                  {chooseUsListItems.map((item, index) => (
                    <ScrollEffectContainer
                      key={index}
                      totalImages={0}
                      threshold={0}
                      animationTime={0.3}
                      animationTransform="translateY(6rem)"
                      animationDelay={(index + 1) * 0.4}
                      rootMargin={rootMarginMobile}
                    >
                      <li className={`${className}__choose-us__list--item`}>
                        {item.text}
                        {item.linkText && item.linkUrl && (
                          <a href={item.linkUrl} rel="noopener noreferrer">
                            {item.linkText}
                          </a>
                        )}
                      </li>
                    </ScrollEffectContainer>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div>
              <h3 className="heading-tertiary">Dlaczego warto nas wybrać?</h3>
              <ul className={`${className}__choose-us__list`}>
                {chooseUsListItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${className}__choose-us__list--item`}
                  >
                    {item.text}
                    {item.linkText && item.linkUrl && (
                      <a href={item.linkUrl} rel="noopener noreferrer">
                        {item.linkText}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!pageVisited2 ? (
            <div>
              <ScrollEffectContainer
                totalImages={0}
                threshold={0}
                animationTime={0.3}
                animationTransform="translateY(2rem)"
                rootMargin={rootMargin2}
                flag={() => {
                  setFlag2(true);
                  setTimeout(() => {
                    setPageVisited2(true);
                  }, 3000);
                }}
              >
                <h3 className="heading-tertiary">Czym się zajmujemy?</h3>
              </ScrollEffectContainer>
              {flag2 && (
                <ul className={`${className}__choose-us__list`}>
                  {WeDoListItems.map((item, index) => (
                    <ScrollEffectContainer
                      key={index}
                      totalImages={0}
                      threshold={0}
                      animationTime={0.3}
                      animationTransform="translateY(6rem)"
                      animationDelay={(index + 1) * 0.4}
                      rootMargin={rootMarginMobile}
                    >
                      <li className={`${className}__choose-us__list--item`}>
                        {item.text}
                        {item.linkText && item.linkUrl && (
                          <a href={item.linkUrl} rel="noopener noreferrer">
                            {item.linkText}
                          </a>
                        )}
                      </li>
                    </ScrollEffectContainer>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div>
              <h3 className="heading-tertiary">Czym się zajmujemy?</h3>
              <ul className={`${className}__choose-us__list`}>
                {WeDoListItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${className}__choose-us__list--item`}
                  >
                    {item.text}
                    {item.linkText && item.linkUrl && (
                      <a href={item.linkUrl} rel="noopener noreferrer">
                        {item.linkText}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {!pageVisited2 ? (
          flag2 ? ( // Sprawdź czy flag2 jest true
            <ScrollEffectContainer
              totalImages={0}
              threshold={0}
              animationTime={0.6}
              animationDelay={2.4}
              animationTransform="translateY(2rem)"
              rootMargin={rootMarginMobile}
            >
              <div className="u-text-line-center">
                <Btn className="btn hero__btn" as={Link} to="/kontakt">
                  Skontaktuj się z nami!
                </Btn>
              </div>
            </ScrollEffectContainer>
          ) : null // Jeśli flag2 false, nic nie pokazuj
        ) : (
          <div className="u-text-line-center">
            <Btn className="btn hero__btn" as={Link} to="/kontakt">
              Skontaktuj się z nami!
            </Btn>
          </div>
        )}
      </div>
    </div>
  );
}
