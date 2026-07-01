import { useReducer } from "react";
import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Footer from "../components/Footer";
import ShoppingCart from "../components/user-panel/ShoppingCart";
import EmptyShoppingCart from "../components/EmptyShoppingCart";
import Orders from "../components/user-panel/Orders";
import AccountSettings from "../components/user-panel/AccountSettings";
import AddressDetails from "../components/user-panel/AddressDetails";
import ActionConfirmModal from "../components/ActionConfirmModal";
import SummaryShopping from "../components/user-panel/SummaryShopping";
import Btn from "../components/Btn";
import { modalReducer, initialModalState } from "../components/modalReducer";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";

export default function UserPanel() {
  const { cart, dispatch } = useCart();
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState,
  );
  const { isLogin } = useAuth();
  const isAnyItem = cart.length ? true : false;
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

  function handleAllDeleteItems() {
    modalDispatch({
      type: "OPEN",
      payload: {
        status: "usun_wszystkie_itemy",
        onConfirm: () => {
          try {
            dispatch({
              type: "CLEAR_CART",
            });
            toast.success("Usunięto wszystkie produkty!", toastConfig);
          } catch (err) {
            toast.error(
              "Nie udało się usunąć wszystkich produktów!",
              toastConfig,
            );
          }
        },
      },
    });
  }

  return (
    <>
      <section className="user-panel">
        <Navigation />
        <ScrollEffectContainer
          totalImages={0}
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          rootMargin="50%"
        >
          <div className="user-panel__container">
            <h2 className="heading-secondary">Panel klienta</h2>
            <h3 className="heading-tertiary">Koszyk</h3>
            {isAnyItem && (
              <>
                <Btn
                  onClick={handleAllDeleteItems}
                  id="koszyk"
                  className="btn u-margin-bottom-medium"
                >
                  Usuń wszystkie produkty
                </Btn>
                <div className="shopping-cart grid-2-col_shopping-cart">
                  <ShoppingCart modalDispatch={modalDispatch} />
                  <SummaryShopping totalPriceFormatted={totalPriceFormatted} />
                </div>
              </>
            )}
            {!isAnyItem && <EmptyShoppingCart />}
            {isLogin && (
              <>
                <Orders />
                <AccountSettings />
                <AddressDetails modalDispatch={modalDispatch} />{" "}
              </>
            )}
          </div>
          <Footer />
        </ScrollEffectContainer>
        <CookieBanner />
      </section>
      <ActionConfirmModal state={modalState} dispatch={modalDispatch} />
    </>
  );
}
