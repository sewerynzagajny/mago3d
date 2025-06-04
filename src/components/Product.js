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

export default function Product({
  product,
  className = "",
  onMenuChange,
  style,
  setOrderModalVisible,
  orderModalVisible,
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
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // const [orderModalVisible, setOrderModalVisible] = useState(false);

  const itemRef = useRef(null); // Dodaj ref
  const [anchorRect, setAnchorRect] = useState(null);
  const modalRef = useRef(null);

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

  function openOrderModal() {
    if (itemRef.current) {
      setAnchorRect(itemRef.current.getBoundingClientRect());
    }
    if (setOrderModalVisible) setOrderModalVisible(true);
  }

  function handleBuyClick(e) {
    e.preventDefault();
    // const rect = itemRef.current.getBoundingClientRect();
    // setMenuPosition({
    //   x: e.clientX - rect.left,
    //   y: e.clientY - rect.top,
    // });
    setMenuPosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });
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
      ref={itemRef}
      style={{ position: "relative", ...style }}
    >
      <div className={`${className} frame ${menuVisible ? " is-active" : ""}`}>
        {/* Pasek NOWOŚĆ tylko jeśli badge === "new" */}
        {product.badge === "new" && (
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

          <div className={`${className}__content--text-product`}>
            <ShortenTitle wordsNumber={product.maxWords}>
              {product.name}
            </ShortenTitle>
          </div>
          <p className={`${className}__content--text-price`}>
            {product.priceStringPl}
          </p>
          <ColorChooser
            colors={product.colors}
            selectedColor={chooseColor}
            onColorChange={setChooseColor}
          />
          <Btn
            className={`btn ${className}__content--btn`}
            as={Link}
            to="/szczegoly"
          >
            Szczegóły
          </Btn>
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
        position={menuPosition}
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
        anchorRect={anchorRect}
        modalRef={modalRef} // przekazujemy ref do OrderModa
      />
    </div>
  );
}
