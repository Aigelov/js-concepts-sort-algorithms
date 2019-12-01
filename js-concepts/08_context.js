// const person = {
//   surname: 'Stark',
//   knows: function(what, name) {
//     console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
//   }
// };
// const john = {
//   surname: 'Snow'
// };
// person.knows('все', 'Bran');
// person.knows.call(john, 'не все', 'John');
// person.knows.call(john, ...['не все', 'John']);
// person.knows.apply(john, ['не все', 'John']);
// person.knows.bind(john, 'не все', 'John')();


// function Person(surname) {
//   this.surname = surname;
//   console.log(this);
// }
// Person.prototype.knows = function(what, name) {
//   console.log(`You know ${what}, ${name} ${this.surname}`);
// };
// Object.prototype.needs = function(info) {
//   console.log(`Everyone needs ${info}`);
// };
// const stark = new Person('Stark');
// stark.knows('everything', 'Tony');
// stark.needs('Iron Man');


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// const elena = new Person('Elena', 20);


/** Explicit context - Явная передача контекста */
// function logThis() {
//   console.log(this);
// }
// const obj = {num: 42};
// logThis.apply(obj);


/** Implicit context - Неявная перечада контекста */
// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this);
//   }
// };
// animal.logThis();


// function Cat(color) {
//   this.color = color;
//   console.log('This', this);
//   (() => {
//     console.log('Arrow this', this)
//   })()
// }
// new Cat('red');


// const book1 = {
//   title: 'Book one',
//   author: 'John Doe',
//   year: 2019,
//   getSummary1: function() {
//     return this.title;
//   },
//   getSummary2: () => {
//     return this;
//   },
//   getSummary3: function() {
//     let getThis = function() {
//       return this;
//     };
//     return getThis();
//   },
//   getSummary4: function() {
//     let getThis = () => {
//       return this.title;
//     };
//     return getThis();
//   }
// };
//
// console.log(book1.getSummary1());
// console.log(book1.getSummary2());
// console.log(book1.getSummary3());
// console.log(book1.getSummary4());