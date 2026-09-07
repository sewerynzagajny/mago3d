import SingleCheckbox from "./SingleCheckbox";

export default function PermitChecklist({
  selectedDeliveryMethodId,
  shopTerms,
  parcelTerms,
  invoice,
  dispatch,
}) {
  function handleToggle(fieldName) {
    return dispatch({ type: "TOGGLE_FIELD", field: fieldName });
  }

  const isInpostDeliveryMethod =
    selectedDeliveryMethodId === "inpost_paczkomat_24";
  return (
    <div className="permit-checklist">
      <div className="frame hover-effect-card u-margin-bottom-medium">
        <div className="permit-checklist__content">
          <SingleCheckbox
            onChange={() => handleToggle("shopTerms")}
            stateChecked={shopTerms}
            name="shopTerms"
            required={true}
            fontSizeClass="u-font-size"
          >
            *Znam i akceptuję regulamin sklepu internetowego
          </SingleCheckbox>
          {isInpostDeliveryMethod && (
            <SingleCheckbox
              onChange={() => handleToggle("parcelTerms")}
              stateChecked={parcelTerms}
              name="parcelTerms"
              required={true}
              fontSizeClass="u-font-size"
            >
              *Znam i akceptuję regulamin Paczkomat 24/7
            </SingleCheckbox>
          )}
          <SingleCheckbox
            onChange={() => handleToggle("invoice")}
            stateChecked={invoice}
            name="invoice"
            fontSizeClass="u-font-size"
          >
            Chcę otrzymać fakturę
          </SingleCheckbox>
        </div>
      </div>
    </div>
  );
}
