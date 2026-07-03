import Btn from "../Btn";
import { useNavigate } from "react-router-dom";

export default function OrderSummary({
  deliveryPriceFormatted,
  deliveryMethodLabel,
  productsTotalPriceFormatted,
  orderTotalPriceFormatted,
}) {
  const navigate = useNavigate();

  function handleBuy() {
    return navigate("/panel/podsumowanie");
  }

  return (
    <div className="order-summary">
      <div
        className="frame hover-effect-card order-summary__frame"
        style={{ width: "100%" }}
      >
        <div className="order-summary__content">
          <h4 className="heading-fourth-summary-cart order-summary__title">
            Podsumowanie
          </h4>

          <div className="order-summary__rows">
            <div className="order-summary__row">
              <p className="order-summary__label order-summary__label--accent">
                Produkty
              </p>
              <p className="order-summary__value">
                {productsTotalPriceFormatted}
              </p>
            </div>

            <div className="order-summary__row order-summary__row--delivery">
              <div className="order-summary__delivery-text">
                <p className="order-summary__label order-summary__label--accent">
                  Dostawa
                </p>
                <p className="order-summary__subline">{deliveryMethodLabel}</p>
              </div>
              <p className="order-summary__value">{deliveryPriceFormatted}</p>
            </div>

            <div className="order-summary__row order-summary__row--total">
              <p className="order-summary__label order-summary__label--total">
                Wartość
              </p>
              <div className="order-summary__total-box">
                <p className="order-summary__value order-summary__value--total">
                  {orderTotalPriceFormatted}
                </p>
                <p className="order-summary__vat">Zawiera VAT</p>
              </div>
            </div>
          </div>

          <Btn className=" btn order-summary__btn" onClick={handleBuy}>
            kup
          </Btn>
        </div>
      </div>
    </div>
  );
}
