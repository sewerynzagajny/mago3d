import { useEffect, useMemo, useState } from "react";
import { useAddress } from "../context/AddressContext";

export default function useCheckoutOrderAddress() {
  const { addresses } = useAddress();

  const defaultOrderAddress = useMemo(
    () =>
      addresses.find((el) => el.isDefaultOrderAddress) || addresses[0] || {},
    [addresses],
  );

  const [orderAddressDraft, setOrderAddressDraft] = useState(() => ({
    ...defaultOrderAddress,
  }));
  const [phonePrefix, setPhonePrefix] = useState(
    defaultOrderAddress?.phonePrefix || "+48",
  );

  useEffect(() => {
    setOrderAddressDraft({ ...defaultOrderAddress });
    setPhonePrefix(defaultOrderAddress?.phonePrefix || "+48");
  }, [defaultOrderAddress]);

  function handleCheckoutAddressSubmit(e) {
    e.preventDefault();

    setOrderAddressDraft((prev) => ({
      ...prev,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phonePrefix,
      phone: e.target.phone.value,
      companyName: e.target.companyName.value,
      taxId: e.target.taxId.value,
      country: e.target.country.value,
      street: e.target.street.value,
      postalCode: e.target.postalCode.value,
      city: e.target.city.value,
      region: e.target.region.value,
    }));
  }

  return {
    orderAddressDraft,
    phonePrefix,
    setPhonePrefix,
    handleCheckoutAddressSubmit,
  };
}
