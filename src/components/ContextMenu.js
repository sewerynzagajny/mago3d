import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ContextMenu({
  visible,
  anchorRect,
  onClose,
  children,
}) {
  const menuRef = useRef(null);
  const [menuTop, setMenuTop] = useState(0);

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

  // if (!visible || !anchorRect) return null;

  useEffect(() => {
    if (!visible || !anchorRect) return;

    function updateMenuTop() {
      const menuHeight = menuRef.current?.offsetHeight || 0;
      // Ustawiamy top tak, by dół menu był przy dolnej krawędzi kafelka (plus ewentualny margines, np. -8)
      setMenuTop(
        anchorRect.top +
          window.scrollY +
          anchorRect.height -
          anchorRect.height / 7 -
          menuHeight
      );
    }

    updateMenuTop();
    window.addEventListener("resize", updateMenuTop);
    window.addEventListener("scroll", updateMenuTop);

    return () => {
      window.removeEventListener("resize", updateMenuTop);
      window.removeEventListener("scroll", updateMenuTop);
    };
  }, [visible, anchorRect, children]);

  if (!visible || !anchorRect) return null;

  const menu = (
    <div
      ref={menuRef}
      style={{
        position: "absolute",
        top: menuTop,
        left: anchorRect.left + window.scrollX + anchorRect.width / 2,
        // top: position.y
        // left: position.x,

        zIndex: 100,
        transform: "translateX(-50%)",
        // transition: "top 0.1s",
      }}
    >
      {children}
    </div>
  );

  // return (
  //   <div
  //     ref={menuRef}
  //     style={{
  //       position: "absolute",
  //       top: position.y,
  //       left: position.x,
  //       zIndex: 1000,
  //       transform: "translate(-44.8%, -50%)",
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
  return createPortal(menu, document.body);
}
