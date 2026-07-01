import { useState } from "react";

const DELIVERY_METHODS = [
  {
    id: "inpost_paczkomat_24",
    label: "InPost Paczkomat 24/7",
    priceLabel: "Darmowa",
  },
  {
    id: "inpost_kurier",
    label: "InPost Kurier",
    priceLabel: "Darmowa",
  },
  {
    id: "poczta_polska",
    label: "Poczta Polska",
    priceLabel: "Darmowa",
  },
  {
    id: "odbior_osobisty",
    label: "Odbior osobisty",
    priceLabel: "Darmowa",
  },
];

export default function DeliveryMethod() {
  const [selectedMethod, setSelectedMethod] = useState(
    DELIVERY_METHODS[1]?.id || "",
  );

  return (
    <div className="delivery-method">
      <div className="frame hover-effect-card u-margin-bottom-medium">
        <div className="delivery-method__content">
          <p className="delivery-method__text">Polska</p>
          <p className="delivery-method__text">Wysyłka w 48 godzin</p>
          <div className="delivery-method__list">
            {DELIVERY_METHODS.map((method) => (
              <label key={method.id} className="delivery-method__item">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={() => setSelectedMethod(method.id)}
                  className="delivery-method__radio-input"
                />
                <span className="delivery-method__radio" aria-hidden="true" />
                <span className="delivery-method__name">{method.label}</span>
                <span className="delivery-method__price">
                  {method.priceLabel}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
