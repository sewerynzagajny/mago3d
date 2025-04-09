import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

export default function AboutUs() {
  return (
    <section className="about-us" style={{ height: "200vh" }}>
      <div className="about-us__container">
        <div className="about-us__container__picture">
          <img
            className="about-us__container__picture__item--large"
            src={photo1}
            alt="Opis zdjęcia 1"
          />
          <img
            className="about-us__container__picture__item--small"
            src={photo2}
            alt="Opis zdjęcia 2"
          />
          <img
            className="about-us__container__picture__item--small"
            src={photo3}
            alt="Opis zdjęcia 3"
          />
        </div>
        <div className="about-us__container__content">
          <h3>Kim jesteśmy</h3>
          <h2>
            Pasja, wtrwałość, chęć niesienia pomocy. Idalny przepis na....
            inowacje
          </h2>

          <p>
            vvvvvvvvvvvvvvvvvvv lorenewfewf
            {/* Po sprzedaży pasieki (tak, wcześniej byłem pszczelarzem! 😊), którą
            zdecydowałem się zamknąć głównie ze względu na niską opłacalność,
            czasochłonność oraz rychłe narodziny synka, zacząłem szukać nowego
            zajęcia. Chciałem czegoś, co pozwoli mi pracować z domu i
            jednocześnie zabezpieczy rodzinny budżet w razie nieprzewidzianych
            sytuacji. Ponieważ miałem doświadczenie w modelowaniu CAD,
            naturalnym krokiem stało się dla mnie odkrycie druku 3D. Pierwszym
            produktem, który opracowałem, były podstawki pod Thermomix. Pomysł
            wziął się z codziennej obserwacji – widząc, jak moja żona z trudem
            przesuwa to ciężkie urządzenie, postanowiłem znaleźć rozwiązanie. Ku
            mojemu zaskoczeniu, po przeszukaniu Internetu okazało się, że nikt
            nie oferuje podstawek z kółkami. Wykorzystując umiejętności
            projektowania w CAD, stworzyłem i wydrukowałem pierwsze prototypy –
            oczywiście pod czujnym okiem żony! Okazały się bardzo udane, więc
            przekazaliśmy kilka egzemplarzy znajomym do testów. Ich pozytywne
            opinie utwierdziły nas w przekonaniu, że to może być strzał w
            dziesiątkę. Postanowiliśmy wystawić produkt na sprzedaż w grupach
            Facebookowych związanych z Thermomixem. Odzew przerósł nasze
            oczekiwania – prawie 600 komentarzy potwierdziło, że trafiliśmy w
            realną potrzebę użytkowników. Zdecydowaliśmy się zastrzec wzór
            użytkowy w EUIPO. Była to spora inwestycja na początek, ale szybko
            się opłaciła – pozwoliła nam skutecznie odstraszyć konkurencję,
            która błyskawicznie zaczęła kopiować nasz produkt. Zadowolenie
            klientów dodało nam skrzydeł i stało się motywacją do dalszego
            rozwijania oferty. Choć prowadzenie własnej działalności bywa
            wyzwaniem, z optymizmem patrzymy w przyszłość i nieustannie
            pracujemy nad nowymi pomysłami. */}
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1034151744392067%2F&show_text=false&width=267&t=0"
              width="267"
              height="476"
              style={{ border: "none", overflow: "hidden" }}
              title="Facebook Video"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </p>
        </div>
      </div>
    </section>
  );
}
