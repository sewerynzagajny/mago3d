import { useState, useRef } from "react";
import Btn from "./Btn";
import ScrollEffectContainer from "./ScrollEffectContainer";
import ContextMenu from "./ContextMenu";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";

export default function Product({ product, className = "" }) {
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

  function handleBuyClick(e) {
    e.preventDefault();
    const rect = itemRef.current.getBoundingClientRect();
    setMenuPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setMenuVisible(true);
  }

  return (
    <div
      className={`${className}__item${menuVisible ? " is-active" : ""}`}
      ref={itemRef}
      style={{ position: "relative" }}
    >
      <div className={`${className} frame`}>
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
              alt="product of Mago3d"
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
          <Btn className={`btn ${className}__content--btn`}>Szczegóły</Btn>
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
        onClose={() => setMenuVisible(false)}
      >
        <div
          className="assortment__container__btns"
          onClick={() => setMenuVisible(false)}
        >
          <Btn
            className="btn assortment__container__btns__shop-btn"
            onClick={(e) => {
              e.preventDefault();
              setMenuVisible(false);
              setTimeout(() => {
                window.open(
                  "https://www.etsy.com/pl/shop/MaGo3dPL",
                  "_blank",
                  "noopener,noreferrer"
                );
              }, 50); // 50 ms wystarczy, możesz dać nawet 10-30 ms
            }}
          >
            <EtsyIcon className="assortment__container__btns__shop-btn--link" />
            <span className="assortment__container__btns__shop-btn--text-etsy">
              Etsy
            </span>
          </Btn>
          <Btn
            className="btn assortment__container__btns__shop-btn"
            onClick={(e) => {
              e.preventDefault();
              setMenuVisible(false);
              setTimeout(() => {
                window.open(
                  "https://allegro.pl/uzytkownik/MaGo3d",
                  "_blank",
                  "noopener,noreferrer"
                );
              }, 50); // 50 ms wystarczy, możesz dać nawet 10-30 ms
            }}
          >
            <AllegroIcon className="assortment__container__btns__shop-btn--link" />
            <span className="assortment__container__btns__shop-btn--text-allegro">
              Allegro
            </span>
          </Btn>
        </div>
      </ContextMenu>
    </div>
  );
}
