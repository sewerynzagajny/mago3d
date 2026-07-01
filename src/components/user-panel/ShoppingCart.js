import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function ShoppingCart({ modalDispatch }) {
  const { cart } = useCart();

  return (
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
  );
}
