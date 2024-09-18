// const dog = {
//     name: 'Max',
//     breed: 'Dachshund',
//     age: 5,
//     weightInPounds: 12,
//     eat: function() { // This is a way to create a function inside an object
//         console.log('Chomp!');
//     },
//     bark() { // This is a function inside an object and it's called method
//         console.log('Woof!');
//     }
// }

// const anotherDog = {
//     name: 'Douga',
//     breed: 'Pointer',
//     age: 2,
//     weightInPounds: 20,
//     eat: function() { // This is a way to create a function inside an object
//         console.log('Chomp!');
//     },
//     bark() { // This is a function inside an object and it's called method
//         console.log('Woof!');
//     }
// }

// function getDog(name, breed, age, weightInPounds) {
//     return {
//         name: name,
//         breed: breed,
//         age: age,
//         weightInPounds: weightInPounds,
//         eat() {
//             console.log(this.name + "Chomp!");
//         },
//         bark() {
//             console.log(this.name + "Woof!");
//         }
//     }
// }

// function Dog(name, breed, age, weightInPounds) {
//     // this = {};

//     // Add properties to this
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.weightInPounds = weightInPounds;

//     this.eat = function() {
//         console.log(this.name + "Chomp!");
//     }
//     this.bark = function() {
//         console.log(this.name + "Woof!");
//     }
// }

// const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
// console.log(anotherDog);

// const person = {
//     name: "steven"
// };

// // console.log(person);

// person.favoriteFood = "tacos";
// // console.log(person);

// person["favoriteIceCream"] = "chocolate";
// // console.log(person);

// delete person.favoriteIceCream;
// // console.log(person);

// person.eat = function() {
//     console.log("start eating");
// }

// // person.eat();

// person = {}

// const person = {
//     name: "Steven"
// }; 

// console.log( person.constructor );

// let newObj = {};
// let newObj = new Object();

// new String(); // "Steven"
// new Boolean(); // true, false
// new Number(); // 1, 2, 3

// function add(num1, num2) {
//     return num1 + num2;
// }

// const n = add;

// console.log(n(2, 2));

// console.log( add.length);

// function Programmer(name) {
//     this.name = name;
//     this.writeCode = function() {
//         console.log("Code in JavaScript");
//     }
// }

// console.log( Programmer.length);
// console.log( Programmer.constructor);

// const Programmer = new Function("name", `
//     this.name = name;
//     this.writeCode = function() {
//         console.log("Code in JavaScript");
//         }
//     `);

// const newProgrammer = new Programmer("Steve");

// newProgrammer.writeCode();

// let a = { value: 20 };
// let b = a;

// a.value = 100;

// console.log(a);
// console.log(b);

// const dog = {
//     name: "Max",
//     age: 5,
//     eyeColor: "Blue"
// };

// for (const key in dog) {
//     console.log(dog[key]);
// }

// const keys = Object.keys(dog);
// // console.log(keys);

// const values = Object.values(dog);
// // console.log(values);

// const entries = Object.entries(dog);
// console.log(entries);

// for ( const key of Object.keys(dog)) {
//     console.log(key);
// }

// for (const value of Object.values(dog)){
//     console.log(value);
// }
 
// for (const entry of Object.entries(dog)){
//     console.log(entry);
// }

// let min = 1;
// let max = 10;

// const randomNum =  Math.round( Math.random() * (max - min) + min);

// console.log(randomNum);

// const name = "Steven";
// console.log(typeof name);

// const anotherName = new String("Joe");
// console.log(typeof anotherName);

// let sentence = "A new sentence.";
// const doesIncludeNew = sentence.includes("new");
// console.log(doesIncludeNew);

