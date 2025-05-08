import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [hasBackground, setHasBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

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

  return (
    <>
      {/* Placeholder zajmujący miejsce w układzie */}
      <div style={{ height: `${navHeight}px` }}></div>
      <nav
        ref={navRef}
        className={`nav ${hasBackground ? "nav--with-background" : ""}`}
      >
        <Link to="/" onClick={closeMenu}>
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <button className="nav__toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

        <div
          className={`nav__overlay ${menuOpen ? "nav__overlay--active" : ""}`}
        >
          <ul className={`nav__links ${menuOpen ? "nav__links--active" : ""}`}>
            <li key="home">
              <Link to="/" onClick={closeMenu}>
                Główna
              </Link>
            </li>
            <li key="about">
              <a href="#o_nas" onClick={closeMenu}>
                O nas
              </a>
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
              {/* <a
                href="https://allegro.pl/uzytkownik/MaGo3d"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Asortyment
              </a> */}
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
      </nav>
    </>
  );
}
