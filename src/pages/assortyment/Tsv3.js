import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBaner from "../../components/CookieBanner";
import Carousel from "../../components/Carousel";
import Product from "../../components/Product";
import { products } from "../../data/products";
import ScrollEffectContainer from "../../components/ScrollEffectContainer";
import useIsMobile from "../../hooks/useIsMobile";

const items = [
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/1.jpg"),
    alt: "Podstawka pod Thermomix TSv3",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/2.jpg"),
    alt: "Podstawka pod Thermomix TSv3",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/3.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/4.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/6.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/7.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
  {
    type: "video",
    src: require("../../assets/assortment/TSv3/8.mp4"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
];

export default function Tsv3() {
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [cookieBannerHeight, setCookieBannerHeight] = useState(0);
  const isMobile = useIsMobile();

  // Dodaj useEffect do blokowania przewijania
  const { useEffect } = require("react");

  useEffect(() => {
    if (modalOpen) {
      // Zablokuj przewijanie
      document.body.style.overflow = "hidden";
    } else {
      // Przywróć przewijanie
      document.body.style.overflow = "unset";
    }

    // Cleanup - przywróć przewijanie gdy komponent się odmontuje
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  function handleModalClick(e) {
    // Nie powiększaj jeśli kliknięto w przycisk zamykania lub miniaturę lub strzałki
    if (
      e.target.classList.contains("carousel__modal") ||
      (e.target.classList.contains("carousel__main-view") && zoomed)
    ) {
      setZoomed(false);
    }
  }

  return (
    <>
      <section className="details">
        <Navigation />
        <ScrollEffectContainer
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          rootMargin="50%"
        >
          <div className="details__container">
            <h2 className="heading-secondary">Szczegóły</h2>
            <h3 className="heading-tertiary">{products[1].name} </h3>
            <div className="details__container__content ">
              {(onMenuVisible || orderModalProductId !== null) && (
                <div
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    // cursor: "pointer",
                  }}
                  onClick={() => setOrderModalProductId(null)}
                />
              )}

              <Carousel
                items={items}
                onItemClick={(idx) => {
                  setModalIndex(idx);
                  setModalOpen(true);
                  setZoomed(false); // reset powiększenia przy otwarciu
                }}
              />

              {/* Karta w gridzie tylko na desktopie */}
              {!isMobile && (
                <div className="details__sticky-product">
                  <Product
                    key={1}
                    product={products[1]}
                    className="details__container__products__item"
                    onMenuChange={setOnMenuVisible}
                    inDetails={true}
                    setOrderModalVisible={(visible) =>
                      setOrderModalProductId(visible ? products[1].id : null)
                    }
                    orderModalVisible={orderModalProductId === products[1].id}
                    style={
                      onMenuVisible || orderModalProductId !== null
                        ? { opacity: "0.8" }
                        : {}
                    }
                  />
                </div>
              )}
              <div className="details__container__content__text">
                <p>
                  Podstawka pod Thermomix TSv3 to idealne rozwiązanie dla osób
                  ceniących sobie porządek i estetykę w kuchni. Dzięki niej Twój
                  Thermomix będzie zawsze na swoim miejscu, a Ty zyskasz więcej
                  przestrzeni roboczej.
                </p>
                <p>
                  Wykonana z wysokiej jakości materiałów, podstawka jest trwała
                  i łatwa do czyszczenia. Jej nowoczesny design sprawia, że
                  doskonale komponuje się z każdym wnętrzem.
                </p>
                <p>
                  Dzięki podstawce pod Thermomix TSv3 możesz cieszyć się wygodą
                  i funkcjonalnością, które ułatwią Ci codzienne gotowanie.
                </p>
                <p>
                  Podstawka pod Thermomix TSv3 to idealne rozwiązanie dla osób
                  ceniących sobie porządek i estetykę w kuchni. Dzięki niej Twój
                  Thermomix będzie zawsze na swoim miejscu, a Ty zyskasz więcej
                  przestrzeni roboczej.
                </p>
                <p>
                  Wykonana z wysokiej jakości materiałów, podstawka jest trwała
                  i łatwa do czyszczenia. Jej nowoczesny design sprawia, że
                  doskonale komponuje się z każdym wnętrzem.
                </p>
                <p>
                  Dzięki podstawce pod Thermomix TSv3 możesz cieszyć się wygodą
                  i funkcjonalnością, które ułatwią Ci codzienne gotowanie.
                </p>
                <p>
                  Podstawka pod Thermomix TSv3 to idealne rozwiązanie dla osób
                  ceniących sobie porządek i estetykę w kuchni. Dzięki niej Twój
                  Thermomix będzie zawsze na swoim miejscu, a Ty zyskasz więcej
                  przestrzeni roboczej.
                </p>
                <p>
                  Wykonana z wysokiej jakości materiałów, podstawka jest trwała
                  i łatwa do czyszczenia. Jej nowoczesny design sprawia, że
                  doskonale komponuje się z każdym wnętrzem.
                </p>
                <p>
                  Dzięki podstawce pod Thermomix TSv3 możesz cieszyć się wygodą
                  i funkcjonalnością, które ułatwią Ci codzienne gotowanie.
                </p>
                <p>
                  Podstawka pod Thermomix TSv3 to idealne rozwiązanie dla osób
                  ceniących sobie porządek i estetykę w kuchni. Dzięki niej Twój
                  Thermomix będzie zawsze na swoim miejscu, a Ty zyskasz więcej
                  przestrzeni roboczej.
                </p>
                <p>
                  Wykonana z wysokiej jakości materiałów, podstawka jest trwała
                  i łatwa do czyszczenia. Jej nowoczesny design sprawia, że
                  doskonale komponuje się z każdym wnętrzem.
                </p>
                <p>
                  Dzięki podstawce pod Thermomix TSv3 możesz cieszyć się wygodą
                  i funkcjonalnością, które ułatwią Ci codzienne gotowanie.
                </p>
                <p>
                  Podstawka pod Thermomix TSv3 to idealne rozwiązanie dla osób
                  ceniących sobie porządek i estetykę w kuchni. Dzięki niej Twój
                  Thermomix będzie zawsze na swoim miejscu, a Ty zyskasz więcej
                  przestrzeni roboczej.
                </p>
                <p>
                  Wykonana z wysokiej jakości materiałów, podstawka jest trwała
                  i łatwa do czyszczenia. Jej nowoczesny design sprawia, że
                  doskonale komponuje się z każdym wnętrzem.
                </p>
                <p>
                  Dzięki podstawce pod Thermomix TSv3 możesz cieszyć się wygodą
                  i funkcjonalnością, które ułatwią Ci codzienne gotowanie.
                </p>{" "}
              </div>
            </div>
          </div>
        </ScrollEffectContainer>
        {/* Karta na dole ekranu tylko na mobile */}
        {isMobile && (
          <div
            className={`sticky-bottom-mobile${
              cookieBannerVisible ? " sticky-above-cookie" : ""
            }`}
            style={
              cookieBannerVisible
                ? { bottom: cookieBannerHeight }
                : { bottom: 0 }
              // { marginBottom: cookieBannerHeight } // wyżej niż baner, padding na baner
              // : {}
            }
          >
            <Product
              key={1}
              product={products[1]}
              className="details__container__products__item"
              onMenuChange={setOnMenuVisible}
              inDetails={true}
              setOrderModalVisible={(visible) =>
                setOrderModalProductId(visible ? products[1].id : null)
              }
              orderModalVisible={orderModalProductId === products[1].id}
            />
          </div>
        )}
        {/* MODAL */}
        {modalOpen && (
          <div
            className={`carousel__modal${
              zoomed ? " carousel__modal--zoomed" : ""
            }`}
            onClick={handleModalClick}
          >
            <button
              className="carousel__modal__close-btn"
              onClick={() => {
                setModalOpen(false);
                setZoomed(false);
              }}
              aria-label="Zamknij"
            >
              &times;
            </button>
            <div>
              <Carousel
                items={items}
                initialIndex={modalIndex}
                isModal
                onItemClick={() => setZoomed((z) => !z)}
                zoomed={zoomed}
                onResetZoom={() => setZoomed(false)}
                onClose={() => {
                  setModalOpen(false);
                  setZoomed(false);
                }}
              />
            </div>
          </div>
        )}
      </section>
      <Footer />
      <CookieBaner
        onVisibilityChange={setCookieBannerVisible}
        onHeightChange={setCookieBannerHeight}
      />
    </>
  );
}
