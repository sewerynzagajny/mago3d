import { useState } from "react";

const PAYMENT_METHODS = [
  {
    id: "online",
    label: "Płatność online",
    description: "BLIK, Apple Pay, Google Pay, karta, szybki przelew",
  },
  {
    id: "bank_transfer",
    label: "Przelew tradycyjny",
    description: "Płatność zwykłym przelewem na rachunek bankowy",
  },
];

export default function Payments() {
  const [selectedMethod, setSelectedMethod] = useState(
    PAYMENT_METHODS[0]?.id || "",
  );

  return (
    <div className="payments">
      <div className="frame hover-effect-card u-margin-bottom-medium">
        <div className="payments__content">
          <div className="payments__list">
            {PAYMENT_METHODS.map((method) => (
              <label key={method.id} className="payments__item">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={() => setSelectedMethod(method.id)}
                  className="payments__radio-input"
                />
                <span className="payments__radio" aria-hidden="true" />
                <span className="payments__text">
                  <span className="payments__name">{method.label}</span>
                  {method.description && (
                    <span className="payments__description">
                      {method.description}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
