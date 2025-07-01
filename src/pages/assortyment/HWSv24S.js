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
    src: require("../../assets/assortment/HWSv24S/1.webp"),
    alt: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv24S/2.webp"),
    alt: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv24S/3.webp"),
    alt: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv24S/4.webp"),
    alt: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv24S/6.webp"),
    alt: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv24S/7.webp"),
    alt: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
  },
];

export default function HWSv24S({ productId = 4 }) {
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
    products.find((p) => p.id === 4);

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
                  Matchbox w oryginalnych kartach ⭐
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
                  na eleganckie wyeksponowanie Twojej kolekcji na ścianach,
                  frontach meblowych i gdziekolwiek sobie tylko wymarzysz.
                </p>

                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Mocowanie:</strong> Wygodne mocowanie do ścian za
                  pomocą kołków dołączonych w zestawie, frontów meblowych, drzwi
                  i w sumie gdziekolwiek jeszcze można wymyślić (potrzebne są
                  małe wkręty 3x16 lub podobne z łbem kulistym lub taśma
                  dwustronna choć przy dużym ciężarze kart trzeba wybrać
                  naprawdę mocną i solidną taśmę).
                </p>
                <p>
                  ✅ <strong>Pojemność:</strong> Jeden stojak może pomieścić
                  nawet 24 karty! a ze względu na możliwość łączenia stojaków po
                  szerokości, daje to prawie nieograniczone możliwości do
                  rozbudowywania i eksponowania Twojej kolekcji.
                </p>
                <p>
                  ✅ <strong>Wymiary:</strong> Wysokość stojaka to aż 1m.
                </p>
                <p>
                  ✅ <strong>Łatwy montaż:</strong> Dzięki owalnym otworom
                  montażowym bardzo łatwo dopasować rozstaw do posiadanych kart.
                </p>
                <p>
                  ✅ <strong>Adaptacyjność::</strong> Dzięki aluminiowym
                  profilom oraz budowie samych mocowań, stojak można w dowolny
                  sposób modyfikować pod posiadane w kolekcji karty, nie ma
                  znaczenia czy masz karty Premium, Main, czy np. Team
                  Transport, stojaki można dopasować do każdych z nich! profile
                  aluminiowe również łatwo przyciąć zwykłym brzeszczotem przez
                  co ilość ograniczeń montażu maleje prawie do zera!.
                </p>
                <p>
                  ✅ <strong>Wygląd:</strong> Stojaki są w kolorze czarnym przez
                  co elegancko podkreślają karty i nie rzucają się w oczy, same
                  mocowania również są ledwie widoczne.
                </p>
                <p>
                  ✅ <strong>Ochrona kart:</strong> Innowacyjność stojaków
                  polega na tym, że cały ciężar kart nie opiera się na kartoniku
                  najniższej karty ale na plastikowym protektorze w którym jest
                  autko - jest to możliwe dzięki specjalnemu wzmocnieniu z
                  filcem, które dodatkowo jest dopasowane do kąta samego
                  protektora (patrz zdjęcia).
                </p>
                <p>
                  ✅ <strong>Materiały:</strong> Stojaki wykonane są z
                  malowanych proszkowo profili aluminiowych, mocowań z tworzywa
                  PETG, do zamówień dołączamy również kołki i wkręty jak na
                  zdjęciu.
                </p>

                <h5>
                  <strong>W skład 2 szt. kompletnego stojaków wchodzą:</strong>
                </h5>
                <p>
                  ❇️ Profile aluminiowe szt. 8 (0,5mb każdy).
                  <br />
                  ❇️ Mocowania.
                  <br />
                  ❇️ Łączniki.
                  <br />
                  ❇️ Kołki.
                  <br />
                  ❇️ Wkręty z płaskim łbem.
                  <br />
                  ❇️ Instrukcja montażu.
                </p>

                <h5>
                  <strong>Prawa autorskie:</strong>
                </h5>
                <p>
                  ⚠️ Ekspozytor naścienny HWSv24S jest zastrzeżonym wzorem
                  wspólnotowym i jest chroniony prawem autorskim. Posiadamy
                  wyłączne prawo do oferowania, wytwarzania i wprowadzania do
                  obrotu w.w. wzoru na terenie UE. ⚠️
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
