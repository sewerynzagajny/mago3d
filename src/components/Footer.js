import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ReactComponent as CallIcon } from "../svg/call-outline.svg";
import { ReactComponent as MailIcon } from "../svg/mail-outline.svg";
import { ReactComponent as FacebookIcon } from "../svg/logo-facebook.svg";
import { ReactComponent as InstagramIcon } from "../svg/logo-instagram.svg";
import { ReactComponent as TiktokIcon } from "../svg/logo-tiktok.svg";
import { ReactComponent as YoutubeIcon } from "../svg/logo-youtube.svg";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer__container grid-4-col">
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
            <a
              href="tel:882115883"
              className="footer__information--icon-and-link"
            >
              {" "}
              <CallIcon className="icon-contact" />
              <span>882 115 883 </span>
            </a>
          </p>
          <p className="footer__information--text">
            <a
              href="mailto:info@mago3d.pl"
              className="footer__information--icon-and-link"
            >
              <MailIcon className="icon-contact" />
              <span>info@mago3d.pl</span>
            </a>
          </p>
        </div>

        <div className="footer__information">
          <p className="footer__information--heading">Obserwuj i kupuj:</p>
          <ul className="footer__information__follow-and-shop">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61551364580021"
                className="footer__information__follow-and-shop--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="icon-follow-and-shop" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mago3d.pl/"
                className="footer__information__follow-and-shop--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="icon-follow-and-shop" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@mago3d.pl"
                className="footer__information__follow-and-shop--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiktokIcon className="icon-follow-and-shop" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@MaGo3dpl"
                className="footer__information__follow-and-shop--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="icon-follow-and-shop" />
              </a>
            </li>

            <li>
              <a
                href="https://allegro.pl/uzytkownik/MaGo3d"
                className="footer__information__follow-and-shop--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AllegroIcon className="icon-follow-and-shop" />
              </a>
            </li>

            <li>
              <a
                href="https://www.etsy.com/pl/shop/MaGo3dPL"
                className="footer__information__follow-and-shop--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EtsyIcon className="icon-follow-and-shop" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__divider-line"></div>
        <div className="footer__logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="footer__logo-container--logo"
            />
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
