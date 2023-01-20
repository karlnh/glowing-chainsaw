const fs = require('fs');
const db = require('../db/db.json'); // grabbing db
const { v4: uuidv4 } = require('uuid'); // https://github.com/uuidjs/uuid#readme
const router = require('express').Router(); // setting notes as router

// GET for /api/notes used to retrieve db.json and return all saved notes as JSON
router.get('/api/notes', (req, res) => {
    console.info(`${req.method} for ${req.path} received.`)
    res.json(db);
});

// POST /api/notes should receive a new note to save in the request body and add it to db.json, then return new note to the client, as well as giving each note a unique ID when it's saved

router.post('/api/notes', (req, res) => {
    console.info(`${req.method} for ${req.path} received.`);

    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        id: uuidv4(),
    };

    console.info(
    `New note received.
    Contents: ${newNote}`
    );

    fs.readFile('../db/db.json', "utf8", (err, data) => {
        console.info('Pushing new note...');
        const dbJSON = JSON.parse(data);
        dbJSON.push(newNote);
        console.info('Pushed new note to parsed data.');
    })
    fs.writeFile('../db/db.json', JSON.stringify(dbJSON), err =>
        err
        ? console.error(err)
        : console.info('Successfully added new note.')
    );
});

module.exports = router