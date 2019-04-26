//新建一个对象发生了什么

function Person(name) {
  this.name = name;
}

Person.prototype.say = function() {
  console.log(this.name);
};

let person = new Person("wen");


console.log(Object.create(person));
console.log(Object.create(null));

// function objectFactory() {
//   let obj = new Object(),
//     Constructor = [].shift.call(arguments);

//   obj._proto_ = Constructor.prototype;

//   console.log(arguments);

//   let ret = Constructor.apply(obj, arguments);

//   return typeof ret === "object" ? ret : obj;
// }

// let person1 = objectFactory(Person, "peng");

// console.log(person1);





