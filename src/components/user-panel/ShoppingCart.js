import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import Btn from "../Btn";
import CartItem from "./CartItem";

export default function ShoppingCart({ modalDispatch }) {
  const { cart } = useCart();
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return sum;
    const price = parseFloat(product.priceStringPl.replace(",", "."));
    return sum + price * item.quantity;
  }, 0);
  const totalPriceFormatted = totalPrice.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  return (
    <div id="koszyk" className="shopping-cart grid-2-col_shopping-cart ">
      <div className="shopping-cart__list">
        {cart.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          return (
            <CartItem
              key={item.cartItemId}
              className="cart-item__container__product__item"
              item={item}
              product={product}
              modalDispatch={modalDispatch}
            />
          );
        })}
      </div>

      <div className="shopping-cart__summary">
        <div className="frame hover-effect-card" style={{ width: "100%" }}>
          <div className="shopping-cart__summary__content">
            <h4 className="heading-fourth-summary">Podsumowanie</h4>
            <div className="shopping-cart__summary__content__total-price">
              <p className="shopping-cart__summary__content__total-price_text">
                Suma
              </p>
              <div className="shopping-cart__summary__content__total-price_sum">
                <div className="shopping-cart__summary__content__total-price_sum--value">
                  {" "}
                  {totalPriceFormatted}
                </div>
                <p className="shopping-cart__summary__content__total-price_sum--text">
                  {" "}
                  Zawiera VAT
                </p>
              </div>
            </div>
            <Btn className=" btn shopping-cart__summary__content_btn">
              Zamów
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
