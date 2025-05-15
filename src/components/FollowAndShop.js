import { ReactComponent as FacebookIcon } from "../svg/logo-facebook.svg";
import { ReactComponent as InstagramIcon } from "../svg/logo-instagram.svg";
import { ReactComponent as TiktokIcon } from "../svg/logo-tiktok.svg";
import { ReactComponent as YoutubeIcon } from "../svg/logo-youtube.svg";
import { ReactComponent as AllegroIcon } from "../svg/full-shoping-cart-svgrepo-com.svg";
import { ReactComponent as EtsyIcon } from "../svg/etsy-logo-svgrepo-com.svg";

export default function FollowAndShop({ className = "" }) {
  return (
    <ul className={`${className}__follow-and-shop`}>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=61551364580021"
          className={`${className}__follow-and-shop--link--facebook`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Odwiedź nas na Facebooku"
        >
          <FacebookIcon className="icon-follow-and-shop" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ma.go3d"
          className={`${className}__follow-and-shop--link--instagram`}
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
          className={`${className}__follow-and-shop--link--tiktok`}
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
          className={`${className}__follow-and-shop--link--youtube`}
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
          className={`${className}__follow-and-shop--link--allegro`}
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
          className={`${className}__follow-and-shop--link---etsy`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kupuj na Etsy"
        >
          <EtsyIcon className="icon-follow-and-shop" />
        </a>
      </li>
    </ul>
  );
}
