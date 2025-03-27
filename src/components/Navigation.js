import React from "react";
import logo from "../assets/logo.png";

export default function Navigation(addClassName = "") {
  return (
    <nav className={`nav ${addClassName}`}>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav__links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#asortyment">Asortyment</a>
        </li>
        <li>
          <a href="#materialy">Materiały</a>
        </li>
        <li>
          <a href="#o_nas">O nas</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}
