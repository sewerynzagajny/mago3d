import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Btn from "../Btn";
import { useAddress } from "../../context/AddressContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";
import { countryList } from "../../data/countryList";

export default function AddEditAddress() {
  const { urlId } = useParams();
  const { addresses, dispatch } = useAddress();
  const navigate = useNavigate();

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
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="firstName"
              >
                *Imię
              </label>
              <input
                type="text"
                defaultValue={firstName || ""}
                className="add-edit-address__form__field--input"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="lastName"
              >
                *Nazwisko
              </label>
              <input
                type="text"
                defaultValue={lastName || ""}
                className="add-edit-address__form__field--input"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="phone"
              >
                *Telefon
              </label>
              <div className="add-edit-address__form__field--phone-wrapper">
                <select
                  className="add-edit-address__form__field--select-prefix"
                  value={phonePrefix}
                  onChange={(e) => setPhonePrefix(e.target.value)}
                  aria-label="Kierunkowy kraju"
                >
                  {countryList.map((el) => (
                    <option key={el.id} value={el.dialCode}>
                      {el.isoCode} ({el.dialCode})
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  defaultValue={phone || ""}
                  className="add-edit-address__form__field--input"
                  name="phone"
                  id="phone"
                />
              </div>
              <span className="add-edit-address__form__field--hint">
                Format liczbowy, np.: 82345678
              </span>
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="companyName"
              >
                Nazwa firmy
              </label>
              <input
                type="text"
                defaultValue={companyName || ""}
                className="add-edit-address__form__field--input"
                name="companyName"
                id="companyName"
              />
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="taxId"
              >
                NIP
              </label>
              <input
                type="text"
                defaultValue={taxId || ""}
                className="add-edit-address__form__field--input"
                name="taxId"
                id="taxId"
              />
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="country"
              >
                Kraj
              </label>
              {/* <input
                type="text"
                defaultValue={country || "Polska"}
                className="add-edit-address__form__field--input"
                name="country"
                id="country"
              /> */}
              {/* <select
                className="add-edit-address__form__field--select"
                name="country"
                id="country"
                defaultValue={country || "Polska"}
              >
                {countryList.map((el) => (
                  <option key={el.id} value={el.value}>
                    {el.value}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                list="countryList"
                className="add-edit-address__form__field--input"
                name="country"
                id="country"
                defaultValue={country || "Polska"}
                placeholder="Wpisz lub wybierz kraj..."
                autoComplete="off"
              />
              <datalist id="countryList">
                {countryList.map((el) => (
                  <option key={el.id} value={el.country} />
                ))}
              </datalist>
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="street"
              >
                *Ulica i nr domu
              </label>
              <input
                type="text"
                defaultValue={street || ""}
                className="add-edit-address__form__field--input"
                name="street"
                id="street"
              />
              <span className="add-edit-address__form__field--hint">
                Np.: Maciejkowa 88/24
              </span>
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="postalCode"
              >
                *Kod pocztowy
              </label>
              <input
                type="text"
                defaultValue={postalCode || ""}
                className="add-edit-address__form__field--input"
                name="postalCode"
                id="postalCode"
              />
              <span className="add-edit-address__form__field--hint">
                Format dla Polski: xx-xxx
              </span>
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="city"
              >
                *Miasto
              </label>
              <input
                type="text"
                defaultValue={city || ""}
                className="add-edit-address__form__field--input"
                name="city"
                id="city"
              />
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="region"
              >
                Województwo
              </label>
              <input
                type="text"
                defaultValue={region || ""}
                className="add-edit-address__form__field--input"
                name="region"
                id="region"
              />
            </div>
            {urlId === "nowy" && isAnyAdressRef.current && (
              <>
                <div className="add-edit-address__form__checkbox">
                  <button
                    type="button"
                    className="text-color--item add-edit-address__form__checkbox--btn"
                    onClick={() => setOrderDefault(!orderDefault)}
                  >
                    <div className="text-color--item--marker">
                      {orderDefault ? "✓" : ""}
                    </div>
                  </button>
                  <label onClick={() => setOrderDefault(!orderDefault)}>
                    Ustaw jako domyślny adres do zamówienia
                  </label>
                  <input
                    type="checkbox"
                    name="isDefaultOrderAddress"
                    checked={orderDefault}
                    onChange={(e) => setOrderDefault(e.target.checked)}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="add-edit-address__form__checkbox">
                  <button
                    type="button"
                    className="text-color--item add-edit-address__form__checkbox--btn"
                    onClick={() => setShippingDefault(!shippingDefault)}
                  >
                    <div className="text-color--item--marker">
                      {shippingDefault ? "✓" : ""}
                    </div>
                  </button>
                  <label onClick={() => setShippingDefault(!shippingDefault)}>
                    Ustaw jako domyślny adres dostawy
                  </label>
                  <input
                    type="checkbox"
                    name="isDefaultShippingAddress"
                    checked={shippingDefault}
                    onChange={(e) => setShippingDefault(e.target.checked)}
                    style={{ display: "none" }}
                  />
                </div>
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
