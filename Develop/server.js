const express = require('express');

const notesRouter = require('./routes/notes.router');
const htmlRouter = require('./routes/html.router');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const app = express();

app.use("/api", notesRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
