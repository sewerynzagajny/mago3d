import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navigation(addClassName = "") {
  return (
    <nav className={`nav ${addClassName}`}>
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
          <Link to="/#kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
