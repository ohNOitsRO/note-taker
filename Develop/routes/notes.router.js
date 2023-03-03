const notesRoute = require("express").Router();
const { createNote, deleteNote } = require("../lib/notes");

let notesContent = require("../db/db");

// GET Route for retrieving all the notes

notesRoute.get("/notes", (req, res) => {
    let data = notesContent;
    res.json(data);

});

// POST Route for submitting notes

notesRoute.post("/notes", (req, res) => {
    req.body.id = notesContent.length + 1;
    res.json(createNote(req.body, notesContent));

});


// DELETE route for erasing previous notes

notesRoute.delete("/notes/:id", async (req, res) => {
    const { id } = req.params
    notesContent = await deleteNote(id, notesContent);
    res.json(notesContent);

});


module.exports = notesRoute;
