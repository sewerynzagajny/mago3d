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

// Multer - upload załączników
const upload = multer({ dest: "uploads/" });

// Limit wiadomości
const MAX_MESSAGES = 3;
const BLOCK_TIME = 60 * 60 * 1000; // 1h
const LIMITS_FILE = "./limits.json";

// Wczytanie istniejących limitów z pliku
function loadLimits() {
  try {
    const data = fs.readFileSync(LIMITS_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.warn("Brak pliku limits.json – tworzymy nowy.");
    return {};
  }
}

// Zapis limitów do pliku
function saveLimits() {
  fs.writeFileSync(LIMITS_FILE, JSON.stringify(userLimits, null, 2), "utf8");
}

// Inicjalizacja limitów
const userLimits = loadLimits();

// Endpoint formularza
app.post("/send-email", upload.array("attachments"), async (req, res) => {
  const { name, email, message } = req.body;
  const files = req.files;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Nieprawidłowy adres e-mail." });
  }

  // Inicjalizacja użytkownika jeśli nie istnieje
  if (!userLimits[email]) {
    userLimits[email] = { counter: 0, blockUntil: 0 };
  }

  const userData = userLimits[email];

  // Sprawdzenie blokady
  if (userData.counter >= MAX_MESSAGES && Date.now() <= userData.blockUntil) {
    const remainingTime = Math.ceil(
      (userData.blockUntil - Date.now()) / (1000 * 60)
    );
    return res.status(429).json({
      message: `Przekroczono limit wiadomości. Spróbuj za ${remainingTime} min.`,
    });
  }

  // Reset limitu jeśli czas minął
  if (Date.now() > userData.blockUntil) {
    userData.counter = 0;
    userData.blockUntil = 0;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = files.map((file) => ({
      filename: file.originalname,
      path: file.path,
    }));

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Nowa wiadomość od ${name}`,
      text: message,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    files.forEach((file) => fs.unlinkSync(file.path));

    userData.counter++;
    if (userData.counter >= MAX_MESSAGES) {
      userData.blockUntil = Date.now() + BLOCK_TIME;
    }

    saveLimits(); // Zapisz limity

    res.status(200).send("Wiadomość wysłana pomyślnie!");
  } catch (error) {
    console.error("Błąd e-maila:", error);
    res.status(500).send("Wystąpił błąd podczas wysyłania wiadomości.");
  }
});

// 🧼 Auto-clean nieaktywnych użytkowników
const CLEAN_INTERVAL = 15 * 60 * 1000; // 15 minut
const STALE_LIMIT_TIME = 2 * 60 * 60 * 1000; // 2 godziny

setInterval(() => {
  const now = Date.now();
  let changed = false;

  for (const email in userLimits) {
    const { blockUntil } = userLimits[email];
    if (blockUntil && now - blockUntil > STALE_LIMIT_TIME) {
      console.log(`🧹 Usuwam starego użytkownika: ${email}`);
      delete userLimits[email];
      changed = true;
    }
  }

  if (changed) saveLimits();
}, CLEAN_INTERVAL);

// Start serwera
app.listen(PORT, () => {
  console.log(`🚀 Serwer działa na porcie ${PORT}`);
});
