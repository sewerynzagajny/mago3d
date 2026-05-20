import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Btn from "../Btn";
import { useAddress } from "../../context/AddressContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";

export default function AddEditAddress() {
  const { urlId } = useParams();
  const { addresses, dispatch } = useAddress();
  const navigate = useNavigate();
  const isAnyAdressRef = useRef(addresses.length > 0);

  const address =
    urlId === "nowy"
      ? {
          id: crypto.randomUUID(),
        }
      : addresses.find((el) => String(el.id) === urlId);

  const {
    firstName,
    lastName,
    phone,
    companyName,
    taxId,
    country,
    street,
    postalCode,
    city,
    region,
    isDefaultOrderAddress,
    isDefaultShippingAddress,
  } = address;

  function handleSubmit(e) {
    e.preventDefault();
    const addressObj = {
      id: address.id,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
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
      <h3 className="heading-tertiary">
        {urlId === "nowy" ? "Nowy Adres" : "Edytuj adres"}
      </h3>
      <div className="frame hover-effect-card">
        <div className="add-edit-address__content">
          <form className="add-edit-address__form" onSubmit={handleSubmit}>
            <label className="add-edit-address__form__label">
              *Imię
              <input
                type="text"
                defaultValue={firstName || ""}
                className="add-edit-address__form__input"
                name="firstName"
              />
            </label>

            <label className="add-edit-address__form__label">
              *Nazwisko
              <input
                type="text"
                defaultValue={lastName || ""}
                className="add-edit-address__form__input"
                name="lastName"
              />
            </label>

            <label className="add-edit-address__form__label">
              *Telefon
              <input
                type="tel"
                defaultValue={phone || ""}
                className="add-edit-address__form__input"
                name="phone"
              />
              <span className="add-edit-address__form__hint">
                Format liczbowy, np.: 82345678
              </span>
            </label>

            <label className="add-edit-address__form__label">
              Nazwa firmy
              <input
                type="text"
                defaultValue={companyName || ""}
                className="add-edit-address__form__input"
                name="companyName"
              />
            </label>

            <label className="add-edit-address__form__label">
              NIP
              <input
                type="text"
                defaultValue={taxId || ""}
                className="add-edit-address__form__input"
                name="taxId"
              />
            </label>

            <label className="add-edit-address__form__label">
              Kraj
              <input
                type="text"
                defaultValue={country || "Polska"}
                className="add-edit-address__form__input"
                name="country"
                // defaultValue="Polska"
              />
            </label>

            <label className="add-edit-address__form__label">
              *Ulica i nr domu
              <input
                type="text"
                defaultValue={street || ""}
                className="add-edit-address__form__input"
                name="street"
              />
              <span className="add-edit-address__form__hint">
                Np.: Maciejkowa 88/24
              </span>
            </label>

            <label className="add-edit-address__form__label">
              *Kod pocztowy
              <input
                type="text"
                defaultValue={postalCode || ""}
                className="add-edit-address__form__input"
                name="postalCode"
              />
              <span className="add-edit-address__form__hint">
                Format dla Polski: xx-xxx
              </span>
            </label>

            <label className="add-edit-address__form__label">
              *Miasto
              <input
                type="text"
                defaultValue={city || ""}
                className="add-edit-address__form__input"
                name="city"
              />
            </label>

            <label className="add-edit-address__form__label">
              Województwo
              <input
                type="text"
                defaultValue={region || ""}
                className="add-edit-address__form__input"
                name="region"
              />
            </label>
            {urlId === "nowy" && isAnyAdressRef.current && (
              <>
                <label className="add-edit-address__form__checkbox">
                  <input
                    type="checkbox"
                    id="defaultOrderAddress"
                    name="isDefaultOrderAddress"
                    defaultChecked={isDefaultOrderAddress}
                    // style={{ display: "none" }}
                  />
                  Ustaw jako domyślny adres do zamówienia
                </label>

                <label className="add-edit-address__form__checkbox">
                  <input
                    type="checkbox"
                    name="isDefaultShippingAddress"
                    defaultChecked={isDefaultShippingAddress}
                  />
                  Ustaw jako domyślny adres dostawy
                </label>
              </>
            )}

            <div className="add-edit-address__form__btns">
              <Btn
                type="button"
                onClick={() => {
                  navigate(-1);
                  toast.info(
                    urlId === "nowy"
                      ? "Anulowano dodawanie adresu!"
                      : "Anulowano edycję adresu!",
                    toastConfig,
                  );
                }}
              >
                Wstecz
              </Btn>
              <Btn type="submit">{urlId === "nowy" ? "Dodaj" : "Zapisz"}</Btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
