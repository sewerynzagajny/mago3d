import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBaner from "../../components/CookieBanner";
import Carousel from "../../components/Carousel";
import Product from "../../components/Product";
import { products } from "../../data/products";
import ScrollEffectContainer from "../../components/ScrollEffectContainer";
import useIsMobile from "../../hooks/useIsMobile";
import SEOHead from "../../components/SEOHead";
import { generateProductUrl, siteConfig } from "../../config/siteConfig";
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";

export default function IkeaSkadisHeadphone({ productId = 11 }) {
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [cookieBannerHeight, setCookieBannerHeight] = useState(0);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  // Znajdź produkt na podstawie ID lub użyj domyślnego
  const product =
    products.find((p) => p.id === productId) ||
    products.find((p) => p.id === 13);

  // Automatyczny alt text
  const imageAlt = `${product.fullname} - MaGo3d`;

  const items = [
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/3.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/5.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/6.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/7.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/8.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/9.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisHeadphone/10.webp"),
      alt: imageAlt,
    },
  ];

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Uchwyt na słuchawki do tablicy IKEA SKADIS | MaGo3d",
    description:
      "Uchwyt na słuchawki do tablicy IKEA SKADIS. Stabilne mocowanie na 3 zaczepy, minimalistyczny design. Sprawdź w MaGo3d!",
    canonicalUrl: pageUrl,
    ogImage: ogImage,
  };

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

  function handleGoBack() {
    // Sprawdź czy user ma poprzednią stronę w historii
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback - przekieruj na asortyment
      navigate("/asortyment");
    }
  }

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
      <SEOHead {...seoData} productData={product} />
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
                  ⭐ Uchwyt na słuchawki do tablicy perforowanej IKEA SKADIS ⭐
                </h4>
                <p>
                  <strong>
                    Stworzony dla graczy, muzyków i wszystkich, którzy cenią
                    porządek. ❤️
                  </strong>
                </p>
                <p>
                  ⭐ Specjalnie zaprojektowany uchwyt na słuchawki do tablicy
                  IKEA SKADIS to praktyczne i solidne rozwiązanie, które pomoże
                  Ci uporządkować przestrzeń i zabezpieczyć Twój sprzęt przed
                  uszkodzeniami.
                </p>
                <p>
                  Idealnie sprawdzi się zarówno do klasycznych słuchawek
                  biurowych, gamingowych, jak i profesjonalnych słuchawek
                  studyjnych.
                </p>
                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Zestaw zawiera:</strong> 1 uchwyt na słuchawki
                  kompatybilny z tablicą IKEA SKADIS.
                </p>
                <p>
                  ➡️ <strong>Kolor:</strong> Czarny/Biały.
                </p>
                <p>
                  ➡️ <strong>Materiał:</strong> PET-G (trwały, odporny na
                  promieniowanie UV, wytrzymalszy od PLA).
                </p>
                <p>
                  ➡️ <strong>Wymiary:</strong> Szerokość: 90mm x Wysokość: 45mm
                  x Głębokość: 105mm.
                </p>
                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Stabilne mocowanie na 3 zaczepy</strong> - Uchwyt
                  został zaprojektowany z trzema pinami montażowymi, które
                  gwarantują maksymalną stabilność, nawet przy cięższych,
                  profesjonalnych słuchawkach.
                </p>
                <p>
                  ✅ <strong>Duża powierzchnia podparcia</strong> - Dzięki
                  przemyślanej konstrukcji uchwyt dobrze rozkłada nacisk
                  słuchawek, co zapobiega odkształceniom pałąka.
                </p>
                ✅ <strong>Łatwy montaż</strong> - Wystarczy wpiąć uchwyt w
                tablicę Skadis. Montaż trwa kilka sekund - bez śrubek, bez
                klejenia, bez wiercenia.
                <p>
                  ✅ <strong>Porządek i ergonomia</strong> - Koniec z
                  przewracającymi się słuchawkami na biurku! Wszystko ma swoje
                  miejsce.
                </p>
                <p>
                  ✅ <strong>Nowoczesny wygląd</strong> - Minimalistyczny
                  design, który doskonale pasuje do systemu SKADIS i
                  nowoczesnych wnętrz.
                </p>
                <h5>
                  <strong>Dla kogo?</strong>
                </h5>
                <p>
                  ❇️ Gracze, streamerzy i twórcy treści, którzy chcą mieć swoje
                  słuchawki zawsze pod ręką.
                </p>
                <p>❇️ Osoby ceniące porządek i estetykę stanowiska pracy.</p>
                <p>
                  ❇️ Każdy, kto korzysta z systemu IKEA SKADIS i szuka
                  solidnych, funkcjonalnych akcesoriów
                </p>
                <p>
                  <strong>
                    Pozdrawiamy serdecznie i zapraszamy do zakupów!
                  </strong>
                </p>
                <div className="return-btn-container">
                  {" "}
                  <Btn className="btn" onClick={handleGoBack}>
                    Powrót
                  </Btn>
                </div>
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
