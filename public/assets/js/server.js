const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../../../db/db.json');

const app = express();
const PORT = 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static('public'));

// getting the notes.html page when requesting /notes
// app.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'notes.html'))
// );

// getting index.html when requesting wildcard *
// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'index.html'))
// );

// GET /api/notes should read the db.json file and return all saved notes as JSON
// app.get('/api/notes', (req, res) => res.json(db));

// POST /api/notes should receive a new note to save in the request body and add it to db.json, then return new note to the client, as well as giving each note a unique ID when it's saved

// DELETE /api/notes/:id should receive a query that contains the ID of a note to delete in db.json
// app.delete('/api/notes/:id', (req, res) => {
//     const requestedTerm = req.params.id;
//     for (let i = 0; i < db.length; i++) {
//         if (requestedTerm === db[i].id) {
//             // delete the object with that ID
//         }
//     }
//     return res.json("No note with that ID found.")
// });

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);