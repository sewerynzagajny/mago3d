import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBaner from "../../components/CookieBanner";
import Carousel from "../../components/Carousel";
import Product from "../../components/Product";
import { products } from "../../data/products";

const items = [
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/1.jpg"),
    alt: "Podstawka pod Thermomix TSv3",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/2.jpg"),
    alt: "Podstawka pod Thermomix TSv3",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/3.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/4.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },

  {
    type: "image",
    src: require("../../assets/assortment/TSv3/6.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
  {
    type: "image",
    src: require("../../assets/assortment/TSv3/7.jpg"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },

  {
    type: "video",
    src: require("../../assets/assortment/TSv3/8.mp4"),
    alt: "Podstawka pod Thermomix TSv3 ",
  },
];

export default function Tsv3() {
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);

  return (
    <>
      <section className="details">
        <Navigation />
        <div className="details__container">
          <h2 className="heading-secondary">Szczegóły</h2>
          <h3 className="heading-tertiary">{products[1].name} </h3>
          <div className="details__container__content ">
            {(onMenuVisible || orderModalProductId !== null) && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 100,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.4)",

                  // cursor: "pointer",
                }}
                onClick={() => setOrderModalProductId(null)}
              />
            )}
            <Carousel items={items} />
            <div className="details__sticky-product">
              <Product
                key={1}
                product={products[1]}
                className="assortment__container__products__item"
                onMenuChange={setOnMenuVisible}
                inDetails={true}
                setOrderModalVisible={(visible) =>
                  setOrderModalProductId(visible ? products[1].id : null)
                }
                orderModalVisible={orderModalProductId === products[1].id}
                style={
                  onMenuVisible || orderModalProductId !== null
                    ? { opacity: "0.8" }
                    : {}
                }
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBaner />
    </>
  );
}
