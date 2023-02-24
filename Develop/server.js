const express = require('express');

const PORT = process.env.PORT || 3001;

// Import our modular routers for /notes
const notesRouter = require('./routes/notes.router');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
