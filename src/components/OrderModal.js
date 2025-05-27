import { useState } from "react";
import { createPortal } from "react-dom";

export default function OrderModal({
  visible,
  onClose,
  product,
  selectedColor,
  colors,
  onColorChange,
  price,
  anchorRect, // przekazuj rect kafelka, jeśli chcesz pozycjonować modal względem kafelka
}) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!visible) return null;

  const totalPrice = (parseFloat(price) * quantity).toFixed(2);

  // Wylicz pozycję modala względem anchorRect (kafelka)
  const modalStyle = anchorRect
    ? {
        position: "absolute",
        top: anchorRect.top + window.scrollY,
        left: anchorRect.left + window.scrollX,
        zIndex: 10001,
      }
    : {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10001,
      };

  // Overlay na całą stronę
  const overlay = (
    <div
      className="order-modal__overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        zIndex: 10000,
      }}
      onClick={onClose}
    />
  );

  // Modal
  const modal = (
    <div style={modalStyle}>
      <div
        className="order-modal__content"
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 12,
          minWidth: 320,
          maxWidth: 400,
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Zamów produkt</h2>
        <div style={{ marginBottom: 12 }}>
          <label>
            Imię:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Nazwisko:
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <strong>Produkt:</strong> {product.name}
        </div>
        <div style={{ marginBottom: 12 }}>
          <strong>Cena za sztukę:</strong> {price} zł
        </div>
        <div style={{ marginBottom: 12 }}>
          <strong>Kolor:</strong>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            {colors.map((color) => (
              <button
                key={color.nameEn}
                onClick={() => onColorChange(color.nameEn)}
                style={{
                  background: color.nameEn,
                  border:
                    selectedColor === color.nameEn
                      ? "2px solid #333"
                      : "1px solid #ccc",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                title={color.name}
              >
                {selectedColor === color.nameEn ? "✓" : ""}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Ilość:
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ marginLeft: 8 }}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <strong>Łączna cena:</strong> {totalPrice} zł
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button className="btn" onClick={onClose}>
            Anuluj
          </button>
          <button
            className="btn"
            style={{ background: "#1a8d1a", color: "#fff" }}
            onClick={() => {
              alert(
                `Zamówienie wysłane!\n${name} ${surname}, ${quantity}x ${product.name} (${selectedColor})`
              );
              onClose();
            }}
          >
            Zamawiam
          </button>
        </div>
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
