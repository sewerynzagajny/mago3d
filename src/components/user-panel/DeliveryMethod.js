export default function DeliveryMethod({
  deliveryMethod,
  selectedMethod,
  setSelectedMethod,
}) {
  return (
    <div className="delivery-method">
      <div className="frame hover-effect-card u-margin-bottom-medium">
        <div className="delivery-method__content">
          <p className="delivery-method__text">Polska</p>
          <p className="delivery-method__text">Wysyłka w 48 godzin</p>
          <div className="delivery-method__list">
            {deliveryMethod.map((method) => (
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
                  {method.priceLabelStringPl}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
