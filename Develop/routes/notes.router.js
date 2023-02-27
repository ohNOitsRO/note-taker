const notes = require('express').Router();
const { createNewNote, deleteNote } = require('../lib/notes');
let { notesArray } = require('../lib/notes');


// GET Route for retrieving all the notes
// notes.get('/', (req, res) =>
//   readFromFile('/').then((data) => res.json(JSON.parse(data)))
// );


notes.get('/', (req, res) => {
    let results = notesArray;
    res.json(results);
});


// // POST Route for submitting notes
// notes.post('/', (req, res) => {
//   // Destructuring assignment for the items in req.body
//   const { title, text } = req.body;

//   // If all the required properties are present
//   if (title && text) {
//     // Variable for the object we will save
//     const newNote = {
//       title,
//       text,
//     };

//     readAndAppend(newNote, './Develop/db/db.json');

//     const response = {
//       status: 'success',
//       body: newNote,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting note!');
//   }
// });




notes.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } 
  else {
    req.body.id = 0
  }

  res.json(createNewNote(req.body, notesArray));

});

notes.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = notes;
