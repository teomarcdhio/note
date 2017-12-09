

const fs = require('fs');

var originalNote = {
  title: 'some title',
  body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('./note.json', originalNoteString);

var noteString = fs.readFileSync('./note.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
