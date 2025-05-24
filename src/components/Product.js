import { useState, useRef } from "react";
import Btn from "./Btn";
import ScrollEffectContainer from "./ScrollEffectContainer";
import ContextMenu from "./ContextMenu";
import { Link } from "react-router-dom";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";
import { ReactComponent as MaGo3dIcon } from "../svg/mago3d.svg";

export default function Product({
  product,
  className = "",
  onMenuChange,
  style,
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
  const itemRef = useRef(null); // Dodaj ref

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

          <p className={`${className}__content--text-product`}>
            {product.name}
          </p>
          <p className={`${className}__content--text-price`}>
            {product.priceStringPl}
          </p>
          <div className={`${className}__content--text-color`}>
            <div>Kolor: </div>
            <div className={`${className}__content--text-color`}>
              {product.colors.map((color) => (
                <button
                  onClick={() => {
                    setChooseColor(color.nameEn);
                  }}
                  style={{
                    backgroundColor: color.nameEn,
                  }}
                  key={color.nameEn}
                  className={`${className}__content--text-color--item`}
                  title={color.name}
                >
                  <div
                    className={`${className}__content--text-color--item--marker`}
                  >
                    {chooseColor === color.nameEn ? "✓" : ""}
                  </div>
                </button>
              ))}
            </div>
          </div>
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
                  window.open(platform.link, "_blank", "noopener,noreferrer");
                }, 50);
              }}
            >
              {platform.icon}
              <span className={platform.textClass}>{platform.name}</span>
            </Btn>
          ))}
        </div>
      </ContextMenu>
    </div>
  );
}
