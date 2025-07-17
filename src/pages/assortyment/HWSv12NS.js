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
    src: require("../../assets/assortment/HWSv12NS/1.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/2.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
    src: require("../../assets/assortment/HWSv12NS/3.webp"),
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/4.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/5.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/6.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/7.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/8.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/9.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/10.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
  {
    type: "image",
    src: require("../../assets/assortment/HWSv12NS/11.webp"),
    alt: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
  },
];

export default function HWSv12NS({ productId = 14 }) {
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
                  ⭐ Stojak na kolekcjonerskie samochody Hot Wheels, Majorette,
                  Matchbox, RLC, Time Micro, Tarmac, Inno64, Pop Race, MiniGT na
                  kartach lub gablotkach ⭐
                </h4>

                <p>
                  <strong>
                    ⭐Do oferty naszych stojaków właśnie dołącza kolejny ciekawy
                    model dedykowany początkującym jak i zaawansowanym
                    kolekcjonerom. Zapraszamy do zapoznania się z jego opisem
                    poniżej ⭐
                  </strong>
                </p>

                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Mocowanie:</strong> Niewątpliwie największą zaletą
                  nowego stojaka jest możliwość mocowania go bezpośrednio do
                  biurka za pomocą przyklejonej do podstawy taśmy dwustronne
                  wielokrotnego użytku, dzięki temu rozwiązaniu nawet
                  wielokrotne przestawianie ekspozytora nie obniży jego cech
                  funkcjonalnych.
                </p>
                <p>
                  ✅ <strong>Pojemność:</strong> Jeden stojak może pomieścić:
                  ok.12-13 kart main HW, ok. 9-10 kart premium, gablotek RLC
                  itp. w specjalnych mocowaniach (dostępne na innych naszych
                  ogłoszeniach).
                </p>
                <p>
                  ✅ <strong>Wymiary:</strong> Wysokość stojaka to aż 0,5m.
                </p>
                <p>
                  ✅ <strong>Łatwy montaż:</strong> Wystarczy odkleić papierek
                  zabezpieczający taśmę i przykleić stojak w odpowiednim miejscu
                  :)
                </p>
                <p>
                  ✅ <strong>Adaptacyjność:</strong> Dzięki aluminiowym profilom
                  oraz budowie samych mocowań, stojak można w dowolny sposób
                  modyfikować pod posiadane w kolekcji karty, nie ma znaczenia
                  czy masz karty Premium, Main, czy np. Team Transport, stojaki
                  można dopasować do każdych z nich! profile aluminiowe również
                  łatwo przyciąć zwykłym brzeszczotem przez co ilość ograniczeń
                  montażu maleje prawie do zera!
                </p>
                <p>
                  ✅ <strong>Możliwość rozbudowy:</strong> Na innych naszych
                  ogłoszeniach można dokupić profile i łączniki które pozwalają
                  na rozbudowę tego ekspozytora do wysokości 1m.
                </p>
                <p>
                  ✅ <strong>Wygląd:</strong> Stojaki są w kolorze czarnym przez
                  co elegancko podkreślają karty i nie rzucają się w oczy.
                </p>
                <p>
                  ✅ <strong>Ochrona kart:</strong> Innowacyjność stojaków
                  polega na tym, że cały ciężar kart nie opiera się na kartoniku
                  najniższej karty ale na plastikowym protektorze w którym jest
                  autko - jest to możliwe dzięki specjalnemu wzmocnieniu z
                  filcem, które dodatkowo jest dopasowane do kąta samego
                  protektora.
                </p>
                <p>
                  ✅ <strong>Materiały:</strong> Stojaki wykonane są z
                  malowanych proszkowo profili aluminiowych, mocowań z tworzywa
                  PETG, do zamówień dołączamy również instrukcję i gumki
                  spinające.
                </p>

                <h5>
                  <strong>Prawa autorskie:</strong>
                </h5>
                <p>
                  ⚠️Ekspozytor nabiurkowy HWSv12NS jest zastrzeżonym wzorem
                  wspólnotowym i jest chroniony prawem autorskim. Posiadamy
                  wyłączne prawo do oferowania, wytwarzania i wprowadzania do
                  obrotu w.w. wzoru na terenie UE ⚠️
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
