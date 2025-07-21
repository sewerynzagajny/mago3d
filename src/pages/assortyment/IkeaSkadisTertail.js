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

export default function IkeaSkadisTertail({ productId = 10 }) {
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
    products.find((p) => p.id === 10);

  // Automatyczny alt text
  const imageAlt = `${product.fullname} - MaGo3d`;

  const items = [
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      alt: imageAlt,
      src: require("../../assets/assortment/IkeaSkadisTertail/3.webp"),
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/5.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/6.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/7.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/8.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/IkeaSkadisTertail/9.webp"),
      alt: imageAlt,
    },
  ];

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Uchwyt na lampę IKEA TERTIAL do tablicy SKADIS | MaGo3d",
    description:
      "Uchwyt na lampę IKEA TERTIAL do tablicy SKADIS. Idealne dopasowanie, łatwy montaż, lekkość i wytrzymałość. Sprawdź w MaGo3d!",
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
                  ⭐ Uchwyt do lampy IKEA TERTIAL na tablicę perforowaną IKEA
                  SKADIS ⭐
                </h4>
                <p>
                  <strong>
                    Prosty sposób na więcej miejsca i lepszą organizację! ❤️
                  </strong>
                </p>
                <p>
                  ⭐ Jeśli korzystasz z lampy IKEA TERTIAL oraz systemu tablic
                  perforowanych IKEA SKADIS, ten uchwyt będzie dla Ciebie
                  idealnym rozwiązaniem.
                </p>
                <p>
                  Dzięki niemu bez problemu zamocujesz lampę bezpośrednio na
                  tablicy, zyskując wolne miejsce na biurku i lepszą organizację
                  swojej przestrzeni.
                </p>
                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Zestaw zawiera:</strong> 1 uchwyt kompatybilny z
                  lampą IKEA TERTIAL i tablicą IKEA SKADIS.
                </p>
                <p>
                  ➡️ <strong>Kolor:</strong> Czarny/Biały.
                </p>
                <p>
                  ➡️ <strong>Materiał:</strong> PET-G (trwały, odporny na
                  promieniowanie UV, wytrzymalszy od PLA).
                </p>
                <p>
                  ➡️ <strong>Wymiary:</strong> Szerokość: 90mm x Wysokość: 35mm
                  x Głębokość: 53mm.
                </p>
                <h5>
                  <strong>Zalety:</strong>
                </h5>
                <p>
                  ✅ <strong>Idealne dopasowanie</strong> - Otwór montażowy
                  został zaprojektowany specjalnie do trzpienia lampy TERTIAL.
                  Uchwyt trzyma ją stabilnie, bez luzów, a obrót lampy działa
                  płynnie.
                </p>
                <p>
                  ✅ <strong>Lekkość i wytrzymałość</strong> - Ażurowa
                  konstrukcja wewnętrzna zapewnia optymalną wytrzymałość przy
                  niskiej wadze.
                </p>
                ✅ <strong>Łatwy montaż</strong> - Uchwyt mocuje się
                bezpośrednio do tablicy SKADIS przy pomocy solidnych haczyków -
                bez wiercenia, bez śrubek, bez kombinowania. Wystarczy wsunąć,
                zahaczyć, zamocować lampę.
                <p>
                  ✅ <strong>Mocne zaczepy</strong> - Elementy mocujące do
                  tablicy Skadis drukowane są z pełnym wypełnieniem (100%), co
                  gwarantuje solidność i długą żywotność.
                </p>
                <p>
                  ✅ <strong>Wielofunkcyjność</strong> - Uchwyt może również
                  służyć do łączenia dwóch tablic SKADIS od góry - świetnie się
                  do tego nadaje (widoczne na zdjęciach).
                </p>
                <p>
                  ✅ <strong>Estetyka i porządek</strong> - Mocując lampę na
                  tablicy, odzyskujesz cenne miejsce na blacie, a całość wygląda
                  schludnie i nowocześnie.
                </p>
                <h5>
                  <strong>Dla kogo?</strong>
                </h5>
                <p>
                  ❇️ Dla osób, które chcą mieć więcej przestrzeni na biurku.
                </p>
                <p>
                  ❇️ Dla tych, którzy cenią praktyczne rozwiązania i porządek.
                </p>
                <p>
                  ❇️ Dla użytkowników systemu SKADIS, którzy chcą jeszcze lepiej
                  go wykorzystać.
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
