const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = require('./routes/index');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files
app.use(express.static('public')); // Everything in here is accessible from the URL

// GET route for notes page
app.get('/notes', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET route for default/home page
app.get('*', (req, res) => {
    console.info(`${req.method} request received for *`);
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);