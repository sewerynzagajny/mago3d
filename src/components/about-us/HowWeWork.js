import { ReactComponent as ChatIcon } from "../../svg/chat.svg";
import { ReactComponent as CadIcon } from "../../svg/cad.svg";
import { ReactComponent as FilamentIcon } from "../../svg/filament.svg";
import { ReactComponent as CheckIcon } from "../../svg/check.svg";
import { ReactComponent as PackageIcon } from "../../svg/package.svg";
import { ReactComponent as SupportIcon } from "../../svg/support.svg";

export default function HowWeWork({ className = "" }) {
  return (
    <div className={`${className}__how-we-work`}>
      <div className={`${className}__container`}>
        <div className="background u-margin-bottom-medium">
          <h3 className="heading-tertiary">Jak pracujemy</h3>
          <p className={`${className}__container__content u-font-strong`}>
            Od pomysłu do gotowego produktu - nasz proces krok po kroku
          </p>
        </div>
        <div className="grid-2-col">
          <div className="1-col background">
            <div className="flex-how-we-work u-margin-bottom-xsmall">
              <ChatIcon className="icon-follow-and-shop" />
              <h4 className="heading-fourth-secondary ">Konsultacja</h4>
            </div>

            <p
              className={`${className}__container__content u-font-strong u-margin-bottom-medium`}
            >
              Rozmawiamy o Twojej wizji, funkcji i wyglądzie produktu. Łącząymy
              Twoje oczekiwania z naszym doświadczeniem.
            </p>
            <div className="flex-how-we-work u-margin-bottom-xsmall">
              <CadIcon className="icon-follow-and-shop" />
              <h4 className="heading-fourth-secondary ">Projektowanie</h4>
            </div>
            <p
              className={`${className}__container__content u-font-strong u-margin-bottom-medium`}
            >
              Tworzymy model 3D, testujemy rozwiązania i - jeśli potrzeba -
              drukujemy prototyp, by dopracować każdy detal przed produkcją.
            </p>
            <div className="flex-how-we-work u-margin-bottom-xsmall">
              <FilamentIcon className="icon-follow-and-shop" />
              <h4 className="heading-fourth-secondary ">Dobór technologii</h4>
            </div>
            <p className={`${className}__container__content u-font-strong`}>
              Wybieramy filament najlepiej dopasowany do zastosowania (PLA, PETG
              i inne) oraz ustawiamy parametry druku dla perfekcyjnego efektu.
            </p>
          </div>
          <div className="2-col background">
            <div className="flex-how-we-work u-margin-bottom-xsmall">
              <CheckIcon className="icon-follow-and-shop" />
              <h4 className="heading-fourth-secondary ">Kontrola jakości</h4>
            </div>
            <p
              className={`${className}__container__content u-font-strong u-margin-bottom-medium`}
            >
              Każdy wydruk przechodzi dokładną weryfikację - sprawdzamy wymiary,
              powierzchnię oraz funkcjonalność.
            </p>
            <div className="flex-how-we-work u-margin-bottom-xsmall">
              <PackageIcon className="icon-follow-and-shop" />
              <h4 className="heading-fourth-secondary ">Wysyłka</h4>
            </div>
            <p
              className={`${className}__container__content u-font-strong u-margin-bottom-medium`}
            >
              W razie potrzeby wykonujemy dodatkowo montaż. Produkt pakujemy
              bezpiecznie i wysyłamy pod wskazany adres.
            </p>
            <div className="flex-how-we-work u-margin-bottom-xsmall">
              <SupportIcon className="icon-follow-and-shop" />
              <h4 className="heading-fourth-secondary ">Wsparcie</h4>
            </div>
            <p className={`${className}__container__content u-font-strong`}>
              Po realizacji zamówienia służymy pomocą, udzielamy wskazówek i
              przyjmujemy opinie, które pomagają udoskonalać nasze projekty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
