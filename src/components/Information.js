import { ReactComponent as CallIcon } from "../svg/call-outline.svg";
import { ReactComponent as MailIcon } from "../svg/mail-outline.svg";

export default function Information({ className = "" }) {
  return (
    <>
      <div className={className}>
        <p className={`${className}--heading`}>Dane:</p>
        <p className={`${className}--text`}>
          <span className="company-name">MaGo3d</span> Mateusz Nowosielecki
        </p>
        <p className={`${className}--text`}>NIP: 8512910330</p>
        <p className={`${className}--text`}>REGON: 360483465</p>
      </div>

      <div className={className}>
        <p className={`${className}--heading`}>Adres:</p>
        <p className={`${className}--text`}>ul. Grzymińska 3/15</p>
        <p className={`${className}--text`}>71-711 Szczecin </p>
        <p className={`${className}--text`}>Polska</p>
      </div>

      <div className={className}>
        <p className={`${className}--heading`}>Kontakt:</p>
        <p className={`${className}--text`}>
          <a href="tel:882115883" className={`${className}--icon-and-link`}>
            <CallIcon className="icon-contact" />
            <span>882 115 883 </span>
          </a>
        </p>
        <p className={`${className}--text`}>
          <a
            href="mailto:info@mago3d.pl"
            className={`${className}--icon-and-link`}
          >
            <MailIcon className="icon-contact" />
            <span>info@mago3d.pl</span>
          </a>
        </p>
      </div>
    </>
  );
}
