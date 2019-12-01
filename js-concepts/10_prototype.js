/** __proto__, prototype */
// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }
// Cat.prototype.voice = function() {
//   console.log(`Cat ${this.name} says myau`);
// };
// Cat.prototype.walks = function() {
//   console.log(`Cat ${this.name} walking`);
// };
// const cat = new Cat('Mila', 'white');
// cat.voice();
// cat.walks();
// console.log(cat);
// console.log(Cat.prototype);
// console.log(cat.__proto__);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);


// function Person() {}
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';
// const person = new Person();
// person.name = 'Vladilen';
// console.log('name' in person);
// console.log('skin' in person);
// console.log(person.legs);
// console.log(person.name);
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));


/** Object.create() */
// let proto = {year: 2019};
// const myYear = Object.create(proto);
// console.log(myYear.year);
// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);
// console.log(myYear.year);
// proto.year = 2200;
// console.log(myYear.year);
// proto = {year: 999};
// console.log(myYear.year);
// console.log(proto.year);
