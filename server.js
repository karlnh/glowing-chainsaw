const express = require('express');
const { logger } = require('./middleware/logger');
const htmlRouter = require('./routes/htmlRoutes');
const apiRouter = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger);
// TO DO: ADD JSON OBJECT STUFF TO APIROUTES
// TO DO: ADD JSON OBJECT STUFF TO APIROUTES
// TO DO: ADD JSON OBJECT STUFF TO APIROUTES

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files
app.use(express.static('public')); // Everything in here is accessible from the URL

app.use('/api', apiRouter);
app.use('/', htmlRouter);


app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);