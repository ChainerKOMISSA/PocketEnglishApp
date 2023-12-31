const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'pocketenglish'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données');
    } else {
        console.log('Connexion réussie à la base de données');
    }
});

//Endpoint pour récupérer tous les utilisateurs (test de la base de données)
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM user';
    db.query(query, (err, results) => {
        if(err){
            console.error('Erreur lors de la récupération des utilisateurs :' + err.message);
            res.status(500).send('Erreur lors de la récupération des utilisateurs');
        } else {
            res.json(results);
        }
    });
});

//Endpoint pour récupérer la liste des verbes irréguliers
app.get('/verbes', (req, res) => {
    const query = 'SELECT * FROM verb';
    db.query(query, (err, results) => {
        if(err) {
            console.error('Erreur lors de la récupération des verbes : ' + err.message);
            res.status(500).json({error : 'Erreur lors de la récupération des verbes'});
        } else {
            res.json(results);
        }
    });
});

//Endpoint pour récupérer les catégories en vocabulaire
app.get('/categories', (req, res) => {
    const query = 'SELECT * FROM vocabulary';
    db.query(query, (err, results) => {
        if(err) {
            console.error('Erreur lors de la récupération des catégories : ' + err.message);
            res.status(500).json({error : 'Erreur lors de la récupération des catégories'});
        } else {
            res.json(results);
        }
    });
});


app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});

