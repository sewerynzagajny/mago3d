import { useState } from "react";
import Product from "../components/Product";
import { products } from "../data/products";

export default function ShoppingCart() {
  const product = products.find((p) => p.id === 12);
  const product2 = products.find((p) => p.id === 2);
  const product3 = products.find((p) => p.id === 4);
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);

  return (
    <div>
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
        key={product3.id}
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
    </div>
  );
}
