console.log('starting note.js');

module.exports.age = 25;

module.exports.addNote = () => {
  console.log('addNote');
  return 'NewNote';
};

module.exports.add = (a,b) => {
  var result = a + b;
  return result;
};
