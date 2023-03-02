const express = require("express");

const app = express();

const notesRouter = require("./routes/notes.router");
const htmlRouter = require("./routes/html.router");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/api", notesRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
    console.log(`API server now live on port ${PORT}!`);
    
  });

module.exports = app;
