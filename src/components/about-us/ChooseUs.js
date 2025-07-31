import { useState, useEffect } from "react";
import ScrollEffectContainer from "../ScrollEffectContainer";
import { debounce } from "lodash";
import { useNavigationType } from "react-router-dom";

export default function ChooseUs({ className = "" }) {
  // Klucze specyficzne dla każdej sekcji
  const FLAG_KEY_1 = "choose-us-section1-flag";
  const FLAG_KEY_2 = "choose-us-section2-flag";
  const navigationType = useNavigationType();

  if (typeof window !== "undefined" && navigationType !== "POP") {
    sessionStorage.removeItem(FLAG_KEY_1);
    sessionStorage.removeItem(FLAG_KEY_2);
  }

  const [pageVisited1, setPageVisited1] = useState(() => {
    const savedFlag = sessionStorage.getItem(FLAG_KEY_1);
    return savedFlag === "true";
  });

  const [pageVisited2, setPageVisited2] = useState(() => {
    const savedFlag = sessionStorage.getItem(FLAG_KEY_2);
    return savedFlag === "true";
  });

  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [rootMargin, setRootMargin] = useState("220px");
  const rootMarginMobile = "150%";

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

  // Wyczyść flagi przy opuszczeniu strony (nowa nawigacja)
  useEffect(() => {
    const handleBeforeUnload = () => {
      const navigationEntry = performance.getEntriesByType("navigation")[0];
      if (navigationEntry && navigationEntry.type !== "back_forward") {
        sessionStorage.removeItem(FLAG_KEY_1);
        sessionStorage.removeItem(FLAG_KEY_2);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const navigation = performance.getEntriesByType("navigation")[0];
        if (navigation && navigation.type !== "back_forward") {
          sessionStorage.removeItem(FLAG_KEY_1);
          sessionStorage.removeItem(FLAG_KEY_2);
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
        setRootMargin("-10px");
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
    <div className={`${className}__choose-us`}>
      <div className={`${className}__container`}>
        <div className={`grid-2-col-${className}2 grid-center-justify`}>
          {!pageVisited1 ? (
            <div>
              <ScrollEffectContainer
                totalImages={0}
                threshold={0}
                animationTime={0.3}
                animationTransform="translateY(2rem)"
                rootMargin={rootMargin}
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
                rootMargin={rootMargin}
                flag={() => {
                  setFlag2(true);
                  setTimeout(() => {
                    setPageVisited2(true);
                  }, 2000);
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
      </div>
    </div>
  );
}
