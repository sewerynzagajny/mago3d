import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactsForm from "../components/ContactsForm";
import CookieBaner from "../components/CookieBanner";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
// import { ReactComponent as CallIcon } from "../svg/call-outline.svg";
// import { ReactComponent as MailIcon } from "../svg/mail-outline.svg";
import photo1 from "../assets/contacts/contact-1.webp";
import photo2 from "../assets/contacts/contact-2.webp";

import CompanyInfo from "../components/CompanyInfo";
import BankAccount from "../components/BankAcount";
import SEOHead from "../components/SEOHead";

export default function Contact() {
  const seoData = {
    title: "Kontakt - MaGo3d | Kreatywna pracownia druku 3d",
    description:
      "Skontaktuj się z MaGo3d. Profesjonalne doradztwo, szybka obsługa, możliwość zakupu bezpośrednio. Formularz kontaktowy i dane firmy.",
    canonicalUrl: "https://mago3d.pl/kontakt",
    ogImage: "https://mago3d.pl/assetscontacts/contact-1.webp",
  };
  return (
    <>
      <SEOHead {...seoData} />
      <section className="contact">
        <Navigation />

        <div className="contact__container">
          <ScrollEffectContainer
            totalImages={0}
            threshold={0}
            animationTime={0.6}
            animationTransform="translateY(2rem)"
            rootMargin="50%"
          >
            <h2 className="heading-secondary">Kontakt</h2>
            <h3 className="heading-tertiary">
              <q>Skontaktuj się z nami</q>
            </h3>
            <div className="grid-2-col-0_5-2-contact column-gap-0_8">
              {" "}
              <ScrollEffectContainer
                totalImages={1}
                threshold={0}
                animationTime={0.6}
                animationTransform="translateY(0)"
                rootMargin="50%"
                className="contact__container__photo"
              >
                <img src={photo1} alt="Kontakt z MaGo3d - druki 3d" />
              </ScrollEffectContainer>
              {/* <div className="contact__container__photo">
              <img src={photo1} alt="Example of Mago3d contact" />
            </div> */}
              <p className="contact__container__content u-text-line-height u-margin-bottom-medium">
                Chętnie odpowiemy na Twoje pytania i pomożemy w rozwiązaniu
                ewentualnych problemów. Oferujemy profesjonalne doradztwo oraz
                możliwość zakupu naszych produktów bezpośrednio, bez potrzeby
                korzystania z platform zakupowych. Jeśli potrzebujesz wyceny
                wykonania detalu poza naszym asortymentem lub masz sprawę
                związaną z reklamacją, skontaktuj się z nami - zapewniamy szybką
                i rzetelną obsługę.
              </p>
            </div>

            <div className="flex u-font-size-big u-text-line-height u-margin-bottom-large">
              <CompanyInfo className="contact__company-info" />
              <div className="contact__container__content account-info">
                <div className="contact__company-info--text u-font-size-big">
                  <p className="contact__company-info--heading">Nr konta:</p>
                  <BankAccount className="contact__company-info" />
                </div>
              </div>
            </div>

            {/* <ContactForm /> */}
          </ScrollEffectContainer>
          <ScrollEffectContainer
            totalImages={0}
            threshold={0.1}
            animationTime={0.6}
            animationTransform="translateY(2rem)"
          >
            <h2 className="heading-secondary">Formularz kontaktowy</h2>
            <h3 className="heading-tertiary ">
              <q>Napisz do Nas</q>
            </h3>

            <p className="contact__container__content  u-margin-bottom-medium">
              Wypełnij formularz kontaktowy, a my skontaktujemy się z Tobą tak
              szybko, jak to możliwe. Możesz również przesłać nam pliki, które
              pomogą nam lepiej zrozumieć Twoje potrzeby. Możesz dodać
              maksymalnie 5 załączników o łącznym rozmiarze do 20 MB. Aby dodać
              załącznik wciśnij przycisk <strong>Dodaj</strong> lub przeciągnij
              i upuść plik w oknie <strong>Wiadomość</strong>. W ciągu godziny
              możesz wysłać 3 wiadomości.{" "}
            </p>
            <div className="frame u-margin-bottom-medium">
              <div className="contact__container__form">
                <ContactsForm className="contact__container__form" />
                <ScrollEffectContainer
                  totalImages={1}
                  threshold={0}
                  animationTime={0.6}
                  animationTransform="translateY(0)"
                  rootMargin="50%"
                  className="photo"
                >
                  <img
                    className="contact__container__form--image"
                    src={photo2}
                    alt="Formularz kontaktowy MaGo3d"
                  />
                </ScrollEffectContainer>
              </div>
            </div>
          </ScrollEffectContainer>
        </div>

        <Footer />
        <CookieBaner />
      </section>
    </>
  );
}
