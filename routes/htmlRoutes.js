const router = require('express').Router();
const path = require('path');

// GET route for notes page
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET route for default/home page
router.get('*', (req, res) => {
    console.info(`${req.method} request received for *`);
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;