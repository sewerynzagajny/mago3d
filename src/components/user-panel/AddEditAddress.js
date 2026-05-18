import { useParams } from "react-router-dom";
import Btn from "../Btn";
import { useAddress } from "../../context/AddressContext";

export default function AddEditAddress() {
  const { urlId } = useParams();
  const { addresses } = useAddress();

  const currentAddress =
    urlId === "nowy"
      ? { id: crypto.randomUUID() }
      : addresses.find((el) => el.id === +urlId);

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
  } = currentAddress;

  return (
    <div className="add-edit-address">
      {/* <h2 className="heading-second">Nowy adres</h2> */}
      <h2 className="heading-secondary">Formularz adresowy</h2>
      <h3 className="heading-tertiary">
        {urlId === "nowy" ? "Nowy Adres" : "Edytuj adres"}
      </h3>
      <div className="frame hover-effect-card">
        <div className="add-edit-address__content">
          <form className="add-edit-address__form">
            <label className="add-edit-address__form__label">
              *Imię
              <input
                type="text"
                defaultValue={firstName || ""}
                className="add-edit-address__form__input"
              />
            </label>

            <label className="add-edit-address__form__label">
              *Nazwisko
              <input
                type="text"
                defaultValue={lastName || ""}
                className="add-edit-address__form__input"
              />
            </label>

            <label className="add-edit-address__form__label">
              *Telefon
              <input
                type="tel"
                defaultValue={phone || ""}
                className="add-edit-address__form__input"
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
              />
            </label>

            <label className="add-edit-address__form__label">
              NIP
              <input
                type="text"
                defaultValue={taxId || ""}
                className="add-edit-address__form__input"
              />
            </label>

            <label className="add-edit-address__form__label">
              Kraj
              <input
                type="text"
                defaultValue={country || "Polska"}
                className="add-edit-address__form__input"
                // defaultValue="Polska"
              />
            </label>

            <label className="add-edit-address__form__label">
              *Ulica i nr domu
              <input
                type="text"
                defaultValue={street || ""}
                className="add-edit-address__form__input"
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
              />
            </label>

            <label className="add-edit-address__form__label">
              Województwo
              <input
                type="text"
                defaultValue={region || ""}
                className="add-edit-address__form__input"
              />
            </label>

            <label className="add-edit-address__form__checkbox">
              <input type="checkbox" />
              Ustaw jako domyślny adres do zamówienia
            </label>

            <label className="add-edit-address__form__checkbox">
              <input type="checkbox" />
              Ustaw jako domyślny adres dostawy
            </label>

            <div className="add-edit-address__form__btns">
              <Btn>Wstecz</Btn>
              <Btn>{urlId === "nowy" ? "Dodaj" : "Zapisz"}</Btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
