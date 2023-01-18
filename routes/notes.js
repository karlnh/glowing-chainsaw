module.exports = app => {
    // GET /api/notes should read the db.json file and return all saved notes as JSON

    // GET for retrieving database
    app.get('/api/notes', (req, res) => {
        console.info(`${req.method} request received for /api/notes`);
        fs.readFile('./db/db.json');
    })

    // POST /api/notes should receive a new note to save in the request body and add it to db.json, then return new note to the client, as well as giving each note a unique ID when it's saved

    app.post('/api/notes', (req, res) => {
        console.info(`${req.method} request received for /api/notes`);
    })

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
}

