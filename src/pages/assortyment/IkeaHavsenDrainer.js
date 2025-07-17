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

export default function IkeaHavsenDrainer({ productId = 7 }) {
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
    products.find((p) => p.id === 7);

  // Automatyczny alt text
  const imageAlt = `${product.fullname} - MaGo3d`;

  const items = [
    {
      type: "image",
      src: require("../../assets/assortment/IkeaHavsenDrainer/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaHavsenDrainer/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaHavsenDrainer/3.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaHavsenDrainer/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaHavsenDrainer/6.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaHavsenDrainer/7.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaHavsenDrainer/8.webp"),
      alt: imageAlt,
    },
  ];

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Ociekacz na zlew IKEA Havsen | MaGo3d",
    description:
      "Ociekacz na zlew IKEA Havsen - Ikea Havsen Drainer. Pasuje do zlewów jedno i dwukomorowych. Druk 3D w technologii PET-G. Sprawdź w MaGo3d!",
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
                <h4>⭐ OCIEKACZ pod zlew IKEA HAVSEN ⭐</h4>

                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Kolor:</strong> Biały.
                </p>
                <p>
                  ➡️ <strong>Materiał:</strong> PET-G (dopuszczony do kontaktu z
                  żywnością).
                </p>
                <p>
                  ➡️ <strong>Wymiary:</strong> Długość: 180mm x Szerokość: 160mm
                  x Wysokość: 27mm.
                </p>

                <h5>
                  <strong>Specyfikacja ociekacza na zlew IKEA Havsen:</strong>
                </h5>
                <p>
                  ✅ Pasuje do zlewów jedno i dwukomorowych (wym. zlewu
                  jednokomorowego.: 62x48cm), (wym. zlewu dwukomorowego.:
                  82x48cm).
                </p>
                <p>
                  ✅ Produkt nowy wykonany w technologii druku 3d. Sprawdzony w
                  działaniu tak w domu jak i sklepie IKEA.
                </p>

                <p>
                  ✅ Ociekacz pozwala chronić blat przed zamakaniem/chlapaniem
                  podczas używania baterii zlewowej. Rowki pozwalają skuteczniej
                  odprowadzać wodę lub pozostawić coś do wyschnięcia.
                </p>

                <h5>
                  <strong>Uwagi:</strong>
                </h5>
                <p>
                  ⚠️ Ociekacz należy myć tylko pod ciepłą letnią wodą ogólnie
                  dostępnymi płynami i detergentami.
                </p>
                <p>
                  ⚠️ Nie należy myć go w zmywarce z powodu możliwości jego
                  uszkodzenia.
                </p>

                <h5>
                  <strong>Jak to działa:</strong>
                </h5>
                <p>
                  ➡️{" "}
                  <a
                    href="https://www.youtube.com/watch?v=EumumsWpAqM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobacz jak to działa na filmie
                  </a>
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
