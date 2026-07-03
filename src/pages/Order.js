import { useEffect, useReducer, useState } from "react";
import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
import Footer from "../components/Footer";
import ShoppingCart from "../components/user-panel/ShoppingCart";
import AddressForm from "../components/AddressForm";
import ActionConfirmModal from "../components/ActionConfirmModal";
import OrderSummary from "../components/user-panel/OrderSummary";
import Btn from "../components/Btn";
import { modalReducer, initialModalState } from "../components/modalReducer";
import { useCart } from "../context/CartContext";
import { formatCurrencyPLN, getCartSummary } from "../utils/cartSummary";
import { openClearCartConfirmModal } from "../utils/cartActions";
import EmptyOrder from "../components/user-panel/EmptyOrder";
import { countryList } from "../data/countryList";
import useCheckoutOrderAddress from "../hooks/useCheckoutOrderAddress";
import DeliveryMethod from "../components/user-panel/DeliveryMethod";
import Payments from "../components/user-panel/Payments";

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

const DELIVERY_METHODS = [
  {
    id: "inpost_paczkomat_24",
    label: "InPost Paczkomat 24/7",
    priceLabel: 14.99,
    get priceLabelStringPl() {
      return this.priceLabel.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    id: "inpost_kurier",
    label: "InPost Kurier",
    priceLabel: 16.99,
    get priceLabelStringPl() {
      return this.priceLabel.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    id: "poczta_polska",
    label: "Poczta Polska",
    priceLabel: 15.99,
    get priceLabelStringPl() {
      return this.priceLabel.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    id: "odbior_osobisty",
    label: "Odbior osobisty",
    priceLabel: 0,
    get priceLabelStringPl() {
      return this.priceLabel.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
];

export default function Order() {
  const { cart, dispatch } = useCart();
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState,
  );
  const {
    isAnyItem,
    totalPrice: productsTotalPrice,
    totalPriceFormatted: productsTotalPriceFormatted,
  } = getCartSummary(cart);
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

  const [selectedMethod, setSelectedMethod] = useState(
    DELIVERY_METHODS[1]?.id || "",
  );

  const selectedDeliveryMethod =
    DELIVERY_METHODS.find((method) => method.id === selectedMethod) ||
    DELIVERY_METHODS[1] ||
    DELIVERY_METHODS[0];

  const orderTotalPrice =
    productsTotalPrice + (selectedDeliveryMethod?.priceLabel || 0);
  const orderTotalPriceFormatted = formatCurrencyPLN(orderTotalPrice);

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
                    <DeliveryMethod
                      deliveryMethod={DELIVERY_METHODS}
                      selectedMethod={selectedMethod}
                      setSelectedMethod={setSelectedMethod}
                    />
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
                    <div className="add-edit-address__form__checkbox u-margin-bottom-medium">
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
                    {!sameAddress && (
                      <div className="frame hover-effect-card u-margin-bottom-medium">
                        <div className="add-edit-address__content">
                          <AddressForm
                            initialAddress={shippingAddressDraft}
                            onSubmit={handleShippingAddressSubmit}
                            onFormChange={handleShippingAddressChange}
                            countryList={countryList}
                            phonePrefix={shippingPhonePrefix}
                            setPhonePrefix={setShippingPhonePrefix}
                            showDefaultAddressOptions={false}
                            showActionButtons={false}
                          />
                        </div>
                      </div>
                    )}
                    <h3 className="heading-tertiary">Płatność</h3>
                    <Payments />

                    <h3 className="heading-tertiary">Koszyk</h3>
                    <Btn
                      onClick={handleAllDeleteItems}
                      className="btn u-margin-bottom-medium"
                    >
                      Usuń wszystkie produkty
                    </Btn>
                    <ShoppingCart modalDispatch={modalDispatch} />
                  </div>
                  <OrderSummary
                    productsTotalPriceFormatted={productsTotalPriceFormatted}
                    deliveryPriceFormatted={
                      selectedDeliveryMethod?.priceLabelStringPl || ""
                    }
                    deliveryMethodLabel={selectedDeliveryMethod?.label || ""}
                    orderTotalPriceFormatted={orderTotalPriceFormatted}
                  />
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
