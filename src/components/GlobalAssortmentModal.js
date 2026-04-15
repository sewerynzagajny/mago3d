import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AssortmentModal from "./AssortmentModal";
import ProductList from "./ProductList";
import { ReactComponent as CatalogIcon } from "../svg//catalog.svg";
import { useNavigate } from "react-router-dom";

export default function GlobalAssortmentModal() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [onMenuVisible, setOnMenuVisible] = useState(false);
  const [orderModalProductId, setOrderModalProductId] = useState(null);
  const location = useLocation();
  const isAssortmentPage = location.pathname === "/asortyment";
  const isDetailsPage = location.pathname.startsWith("/szczegoly/");
  // const isMobile = window.innerWidth <= 600;
  const isHomePage = location.pathname === "/";
  // domyślnie widoczny poza główną
  const [show, setShow] = useState(!isHomePage);

  useEffect(() => {
    if (isHomePage) {
      setShow(false);
      const timeout = setTimeout(() => setShow(true), 1800); // opóźnienie na głównej
      return () => clearTimeout(timeout);
    } else {
      setShow(true); // na innych stronach bez opóźnienia
    }
  }, [isHomePage]);

  // if (isAssortmentPage || isDetailsPage || !show) return null;
  const shouldHide = isAssortmentPage || isDetailsPage || !show;
  // useEffect(() => {
  //   if (shouldHide) setVisible(false);
  // }, [shouldHide]);
  return (
    <div className="global-assortment-modal">
      <div
        className={`modal-overlay${visible && !shouldHide ? "" : " is-hidden"}`}
        // onClick={() => setVisible(false)}
      />

      <button
        className={`assortment-modal-btn${
          !show || shouldHide
            ? " assortment-modal-btn--hidden"
            : visible
              ? " assortment-modal-btn--open"
              : ""
        }`}
        onClick={() => {
          if (window.innerWidth <= 576) {
            navigate("/asortyment");
          } else {
            setVisible((prev) => !prev);
          }
        }}
        aria-label="Pokaż asortyment"
      >
        <span className={`icon-catalog${visible ? " icon-hidden" : ""}`}>
          <CatalogIcon className="icon-catalog-svg" />
        </span>
        <span className={`icon-close${visible ? " icon-visible" : ""}`}>
          <div className="icon-close-dimations">&times;</div>
        </span>
      </button>
      <AssortmentModal
        visible={visible && !shouldHide}
        lockScroll={onMenuVisible || orderModalProductId}
      >
        <ProductList
          onShow={show}
          onMenuVisible={onMenuVisible}
          setOnMenuVisible={setOnMenuVisible}
          orderModalProductId={orderModalProductId}
          setOrderModalProductId={setOrderModalProductId}
        />
      </AssortmentModal>
    </div>
  );
}
