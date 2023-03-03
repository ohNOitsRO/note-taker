const fs = require("fs");
const path = require("path");

function createNewNote(body, notesContent) {
  const note = body;
  notesContent.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesContent, null, 1)
  );

  return note;

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
    index += 1;
  });

//Write to notes array
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notesContent }, null, 1)
  );

  return notesContent;

}

module.exports = {
  createNewNote,deleteNote
};