import { createContext, useReducer, useContext } from "react";
import { products } from "../data/products";

const initialCart = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const { productId, colorKey, quantity } = action.payload;
      const existingItem = state.find(
        (item) => item.productId === productId && item.colorKey === colorKey,
      );
      if (existingItem) {
        return state.map((item) =>
          item.productId === productId && item.colorKey === colorKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        const newItem = {
          cartItemId: crypto.randomUUID(),
          productId,
          colorKey,
          quantity,
        };
        return [...state, newItem];
      }
    case "REMOVE_ITEM":
      return state.filter(
        (item) => item.cartItemId !== action.payload.cartItemId,
      );
    case "CHANGE_QUANTITY":
      return state.map((item) =>
        item.cartItemId === action.payload.cartItemId
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    case "CLEAR_CART":
      return initialCart;
    default:
      throw new Error("action unknown");
  }
}

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
