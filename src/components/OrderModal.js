import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import ColorChooser from "./ColorChooser";
import ShortenTitle from "./ShortenTitle";
import Btn from "./Btn";
import Spinner from "./Spinner";

export default function OrderModal({
  visible,
  onClose,
  product,
  selectedColor,
  onColorChange,
  price,
  anchorRect, // przekazuj rect kafelka, jeśli chcesz pozycjonować modal względem kafelka
  modalRef, // przekazuj ref, jeśli chcesz mieć dostęp do modala
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [heightOffset, setHeightOffset] = useState("3rem");
  const [loading, setIsLoading] = useState(false);
  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

  useEffect(() => {
    if (!visible) {
      setName("");
      setEmail("");
      setQuantity(1);
      // Jeśli chcesz resetować kolor:
      // onColorChange("black");
    }
  }, [visible]);

  useEffect(() => {
    function handleResize() {
      setHeightOffset(window.innerWidth <= 640 ? "2.5rem" : "3rem");
    }
    handleResize(); // ustaw na starcie
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!visible) return null;

  const totalPrice = (
    parseFloat(price.replace(",", ".")) * quantity
  ).toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Sprawdź honeypot field
    if (honeypotRef.current && honeypotRef.current.value) {
      console.warn("Bot wykryty! Formularz został zablokowany.");
      return;
    }

    setIsLoading(true); // Ustaw stan ładowania na true
    // Tutaj możesz dodać logikę wysyłania zamówienia
    const message = `Składam zamówienie: ${quantity}x ${product.name} (${selectedColor}), cena: ${totalPrice}`;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("type", "order");

    const backendUrl =
      window.location.hostname === "druki3d.com"
        ? process.env.REACT_APP_BACKEND_URL_DRUKI
        : process.env.REACT_APP_BACKEND_URL_MAGO;

    axios
      .post(`${backendUrl}/send-email.php`, formData, formData, {
        // .post("http://localhost:5000/send-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((_response) => {
        alert(
          `Zamówienie złożone: ${quantity}x ${product.name} (${selectedColor}), cena: ${totalPrice}.`
        );
        setName("");
        setEmail("");
        setQuantity(1);
        setIsLoading(false);
        onClose(); // Ustaw isLoading na false po sukcesie
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania wiadomości:", error);
        alert("Wystąpił błąd podczas wysyłania wiadomości.");
        setIsLoading(false);
        onClose(); // Ustaw isLoading na false po błędzie
      });

    // onClose();
  }

  // Wylicz pozycję modala względem anchorRect (kafelka)
  const modalStyle = anchorRect
    ? {
        position: "absolute",
        top: anchorRect.top + window.scrollY,
        left: anchorRect.left + window.scrollX,
        width: anchorRect.width,
        // height: anchorRect.height,
        zIndex: 101,
      }
    : {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 101,
      };

  // Overlay na całą stronę
  const overlay = <div className="order-modal__overlay" />;

  // Modal
  const modal = (
    <div ref={modalRef} style={modalStyle} className=" order-modal frame">
      <button
        className="order-modal__close"
        onClick={onClose}
        aria-label="Zamknij"
      >
        ×
      </button>
      <div
        className="order-modal__content"
        onClick={(e) => e.stopPropagation()}
        style={
          anchorRect
            ? { height: `calc(${anchorRect.height}px - ${heightOffset})` }
            : undefined
        }
      >
        <form onSubmit={handleSubmit} className="order-modal__content__form">
          <div className="order-modal__content__form__header">
            <h4 className="heading-fourth-order">Zamówienie</h4>
            <div className="order-modal__content__form__header--form-group">
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                ref={honeypotRef}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />
              <input
                className={`${loading ? "loading" : ""}`}
                type="text"
                id="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Imię i nazwisko"
                required
                disabled={loading}
              />
              <label htmlFor="name">Imię i nazwisko</label>
            </div>
            <div className="order-modal__content__form__header--form-group">
              <input
                className={`${loading ? "loading" : ""}`}
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adres e-mail"
                required
                disabled={loading}
              />
              <label htmlFor="email">Adres e-mail</label>
            </div>
          </div>

          <div className="order-modal__content__form--text-product">
            <ShortenTitle wordsNumber={product.maxWords}>
              {product.name}
            </ShortenTitle>
          </div>
          <div className="order-modal__content__form--text-price ">
            {totalPrice}
          </div>

          <ColorChooser
            colors={product.colors}
            selectedColor={selectedColor}
            onColorChange={onColorChange}
            disabled={loading}
            className={`${loading ? "loading" : ""}`}
          />
          <div className="order-modal__content__form--quantity">
            <div className="order-modal__content__form--quantity--btns-q">
              <span>Ilość: </span>
              {/* <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ marginLeft: 8 }}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select> */}
              <div className="order-modal__content__form--quantity--btns-q">
                {" "}
                <button
                  className={`order-modal__content__form--quantity--btns-q--btn-quantity ${
                    loading ? "loading" : ""
                  }`}
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  // style={{ marginLeft: 6 }}
                  disabled={loading}
                >
                  -
                </button>
                <span style={{ width: "1.2rem" }}>{quantity}</span>
                <button
                  // style={{ marginLeft: 6 }}
                  className={`order-modal__content__form--quantity--btns-q--btn-quantity ${
                    loading ? "loading" : ""
                  }`}
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                  disabled={loading}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <Btn
            className={`btn order-modal__content__form--btn  ${
              loading ? "loading" : ""
            }`}
            // onClick={handleSubmit}
            type="submit"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Zamów"}
          </Btn>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {createPortal(overlay, document.body)}
      {createPortal(modal, document.body)}
    </>
  );
}
