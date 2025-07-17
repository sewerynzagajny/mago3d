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

export default function HWSv48({ productId = 6 }) {
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
    products.find((p) => p.id === 6);

  // Automatyczny alt text
  const imageAlt = `${product.fullname} - MaGo3d`;

  const items = [
    {
      type: "image",
      src: require("../../assets/assortment/HWSv48/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv48/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv48/3.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv48/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv48/5.webp"),
      alt: imageAlt,
    },
  ];

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Stojak na Hot Wheels HWSv48 podwójny | MaGo3d",
    description:
      "Stojak na Hot Wheels HWSv48 podwójny. Pojemność 48 kart, mocowanie do biurka, aluminiowe profile. Sprawdź w MaGo3d!",
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
                <h4>
                  ⭐ Stojak na kolekcjonerskie samochody Hot Wheels, Majorette,
                  Matchbox w oryginalnych kartach - podwójny ⭐
                </h4>

                <p>
                  ⚠️
                  <strong>
                    UWAGA! Od dnia 23.06.2026 wszystkie stojaki HW będą
                    sprzedawane w formie dzielonej, tzn. całkowita długość i
                    ilość stojaków po złożeniu się nie zmieni. Zmieni się
                    natomiast forma w jakiej będą wysyłane tj. zamiast 4 szt.
                    profilów 1mb będą wysyłane 8 szt. profilów 0,5mb + 4 szt.
                    łączników. Taka forma pozwoli na wysyłkę do paczkomatów oraz
                    na dosztywnienie całego stojaka w środkowej jego części!
                  </strong>
                  ⚠️
                </p>
                <p>
                  Już nie musisz upychać swojej kolekcji kart Hot Wheels lub
                  innych firm w pudełkach! Właśnie powstał produkt który pozwoli
                  na eleganckie wyeksponowanie Twojej kolekcji na biurku, szafce
                  lub komodzie.
                </p>

                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Mocowanie:</strong> Wygodne mocowanie do biurek i
                  komód za pomocą zacisków lub wkrętów meblowych, stosowane
                  najczęściej na krótszych bokach biurek.
                </p>
                <p>
                  ✅ <strong>Pojemność:</strong> Jeden stojak może pomieścić
                  nawet 48 karty! a ze względu na możliwość łączenia stojaków po
                  szerokości, daje to prawie nieograniczone możliwości do
                  rozbudowywania i eksponowania Twojej kolekcji.
                </p>
                <p>
                  ✅ <strong>Wymiary:</strong> Wysokość stojaka to aż 1m.
                </p>

                <p>
                  ✅ <strong>Adaptacyjność:</strong> Dzięki aluminiowym profilom
                  oraz budowie samych mocowań, stojak można w dowolny sposób
                  modyfikować pod posiadane w kolekcji karty, nie ma znaczenia
                  czy masz karty Premium, Main, czy np. Team Transport, stojaki
                  można dopasować do każdych z nich!
                </p>
                <p>
                  ✅ <strong>Wygląd:</strong> Stojaki są w kolorze czarnym przez
                  co elegancko podkreślają karty i nie rzucają się w oczy.
                </p>
                <p>
                  ✅ <strong>Stabilność:</strong> Pomimo wysokości stojaki są
                  bardzo stabilne.
                </p>
                <p>
                  ✅ <strong>Materiały:</strong> Stojaki wykonane są z
                  malowanych proszkowo profili aluminiowych, mocowań z tworzywa
                  PETG, oraz stalowych (ocynkowanych) śrubek, nakrętek i
                  podkładek, do zamówień dołączamy również podkładki filcowe
                  oraz gumki recepturki w kolorze czarnym.
                </p>

                <h5>
                  <strong>W skład 1 szt. kompletnego stojaka wchodzą:</strong>
                </h5>
                <p>
                  ❇️ Profile aluminiowe szt. 8 (0,5mb każdy).
                  <br />
                  ❇️ Mocowania.
                  <br />
                  ❇️ Łączniki.
                  <br />
                  ❇️ Elementy złaczne.
                  <br />
                  ❇️ Gumki.
                  <br />
                  ❇️ Podkładki.
                  <br />
                  ❇️ Instrukcja montażu.
                </p>
                <h5>
                  <strong>Recenzja:</strong>
                </h5>
                <p>
                  ⭐ Nasz stojak został już przetestowany przez kilku
                  kolekcjonerów, poniżej znajduje się film - krótka recenzja
                  jednego z nich:
                </p>
                <p>
                  ➡️{" "}
                  <a
                    href="https://www.tiktok.com/@collectorshavenpl/video/7371454336729124128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobacz recenzję na TikTok
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
