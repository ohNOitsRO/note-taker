const notes = require('express').Router();

// GET Route for retrieving all the notes
notes.get('/', (req, res) =>
  readFromFile('/').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
notes.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, './Develop/db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting note!');
  }
});

module.exports = notes;
