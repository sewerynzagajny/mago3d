import { useReducer } from "react";
import SingleCheckbox from "./SingleCheckbox";
const initialState = {
  shopTerms: false,
  parcelTerms: false,
  invoice: false,
};

function checkboxRedoucer(state, action) {
  switch (action.type) {
    case "TOGGLE_FIELD":
      return {
        ...state,
        [action.field]: !state[action.field],
      };
    default:
      throw new Error("Uknown action");
  }
}

export default function PermitChecklist({ selectedDeliveryMethodId }) {
  const [state, dispatch] = useReducer(checkboxRedoucer, initialState);

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
            stateChecked={state.shopTerms}
            name="shopTerms"
            required={true}
            fontSizeClass="u-font-size"
          >
            *Znam i akceptuję regulamin sklepu internetowego
          </SingleCheckbox>
          {isInpostDeliveryMethod && (
            <SingleCheckbox
              onChange={() => handleToggle("parcelTerms")}
              stateChecked={state.parcelTerms}
              name="parcelTerms"
              required={true}
              fontSizeClass="u-font-size"
            >
              *Znam i akceptuję regulamin Paczkomat 24/7
            </SingleCheckbox>
          )}
          <SingleCheckbox
            onChange={() => handleToggle("invoice")}
            stateChecked={state.invoice}
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
