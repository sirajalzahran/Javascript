// let priceOfChocolate = 1.99;
// let hasAmountInCash = 5;

// const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

// if (canBuyChocolate) {
//     console.log('Enjoy your purchase')
// } else {
//     console.log("Sorry you don't have enough money")
// }


// let num1 = 14;
// let num2 = 10;

// const isNum1Greater = num1 > num2;
// console.log(isNum1Greater);

// const isNum1GreaterOrEqual = num1 >= num2;
// console.log(isNum1GreaterOrEqual);

// const isNum1LessThan = num1 < num2;
// console.log(isNum1LessThan);

// let hour = 10;

// if (hour >= 6 && hour <= 12) {
//     console.log('Serving breakfast')
// } else if (hour > 12 && hour <= 14) {
//     console.log('Serving lunch')
// } else {
//     console.log('Serving dinner')
// }

// let job = "Software Developer";

// switch (job){
//     case "Software Developer":
//         console.log("Writes code");
//         break;
//     case "Designer":
//         console.log("Makes user interface documents");
//         break;
//     case "Cloud Engineer":
//         console.log("Manages and deploys cloud resources");
//         break; 
//     default:
//         console.log("Works directly with customers");         
// }

// if (job === "Software Developer") {
//     console.log("Writes code");
// } else if (job === "Designer") {
//     console.log("Makes user interface documents");
// } else if (job === "Cloud Engineer") {
//     console.log("Manages and deploys cloud resources");
// } else {
//     console.log("Works directly with customers")
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let idx = 0;
// let lengthOfArray = numbers.length;


// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx])

// for (let idx = 0; idx < numbers.length; idx++){
//     console.log(numbers[idx])
// }

// for (let num = 0; num < 100 ; num++){
//     console.log(num)
// }

// let idx = 0;
// while (idx < numbers.length) {
//     console.log(numbers[idx]);

//     idx++;
// }


// let sum = 0;
// while (true) {
//     console.log("Loop");
//     sum++;

//     if (sum === 10)
//         break;
// }

// let i = 0 ;

// do {
//     console.log(i);
//     i++;
// } while (i > 10);

// const course = {
//     name: "JavaScript",
//     duration: 3,
//     section: 7
// };

// console.log(course.name)
// console.log(course["duration"])
// console.log(course.section)

// for (const key in course){
//     console.log(course[key])
// }

// let numbers = [1, 2, 3, 4, 5];

// for (let element of numbers){
//     console.log(element)
// }

// for (let i = 0; i < 10; i++){
//     if (i === 5) {
//         break; // exits the loop when i is 5
//     }
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let i = 0;
// do  {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// } while (i < 10);

// const obj = { a: 1, b: 2, c: 3};
// for (let key in obj) {
//     if (key === 'c') {
//         break;
//     }
//     console.log(obj[key]);
// }

// const arr = [1, 2, 3, 4, 5];
// for (let element of arr){
//     if (element === 3) {
//         break;
//     }
//     console.log(element);
// }

// for (let i = 0; i < 10; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// do {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// } while (i < 10);

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// for (let key in obj) {
//     if (obj[key] % 2 === 0) {
//         continue;
//     }
//     console.log( obj[key] );
// }

// const arr = [1, 2, 3, 4, 5];
// for (let element of arr) {
//     if (element % 2 === 0) {
//         continue;
//     }
//     console.log(element);
// }

// function maxNum(num1, num2){
//     // ternary operator if num1 greater than num2 then return num1 which mean its true,
//     // else return num2 if its false which mean num2 greater than num1
//     return num1 >= num2 ? num1 : num2; 
// }
// console.log(maxNum(2, 4))

// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return("FizzBuzz");
//     } else if (number % 3 === 0) {
//         return("Fizz");
//     } else if (number % 5 === 0) {
//         return("Buzz");
//     } else {
//         return(number);
//     }
// }

// console.log(fizzBuzz(7));

// function displayEvenNumbers(array){
//     for (const number of array) {
//         if (number % 2 === 0)
//             console.log(number);
//     }
// }

// function displayOddNumbers(array){
//     for (const number of array) {
//         if (number % 2 != 0)
//             console.log(number);
//     }
// }

// console.log("Even Nums:")
// displayEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log("Odd Nums:")
// displayOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);