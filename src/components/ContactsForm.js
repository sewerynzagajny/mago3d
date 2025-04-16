import React, { useState } from "react";
import Btn from "./Btn";

export default function ContactsForm({ className = "" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);

  function AddFiiles(e) {
    const newFiles = Array.from(e.target.files || e.dataTransfer.files);
    const totalSize = [...files, ...newFiles].reduce(
      (acc, file) => acc + file.size,
      0
    );

    if (totalSize > 30 * 1024 * 1024) {
      alert("Łączny rozmiar plików nie może przekraczać 30 MB.");
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  }

  function handleFileChange(e) {
    AddFiiles(e);
  }

  function handleDrop(e) {
    e.preventDefault();
    AddFiiles(e);
  }

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
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Wiadomość"
          // rows="4"
          required
        ></textarea>
        <label htmlFor="message">Wiadomość:</label>
      </div>
      <div
        className={`${className}__contact-form--form-group`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="attachments"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
        />{" "}
        <label
          htmlFor="attachments"
          style={
            {
              // display: "none",
            }
          }
        >
          <div
            className={`btn ${className}__contact-form--btn`}
            style={{ texTransform: "none", fontSize: "1.6rem" }}
          >
            Dodaj
          </div>
        </label>
        <p style={{ fontSize: "1.6rem" }}>
          Łączny rozmiar załączników nie może przekraczać 20 MB.
        </p>
        <ul>
          {files.map((file, i) => (
            <li key={i}>
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </li>
          ))}
        </ul>
      </div>

      <Btn className={`btn ${className}__contact-form--btn`} type="submit">
        Wyślij
      </Btn>
    </form>
  );
}
