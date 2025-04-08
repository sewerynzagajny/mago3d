import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer grid-4-col">
      {/* <div className="footer__logo">
          <img src={logo} alt="Logo" />
        </div> */}
      <div className="footer__information">
        <p className="footer__information--heading">Dane:</p>
        <p className="footer__information--text">
          <span className="company-name">MaGo3d</span> Mateusz Nowosielecki
        </p>
        <p className="footer__information--text">NIP: 8512910330</p>
        <p className="footer__information--text">REGON: 360483465</p>
      </div>

      <div className="footer__information">
        <p className="footer__information--heading">Adres:</p>
        <p className="footer__information--text">ul. Grzymińska 3/15</p>
        <p className="footer__information--text">71-711 Szczecin </p>
        <p className="footer__information--text">Polska</p>
      </div>

      <div className="footer__information">
        <p className="footer__information--heading">Kontakt:</p>
        <p className="footer__information--text">
          <a href="tel:882115883">tel: 882 115 883 </a>
        </p>
        <p className="footer__information--text">
          <a href="mailto:info@mago3d.pl">info@mago3d.pl</a>
        </p>
      </div>

      <div className="footer__information">
        <p className="footer__information--heading">Obserwuj i kupuj:</p>
        <ul className="footer__information__social-media">
          <li className="footer__information__social-media--link">
            <a
              href="https://www.instagram.com/mago3d.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="footer__information__social-media--link">
            <a
              href="https://www.facebook.com/mago3dpl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__divider-line"></div>
      <div className="footer__logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="footer__logo-container--logo" />
        </Link>
        <p className="footer__logo-container--copyright">
          Copyrigt &copy;
          <span>{new Date().getFullYear()}</span> by Seweryn Zagajny. <br />
          All rights reserved.{" "}
          <Link to="/" className="regulamin">
            Polityka prywatności
          </Link>
        </p>
      </div>
    </footer>
  );
}
