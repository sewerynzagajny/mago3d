import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Ustaw wysokość nawigacji
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    function handleScroll() {
      const navHeight = document.querySelector(".nav").offsetHeight;
      if (window.scrollY > navHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navHeight]);

  return (
    <>
      {/* Placeholder zajmujący miejsce w układzie */}
      {isSticky && <div style={{ height: `${navHeight}px` }}></div>}
      <nav ref={navRef} className={`nav ${isSticky ? "nav__sticky" : ""}`}>
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav__links">
          <li key="home">
            <Link to="/">Główna</Link>
          </li>
          <li key="about">
            <Link to="/#o_nas">O nas</Link>
          </li>
          <li key="history">
            <Link to="/historia">Historia</Link>
          </li>
          <li key="assortment">
            <Link to="/#asortyment">Asortyment</Link>
          </li>
          <li key="materials">
            <Link to="/#materialy">Materiały</Link>
          </li>
          <li key="contact">
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
