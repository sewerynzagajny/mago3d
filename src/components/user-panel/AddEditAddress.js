import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";
import { countryList } from "../../data/countryList";
import AddressForm from "../AddressForm";
import { useAuth } from "../../context/AuthContext";

export default function AddEditAddress() {
  const { urlId } = useParams();
  const { addresses, dispatch } = useAddress();
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  const address =
    urlId === "nowy"
      ? {
          id: crypto.randomUUID(),
        }
      : addresses.find((el) => String(el.id) === urlId);

  const isAnyAdressRef = useRef(addresses.length > 0);
  const [orderDefault, setOrderDefault] = useState(false);
  const [shippingDefault, setShippingDefault] = useState(false);
  const [phonePrefix, setPhonePrefix] = useState(address?.phonePrefix || "+48");

  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    taxId,
    country,
    street,
    postalCode,
    city,
    region,
  } = address;

  function handleCancel() {
    navigate(-1);
    toast.info(
      urlId === "nowy"
        ? "Anulowano dodawanie adresu!"
        : "Anulowano edycję adresu!",
      toastConfig,
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const addressObj = {
      id: address.id,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phonePrefix: phonePrefix,
      phone: e.target.phone.value,
      companyName: e.target.companyName.value,
      taxId: e.target.taxId.value,
      country: e.target.country.value,
      street: e.target.street.value,
      postalCode: e.target.postalCode.value,
      city: e.target.city.value,
      region: e.target.region.value,
      isDefaultOrderAddress:
        urlId === "nowy" && isAnyAdressRef.current
          ? e.target.isDefaultOrderAddress.checked
          : address.isDefaultOrderAddress,
      isDefaultShippingAddress:
        urlId === "nowy" && isAnyAdressRef.current
          ? e.target.isDefaultShippingAddress.checked
          : address.isDefaultShippingAddress,
    };

    if (urlId !== "nowy") {
      const hasChanges = Object.keys(addressObj).some(
        (key) => addressObj[key] !== address[key],
      );
      if (!hasChanges) {
        toast.info("Nic nie zmieniono!", toastConfig);
        navigate("/panel#adresy");
        return;
      }
    }
    if (urlId === "nowy") {
      const isTheSame = addresses.some((obj) =>
        Object.keys(obj)
          .filter(
            (key) =>
              key !== "id" &&
              key !== "isDefaultOrderAddress" &&
              key !== "isDefaultShippingAddress",
          )
          .every((key) => addressObj[key] === obj[key]),
      );
      if (isTheSame) {
        toast.info("Już takie dane adresowe istnieją", toastConfig);
        navigate("/panel#adresy");
        return;
      }
    }

    dispatch({
      type: urlId === "nowy" ? "ADD_NEW_ADDRESS" : "EDIT_ADDRESS",
      payload: addressObj,
    });
    toast.success(
      urlId === "nowy" ? "Dodano nowy adres!" : "Edytowano i zapisano adres!",
      toastConfig,
    );
    navigate("/panel#adresy");
  }

  return (
    <div className="add-edit-address">
      {/* <h2 className="heading-second">Nowy adres</h2> */}
      <h2 className="heading-secondary">Formularz adresowy</h2>
      {isLogin ? (
        <>
          <h3 className="heading-tertiary">
            {urlId === "nowy" ? "Nowy Adres" : "Edytuj adres"}
          </h3>
          <div className="frame hover-effect-card">
            <div className="add-edit-address__content">
              <AddressForm
                initialAddress={{
                  firstName,
                  lastName,
                  email,
                  phone,
                  companyName,
                  taxId,
                  country,
                  street,
                  postalCode,
                  city,
                  region,
                }}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                submitLabel={urlId === "nowy" ? "Dodaj" : "Zapisz"}
                countryList={countryList}
                phonePrefix={phonePrefix}
                setPhonePrefix={setPhonePrefix}
                showDefaultAddressOptions={
                  urlId === "nowy" && isAnyAdressRef.current
                }
                orderDefault={orderDefault}
                setOrderDefault={setOrderDefault}
                shippingDefault={shippingDefault}
                setShippingDefault={setShippingDefault}
              />
            </div>
          </div>
        </>
      ) : (
        <h3 className="heading-fourth-fifth">
          Tylko dla zalogowanych użytkowników
        </h3>
      )}
    </div>
  );
}
