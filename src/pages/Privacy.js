import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ScrollEffectContainer from "../components/ScrollEffectContainer";

export default function Privacy() {
  return (
    <section className="privacy">
      <Navigation />

      <div className="privacy__container">
        <ScrollEffectContainer
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          rootMargin="50%"
        >
          <h1 className="heading-primary-privacy">Polityka prywatności</h1>

          <h2 className="heading-secondary-privacy">
            <q>Kluczowe elementy wymagane przez RODO</q>
          </h2>

          <h3 className="heading-tertiary-privacy">1. Informacje ogólne</h3>
          <p className="u-margin-bottom-medium-large">
            Niniejsza polityka prywatności dotyczy strony internetowej{" "}
            <a href="https://mago3d.pl">https://mago3d.pl</a> i wyjaśnia zasady
            przetwarzania danych osobowych użytkowników oraz stosowania plików
            cookies.
          </p>

          <h3 className="heading-tertiary-privacy">2. Administrator danych</h3>
          <p className="u-margin-bottom-medium-large">
            Administratorem danych osobowych jest zespół odpowiedzialny za
            projekt Mago3D. Kontakt:{" "}
            <a href="mailto:biuro@mago3d.pl">biuro@mago3d.pl</a>
          </p>

          <h3 className="heading-tertiary-privacy">3. Jakie dane zbieramy?</h3>
          <p className="u-margin-bottom-xsmall">
            Poprzez formularz kontaktowy możemy przetwarzać następujące dane:
          </p>
          <ul className="u-margin-bottom-small">
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Treść wiadomości</li>
          </ul>
          <p className="u-margin-bottom-medium-large">
            Podanie danych jest dobrowolne, ale niezbędne do udzielenia
            odpowiedzi.
          </p>

          <h3 className="heading-tertiary-privacy">
            4. Cel i podstawa przetwarzania danych
          </h3>
          <p className="u-margin-bottom-xsmall">Dane przetwarzamy w celu:</p>
          <ul className="u-margin-bottom-small">
            <li>odpowiedzi na zapytania przesłane przez formularz,</li>
            <li>prowadzenia korespondencji e-mailowej,</li>
            <li>
              ewentualnej analizy korespondencji w celach statystycznych lub
              organizacyjnych.
            </li>
          </ul>
          <p className="u-margin-bottom-medium-large">
            Podstawą prawną przetwarzania jest Twoja zgoda (art. 6 ust. 1 lit. a
            RODO) oraz nasz uzasadniony interes (art. 6 ust. 1 lit. f RODO).
          </p>

          <h3 className="heading-tertiary-privacy">
            5. Okres przechowywania danych
          </h3>
          <p className="u-margin-bottom-medium-large">
            Dane przechowujemy przez okres prowadzenia korespondencji oraz do 2
            lat po jej zakończeniu w celach archiwalnych i dowodowych, chyba że
            wcześniej poprosisz o ich usunięcie.
          </p>

          <h2>6. Odbiorcy danych</h2>
          <p>
            Dane mogą być przekazywane podmiotom wspierającym nas technicznie
            (np. dostawcy hostingu <strong>HostingHouse.pl</strong>), wyłącznie
            w zakresie niezbędnym do działania Serwisu.
          </p>
          <p className="u-margin-bottom-medium-large">
            Dane nie są przekazywane poza Europejski Obszar Gospodarczy (EOG).
          </p>

          <h3 className="heading-tertiary-privacy">7. Twoje prawa</h3>
          <p className="u-margin-bottom-xsmall">Masz prawo do:</p>
          <ul className="u-margin-bottom-small">
            <li>dostępu do swoich danych,</li>
            <li>sprostowania,</li>
            <li>usunięcia,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu,</li>
            <li>cofnięcia zgody w dowolnym momencie.</li>
          </ul>
          <p>
            W celu realizacji swoich praw skontaktuj się:{" "}
            <a href="mailto:biuro@mago3d.pl">biuro@mago3d.pl</a>
          </p>
          <p className="u-margin-bottom-medium-large">
            Masz również prawo do złożenia skargi do Prezesa Urzędu Ochrony
            Danych Osobowych.
          </p>

          <h3 className="heading-tertiary-privacy">8. Pliki cookies</h3>
          <p>
            Serwis korzysta z plików cookies w celu zapewnienia poprawnego
            działania strony oraz prowadzenia statystyk (np. liczba odwiedzin).
          </p>
          <p className="u-margin-bottom-medium-large">
            Cookies mogą być sesyjne (usuwane po zamknięciu przeglądarki) lub
            stałe. Możesz samodzielnie zarządzać plikami cookies poprzez
            ustawienia przeglądarki.
          </p>

          <h3 className="heading-tertiary-privacy">
            9. Zmiany w polityce prywatności
          </h3>
          <p className="u-margin-bottom-small">
            Możemy zaktualizować politykę prywatności, gdy będzie to wymagane
            przez przepisy prawa lub zmiany technologiczne. Zmiany będą
            publikowane na tej stronie.
          </p>
        </ScrollEffectContainer>
      </div>
      <Footer />
    </section>
  );
}
