import { useState, useEffect } from "react";
import Btn from "./Btn";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(null); // początkowo nie wiadomo

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    const cookieRejected = sessionStorage.getItem("cookieRejected");

    if (!cookieConsent && !cookieRejected) {
      setIsVisible(true); // pokaż baner
    } else {
      setIsVisible(false); // nie pokazuj
    }
  }, []);

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
    <div className="cookie-banner">
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
