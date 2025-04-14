import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ScrollEffectContainer from "../components/ScrollEffectContainer";
// import { ReactComponent as CallIcon } from "../svg/call-outline.svg";
// import { ReactComponent as MailIcon } from "../svg/mail-outline.svg";
import photo1 from "../assets/contacts/contact-1.png";
// import photo2 from "../assets/contacts/contact-2.png";
import photo2 from "../assets/contacts/test2.png";
import CompanyInfo from "../components/CompanyInfo";
import BankAccount from "../components/BankAcount";

export default function Contact() {
  return (
    <section className="contact">
      <Navigation />

      <div className="contact__container">
        <ScrollEffectContainer
          totalImages={1}
          threshold={0.1}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
        >
          <h2 className="heading-secondary">Kontakt</h2>
          <h3 className="heading-tertiary">
            <q>Skontaktuj się z nami</q>
          </h3>
          <div className="grid-2-col-0_5-2 column-gap-0_8">
            {" "}
            <div className="contact__container__photo">
              <img
                src={photo1}
                alt="Example of Mago3d contact"
                loading="lazy"
              />
            </div>
            <p className="contact__container__content u-text-line-height u-margin-bottom-medium">
              Chętnie odpowiemy na Twoje pytania i pomożemy w rozwiązaniu
              ewentualnych problemów. Oferujemy profesjonalne doradztwo oraz
              możliwość zakupu naszych produktów bezpośrednio, bez potrzeby
              korzystania z platform zakupowych. Jeśli potrzebujesz wyceny
              wykonania detalu poza naszym asortymentem lub masz sprawę związaną
              z reklamacją, skontaktuj się z nami – zapewniamy szybką i rzetelną
              obsługę.
            </p>
          </div>

          <div className="flex u-font-size-big u-text-line-height u-margin-bottom-medium">
            <CompanyInfo className="contact__company-info" />
          </div>

          <div className="contact__container__content u-margin-bottom-large">
            <p className="footer__company-info--text u-font-size-big">
              Nr konta:
              <BankAccount style={{ marginLeft: "3.2rem" }} />
            </p>
          </div>
          {/* <ContactForm /> */}
        </ScrollEffectContainer>
        <ScrollEffectContainer
          totalImages={1}
          threshold={0.1}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
        >
          <h2 className="heading-secondary">Formularz kontaktowy</h2>
          <h3 className="heading-tertiary u-margin-bottom-medium-large">
            <q>Napisz do Nas</q>
          </h3>
          <div className="frame">
            <div className="contact__container__form">
              <ContactForm />
              {/* <div className="contact__container__form--image"></div> */}

              <img
                className="contact__container__form--image"
                src={photo2}
                alt="Example of Mago3d contact form"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollEffectContainer>
      </div>

      <Footer />
    </section>
  );
}
