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
    src: require("../../assets/assortment/IkeaSkadisForsa/1.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/2.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA",
  },
  {
    type: "image",
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA",
    src: require("../../assets/assortment/IkeaSkadisForsa/3.webp"),
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/4.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA  ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/5.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA  ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/6.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA  ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/7.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA  ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/8.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA  ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/9.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA  ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisForsa/10.webp"),
    alt: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA  ",
  },
];

export default function IkeaSkadisForsa({ productId = 9 }) {
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [cookieBannerHeight, setCookieBannerHeight] = useState(0);
  const isMobile = useIsMobile();

  // Znajdź produkt na podstawie ID lub użyj domyślnego
  const product =
    products.find((p) => p.id === productId) ||
    products.find((p) => p.id === 13);

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
            <h3 className="heading-tertiary">{product.fullname} </h3>
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
                thumbnailObjectPosition={product.thumbnailObjectPosition}
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
                    key={product.id}
                    product={product}
                    className="details__container__products__item"
                    onMenuChange={setOnMenuVisible}
                    inDetails={true}
                    setOrderModalVisible={(visible) =>
                      setOrderModalProductId(visible ? product.id : null)
                    }
                    orderModalVisible={orderModalProductId === product.id}
                    style={
                      onMenuVisible || orderModalProductId !== null
                        ? { opacity: "0.8" }
                        : {}
                    }
                  />
                </div>
              )}
              <div className="details__container__content__text">
                <h4>
                  ⭐ Uchwyt do lampy IKEA FORSA na tablicę perforowaną IKEA
                  SKADIS ⭐
                </h4>
                <p>
                  <strong>
                    Praktyczne i estetyczne rozwiązanie do Twojego biurka! ❤️
                  </strong>
                </p>
                <p>
                  ⭐ Jeśli korzystasz z popularnej lampy IKEA FORSA oraz tablicy
                  perforowanej IKEA SKADIS, to to mocowanie zostało stworzone
                  właśnie dla Ciebie!
                </p>
                <p>
                  Dzięki niemu w szybki, bezproblemowy sposób zamocujesz swoją
                  lampę bezpośrednio na tablicy, zyskując dodatkowe miejsce na
                  biurku i większą swobodę organizacji przestrzeni.
                </p>
                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Zestaw zawiera:</strong> 1 uchwyt kompatybilny z
                  lampą IKEA FORSA i tablicą IKEA SKADIS.
                </p>
                <p>
                  ➡️ <strong>Kolor:</strong> Czarny/Biały.
                </p>
                <p>
                  ➡️ <strong>Materiał:</strong> PET-G (trwały, odporny na
                  promieniowanie UV, wytrzymalszy od PLA).
                </p>
                <p>
                  ➡️ <strong>Wymiary:</strong> Szerokość: 51mm x Wysokość: 32mm
                  x Głębokość: 62mm.
                </p>
                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Idealne dopasowanie</strong> – Otwór montażowy
                  uchwytu został zaprojektowany specjalnie pod średnicę
                  trzpienia lampy FORSA. Lampa trzyma się pewnie, bez luzów, a
                  jednocześnie obraca się z odpowiednim oporem.
                </p>
                <p>
                  ✅ <strong>Lekkość i wytrzymałość</strong> – Ażurowa
                  konstrukcja wewnętrzna zapewnia optymalną wytrzymałość przy
                  niskiej wadze.
                </p>
                ✅ <strong>Łatwy montaż</strong> – Uchwyt mocuje się
                bezpośrednio do tablicy SKADIS przy pomocy solidnych haczyków –
                bez wiercenia, bez śrubek, bez kombinowania. Wystarczy wsunąć,
                zahaczyć, zamocować lampę.
                <p>
                  ✅ <strong>Mocne zaczepy</strong> – Elementy mocujące do
                  tablicy Skadis drukowane są z pełnym wypełnieniem (100%), co
                  gwarantuje solidność i długą żywotność.
                </p>
                <p>
                  ✅ <strong>Porządek i wygoda</strong> – Lampę można zamontować
                  bezpośrednio na tablicy, dzięki czemu nie zajmuje miejsca na
                  biurku.
                </p>
                <p>
                  ✅ <strong>Estetyczny wygląd</strong> – Nowoczesny,
                  minimalistyczny design dobrze komponuje się z systemem Skadis
                  i lampą FORSA.
                </p>
                <h5>
                  <strong>Dla kogo?</strong>
                </h5>
                <p>
                  ❇️ Dla osób, które chcą lepiej zorganizować swoje stanowisko
                  pracy.
                </p>
                <p>
                  ❇️ Dla fanów systemu SKADIS, którzy chcą maksymalnie
                  wykorzystać jego możliwości.
                </p>
                <p>❇️ Dla osób ceniących minimalizm i ergonomię.</p>
                <p>
                  <strong>
                    Pozdrawiamy serdecznie i zapraszamy do zakupów!
                  </strong>
                </p>
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
              key={product.id}
              product={product}
              className="details__container__products__item"
              onMenuChange={setOnMenuVisible}
              inDetails={true}
              setOrderModalVisible={(visible) =>
                setOrderModalProductId(visible ? product.id : null)
              }
              orderModalVisible={orderModalProductId === product.id}
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
                thumbnailObjectPosition={product.thumbnailObjectPosition}
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
