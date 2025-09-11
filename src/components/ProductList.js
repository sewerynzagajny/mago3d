import Product from "./Product";
import { products } from "../data/products";

export default function ProductList({
  onShow,
  onMenuVisible,
  setOnMenuVisible,
  orderModalProductId,
  setOrderModalProductId,
}) {
  return (
    <div className="assortment__container__products grid-3-col_assortment">
      {/* Nakładka blokująca interakcje */}
      {(onMenuVisible || orderModalProductId !== null) && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255,255,255,0)",
          }}
          onClick={() => setOrderModalProductId(null)}
        />
      )}
      {products.map((product, i) => (
        <Product
          key={i}
          product={product}
          className="assortment__container__products__item"
          onMenuChange={setOnMenuVisible}
          setOrderModalVisible={(visible) =>
            setOrderModalProductId(visible ? product.id : null)
          }
          orderModalVisible={orderModalProductId === product.id}
          style={
            onMenuVisible || orderModalProductId !== null
              ? { opacity: onShow ? "1" : "0.4" }
              : {}
          }
        />
      ))}
    </div>
  );
}
