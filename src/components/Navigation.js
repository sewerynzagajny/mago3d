import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ReactComponent as ShopIcon } from "../svg//shopping-bag.svg";
import { ReactComponent as LoginIcon } from "../svg//login.svg";
import { ReactComponent as LogoutIcon } from "../svg//logout.svg";
import PopupLogin from "./PopupLogin";
import { useAuth } from "../context/AuthContext";

export default function Navigation() {
  const { isLogin, setIsLogin } = useAuth();
  const [hasBackground, setHasBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [PopupLoginVisible, setPopupLoginVisible] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight); // Pobierz wysokość nawigacji
    }

    function handleScroll() {
      const triggerHeight = 80; // Wysokość przewinięcia, po której zmienia się kolor tła
      if (window.scrollY > triggerHeight) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleLogin() {
    setPopupLoginVisible(true);
  }

  function handleLogout() {
    setIsLogin(false);
  }

  return (
    <>
      {PopupLoginVisible && (
        <PopupLogin
          setPopupLoginVisible={setPopupLoginVisible}
        />
      )}
      {/* Placeholder zajmujący miejsce w układzie */}
      <div style={{ height: `${navHeight}px` }}></div>
      <nav
        ref={navRef}
        className={`nav ${hasBackground ? "nav--with-background" : ""}`}
      >
        <Link to="/" onClick={closeMenu}>
          <div className="nav__btn__logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="nav__btn">
          <div
            className={`nav__btn__overlay ${menuOpen ? "nav__btn__overlay--active" : ""}`}
          >
            <ul
              className={`nav__btn__links ${menuOpen ? "nav__btn__links--active" : ""}`}
            >
              <li key="home">
                <Link to="/" onClick={closeMenu}>
                  Główna
                </Link>
              </li>

              <li key="history">
                <Link to="/historia" onClick={closeMenu}>
                  Historia
                </Link>
              </li>
              <li key="assortment">
                <Link to="/asortyment" onClick={closeMenu}>
                  Asortyment
                </Link>
              </li>
              <li key="materials">
                <Link to="/materialy" onClick={closeMenu}>
                  Materiały
                </Link>
              </li>
              <li key="contact">
                <Link to="/kontakt" onClick={closeMenu}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="nav__btn__icons">
              <li key="shop" className="nav__btn__icons-svg">
                <ShopIcon className="icon-nav-svg" />
              </li>
              <li key="login-or-logout" className="nav__btn__icons-svg">
                {isLogin ? (
                  <LogoutIcon className="icon-nav-svg" onClick={handleLogout} />
                ) : (
                  <LoginIcon className="icon-nav-svg" onClick={handleLogin} />
                )}
              </li>
            </ul>
          </div>
          <button className="nav__btn__toggle" onClick={toggleMenu}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
}
