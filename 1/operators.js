/* -, +, *, /, % */

// let a = 2;
// let b = "2";


// This knowns as loose equality named as truthy
// It convert them both to the same type and check it's equality
// Loose equaltiy in JavaScript refers to the comparison of two values
// using two equal signs without enforcing type similarity
// console.log(a == b);

// This knowns as strict equality
// It convert them as they are without any conversions
// strict equality refers to using three equal signs for checking for equality
// console.log( a === b);

// console.log(1 == "1");

// console.log(1 === "1");


// let age = 23;
// const canDrive = age >= 18 ? true : false;

// console.log(canDrive);


// Ternary operator
// let point = 110;
// const customerType = point > 100 ? 'gold' : 'silver';

// console.log(customerType);

// || refers to Or which if one of them is true return true no matter what is the other
// console.log(true || true);// true
// console.log(false || true);// true
// console.log(true || false);// true
// console.log(false || false);// false

// let hasReservation = true;
// let acciptingWalkIns = false;

// const hasAccessToTable = hasReservation || acciptingWalkIns;

// console.log(hasAccessToTable)

// && refers to and which if one of them is true and other is not true return false 
// console.log(true && true);// true
// console.log(false && true);// false
// console.log(true && false);// false
// console.log(false && false);// false

// let hasReservation = true;
// let acciptingWalkIns = false;

// const hasAccessToTable = hasReservation && acciptingWalkIns;

// console.log(hasAccessToTable)

// let age = 23;
// let hasDriveLicense = false;
// const canDrive = age >= 18 && hasDriveLicense;

// console.log(canDrive);

// let a = true, b = true, c = true,  d = true;

// console.log(a && b || c && d);
// console.log( (a && b) || (c && d) );

// console.log(!true);

// let isClosedOnSunday = true;
// const isResturantOpenOnSunday = !isClosedOnSunday;

// console.log(isResturantOpenOnSunday);

// let a = !null;
// let a = 5;
// let a = null;
// const result = a ?? false; // syntactic sugar
// const result = (a !== null && a !== undefined) ? 'a' : false;
// const result = (a !== null && a !== undefined) ? a : false;
// console.log(result);

//falsy in javascrip are
// undefined - null - 0 - false - "" - NaN
// Anything other are truthy

// let usersChosenColor = 'blue';
// let defaultColor = 'green';

// const currentWebsiteColor = usersChosenColor || defaultColor;

// console.log(currentWebsiteColor);
