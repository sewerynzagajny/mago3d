import Btn from "./Btn";

export default function AddressForm({
  initialAddress = {},
  onSubmit,
  onFormChange,
  onCancel,
  submitLabel,
  countryList = [],
  phonePrefix = "+48",
  setPhonePrefix,
  showDefaultAddressOptions,
  orderDefault,
  setOrderDefault,
  shippingDefault,
  setShippingDefault,
  showActionButtons = true,
}) {
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
  } = initialAddress;

  return (
    <form
      className={`add-edit-address__form ${
        !showActionButtons ? "add-edit-address__form--without-actions" : ""
      }`.trim()}
      onSubmit={onSubmit}
      onChange={onFormChange}
    >
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
          required
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
          required
        />
      </div>
      <div className="add-edit-address__form__field">
        <label className="add-edit-address__form__field--label" htmlFor="phone">
          *Telefon
        </label>
        <div className="add-edit-address__form__field--phone-wrapper">
          <select
            className="add-edit-address__form__field--select-prefix"
            value={phonePrefix}
            onChange={(e) => setPhonePrefix?.(e.target.value)}
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
            required
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
        <label className="add-edit-address__form__field--label" htmlFor="taxId">
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
          required
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
          required
        />
        <span className="add-edit-address__form__field--hint">
          Format dla Polski: xx-xxx
        </span>
      </div>
      <div className="add-edit-address__form__field">
        <label className="add-edit-address__form__field--label" htmlFor="city">
          *Miasto
        </label>
        <input
          type="text"
          defaultValue={city || ""}
          className="add-edit-address__form__field--input"
          name="city"
          id="city"
          required
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

      {showDefaultAddressOptions && (
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

      {showActionButtons && (
        <div className="add-edit-address__form__btns">
          <Btn type="button" onClick={onCancel}>
            Wstecz
          </Btn>
          <Btn type="submit">{submitLabel}</Btn>
        </div>
      )}
    </form>
  );
}
