import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import CompanyInfo from "./CompanyInfo";
import FollowAndShop from "./FollowAndShop";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer__container grid-4-col__footer">
        <CompanyInfo className="footer__company-info" />

        <div className="footer__company-info">
          <p className="footer__company-info--heading">Obserwuj i kupuj:</p>
          <FollowAndShop className="footer__company-info" />
        </div>
        <div className="footer__divider-line"></div>
        <div className="footer__logo-container">
          <Link to="/">
            <div style={{ display: "inline-block" }}>
              <img
                src={logo}
                alt="Logo"
                className="footer__logo-container--logo"
              />
            </div>
          </Link>
          <p className="footer__logo-container--copyright">
            Copyright &copy; <span>{new Date().getFullYear()}</span> by Seweryn
            Zagajny. <br />
            All rights reserved.{" "}
            <Link to="/" className="footer__logo-container--policy-link">
              Polityka prywatności
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
