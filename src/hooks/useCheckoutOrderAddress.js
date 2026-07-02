import { useCallback, useEffect, useMemo, useReducer } from "react";
import { useAddress } from "../context/AddressContext";

function reducer(state, action) {
  switch (action.type) {
    case "SET_BUYER_FROM_DEFAULT":
      return {
        ...state,
        buyerAddressDraft: { ...action.payload.address },
        buyerPhonePrefix: action.payload.phonePrefix,
      };
    case "SET_SHIPPING_FROM_DEFAULT":
      return {
        ...state,
        shippingAddressDraft: { ...action.payload.address },
        shippingPhonePrefix: action.payload.phonePrefix,
      };
    case "SET_BUYER_DRAFT":
      return {
        ...state,
        buyerAddressDraft: {
          ...state.buyerAddressDraft,
          ...action.payload,
        },
      };
    case "SET_SHIPPING_DRAFT":
      return {
        ...state,
        shippingAddressDraft: {
          ...state.shippingAddressDraft,
          ...action.payload,
        },
      };
    case "SET_BUYER_PHONE_PREFIX":
      return {
        ...state,
        buyerPhonePrefix: action.payload,
        buyerAddressDraft: {
          ...state.buyerAddressDraft,
          phonePrefix: action.payload,
        },
      };
    case "SET_SHIPPING_PHONE_PREFIX":
      return {
        ...state,
        shippingPhonePrefix: action.payload,
        shippingAddressDraft: {
          ...state.shippingAddressDraft,
          phonePrefix: action.payload,
        },
      };
    case "SYNC_SHIPPING_WITH_BUYER":
      return {
        ...state,
        shippingAddressDraft: { ...state.buyerAddressDraft },
        shippingPhonePrefix: state.buyerPhonePrefix,
      };
    default:
      return state;
  }
}

export default function useCheckoutOrderAddress() {
  const { addresses } = useAddress();

  const defaultOrderAddress = useMemo(
    () => addresses.find((el) => el.isDefaultOrderAddress) || {},
    [addresses],
  );

  const defaultShippingAddress = useMemo(
    () => addresses.find((el) => el.isDefaultShippingAddress) || {},
    [addresses],
  );

  const [state, dispatch] = useReducer(reducer, {
    buyerAddressDraft: { ...defaultOrderAddress },
    buyerPhonePrefix: defaultOrderAddress?.phonePrefix || "+48",
    shippingAddressDraft: { ...defaultShippingAddress },
    shippingPhonePrefix: defaultShippingAddress?.phonePrefix || "+48",
  });

  const {
    buyerAddressDraft,
    buyerPhonePrefix,
    shippingAddressDraft,
    shippingPhonePrefix,
  } = state;

  useEffect(() => {
    dispatch({
      type: "SET_BUYER_FROM_DEFAULT",
      payload: {
        address: defaultOrderAddress,
        phonePrefix: defaultOrderAddress?.phonePrefix || "+48",
      },
    });
  }, [defaultOrderAddress]);

  useEffect(() => {
    dispatch({
      type: "SET_SHIPPING_FROM_DEFAULT",
      payload: {
        address: defaultShippingAddress,
        phonePrefix: defaultShippingAddress?.phonePrefix || "+48",
      },
    });
  }, [defaultShippingAddress]);

  function buildDraftFromForm(form, phonePrefix) {
    return {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phonePrefix,
      phone: form.phone.value,
      companyName: form.companyName.value,
      taxId: form.taxId.value,
      country: form.country.value,
      street: form.street.value,
      postalCode: form.postalCode.value,
      city: form.city.value,
      region: form.region.value,
    };
  }

  function handleBuyerAddressChange(e) {
    const form = e.currentTarget;
    if (!form) return;

    dispatch({
      type: "SET_BUYER_DRAFT",
      payload: buildDraftFromForm(form, buyerPhonePrefix),
    });
  }

  function handleShippingAddressChange(e) {
    const form = e.currentTarget;
    if (!form) return;

    dispatch({
      type: "SET_SHIPPING_DRAFT",
      payload: buildDraftFromForm(form, shippingPhonePrefix),
    });
  }

  function handleBuyerAddressSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "SET_BUYER_DRAFT",
      payload: buildDraftFromForm(e.target, buyerPhonePrefix),
    });
  }

  function handleShippingAddressSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "SET_SHIPPING_DRAFT",
      payload: buildDraftFromForm(e.target, shippingPhonePrefix),
    });
  }

  function handleBuyerPhonePrefixChange(value) {
    dispatch({
      type: "SET_BUYER_PHONE_PREFIX",
      payload: value,
    });
  }

  function handleShippingPhonePrefixChange(value) {
    dispatch({
      type: "SET_SHIPPING_PHONE_PREFIX",
      payload: value,
    });
  }

  const syncShippingWithBuyer = useCallback(() => {
    dispatch({ type: "SYNC_SHIPPING_WITH_BUYER" });
  }, []);

  return {
    buyerAddressDraft,
    buyerPhonePrefix,
    setBuyerPhonePrefix: handleBuyerPhonePrefixChange,
    handleBuyerAddressChange,
    handleBuyerAddressSubmit,
    shippingAddressDraft,
    shippingPhonePrefix,
    setShippingPhonePrefix: handleShippingPhonePrefixChange,
    handleShippingAddressChange,
    handleShippingAddressSubmit,
    syncShippingWithBuyer,
  };
}
