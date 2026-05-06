import { useState } from "react";
import Product from "../Product";
import { products } from "../../data/products";
import Btn from "../Btn";

export default function ShoppingCart() {
  const product = products.find((p) => p.id === 12);
  const product2 = products.find((p) => p.id === 2);
  const product3 = products.find((p) => p.id === 4);
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);

  return (
    <div id="koszyk" className="shopping-cart grid-2-col_shopping-cart ">
      <div className="shopping-cart__list">
        <Product
          key={product.id}
          product={product}
          className="horizontal-mobile  details__container__products__item"
          onMenuChange={setOnMenuVisible}
          inDetails={true}
          setOrderModalVisible={(visible) =>
            setOrderModalProductId(visible ? product.id : null)
          }
          orderModalVisible={orderModalProductId === product.id}
          style={
            onMenuVisible || orderModalProductId !== null
              ? { opacity: "0.8" }
              : {}
          }
        />
        <Product
          key={product2.id}
          product={product2}
          className="horizontal-mobile  details__container__products__item"
          onMenuChange={setOnMenuVisible}
          inDetails={true}
          setOrderModalVisible={(visible) =>
            setOrderModalProductId(visible ? product2.id : null)
          }
          orderModalVisible={orderModalProductId === product2.id}
          style={
            onMenuVisible || orderModalProductId !== null
              ? { opacity: "0.8" }
              : {}
          }
        />
        <Product
          key={4}
          product={product3}
          className="horizontal-mobile  details__container__products__item"
          onMenuChange={setOnMenuVisible}
          inDetails={true}
          setOrderModalVisible={(visible) =>
            setOrderModalProductId(visible ? product3.id : null)
          }
          orderModalVisible={orderModalProductId === product3.id}
          style={
            onMenuVisible || orderModalProductId !== null
              ? { opacity: "0.8" }
              : {}
          }
        />
        <Product
          key={5}
          product={product2}
          className="horizontal-mobile  details__container__products__item"
          onMenuChange={setOnMenuVisible}
          inDetails={true}
          setOrderModalVisible={(visible) =>
            setOrderModalProductId(visible ? product2.id : null)
          }
          orderModalVisible={orderModalProductId === product2.id}
          style={
            onMenuVisible || orderModalProductId !== null
              ? { opacity: "0.8" }
              : {}
          }
        />
        <Product
          key={6}
          product={product2}
          className="horizontal-mobile  details__container__products__item"
          onMenuChange={setOnMenuVisible}
          inDetails={true}
          setOrderModalVisible={(visible) =>
            setOrderModalProductId(visible ? product2.id : null)
          }
          orderModalVisible={orderModalProductId === product2.id}
          style={
            onMenuVisible || orderModalProductId !== null
              ? { opacity: "0.8" }
              : {}
          }
        />
        <Product
          key={7}
          product={product2}
          className="horizontal-mobile  details__container__products__item"
          onMenuChange={setOnMenuVisible}
          inDetails={true}
          setOrderModalVisible={(visible) =>
            setOrderModalProductId(visible ? product2.id : null)
          }
          orderModalVisible={orderModalProductId === product2.id}
          style={
            onMenuVisible || orderModalProductId !== null
              ? { opacity: "0.8" }
              : {}
          }
        />
      </div>

      <div className="shopping-cart__summary">
        <div className="frame hover-effect-card" style={{ width: "100%" }}>
          <div className="shopping-cart__summary__content">
            <h4 className="heading-fourth-summary">Podsumowanie</h4>
            <div className="shopping-cart__summary__content__total-price">
              <p className="shopping-cart__summary__content__total-price_text">
                Suma
              </p>
              <div className="shopping-cart__summary__content__total-price_sum">
                <div className="shopping-cart__summary__content__total-price_sum--value">
                  {" "}
                  1245,89 zł
                </div>
                <p className="shopping-cart__summary__content__total-price_sum--text">
                  {" "}
                  Zawiera VAT
                </p>
              </div>
            </div>
            <Btn className=" btn shopping-cart__summary__content_btn">
              Zamów
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
