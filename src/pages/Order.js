import { useEffect, useReducer, useState } from "react";
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

function areAddressesEqual(a = {}, b = {}) {
  const fields = [
    "firstName",
    "lastName",
    "phonePrefix",
    "phone",
    "companyName",
    "taxId",
    "country",
    "street",
    "postalCode",
    "city",
    "region",
  ];

  return fields.every((field) => (a?.[field] || "") === (b?.[field] || ""));
}

export default function Order() {
  const { cart, dispatch } = useCart();
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState,
  );
  const { isAnyItem, totalPriceFormatted } = getCartSummary(cart);
  const {
    buyerAddressDraft,
    buyerPhonePrefix,
    setBuyerPhonePrefix,
    handleBuyerAddressChange,
    handleBuyerAddressSubmit,
    shippingAddressDraft,
    shippingPhonePrefix,
    setShippingPhonePrefix,
    handleShippingAddressChange,
    handleShippingAddressSubmit,
    syncShippingWithBuyer,
  } = useCheckoutOrderAddress();

  const [sameAddress, setSameAddress] = useState(false);
  const [isSameAddressInitialized, setIsSameAddressInitialized] =
    useState(false);

  useEffect(() => {
    if (isSameAddressInitialized) return;

    if (areAddressesEqual(buyerAddressDraft, shippingAddressDraft)) {
      setSameAddress(true);
    }

    setIsSameAddressInitialized(true);
  }, [isSameAddressInitialized, buyerAddressDraft, shippingAddressDraft]);

  useEffect(() => {
    if (sameAddress) {
      syncShippingWithBuyer();
    }
  }, [sameAddress, syncShippingWithBuyer]);

  const shippingFormKey = sameAddress ? "same-address" : "shipping-address";

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
                    <h3 className="heading-tertiary">Dane kupującego</h3>
                    <div className="frame hover-effect-card u-margin-bottom-medium">
                      <div className="add-edit-address__content">
                        <AddressForm
                          initialAddress={buyerAddressDraft}
                          onSubmit={handleBuyerAddressSubmit}
                          onFormChange={handleBuyerAddressChange}
                          countryList={countryList}
                          phonePrefix={buyerPhonePrefix}
                          setPhonePrefix={setBuyerPhonePrefix}
                          showDefaultAddressOptions={false}
                          showActionButtons={false}
                        />
                      </div>
                    </div>
                    <h3 className="heading-tertiary">Dane dostawy</h3>
                    <div className="add-edit-address__form__checkbox u-margin-bottom-small">
                      <button
                        type="button"
                        className="text-color--item add-edit-address__form__checkbox--btn"
                        onClick={() => setSameAddress(!sameAddress)}
                      >
                        <div className="text-color--item--marker">
                          {sameAddress ? "✓" : ""}
                        </div>
                      </button>
                      <label
                        className="u-font-size"
                        onClick={() => setSameAddress(!sameAddress)}
                      >
                        Adres dostawy taki sam jak adres kupującego
                      </label>
                      <input
                        type="checkbox"
                        name="isDefaultOrderAddress"
                        checked={sameAddress}
                        onChange={(e) => setSameAddress(e.target.checked)}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="frame hover-effect-card u-margin-bottom-medium">
                      <div className="add-edit-address__content">
                        <AddressForm
                          key={shippingFormKey}
                          initialAddress={
                            sameAddress
                              ? buyerAddressDraft
                              : shippingAddressDraft
                          }
                          onSubmit={handleShippingAddressSubmit}
                          onFormChange={
                            sameAddress
                              ? undefined
                              : handleShippingAddressChange
                          }
                          countryList={countryList}
                          phonePrefix={
                            sameAddress ? buyerPhonePrefix : shippingPhonePrefix
                          }
                          setPhonePrefix={
                            sameAddress
                              ? setBuyerPhonePrefix
                              : setShippingPhonePrefix
                          }
                          showDefaultAddressOptions={false}
                          showActionButtons={false}
                          isDisabled={sameAddress}
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
