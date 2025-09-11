import { useRef } from "react";
import useScrollLock from "../hooks/useScrollLock";

export default function AssortmentModal({ visible, lockScroll, children }) {
  const modalRef = useRef(null);
  useScrollLock(lockScroll, modalRef);

  const isMobile = window.innerWidth <= 600;

  return (
    <div
      ref={modalRef}
      className={`assortment-modal${
        visible ? " assortment-modal--visible" : ""
      }${isMobile ? " assortment-modal--mobile" : ""}`}
    >
      {children}
    </div>
  );
  // <div

  //   className="assortment-modal"
  //   style={{
  //     position: "fixed",
  //     // padding: "2rem 4rem",
  //     // top: "10.6rem",
  //     padding: "0.5rem 4rem",
  //     top: "12.2rem",
  //     right: visible ? 0 : isMobile ? "-100vw" : "-50vw",
  //     width: isMobile ? "100vw" : "30vw",
  //     maxWidth: isMobile ? "100vw" : "600px",
  //     height: "86vh",
  //     background: "transparent",
  //     zIndex: 100,
  //     boxShadow: "-2px 0 16px rgba(0,0,0,0.15)",
  //     transition: "right 0.4s cubic-bezier(.77,0,.18,1)",
  //     overflowY: "auto",
  //   }}
  // >
  //   {children}
  // </div>
  // );
}
