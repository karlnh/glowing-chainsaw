const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware for serving static files
app.use(express.static('public'));

// GET route for default page
app.get('*', (req, res) => {
    console.info(`${req.method} request received for *`);
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// GET route for notes page
app.get('/notes', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);