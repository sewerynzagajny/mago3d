import React, { useState } from "react";
import Btn from "./Btn";

export default function ContactsForm({ className = "" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <form className={`${className}__contact-form`} onSubmit={handleSubmit}>
      <div className={`${className}__contact-form--form-group`}>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Imię i nazwisko"
          required
        />
        <label htmlFor="name">Imię i nazwisko</label>
      </div>
      <div className={`${className}__contact-form--form-group`}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Adres e-mail"
          required
        />
        <label htmlFor="email">Adres e-mail</label>
      </div>
      <div className={`${className}__contact-form--form-group`}>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Wiadomość"
          // rows="4"
          required
        ></textarea>
        <label htmlFor="message">Wiadomość:</label>
      </div>

      <Btn className={`btn ${className}__contact-form--btn`} type="submit">
        Wyślij
      </Btn>
    </form>
  );
}
