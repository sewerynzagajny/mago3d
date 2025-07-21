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

export default function F1({ productId = 13 }) {
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
      src: require("../../assets/assortment/F1/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      alt: imageAlt,
      src: require("../../assets/assortment/F1/3.webp"),
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/6.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/5.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/7.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/8.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/9.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/F1/10.webp"),
      alt: imageAlt,
    },
    {
      type: "video",
      src: require("../../assets/assortment/F1/movie.mp4"),
      poster: require("../../assets/assortment/F1/movie-thumbnail.webp"),
      alt: imageAlt,
    },
  ];

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Stojak na LEGO F1 Bolidy 71049 | MaGo3d",
    description:
      "Stojak na LEGO F1 Bolidy 71049. Obrotowa podstawka, samoprzylepna, elegancka ekspozycja kolekcji. Sprawdź w MaGo3d!",
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
                  ⭐ Stojak / Ekspozytor samoprzylepny na LEGO Minifigurki F1 -
                  71049 ⭐
                </h4>

                <p>
                  <strong>
                    Elegancka Wystawa Twojej Kolekcji w prawie każdym miejscu!
                    Wprowadź Swoje Bolidy F1 na Wyższy Poziom! ❤️
                  </strong>
                </p>
                <p>
                  ⭐Prezentujemy wysokiej jakości stojak zaprojektowany
                  specjalnie dla minifigurek LEGO Kolekcjonerskie Bolidy F1
                  (71049).
                </p>
                <p>
                  {" "}
                  Idealny dla fanów Formuły 1® i kolekcjonerów. Ten stojak
                  pozwoli Ci wyeksponować swoje 12 unikalnych bolidów w sposób
                  elegancki i zorganizowany. Niezależnie od tego, czy budujesz
                  całą kolekcję, czy chcesz pochwalić się pojedynczymi sztukami,
                  nasz stojak to must-have dla każdego kreatywnego entuzjasty
                  LEGO!
                </p>

                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Dedykowany Design:</strong> Perfekcyjnie dopasowany
                  do minifigurek LEGO 71049.
                </p>
                <p>
                  ➡️ <strong>Wytrzymałość:</strong> Wykonany z trwałych
                  materiałów.
                </p>
                <p>
                  ➡️ <strong>Konstrukcja:</strong> Stojak składa się z dwóch
                  części: samoprzylepnej obrotowej oraz podstawki.
                </p>
                <p>
                  ➡️ <strong>Estetyka:</strong> Minimalistyczny, czarne
                  wykończenie, które podkreśla kolory bolidów i pasuje do
                  nowoczesnych wnętrz.
                </p>
                <p>
                  ➡️ <strong>Możliwości:</strong> Dzięki zastosowaniu solidnej
                  taśmy dwustronnej stojak można przykleić w prawie każdym
                  wybranym miejscu, a dzięki dwuczęściowej konstrukcji
                  możliwości ekspozycji stają się przeogromne!
                </p>

                <h5>
                  <strong>Potencjał</strong>
                </h5>
                <p>
                  ✅ Można np. ustawić kolekcję w dowolnej pozycji na
                  podstawowych czarnych podstawkach lub podstawki pomalować,
                  dodać trochę trawki modelarskiej aby zrobić imitację toru
                  F1...
                  <br />
                  ✅ Można zdjąć podstawki i bolidy F1 LEGO 71049 ustawić na
                  samej obrotowej części...
                  <br />
                  ✅ Można stworzyć imitację toru F1 z bolidami i przykleić ją
                  np. do ściany...
                  <br />✅ Albo zaaranżować jeszcze inaczej :) Możliwości jest
                  naprawdę wiele!
                </p>

                <h5>
                  <strong>Dlaczego Warto Wybrać Nasz Stojak?</strong>
                </h5>
                <p>
                  ❇️ <strong>Ekspozycja Kolekcji:</strong> Wiele ciekawych
                  możliwości eksponowania kolekcji.
                </p>
                <p>
                  ❇️ <strong>Łatwy Montaż:</strong> Gotowy do użycia od razu po
                  wyjęciu z opakowania - nie wymaga klejenia ani dodatkowych
                  narzędzi. Wystarczy odkleić folię ochronną z taśmy dwustronnej
                  i przykleić w wybranym miejscu.
                </p>
                <p>
                  ❇️ <strong>Uniwersalność:</strong> Nie musisz mieć całej
                  kolekcji aby pochwalić się bolidami, stojaki sprzedawane są
                  pojedynczo więc kupujesz tyle ile potrzebujesz.
                </p>
                <p>
                  ❇️ <strong>Prezent dla Kreatywnych Pasjonatów:</strong> Nasze
                  stojaki są również świetnym prezentem nie tylko dla pasjonatów
                  ale również kreatywnych twórców którzy mogą uwolnić wodze
                  fantazji przy przerabianiu podstawek po bolidy F1 LEGO.
                </p>
                <p>
                  ❇️ <strong>Polska produkcja:</strong> Wszystkie nasze produkty
                  wykonywane są w kraju.
                </p>

                <h5>
                  <strong>Prawa autorskie:</strong>
                </h5>
                <p>
                  ⚠️Ekspozytor SLMF1 jest zastrzeżonym wzorem wspólnotowym i
                  jest chroniony prawem autorskim. Posiadamy wyłączne prawo do
                  oferowania, wytwarzania i wprowadzania do obrotu w.w. wzoru na
                  terenie UE ⚠️
                </p>
                <h5>
                  <strong>Inne:</strong>
                </h5>
                <p>
                  ❗ Zestaw klocków widoczny na zdjęciach oraz przerobione
                  podstawki nie są częścią oferty. Użyto ich tylko w celach
                  pokazowych.❗
                </p>
                <p>
                  ➡️{" "}
                  <a
                    href="https://www.youtube.com/shorts/UDHBvWkt3F8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobacz jak wygląda na żywo na filmie
                  </a>
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
