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

export default function AdapterAntilop({ productId = 12 }) {
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
    products.find((p) => p.id === 12);

  // Automatyczny alt text
  const imageAlt = `${product.fullname} - MaGo3d`;

  const items = [
    {
      type: "image",
      src: require("../../assets/assortment/AdapterAntilop/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/AdapterAntilop/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/AdapterAntilop/3.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/AdapterAntilop/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/AdapterAntilop/6.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/AdapterAntilop/7.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/AdapterAntilop/8.webp"),
      alt: imageAlt,
    },
    {
      type: "video",
      src: require("../../assets/assortment/AdapterAntilop/movie.mp4"),
      poster: require("../../assets/assortment/AdapterAntilop/movie-thumbnail.webp"),
      alt: imageAlt,
    },
  ];

  // Dodaj useEffect do blokowania przewijania
  // const { useEffect } = require("react");

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Adapter z kółkami do fotelika IKEA Antilop | MaGo3d",
    description:
      "Adapter z kółkami do fotelika IKEA Antilop. Bezpieczny, wygodny, łatwy w montażu. Sprawdź ofertę MaGo3d!",
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
                  ⭐ Adaptery z kółkami obrotowymi z hamulcem do Fotelika IKEA
                  Antilop, Bezpieczne i Wygodne! ⭐
                </h4>

                <p>
                  ⭐
                  <strong>
                    Ułatw sobie codzienne życie z naszymi adapterami z kółkami
                    do fotelika dziecięcego IKEA Antilop!
                  </strong>
                  ⭐
                </p>
                <p>
                  Oferujemy praktyczne i stylowe adaptery z kółkami, które
                  idealnie pasują do fotelika IKEA Antilop. Dzięki nim z
                  łatwością przesuniesz fotelik z dzieckiem w dowolne miejsce w
                  domu - bez konieczności podnoszenia!
                </p>

                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Kolor:</strong> Eleganckie białe adaptery z
                  czarnymi kółkami - idealnie komponują się z fotelikiem
                  Antilop.
                </p>
                <p>
                  ➡️ <strong>Obrotowe kółka:</strong> Cztery podwójnie
                  łożyskowane kółka o wytrzymałości na obciążenie do 25 kg
                  każde, zapewniają płynne i ciche przesuwanie, nawet na różnych
                  powierzchniach (parkiet, płytki, dywan).
                </p>
                <p>
                  ➡️ <strong>Bezpieczeństwo:</strong> Każde kółko wyposażone
                  jest w hamulec, dzięki czemu fotelik pozostaje stabilny i
                  bezpieczny, gdy tego potrzebujesz.
                </p>
                <p>
                  ➡️ <strong>Łatwy montaż:</strong> Adaptery są zaprojektowane
                  tak, aby idealnie pasowały do nóżek fotelika Antilop -
                  instalacja zajmuje tylko chwilę, a kluczyk potrzebny do
                  montażu znajduje się w zestawie!
                </p>
                <p>
                  ➡️ <strong>Wygoda:</strong> Przesuwanie fotelika z dzieckiem
                  nigdy nie było prostsze - oszczędź sobie wysiłku i zadbaj o
                  komfort malucha.
                </p>

                <h5>
                  <strong>Dlaczego warto wybrać nasze adaptery?</strong>
                </h5>
                <p>
                  ✅ Wykonane z wysokiej jakości materiałów, które zapewniają
                  trwałość i bezpieczeństwo.
                  <br />
                  ✅ Testowane pod kątem stabilności - możesz mieć pewność, że
                  fotelik z dzieckiem jest bezpieczny.
                  <br />
                  ✅ Idealne dla rodziców, którzy cenią sobie praktyczne i
                  estetyczne rozwiązania.
                  <br />✅ Łatwe w utrzymaniu w czystości - adaptery wykonane z
                  tworzywa typu pet które dopuszczone jest do kontaktu z
                  żywnością ora wykazuje łatwość w czyszczeniu wszystkimi
                  popularnymi detergentami.
                </p>

                <h5>
                  <strong>Co zawiera zestaw?</strong>
                </h5>
                <p>
                  ❇️ 4 adaptery z obrotowymi kółkami (z hamulcami).
                  <br />
                  ❇️ Śruby imbusowe
                  <br />
                  ❇️ Kluczyk montażowy
                  <br />
                  ❇️ Instrukcja montażu (choć jest on banalnie prosty!).
                </p>

                <h5>
                  <strong>Kompatybilność:</strong>
                </h5>
                <p>⭐ Adaptery pasują wyłącznie do fotelika IKEA Antilop!</p>

                <h5>
                  <strong>Bezpieczeństwo:</strong>
                </h5>
                <p>
                  ⚠️ Pomimo fantastycznej funkcjonalności adapterów oraz
                  wbudowanym hamulcom, pamiętaj, aby nigdy nie zostawiać dziecka
                  samego w foteliku. ⚠️❗❗❗
                </p>
                <p>
                  Poza tymi wszystkimi zaletami wymienionymi wcześniej, jest
                  jeszcze jedna i chyba najważniejsza: dzięki tym adapterom bez
                  problemu możemy mieć naszą pociechę zawsze przy sobie :).
                  Prace w kuchni, pokoju, czy innych miejscach będą znacznie
                  ciekawsze dla dziecka siedzącego w foteliku i obserwującego z
                  wysokiej pozycji co robi mama/tata niż będąc na podłodze / w
                  łóżeczku. Przemieszczanie się fotelikiem Ikea Antilop nigdy
                  nie było prostsze a na pewno nie tak przyjemne jak w momencie
                  dodania do nich kółeczek.
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
