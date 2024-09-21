//function declaration syntax

// function sayHi() {
//     console.log("Hi");
// }

// sayHi();

// function expression syntax

// let sayHi = function() {
//     console.log("Hi");
// };

// sayHi();

// let greeting = function sayHi() {
//     console.log("Hi");
// };

// greeting();

//Hoisting applied only in declaration function syntax
// add(2, 2);

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(2, 2);

// let add = function(num1, num2){
//     console.log(num1 + num2);
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// console.log( multiply(2));

// function multiply( num1, num2){
//     let product = 1;
//     for (const num of arguments)
//         product *= num;
//     return product;
// }

// console.log(multiply(2, 2, 4));

// let course = {
//     name: "JavaScript",
//     duration: "2 hours"
// };

// let newCourse = {
//     ...course,
//     name: "JavaScript Pro",
// };

// console.log(newCourse);

// function multiply(...args){
//     return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// };

// console.log( multiply(1, 2, 3, 4))

// function multiply( multiplier, ...numbers) {
//     return numbers.map(number => number * multiplier);
// }

// console.log( multiply(2, 1, 2, 3, 4));

// function writeCode(language){
//     console.log(`Write code in ${language}`);
// }

// writeCode("JavaScript");
// writeCode("C#");
// writeCode();

// function codeDetails(language = "JavaScript", tool = "VS Code"){
//     console.log(`Write code in ${language} using ${tool}`);
// }

// codeDetails();
// codeDetails("Python");
// codeDetails("PHP", "Notepad++");
// codeDetails("C#", "Visual Studio");

// function createUser(name, role = "guest", status = "active"){
//     console.log(`User: ${name}, Role: ${role}, Status: ${status}`);
// }

// createUser("Steven");
// createUser("Alice", "admin", "active");

// const course = {
//     name: "JavaScript",
//     duration: "3 hours",
//     get details(){
//         return `${this.name} is ${this.duration}`;
//     },
//     set details(value) {
//         let parts = value.split(" is ");
//         this.name = parts[0];
//         this.duration = parts[1];
//     }
// };

// console.log(`${course.name} is ${this.duration}`)

// course.details = "JavaScript Pro is 10 hours";

// console.log(course.details);

//try-catch

// const course = {
//     name: "JavaScript",
//     duration: "3 hours",
//     get details(){
//         return `${this.name} is ${this.duration}`;
//     },
//     set details(value) {
//         if (typeof value !== "string") {
//             throw new Error(`Vlaue, ${value} is not a string`);
//         }
//         let parts = value.split(" is ");
//         this.name = parts[0];
//         this.duration = parts[1];
//     }
// };

// try {
//     course.details = 42;
// } catch (e) {
//     console.log(`Caught an error: ${e.message}`);
// }

// Global Scope

// {
//     const name = "siraj";
//     console.log(name);
// }

// {
//     const name = "siraj";
// }

// console.log(name);

// function greet() {
//     const message = "Hello World";
//     console.log(message);
// }

// greet();
// console.log(message);





