const fs = require('fs');
const notes = require('./note.js');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

var titleOptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
};

var bodyOptions = {
  describe: 'Body content',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('read', 'Read a note', {
  title: titleOptions,
})
.command('list', 'Show all notes')
.command('delete', 'Delete note', {
  title: titleOptions
})
.help()
.argv;
var command = argv._[0];
//console.log('Yargs:', argv);
//console.log('Command: ', command );

if ( command === 'add' ) {
  //console.log('add new item');
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('note created');
    notes.logNote(note);
  }else{
    console.log('cannot create duplicate note');
  };
} else if ( command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes.`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });
} else if ( command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    console.log('note read');
    notes.logNote(note);
  }else{
    console.log('cannot find note');
  };

} else if ( command === 'delete') {
  var noteRemoved = notes.deleteNote(argv.title);
  var message = noteRemoved ? 'note was removed' : 'note not found';
  console.log(message);
} else {
  console.log('command not recognized');
};

//Testing os and fs module
//var user = os.userInfo();

//var res = note.add(2,3);
//console.log(res);

//fs.appendFile('greetings.txt', `hello ${user.username} !, you are ${note.age} years old.` , function(err){
//  if (err) {
//    console.log('Unable to write to file');
//  };
//});

//Testing lodash
//console.log(_.isString(true));
//console.log(_.isString('Matteo'));
