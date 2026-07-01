import Btn from "../Btn";
import { useNavigate } from "react-router-dom";

export default function SummaryShopping({ totalPriceFormatted }) {
  const navigate = useNavigate();

  function handleOrder() {
    return navigate("/panel/zamowienie");
  }

  return (
    <div className="shopping-cart__summary">
      <div className="frame hover-effect-card" style={{ width: "100%" }}>
        <div className="shopping-cart__summary__content">
          <h4 className="heading-fourth-summary-cart">Podsumowanie</h4>
          <div className="shopping-cart__summary__content__total-price">
            <p className="shopping-cart__summary__content__total-price_text">
              Suma
            </p>
            <div className="shopping-cart__summary__content__total-price_sum">
              <div className="shopping-cart__summary__content__total-price_sum--value">
                {" "}
                {totalPriceFormatted}
              </div>
              <p className="shopping-cart__summary__content__total-price_sum--text">
                {" "}
                Zawiera VAT
              </p>
            </div>
          </div>
          <Btn
            className=" btn shopping-cart__summary__content_btn"
            onClick={handleOrder}
          >
            Zamów
          </Btn>
        </div>
      </div>
    </div>
  );
}
