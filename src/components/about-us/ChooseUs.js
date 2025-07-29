import { useState, useEffect } from "react";
import ScrollEffectContainer from "../ScrollEffectContainer";
import { debounce } from "lodash";

export default function ChooseUs({ className = "" }) {
  const [flag, setFlag] = useState(false);
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
        <div
          className={`grid-2-col-${className}2 grid-center-justify u-margin-bottom-medium`}
        >
          <div>
            <ScrollEffectContainer
              totalImages={0}
              threshold={0}
              animationTime={0.3}
              animationTransform="translateY(2rem)"
              // rootMargin="-320px"
              rootMargin={rootMargin}
              flag={() => setFlag(true)}
            >
              <h3 className="heading-tertiary">Dlaczego warto nas wybrać?</h3>
            </ScrollEffectContainer>
            {flag && (
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
                        <a
                          href={item.linkUrl}
                          // target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.linkText}
                        </a>
                      )}
                    </li>
                  </ScrollEffectContainer>
                ))}
              </ul>
            )}
          </div>

          <div>
            <ScrollEffectContainer
              totalImages={0}
              threshold={0}
              animationTime={0.3}
              animationTransform="translateY(2rem)"
              // rootMargin="-320px"
              rootMargin={rootMargin}
              flag={() => setFlag(true)}
            >
              <h3 className="heading-tertiary">Czym się zajmujemy?</h3>
            </ScrollEffectContainer>
            {flag && (
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
                        <a
                          href={item.linkUrl}
                          // target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.linkText}
                        </a>
                      )}
                    </li>
                  </ScrollEffectContainer>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
