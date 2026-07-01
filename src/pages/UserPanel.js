import { useReducer } from "react";
import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Footer from "../components/Footer";
import ShoppingCart from "../components/user-panel/ShoppingCart";
import EmptyShoppingCart from "../components/EmptyShoppingCart";
import Orders from "../components/user-panel/OrdersHistory";
import AccountSettings from "../components/user-panel/AccountSettings";
import AddressDetails from "../components/user-panel/AddressDetails";
import ActionConfirmModal from "../components/ActionConfirmModal";
import SummaryShopping from "../components/user-panel/SummaryShopping";
import Btn from "../components/Btn";
import { modalReducer, initialModalState } from "../components/modalReducer";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { getCartSummary } from "../utils/cartSummary";
import { openClearCartConfirmModal } from "../utils/cartActions";

export default function UserPanel() {
  const { cart, dispatch } = useCart();
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState,
  );
  const { isLogin } = useAuth();
  const { isAnyItem, totalPriceFormatted } = getCartSummary(cart);

  function handleAllDeleteItems() {
    openClearCartConfirmModal({
      modalDispatch,
      cartDispatch: dispatch,
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
            <h3 className="heading-tertiary" id="koszyk">
              Koszyk
            </h3>
            {isAnyItem && (
              <>
                <Btn
                  onClick={handleAllDeleteItems}
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
