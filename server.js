require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Konfiguracja multer do obsługi załączników
const upload = multer({ dest: "uploads/" });

// Endpoint do obsługi formularza
app.post("/send-email", upload.array("attachments"), async (req, res) => {
  const { name, email, message } = req.body;
  const files = req.files;

  try {
    // Konfiguracja transportera SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Host SMTP
      port: process.env.SMTP_PORT, // Port SMTP
      secure: process.env.SMTP_SECURE === "true", // true dla SSL, false dla TLS
      auth: {
        user: process.env.SMTP_USER, // Login SMTP
        pass: process.env.SMTP_PASS, // Hasło SMTP
      },
    });

    // Przygotowanie załączników
    const attachments = files.map((file) => ({
      filename: file.originalname,
      path: file.path,
    }));

    // Konfiguracja wiadomości
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Adres odbiorcy
      subject: `Nowa wiadomość od ${name}`,
      text: message,
      attachments,
    };

    // Wysyłanie wiadomości
    await transporter.sendMail(mailOptions);

    // Usuwanie załączników z serwera po wysłaniu
    files.forEach((file) => fs.unlinkSync(file.path));

    res.status(200).send("Wiadomość wysłana pomyślnie!");
  } catch (error) {
    console.error("Błąd podczas wysyłania e-maila:", error);
    res.status(500).send("Wystąpił błąd podczas wysyłania wiadomości.");
  }
});

// Start serwera
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
