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

export default function TSv4({ productId = 2 }) {
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
    products.find((p) => p.id === 2);

  // Automatyczny alt text
  const imageAlt = `${product.fullname} - MaGo3d`;

  const items = [
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/1.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/2.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/3.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/4.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/5.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/6.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/7.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/8.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/9.webp"),
      alt: imageAlt,
    },
    {
      type: "image",
      src: require("../../assets/assortment/TSv4/10.webp"),
      alt: imageAlt,
    },
    {
      type: "video",
      src: require("../../assets/assortment/TSv3/movie.mp4"),
      poster: require("../../assets/assortment/TSv3/movie-thumbnail.webp"),
      alt: imageAlt,
    },
  ];

  // SEO dane
  const pageUrl = generateProductUrl(product.slug);
  const ogImage = `${siteConfig.domain}${product.colors[0].photo}`;

  const seoData = {
    title: "Podstawka z kółkami pod Thermomix TM5 TM6 TSv4 | MaGo3d",
    description:
      "Podstawka z kółkami pod Thermomix TM5 TM6 TSv4. Lekka konstrukcja, idealne dopasowanie, możliwość przesuwania. Sprawdź w MaGo3d!",
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
                  ⭐ Podstawka deska TSv4 z kółkami pod Vorwerk Thermomix®
                  Termomiks TM5 i TM6 ⭐
                </h4>

                <p>
                  Już nie musisz martwić się o to, że uszkodzisz wagę Thermomixa
                  podczas przesuwania go po blacie! Uwzględniając potrzeby rynku
                  powstał produkt idealnie dopasowany do potrzeb każdego
                  użytkownika Thermomix TM5 i TM6.
                </p>

                <h5>
                  <strong>Cechy produktu:</strong>
                </h5>
                <p>
                  ➡️ <strong>Kolor:</strong> Czarny/Biały/Szary.
                </p>
                <p>
                  ➡️ <strong>2 w 1 -</strong> do podnoszenia i przesuwania.
                </p>
                <p>
                  ➡️ <strong>Wymiary:</strong> dł. 249mm x szer: 254mm x wys:
                  40mm (z podkładkami).
                </p>
                <p>
                  ➡️ <strong>Waga:</strong> 220g.
                </p>

                <h5>
                  <strong>
                    Najważniejsze zalety podstawki pod Thermomix TM5 TM6 :
                  </strong>
                </h5>
                <p>
                  ✅ <strong>Skrojona na miarę:</strong> Podstawka jest idealnie
                  dopasowana do urządzenia Thermomix TM5 i TM6, nie wystaje poza
                  obrys jego kształtu (podczas robienia posiłków bardzo trudno
                  ubrudzić podstawkę), sam kształt podstawki odsłania również
                  wymiennik ciepła pod Thermomixem ułatwiając jego chłodzenie.
                </p>
                <p>
                  ✅ <strong>Lekka i wytrzymała konstrukcja:</strong> Ok. 220
                  gram wagi dzięki optymalizacji poprzez druk 3d i ażurową
                  konstrukcję wewnątrz doskonale radzi sobie z obciążeniami
                  statycznymi jak i dynamicznymi wynikającymi z pracy
                  Thermomixa.
                </p>
                <p>
                  ✅ Specjalnie okrągłe zagłębienia pod stopki Thermomix® TM5 i
                  TM6 zapewniają idealne dopasowanie.
                </p>

                <p>
                  ✅ <strong>Jest praktyczna i ergonomiczna:</strong> Łatwo się
                  myje popularnymi detergentami, nie pęka jak drewno, a dzięki
                  swojemu kształtowi i kółeczkom pomaga w zachowaniu czystości w
                  kuchni.
                </p>
                <p>
                  ✅ <strong>Możliwość podnoszenia:</strong> Nóżki oraz
                  zagłębienia pod podstawką pozwalają w wygodny sposób podnosić
                  i przenosić urządzenie bez uszkadzania wagi.
                </p>
                <p>
                  ✅ <strong>Możliwość przesuwania:</strong> Jako jedyna
                  dostępna na rynku podstawka posiada gumowe kółka umieszczone
                  na tylnich nóżkach - wystarczy lekko unieść przód podstawki z
                  Themromixem do góry aby wygodnie przesunąć urządzenie w
                  wybrane miejsce, zapewniając tym samym ochronę położonej w
                  tylnych stopkach wrażliwej wagi.
                </p>
                <p>
                  ✅ <strong>Stabilna:</strong> Dzięki piankowo-gumowym
                  podkładkom na nóżkach, Thermomix nie „tańczy” po blacie nawet
                  pracując na najwyższych prędkościach, dodatkowo podkładki
                  wytłumiają drgania.
                </p>
                <p>
                  ✅ <strong>Wygodna:</strong> Podstawka jest po prostu wygodna,
                  chwalona przez użytkowników, którzy uczestniczyli w procesie
                  jej testowania, jak i klientów którzy wyrazili swoje
                  zadowolenie kupując podstawkę jeszcze przed oficjalnym
                  uruchomieniem sprzedaży.
                </p>
                <p>
                  ✅ <strong>Uniwersalna:</strong> Podstawka pasuje zarówno do
                  modeli TM6, jak i TM5, dzięki czemu można z niej korzystać
                  niezależnie od posiadanej wersji Thermomix®.
                </p>
                <p>
                  ✅ <strong>Materiał wykonania:</strong> Wykonana z
                  wytrzymałego tworzywa sztucznego PET-G który jest dopuszczony
                  do kontaktu z żywnością.
                </p>
                <p>
                  ✅ <strong>Idealna na prezent</strong>
                </p>

                <p>
                  ✅{" "}
                  <strong>
                    Podstawka zaprojektowana i wyprodukowana w Polsce
                  </strong>
                </p>

                <h5>
                  <strong>Ułatw sobie codzienne gotowanie</strong>
                </h5>
                <p>
                  ❇️ Jak użytkować? Wystarczy umieścić stopki Thermomix® w
                  zagłębieniach w podstawce, unieść lekko przód podstawki
                  (deski), tak by dwie przednie stopki znalazły się w powietrzu
                  i cieszyć się bajecznie prostym i przyjemnym ustawianiem
                  Thermomixa w dowolnym miejscu kuchennego blatu. A gdy się
                  ubrudzi, umyć podstawkę pod bieżącą wodą np. płynem do naczyń.
                  <br />
                  ❇️ Produkujemy kilka wzorów/modeli podstawek z kółeczkami pod
                  Thermomix TM5 i TM6. Zalecamy zapoznać się ze wszystkimi przed
                  dokonaniem zakupu.
                  <br />
                  ❇️ Zaufało nam wielu użytkowników Thermomix TM5 i TM6 a my nie
                  zawiedliśmy ich oczekiwań. Może Ty również dołączysz do grona
                  zadowolonych klientów?
                </p>

                <h5>
                  <strong>Prawa autorskie:</strong>
                </h5>
                <p>
                  ⚠️Podstawka TSv4 jest zastrzeżonym wzorem wspólnotowym i jest
                  chroniona prawem autorskim. ⚠️
                </p>

                <h5>
                  <strong>Uwagi dotyczące użytkowania:</strong>
                </h5>
                <p>⚠️ Podstawka nie może być myta w zmywarce.</p>
                <p>
                  ⚠️ Należy ją czyścić pod ciepłą, bieżącą wodą (można
                  wykorzystać do tego popularne płyny i detergenty).
                </p>
                <p>
                  ⚠️ Mimo stabilności podstawki, ze względów bezpieczeństwa nie
                  należy zostawiać pracującego urządzenia bez nadzoru.
                </p>
                <p>
                  ⚠️ Podstawkę z urządzeniem należy stawiać na czystej, równej
                  powierzchni.
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
