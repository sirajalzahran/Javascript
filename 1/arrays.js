// const numbers = [5, 4, 3, 2, 1];

// numbers.push(7, 8, 9);
// console.log(numbers);

// numbers.unshift(25, 24);
// console.log(numbers);

// numbers.splice(1, 0, 25, 24);
// console.log(numbers);

// const indexOfThree = numbers.indexOf(3);
// console.log(numbers[indexOfThree]);

// const indexOfTen = numbers.indexOf(10);

// if (!numbers.includes(10)) {
//     console.log("10 is not found in the array");
// }
// else {
//     console.log("10 is found in the array")
// }

// const employees = [
//     {
//         id: 1,
//         name: "Jim"
//     },
//     {
//         id: 2,
//         name: "Georges Luke"
//     },
//     {
//         id: 3,
//         name: "Toni Kroos"
//     },
// ];

// const employee = employees.find(function(e) {
//     return e.name === "Jim"
// });
// console.log(employee);

// function add(num1, num2){
//     return num1 + num2;
// }

// const employee = employees.find((e) => e.name === "Jim");

// const add = (num1, num2) => num1 + num2;

// const numbers = [1, 2, 3, 4, 5];

// const lastElement = numbers.pop();
// console.log(`Last Element: ${lastElement}`);
// console.log(numbers);

// const firstElement = numbers.shift();
// console.log(`First Element: ${firstElement}`);
// console.log(numbers);

// const middleElement = numbers.splice(1, 1);
// console.log(`Middle Element: ${middleElement}`);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];

// while (numbers.length > 0)
//     numbers.pop();

// numbers.length = 0;
// console.log(numbers);

// const deleteNumbers = numbers.splice(0, numbers.length);
// console.log(`deletedNumbers: ${deleteNumbers}`)

// const exampleNumbersA = [1, 2, 3];
// const exampleNumbersB = [4, 5, 6];

// const combinedArray = exampleNumbersA.concat(exampleNumbersB);
// console.log(combinedArray);

// const firstSlice = combinedArray.slice(0, 4);
// console.log(firstSlice);

// let combined = [...exampleNumbersA, ...exampleNumbersB];
// console.log(combined);

// let a = [1, 2];
// let b = [...a];

// console.log(b)

// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(`At index ${index}: ${number}`));

// const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = numbers.join(', ');
// console.log(joinedNumbers);

// const courseName = "JavaScript Course";

// const lowercaseCourseName = courseName.toLowerCase();
// const parts = lowercaseCourseName.split(" ");

// const urlSlug = parts.join("-");
// const parts = courseName.toLowerCase().split(" ");
// const urlSlug = parts.join("-");

// console.log(parts);
// console.log(urlSlug);

// let characters = ["c", "d", "b", "a"];
// characters.sort();
// characters.reverse();
// console.log(characters);

// let employees = [
//     { id: 1, name: "Hugo" },
//     { id: 2, name: "Kane" },
//     { id: 3, name: "Bale" },
//     { id: 4, name: "Son" },
// ];
// employees.sort((a, b) => {
//     const lowecaseA = a.name.toLowerCase();
//     const lowecaseB = b.name.toLowerCase();

//     if (lowecaseA < lowecaseB) return -1;
//     if (lowecaseA > lowecaseB) return 1;
// });

// console.log(employees);

// const numbers = [2, 4, 6, 8, 10];

// const areAllEven = numbers.every(number => {
//     return number % 2 === 0;
// });
// console.log(`areAllEven: ${areAllEven}`)

// const employees = [
//     { id: 1, name: "Hugo", role: "QA"},
//     { id: 2, name: "Kane", role: "Developer"},
//     { id: 3, name: "Bale", role: "Designer"},
//     { id: 4, name: "Son", role: "Developer"},
// ];

// const devlopers = employees.filter(employee => employee.role === "Developer");
// console.log(devlopers);

//map method

// const numbers = [2, 4, 6, 8, 10];
// const squareNumbers = numbers.map(num => num * num);
// console.log(squareNumbers);

// const characters = ["a", "b", "c", "d"];
// const upperCaseCharacters = characters.map(char => char.toUpperCase());
// console.log(upperCaseCharacters);

// const employees = [
//     { id: 1, name: "Hugo", email: "Hugo@gmail.com"},
//     { id: 2, name: "Kane", email: "Kane@gmail.com"},
//     { id: 3, name: "Bale", email: "Bale@gmail.com"},
//     { id: 4, name: "Son", email: "Son@gmail.com"},
// ];

// const updatedEmployees = employees.map(employee => ({
//     ...employee,
//     email: employee.email.toLowerCase()
// }));

// console.log(updatedEmployees);

// const numbers = [1, 10, 5, 14];
// let sum = 0;

// for (const num of numbers)
//     sum += num;

// console.log(`Total sum: ${sum}`);

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(`Total sum: ${sum}`);