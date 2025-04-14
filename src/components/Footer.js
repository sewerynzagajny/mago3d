import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { ReactComponent as FacebookIcon } from "../svg/logo-facebook.svg";
import { ReactComponent as InstagramIcon } from "../svg/logo-instagram.svg";
import { ReactComponent as TiktokIcon } from "../svg/logo-tiktok.svg";
import { ReactComponent as YoutubeIcon } from "../svg/logo-youtube.svg";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";
import Information from "./Information";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer__container grid-4-col">
        <Information className="footer__information" />

        <div className="footer__information">
          <p className="footer__information--heading">Obserwuj i kupuj:</p>
          <ul className="footer__information__follow-and-shop">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61551364580021"
                className="footer__information__follow-and-shop--link--facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź nas na Facebooku"
              >
                <FacebookIcon className="icon-follow-and-shop" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mago3d.pl/"
                className="footer__information__follow-and-shop--link--instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź nas na Instagramie"
              >
                <InstagramIcon className="icon-follow-and-shop" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@mago3d.pl"
                className="footer__information__follow-and-shop--link--tiktok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź nas na TikToku"
              >
                <TiktokIcon className="icon-follow-and-shop" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@MaGo3dpl"
                className="footer__information__follow-and-shop--link--youtube"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź nas na YouTube"
              >
                <YoutubeIcon className="icon-follow-and-shop" />
              </a>
            </li>

            <li>
              <a
                href="https://allegro.pl/uzytkownik/MaGo3d"
                className="footer__information__follow-and-shop--link--allegro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kupuj na Allegro"
              >
                <AllegroIcon className="icon-follow-and-shop" />
              </a>
            </li>

            <li>
              <a
                href="https://www.etsy.com/pl/shop/MaGo3dPL"
                className="footer__information__follow-and-shop--link---etsy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kupuj na Etsy"
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
