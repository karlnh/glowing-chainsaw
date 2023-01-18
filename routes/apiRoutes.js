const db = require('../db/db.json'); // grabbing db
const uuid = require('../scripts/uuid'); // random note id
const router = require('express').Router(); // setting notes as router

// GET for /api/notes used to retrieve db.json and return all saved notes as JSON
router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for /api/notes`);
    console.info(db);
    res.json(db);
})

// POST /api/notes should receive a new note to save in the request body and add it to db.json, then return new note to the client, as well as giving each note a unique ID when it's saved

router.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received for /api/notes to add a note`);

    const { title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        }
    }
    // 
})

// GET for /api/notes used to retrieve db.json and return all saved notes as JSON

// DELETE /api/notes/:id should receive a query that contains the ID of a note to delete in db.json
// notes.delete('/api/notes/:id', (req, res) => {
//     const requestedTerm = req.params.id;
//     for (let i = 0; i < db.length; i++) {
//         if (requestedTerm === db[i].id) {
//             // delete the object with that ID
//         }
//     }
//     return res.json("No note with that ID found.")
// });

module.exports = router