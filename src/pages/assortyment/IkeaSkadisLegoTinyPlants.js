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
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/1.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/2.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/3.webp"),
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/4.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/5.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/6.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/7.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/8.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/9.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "image",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/10.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
  {
    type: "video",
    src: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/movie.mp4"),
    poster: require("../../assets/assortment/IkeaSkadisLegoTinyPlants/movie-thumbnail.webp"),
    alt: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
  },
];

export default function IkeaSkadisLegoTinyPlants({ productId = 8 }) {
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
                  ⭐ Uchwyty na kwiaty LEGO Icons 10329 do tablicy IKEA Skadis
                  ⭐
                </h4>
                <p>
                  <strong>
                    Dodaj charakteru swojej tablicy perforowanej! ❤️
                  </strong>
                </p>
                <p>
                  ⭐ Specjalnie zaprojektowane uchwyty pozwolą Ci w elegancki
                  sposób zamocować kwiaty LEGO Icons 10329 na Twojej tablicy. To
                  świetny sposób, aby ożywić przestrzeń wokół siebie, a przy
                  okazji sprytnie zagospodarować niewykorzystane miejsce na
                  Skadis.
                </p>
                <p>
                  Dzięki kolorowym kwiatom LEGO Twoja przestrzeń stanie się
                  przytulniejsza, bardziej osobista i estetyczna. Taki akcent
                  nie tylko poprawi Ci humor, ale również będzie ciekawym
                  elementem aranżacyjnym – zarówno w domu, jak i w biurze.
                </p>
                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Zestaw zawiera:</strong> 9 sztuk uchwytów
                  kompatybilnych z LEGO Icons 10329.
                </p>
                <p>
                  ➡️ <strong>Kolor:</strong> Czarny/Biały.
                </p>
                <p>
                  ➡️ <strong>Materiał:</strong> PETG (odporny na UV, bardziej
                  wytrzymały niż PLA).
                </p>
                <p>
                  ➡️ <strong>Kompatybilność:</strong> IKEA Skadis + LEGO.
                </p>
                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Unikalny wygląd</strong> – Kwiaty LEGO w połączeniu
                  z tablicą Skadis wyglądają oryginalnie i przyciągają wzrok.
                </p>
                <p>
                  ✅ <strong>Porządek i estetyka</strong> – Wykorzystujesz puste
                  miejsca na tablicy, a jednocześnie zyskujesz przyjemny akcent
                  wizualny.
                </p>
                ✅ <strong> Łatwy montaż</strong> – Montaż nie wymaga żadnych
                narzędzi, wystarczy zahaczyć uchwyt na perforacji Skadis.
                <p>
                  ✅ <strong>Idealny na prezent</strong> – Ciekawy pomysł na
                  walentynki, urodziny lub po prostu drobny upominek dla
                  miłośnika LEGO.
                </p>
                <p>
                  ✅ <strong>Solidne wykonanie</strong> – Wydrukowane z PETG,
                  tworzywa dużo trwalszego niż klasyczny PLA. Odporne na
                  promieniowanie UV – nawet po latach nie stracą swojego koloru.
                </p>
                <h5>
                  <strong>Dla kogo?</strong>
                </h5>
                <p>
                  ❇️ Dla osób, które chcą ozdobić swoje biuro lub dom w
                  oryginalny sposób.
                </p>
                <p>
                  ❇️ Dla kolekcjonerów LEGO, którzy szukają nowych sposobów
                  ekspozycji swoich zestawów.
                </p>
                <p>
                  ❇️ Dla tych, którzy lubią mieć porządek, ale jednocześnie
                  cenią kreatywne i designerskie rozwiązania.
                </p>
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
