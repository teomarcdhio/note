var square = (x) => {
  var result = x * x;
  return result;
};
console.log(square(9));

var user = {
  name: 'Matteo',
  sayHi: () => {
    console.log(`Hi. ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi. ${this.name}`);
  },
  sayHiFunc: function(){
    console.log(`Hi. ${this.name} this is a regular function`);
  }
};

user.sayHiFunc();
