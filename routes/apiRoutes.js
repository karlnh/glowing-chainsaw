const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // https://github.com/uuidjs/uuid#readme
const router = require('express').Router(); // setting notes as router

// GET for /api/notes used to retrieve db.json and return all saved notes as JSON
router.get('/notes', (req, res) => {
    console.info(`${req.method} for ${req.path} received.`)
    fs.readFile('./db/db.json', 'utf8', (err, data) => { // grabbing db
        res.json(JSON.parse(data));
    })
});

// POST /api/notes should receive a new note to save in the request body and add it to db.json, then return new note to the client, as well as giving each note a unique ID when it's saved

router.post('/notes', (req, res) => {
    console.info(`${req.method} for ${req.path} received.`);

    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        id: uuidv4(),
    };

    console.info(
    `New note received.
    Contents: ${newNote.title}, ${newNote.text}, ${newNote.id}`
    );

    fs.readFile('./db/db.json', "utf8", (err, data) => {
        console.info('Pushing new note...');
        const dbJSON = JSON.parse(data);
        dbJSON.push(newNote);
        console.info('Pushed new note to parsed data.');

        fs.writeFile('./db/db.json', JSON.stringify(dbJSON), err => {
            err
            ? res.json(err)
            : res.json('Successfully added new note.');
        });
    });

});

router.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} for ${req.path} received.`);
});

module.exports = router;