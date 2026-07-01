import { useReducer } from "react";
import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Footer from "../components/Footer";
import ShoppingCart from "../components/user-panel/ShoppingCart";
import AddressForm from "../components/AddressForm";
import ActionConfirmModal from "../components/ActionConfirmModal";
import SummaryShopping from "../components/user-panel/SummaryShopping";
import Btn from "../components/Btn";
import { modalReducer, initialModalState } from "../components/modalReducer";
import { useCart } from "../context/CartContext";
import { getCartSummary } from "../utils/cartSummary";
import { openClearCartConfirmModal } from "../utils/cartActions";
import EmptyOrder from "../components/user-panel/EmptyOrder";
import { countryList } from "../data/countryList";
import useCheckoutOrderAddress from "../hooks/useCheckoutOrderAddress";
import DeliveryMethod from "../components/user-panel/DeliveryMethod";

export default function Order() {
  const { cart, dispatch } = useCart();
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState,
  );
  const { isAnyItem, totalPriceFormatted } = getCartSummary(cart);
  const {
    orderAddressDraft,
    phonePrefix,
    setPhonePrefix,
    handleCheckoutAddressSubmit,
  } = useCheckoutOrderAddress();

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
            <h2 className="heading-secondary">Zamówienie</h2>
            {isAnyItem && (
              <>
                <h3 className="heading-fourth">Dostawa</h3>
                <div className="order-cart grid-2-col_order-cart">
                  <div className="order-cart__content">
                    <DeliveryMethod />
                    <h3 className="heading-tertiary">Dane do zamówienia</h3>
                    <div className="frame hover-effect-card u-margin-bottom-medium">
                      <div className="add-edit-address__content">
                        <AddressForm
                          initialAddress={orderAddressDraft}
                          onSubmit={handleCheckoutAddressSubmit}
                          countryList={countryList}
                          phonePrefix={phonePrefix}
                          setPhonePrefix={setPhonePrefix}
                          showDefaultAddressOptions={false}
                          showActionButtons={false}
                        />
                      </div>
                    </div>

                    <h3 className="heading-tertiary">Koszyk</h3>
                    <Btn
                      onClick={handleAllDeleteItems}
                      className="btn u-margin-bottom-medium"
                    >
                      Usuń wszystkie produkty
                    </Btn>
                    <ShoppingCart modalDispatch={modalDispatch} />
                  </div>
                  <SummaryShopping totalPriceFormatted={totalPriceFormatted} />
                </div>
              </>
            )}
            {!isAnyItem && <EmptyOrder />}
          </div>
          <Footer />
        </ScrollEffectContainer>
        <CookieBanner />
      </section>
      <ActionConfirmModal state={modalState} dispatch={modalDispatch} />
    </>
  );
}
