const notesRoute = require('express').Router();
const { createNewNote, deleteNote } = require('../lib/notes');
let { notesArray } = require('../lib/notes');



// GET Route for retrieving all the notes

notesRoute.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});


// // POST Route for submitting notes

notesRoute.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } 
  else {
    req.body.id = 0
  }

  res.json(createNewNote(req.body, notesArray));

});


// DELETE route for erasing previous notes

notesRoute.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});


module.exports = notes;
