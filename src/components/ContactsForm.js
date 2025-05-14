import { useState, useEffect, useRef, useCallback } from "react";
import Btn from "./Btn";
import ShortenFilename from "./ShortenFilename";
import Spinner from "./Spinner";
import axios from "axios";

export default function ContactsForm({ className = "", color }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

  const AddFiiles = useCallback(
    (e) => {
      const newFiles = Array.from(
        e.target.files || e.dataTransfer.files
      ).filter((file) => file.type !== "");

      const totalSize = [...files, ...newFiles].reduce(
        (acc, file) => acc + file.size,
        0
      );

      if (totalSize > 20 * 1024 * 1024) {
        alert("Łączny rozmiar plików nie może przekraczać 20 MB.");
        return;
      }

      if (files.length + newFiles.length > 5) {
        alert("Możesz dodać maksymalnie 5 plików.");
        return;
      }
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      console.log(files);
    },
    [files]
  );

  useEffect(() => {
    let dragCounter = 0;
    // Funkcje obsługi globalnego przeciągania
    function handleDragEnter(e) {
      e.preventDefault();
      dragCounter++;
      setIsDragging(true);
    }

    function handleDragLeave(e) {
      e.preventDefault();
      dragCounter--;
      if (dragCounter === 0) {
        setIsDragging(false);
      }
    }

    function handleDragOver(e) {
      e.preventDefault();
    }

    function handleDrop(e) {
      e.preventDefault();
      dragCounter = 0;
      setIsDragging(false);
      if (!e.target.closest(`.${className}__contact-form--form-group--text`)) {
        return; // Jeśli nie, zakończ funkcję
      }

      AddFiiles(e); // Dodaj pliki, jeśli upuszczono w polu
    }

    // Dodaj globalne nasłuchiwanie zdarzeń
    document.addEventListener("dragenter", handleDragEnter);
    document.addEventListener("dragleave", handleDragLeave);
    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);

    // Usuń nasłuchiwanie zdarzeń po odmontowaniu komponentu
    return () => {
      document.removeEventListener("dragenter", handleDragEnter);
      document.removeEventListener("dragleave", handleDragLeave);
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("drop", handleDrop);
    };
  }, [className, AddFiiles]);

  function handleSubmit(e) {
    e.preventDefault();

    // Sprawdź honeypot field
    if (honeypotRef.current && honeypotRef.current.value) {
      console.warn("Bot wykryty! Formularz został zablokowany.");
      return;
    }

    setIsLoading(true); // Ustaw stan ładowania na true

    // Pobierz istniejące dane z localStorage
    const messages = JSON.parse(localStorage.getItem("sentMessages")) || [];
    const now = Date.now();
    const limitMessages = 3; // Limit wiadomości w ciągu godziny
    const limitTime = 60 * 60 * 1000; // 1 godzina w milisekundach

    // Filtruj wiadomości wysłane w ciągu ostatniej godziny
    const recentMessages = messages.filter(
      (timestamp) => now - timestamp < limitTime
    );

    if (recentMessages.length >= limitMessages) {
      // Oblicz czas do kolejnej możliwości wysłania wiadomości
      // const oldestMessageTime = Math.min(...recentMessages); pierwsza wiadomość
      const oldestMessageTime =
        recentMessages[recentMessages.length - limitMessages]; // ostatnia wiadomość
      const timeLeft = limitTime - (now - oldestMessageTime);

      // Przekształć czas w minuty i sekundy
      const minutes = Math.floor(timeLeft / 60000);

      alert(
        `Osiągnąłeś limit ${limitMessages} wiadomości w ciągu jednej godziny. Spróbuj ponownie za ${minutes} minut`
      );
      setIsLoading(false); // Ustaw isLoading na false po błędzie
      return;
    }

    // Dodaj nową wiadomość do listy
    recentMessages.push(now);
    localStorage.setItem("sentMessages", JSON.stringify(recentMessages));

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    // files.forEach((file) => formData.append("attachments", file)); nodejs
    files.forEach((file) => formData.append("attachments[]", file)); // PHP

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/send-email.php`, formData, {
        // .post("http://localhost:5000/send-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((_response) => {
        alert("Wiadomość została wysłana!");
        setName("");
        setEmail("");
        setMessage("");
        setFiles([]);
        setIsLoading(false); // Ustaw isLoading na false po sukcesie
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania wiadomości:", error);
        alert("Wystąpił błąd podczas wysyłania wiadomości.");
        setIsLoading(false); // Ustaw isLoading na false po błędzie
      });
  }

  function handleFileChange(e) {
    AddFiiles(e);
  }

  function handleAddClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function handleRemoveFile(index) {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }
  return (
    <form className={`${className}__contact-form`} onSubmit={handleSubmit}>
      <div className={`${className}__contact-form--form-group`}>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          ref={honeypotRef}
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />
        <input
          className={`${loading ? "loading" : ""}`}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Imię i nazwisko"
          required
          disabled={loading}
        />
        <label htmlFor="name">Imię i nazwisko</label>
      </div>
      <div className={`${className}__contact-form--form-group`}>
        <input
          className={`${loading ? "loading" : ""}`}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Adres e-mail"
          required
          disabled={loading}
        />
        <label htmlFor="email">Adres e-mail</label>
      </div>
      <div className={`${className}__contact-form--form-group`}>
        <div className={`${className}__contact-form--form-group--text`}>
          <textarea
            className={`${loading ? "loading" : ""}`}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Wiadomość"
            required
            disabled={loading}
          ></textarea>
          <label htmlFor="message">Wiadomość</label>
          {isDragging && (
            <div
              className={`${className}__contact-form--form-group__drag-overlay `}
            >
              Przeciągnij i upuć plik tutaj
            </div>
          )}
        </div>
        <input
          type="file"
          id="attachments"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={loading}
        />{" "}
        <label htmlFor="attachments"></label>
        <ul className={`${className}__contact-form--form-group__file-list `}>
          {files.map((file, i) => (
            <li
              key={i}
              className={`${className}__contact-form--form-group__file-list--item `}
            >
              <div>
                <ShortenFilename>{file.name}</ShortenFilename> (
                {(file.size / 1024 / 1024).toFixed(2)} MB)
              </div>
              <div
                className={`${className}__contact-form--form-group__file-list--item--close `}
                onClick={() => handleRemoveFile(i)}
              >
                {" "}
                x
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${className}__contact-form--form-group`}>
        <div className={` ${className}__contact-form--form-group__btns`}>
          <div
            className={`btn ${className}__contact-form--form-group__btns--btn ${
              loading ? "loading" : ""
            }`}
            onClick={!loading ? handleAddClick : null}
            aria-disabled={loading}
            style={{
              textTransform: "none",
              fontSize: "1.6rem",
              padding: "1.36rem 3rem",
            }}
          >
            Dodaj
          </div>
          <Btn
            loading={loading}
            className={`btn ${className}__contact-form--form-group__btns--btn ${
              loading ? "loading" : ""
            }`}
            type="submit"
          >
            {loading ? <Spinner /> : "Wyślij"}
          </Btn>{" "}
        </div>
      </div>
    </form>
  );
}
