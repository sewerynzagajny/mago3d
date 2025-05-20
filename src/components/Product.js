import { useState } from "react";
import Btn from "./Btn";
import ScrollEffectContainer from "./ScrollEffectContainer";

export default function Product({ product, className = "" }) {
  const [chooseColor, setChooseColor] = useState(
    product.colors?.[0]?.nameEn || "black"
  );

  if (!product || !product.colors) {
    return null; // lub wyświetl komunikat o błędzie
  }

  const selectedColor = product.colors?.find((c) => c.nameEn === chooseColor);

  return (
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

        <p className={`${className}__content--text-product`}>{product.name}</p>
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
        <Btn className={`btn ${className}__content--btn`}>Kup</Btn>
      </div>
    </div>
  );
}
