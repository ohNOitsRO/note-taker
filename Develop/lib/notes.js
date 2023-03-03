const fs = require("fs");
const path = require("path");

function createNote(body, notesContent) {
  const newNote = body;
  notesContent.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesContent)

  );
}


// Checks for a matching index and deletes note
function deleteNote(id, notes) {
  let notesContent = notes.filter(erase => {
    if (erase.id == id) {
      return false;

    } 
    else {
      return true;

    }
  })

  let index = 0;

  notesContent.forEach(note => {
    note.id = index;
    index = index + 1;

  });

// function deleteNote (id, notesContent) {
  
//   let noteIndex = notesContent.indexOf(id);
//   notesContent.splice(noteIndex, 1)



//Write to notes array
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notesContent })

  );
};


module.exports = {
  createNote, deleteNote

};