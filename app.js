console.log('Starting app');

const fs = require('fs');
const note = require('./note.js');
const os = require('os');

var user = os.userInfo();

var res = note.add(2,3);
console.log(res);

fs.appendFile('greetings.txt', `hello ${user.username} !, you are ${note.age} years old.` , function(err){
  if (err) {
    console.log('Unable to write to file');
  };
});
