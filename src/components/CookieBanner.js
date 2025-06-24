import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";

export default function CookieBanner({ onVisibilityChange, onHeightChange }) {
  const [isVisible, setIsVisible] = useState(null); // początkowo nie wiadomo
  const bannerRef = useRef(null);

  useEffect(() => {
    if (onVisibilityChange) onVisibilityChange(isVisible);
    if (onHeightChange && isVisible && bannerRef.current) {
      onHeightChange(bannerRef.current.offsetHeight);
    }
    if (onHeightChange && !isVisible) {
      onHeightChange(0);
    }
  }, [isVisible, onVisibilityChange, onHeightChange]);

  // Aktualizuj wysokość przy zmianie rozmiaru okna
  useEffect(() => {
    function handleResize() {
      if (onHeightChange && isVisible && bannerRef.current) {
        onHeightChange(bannerRef.current.offsetHeight);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible, onHeightChange]);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    const cookieRejected = sessionStorage.getItem("cookieRejected");

    if (!cookieConsent && !cookieRejected) {
      setIsVisible(true); // pokaż baner
    } else {
      setIsVisible(false); // nie pokazuj
    }
  }, []);

  useEffect(() => {
    if (onVisibilityChange) onVisibilityChange(isVisible);
  }, [isVisible, onVisibilityChange]);

  function handleAccept() {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  }

  function handleReject() {
    sessionStorage.setItem("cookieRejected", "true");
    setIsVisible(false);
  }

  // NIE renderuj niczego dopóki nie znamy isVisible
  if (isVisible === null || !isVisible) return null;

  return (
    <div className="cookie-banner" ref={bannerRef}>
      <p className="cookie-banner__text">
        Ta strona używa plików cookie, aby zapewnić najlepsze wrażenia.{" "}
        <a className="cookie-banner__text--link" href="/privacy">
          Polityka Prywatności
        </a>
      </p>
      <div className="cookie-banner__btn"></div>
      <Btn onClick={handleAccept} className=" btn cookie-banner__btn--accept">
        Akceptuję
      </Btn>
      <button onClick={handleReject} className="cookie-banner__btn--refuse">
        ✖
      </button>
    </div>
  );
}
