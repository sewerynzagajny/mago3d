import { useCart } from "../../context/CartContext";
// import { products } from "../../data/products";
import ScrollEffectContainer from "../ScrollEffectContainer";
import Btn from "../Btn";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";

export default function CartItem({
  className = "",
  item,
  product,
  modalDispatch,
}) {
  const { dispatch } = useCart();

  const { colorKey, quantity } = item;

  const selectedColor = product.colors.find((c) => c.nameEn === colorKey);

  const totalPrice = (
    parseFloat(product.priceStringPl.replace(",", ".")) * quantity
  ).toLocaleString("pl-PL", { style: "currency", currency: "PLN" });

  function handleDeletaItem() {
    modalDispatch({
      type: "OPEN",
      payload: {
        status: "usun_item",
        onConfirm: () => {
          try {
            //TODO;

            dispatch({
              type: "REMOVE_ITEM",
              payload: { cartItemId: item.cartItemId },
            });
            toast.success("Usunięto wybrany produkt!", toastConfig);
          } catch (err) {
            toast.error(
              "Nie udało się usunąć wybranego produktu!",
              toastConfig,
            );
          } finally {
            // setLoading(false);
          }
        },
      },
    });
  }

  function handleReduceQuantity() {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        cartItemId: item.cartItemId,
        quantity: Math.max(1, item.quantity - 1),
      },
    });
  }

  function handelAddQuantity() {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        cartItemId: item.cartItemId,
        quantity: Math.min(20, item.quantity + 1),
      },
    });
  }

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
            alt="product of MaGo3d"
            src={selectedColor?.photo || ""}
          />
        </ScrollEffectContainer>

        <div className={`${className}__content--text-product`}>
          {product.name}
        </div>

        <div>
          <p className={`${className}__content--text-price`}>{totalPrice}</p>
          <div className="text-color">
            <p>Kolor:</p>
            <span>{selectedColor?.name}</span>
          </div>

          <div className={`${className}__content--quantity--btns-q`}>
            <span>Ilość: </span>
            <button
              className={`${className}__content--quantity--btns-q--btn-quantity`}
              type="button"
              onClick={handleReduceQuantity}
            >
              -
            </button>
            <span style={{ width: "1.2rem" }}>{quantity}</span>
            <button
              className={`${className}__content--quantity--btns-q--btn-quantity`}
              type="button"
              onClick={handelAddQuantity}
            >
              +
            </button>
            <Btn onClick={handleDeletaItem}>Usuń</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
