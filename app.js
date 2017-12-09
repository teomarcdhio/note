console.log('Starting app');

const fs = require('fs');
const notes = require('./note.js');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
var command = argv._[0];
//console.log('Yargs:', argv);
//console.log('Command: ', command );

if ( command === 'add' ) {
  //console.log('add new item');
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
  }else{
    console.log('cannot create duplicate note');
  };
} else if ( command === 'list') {
  notes.getAll();
} else if ( command === 'read') {
  notes.getNote(argv.title);
} else if ( command === 'delete') {
  notes.deleteNote(argv.title);
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
