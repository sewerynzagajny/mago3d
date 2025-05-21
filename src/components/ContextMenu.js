import { useEffect, useRef } from "react";

export default function ContextMenu({ visible, position, onClose, children }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    function handleEscKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      ref={menuRef}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        zIndex: 1000,
        transform: "translate(-44.8%, -50%)",
      }}
    >
      {children}
    </div>
  );
}
