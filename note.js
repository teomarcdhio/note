
//Playing wiht export module
//module.exports.age = 25;

//module.exports.addNote = () => {
//  console.log('addNote');
//  return 'NewNote';
//};

//module.exports.add = (a,b) => {
//  var result = a + b;
//  return result;
//};

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse( notesString );
  } catch (e) {
    return [];
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

var noteDuplicate = notes.filter((note) => {
  return note.title === title;
});

if(noteDuplicate.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;

}else{
  console.log('note with this title already exist');
};

};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var noteRead = notes.filter((note) => {
    return note.title === title;
  });
    return noteRead[0];
};

var deleteNote = (title) => {
  var notes = fetchNotes();
  var noteDuplicate = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(noteDuplicate);
  return notes.length !== noteDuplicate.length;
};

var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Title: ${note.body}`);
};

module.exports =  {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  deleteNote: deleteNote,
  logNote: logNote
};
