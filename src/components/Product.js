import { useState, useRef, useEffect } from "react";
import Btn from "./Btn";
import ScrollEffectContainer from "./ScrollEffectContainer";
import ContextMenu from "./ContextMenu";
import { Link } from "react-router-dom";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";
import { ReactComponent as MaGo3dIcon } from "../svg/mago3d.svg";
import ShortenTitle from "./ShortenTitle";
import OrderModal from "./OrderModal";
import ColorChooser from "./ColorChooser";
import useIsMobile from "../hooks/useIsMobile";

export default function Product({
  product,
  className = "",
  onMenuChange,
  style,
  setOrderModalVisible,
  orderModalVisible,
  inDetails = false, // czy w szczegółach
}) {
  // const shoppingPlatforms = product.shoppingPlatform || [
  //   {
  //     name: "Etsy",
  //     link: "https://www.etsy.com/pl/shop/MaGo3dPL",
  //     icon: (
  //       <EtsyIcon className="assortment__container__btns__shop-btn--link" />
  //     ),
  //     textClass: "assortment__container__btns__shop-btn--text-etsy",
  //   },
  //   {
  //     name: "Allegro",
  //     link: "https://allegro.pl/uzytkownik/MaGo3d",
  //     icon: (
  //       <AllegroIcon className="assortment__container__btns__shop-btn--link" />
  //     ),
  //     textClass: "assortment__container__btns__shop-btn--text-allegro",
  //   },
  //   {
  //     name: "MaGo3d",
  //     link: "http://localhost:3000/kontakt",
  //     icon: (
  //       <EtsyIcon className="assortment__container__btns__shop-btn--link" />
  //     ),
  //     textClass: "assortment__container__btns__shop-btn--text-etsy",
  //   },
  // ];

  // Generuj link do szczegółów na podstawie slug
  const detailsLink = product.slug
    ? `/szczegoly/druki-3d/${product.slug}`
    : "/szczegoly";

  const iconMap = {
    Etsy: <EtsyIcon className="assortment__container__btns__shop-btn--link" />,
    Allegro: (
      <AllegroIcon className="assortment__container__btns__shop-btn--link" />
    ),
    MaGo3d: (
      <MaGo3dIcon className="assortment__container__btns__shop-btn--link" />
    ),
  };

  const textClassMap = {
    Etsy: "assortment__container__btns__shop-btn--text-etsy",
    Allegro: "assortment__container__btns__shop-btn--text-allegro",
    MaGo3d: "assortment__container__btns__shop-btn--text-mago3d",
  };

  const [chooseColor, setChooseColor] = useState(
    product.colors?.[0]?.nameEn || "black"
  );

  const [menuVisible, setMenuVisible] = useState(false);
  // const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuAnchorRect, setMenuAnchorRect] = useState(null);

  // const [orderModalVisible, setOrderModalVisible] = useState(false);

  const itemRef = useRef(null); // Dodaj ref
  const [anchorRect, setAnchorRect] = useState(null);
  const modalRef = useRef(null);

  // Mobile detection
  const isMobile = useIsMobile();
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth <= 600);
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Zamknięcie modala po kliknięciu poza oknem
  useEffect(() => {
    if (!orderModalVisible) return;

    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOrderModalVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [orderModalVisible, setOrderModalVisible]);

  useEffect(() => {
    function updateRect() {
      if (orderModalVisible && itemRef.current) {
        setAnchorRect(itemRef.current.getBoundingClientRect());
      }
    }

    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, [orderModalVisible]);

  useEffect(() => {
    function updateMenuRect() {
      if (menuVisible && itemRef.current) {
        setMenuAnchorRect(itemRef.current.getBoundingClientRect());
      }
    }
    if (menuVisible) {
      window.addEventListener("resize", updateMenuRect);
      window.addEventListener("scroll", updateMenuRect);
      updateMenuRect();
    }
    return () => {
      window.removeEventListener("resize", updateMenuRect);
      window.removeEventListener("scroll", updateMenuRect);
    };
  }, [menuVisible]);

  if (!product || !product.colors) {
    return null; // lub wyświetl komunikat o błędzie
  }

  const selectedColor = product.colors?.find((c) => c.nameEn === chooseColor);

  const basePlatforms =
    selectedColor?.shoppingPlatform || product.shoppingPlatform || [];

  const hasMaGo3d = basePlatforms.some((p) => p.name === "MaGo3d");
  const shoppingPlatforms = [
    ...basePlatforms.map((platform) => ({
      ...platform,
      icon: iconMap[platform.name] || null,
      textClass: textClassMap[platform.name] || "",
    })),
    ...(!hasMaGo3d
      ? [
          {
            name: "MaGo3d",
            link: `${window.location.origin}/kontakt`,
            icon: iconMap["MaGo3d"],
            textClass: textClassMap["MaGo3d"],
          },
        ]
      : []),
  ];

  // Dodaj klasę horizontal-mobile na NAJZEWNĘTRZNYM divie
  const rootClass =
    // (className ? className + " " : "") +
    inDetails && isMobile ? "horizontal-mobile " : "";

  function openOrderModal() {
    if (itemRef.current) {
      setAnchorRect(itemRef.current.getBoundingClientRect());
    }
    if (setOrderModalVisible) setOrderModalVisible(true);
  }

  function handleBuyClick(e) {
    e.preventDefault();

    if (itemRef.current) {
      setMenuAnchorRect(itemRef.current.getBoundingClientRect());
    }
    // setMenuPosition({
    //   x: e.clientX + window.scrollX,
    //   y: e.clientY + window.scrollY,
    // });
    setMenuVisible(true);
    if (onMenuChange) onMenuChange(true); // Przekazanie wartości do rodzica
  }

  function handleCloseMenu() {
    setMenuVisible(false);
    if (onMenuChange) onMenuChange(false); // powiadom rodzica
  }

  return (
    <div
      // className={`${className} `}
      className={rootClass}
      ref={itemRef}
      style={{
        visibility: orderModalVisible ? "hidden" : "visible",
        display: inDetails && isMobile && orderModalVisible ? "none" : "",
        position: "relative",
        ...style,
      }}
    >
      {/* OVERLAY PRZYCIEMNIAJĄCY */}
      {(menuVisible || orderModalVisible) && (
        <div className="product-overlay"></div>
      )}
      <div
        className={`${className} frame ${
          menuVisible && !(inDetails && isMobile) ? " is-active" : ""
        }`}
      >
        {/* Pasek NOWOŚĆ tylko jeśli badge === "new" i NIE jesteśmy w poziomej wersji */}
        {product.badge === "new" && !(inDetails && isMobile) && (
          <div className="product-badge--new">NOWOŚĆ</div>
        )}
        <div className={`${className}__content`}>
          <ScrollEffectContainer
            totalImages={1}
            threshold={0}
            animationTime={0.6}
            animationTransform="translateY(0rem)"
            rootMargin="50%"
            className={`${className}__content__img`}
          >
            <img
              className={`${className}__content__img--photo`}
              alt="product of MaGo3d"
              src={selectedColor?.photo || ""}
            />
          </ScrollEffectContainer>

          {/* Nazwa produktu tylko jeśli NIE jesteśmy w poziomej wersji mobilnej */}
          {!(inDetails && isMobile) && (
            <div className={`${className}__content--text-product`}>
              <ShortenTitle
                wordsNumber={product.maxWords}
                inDetails={inDetails}
              >
                {product.name}
              </ShortenTitle>
            </div>
          )}

          {inDetails && isMobile ? (
            <div>
              <p className={`${className}__content--text-price`}>
                {product.priceStringPl}
              </p>
              <ColorChooser
                colors={product.colors}
                selectedColor={chooseColor}
                onColorChange={setChooseColor}
              />
            </div>
          ) : (
            <>
              <p className={`${className}__content--text-price`}>
                {product.priceStringPl}
              </p>
              <ColorChooser
                colors={product.colors}
                selectedColor={chooseColor}
                onColorChange={setChooseColor}
              />
            </>
          )}

          {/* Przycisk SZCZEGÓŁY tylko jeśli NIE jesteśmy w poziomej wersji mobilnej */}
          {!(inDetails && isMobile) && (
            <Btn
              className={`btn ${className}__content--btn`}
              as={Link}
              to={detailsLink}
              style={inDetails ? { visibility: "hidden" } : undefined}
            >
              Szczegóły
            </Btn>
          )}

          <Btn
            className={`btn ${className}__content--btn`}
            onClick={handleBuyClick}
          >
            Kup
          </Btn>
        </div>
      </div>
      <ContextMenu
        visible={menuVisible}
        // position={menuPosition}
        anchorRect={menuAnchorRect}
        onClose={handleCloseMenu}
      >
        <div
          className="assortment__container__btns"
          onClick={() => {
            setMenuVisible(false);
            onMenuChange(false);
          }}
          style={{ opacity: 1 }} // Ustawienie opacity na 1, aby menu było widoczne
        >
          {shoppingPlatforms.map((platform) => (
            <Btn
              key={platform.name}
              className="btn assortment__container__btns__shop-btn"
              onClick={(e) => {
                e.preventDefault();
                setMenuVisible(false);
                onMenuChange(false);
                setTimeout(() => {
                  platform.name === "MaGo3d"
                    ? openOrderModal()
                    : window.open(
                        platform.link,
                        "_blank",
                        "noopener,noreferrer"
                      );
                }, 50);
              }}
            >
              {platform.icon}
              <span className={platform.textClass}>{platform.name}</span>
            </Btn>
          ))}
        </div>
      </ContextMenu>
      <OrderModal
        visible={orderModalVisible}
        onClose={() => setOrderModalVisible(false)}
        product={product}
        selectedColor={chooseColor}
        colors={product.colors}
        onColorChange={setChooseColor}
        price={product.priceStringPl}
        anchorRect={!inDetails || !isMobile ? anchorRect : undefined}
        modalRef={modalRef} // przekazujemy ref do OrderModa
      />
    </div>
  );
}
