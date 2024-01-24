const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
  connectionLimit: 10, // Limite le nombre de connexions simultanées
  host: "localhost",
  user: "Matfen",
  password: "Geralt2077!",
  database: "portfolio",
});

db.getConnection((error, connection) => {
  if (error) {
    console.error("Erreur de connexion à la base de données :", error.message);
  } else {
    console.log("Connexion à la base de données réussie");
    connection.release();
  }
});

app.listen(PORT, () => {
  console.log("Serveur en écoute sur le port " + PORT);
});

// MESSAGE
app.post("/contact", (req, res) => {
  const { adress, subject, message } = req.body;
  const qr = "INSERT INTO contact (adress, subject, message) VALUES (?, ?, ?)";

  db.query(qr, [adress, subject, message], (error, results) => {
    if (error) {
      console.error(
        "Erreur lors de l'exécution de la requête SQL :",
        error.message
      );
      res.status(500).send({ message: "Erreur d'interval serveur" });
    } else if (results.affectedRows > 0) {
      res.status(200).send({ message: "Message envoyé avec succès" });
    } else {
      res.status(500).send({ message: "Erreur de l'envoi du message" });
    }
  });
});
