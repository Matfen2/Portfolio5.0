const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Matfen',
    password: 'Geralt2077!',
    database: 'portfolio',
});

db.connect((error) => {
    if (!error) {
        console.log('Connection à la base de données réussie');
    } else {
        console.log('Echec de la connexion de la base de données');
    }
});

app.listen(PORT, () => {
    console.log("Connection au port serveur " + PORT);
});

// MESSAGE
app.post('/contact', (req, res) => {
    let adress = req.body.adress;
    let subject = req.body.subject;
    let message = req.body.message;
    let qr = `INSERT INTO contact (adress, subject, message) VALUES (?, ?, ?)`;

    db.query(qr, [adress, subject, message], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message : "Erreur d'interval serveur" });
        }
        if (results.affectedRows > 0) {
            res.status(200).send({ message : "Message envoyé avec succès" });
        } else {
            res.status(500).send({ message: "Erreur de l'envoie du message" });
        }
    });
});