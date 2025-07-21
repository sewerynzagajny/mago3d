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

export default function HWSv12OG({ productId = 18 }) {
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
    products.find((p) => p.id === 18);

  // Automatyczny alt text
  const imageAlt = `${product.fullname} - MaGo3d`;

  const items = [
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      alt: imageAlt,
      src: require("../../assets/assortment/HWSv12OG/3.webp"),
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/5.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/6.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/7.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/8.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/9.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/HWSv12OG/10.webp"),
      alt: imageAlt,
    },
  ];

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Ekspozytor gablotek z oświetleniem Hot Wheels RLC 1:64 | MaGo3d",
    description:
      "Ekspozytor gablotek z oświetleniem LED do aut kolekcjonerskich 1:64. Obsługuje Hot Wheels RLC, Inno64, TimeMicro. 56cm LED + tło. MaGo3d!",
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

  function handleGoBack() {
    // Sprawdź czy user ma poprzednią stronę w historii
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback - przekieruj na asortyment
      navigate("/asortyment");
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
                  ⭐ Ekspozytor z oświetleniem do aut kolekcjonerskich 1:64 w
                  gablotkach (Inno64, TimeMicro, PopRace, HotWheels RLC ⭐
                </h4>

                <p>
                  <strong>
                    ⭐Przedstawiamy Państwu efekt naszej kilkumiesięcznej pracy:
                    ekspozytor gablotek dla wszystkich kolekcjonerów aut 1:64.
                    Liczne testy, dopasowywanie i dopracowywanie najmniejszych
                    detali tego mocowania pozwala na najlepsze wyeksponowanie i
                    podświetlenie wszystkich aut w gablotkach w skali 1:64 ⭐
                  </strong>
                </p>

                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Budowa:</strong> Ekspozytor został zaprojektowany w
                  taki sposób aby jak najlepiej zasłonić gablotkę przed
                  osiadaniem kurzu, wyrównać podstawę gablotek z ramką.
                </p>
                <p>
                  ✅ <strong>Oświetlenie:</strong> Ekspozytor został wyposażony
                  w 56 cm! pasek led 5V podłączany pod gniazdo USB typ A, dzięki
                  czemu bez problemu możemy dostrzec nawet najmniejsze detale
                  eksponowanych modeli.
                </p>
                <p>
                  ✅ <strong>Tło:</strong> Poza oświetleniem chyba największą
                  zaletą ekspozytorów gablotek jest możliwość dowolnego
                  dodawania tła, dzięki zaprojektowanym zagłębieniom można np.
                  wydrukować i wyciąć dowolne tło i wstawić za gablotką, można
                  tez wykorzystać pudełka po modelach i np. wyciąć stronę
                  czołową (o ile pudełka nie będą częścią kolekcji :P).
                </p>
                <p>
                  ✅ <strong>Podłączenie:</strong> Podłączenie oświetlenia za
                  pomocą konektorów JST UWAGA: Aby podłączyć ekspozytor gablotek
                  potrzebny jest zestaw podłączeniowy USB (sprawdź inne nasze
                  ogłoszenia)
                </p>
                <p>
                  ✅ <strong>Kolor światła:</strong> Dzięki białej
                  transparentnej osłonie oświetlenia LED można uzyskać ciepły
                  kolor światła, do zestawu dołączamy również transparentną
                  osłonkę która zmienia kolor światła na chłodniejszy.
                </p>
                <p>
                  ✅ <strong>Inne zalety:</strong> Cóż, nie ma chyba na rynku
                  podobnego produktu, który w taki sposób potrafiłby eksponować
                  całe gablotki z modelami.
                </p>
                <p>
                  ✅ <strong>Kompatybilność:</strong> Ekspozytory gablotek są
                  kompatybilne tylko z produkowanymi przez nas
                  stojakami/ekspozytorami (naścienne, nabiurkowe, nabiurkowe
                  samoprzylepne).
                </p>
                <p>
                  ✅ <strong>Jak zamontować ekspozytor gablotek?:</strong>{" "}
                  Ekspozytory gablotek są kompatybilne tylko z produkowanymi
                  przez nas stojakami/ekspozytorami (naścienne, nabiurkowe,
                  nabiurkowe samoprzylepne).
                </p>

                <h5>
                  <strong>Prawa autorskie:</strong>
                </h5>
                <p>
                  ⚠️Ekspozytor naścienny HWSv12OG jest zastrzeżonym wzorem
                  wspólnotowym i jest chroniony prawem autorskim. Posiadamy
                  wyłączne prawo do oferowania, wytwarzania i wprowadzania do
                  obrotu w.w. wzoru na terenie UE ⚠️
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
