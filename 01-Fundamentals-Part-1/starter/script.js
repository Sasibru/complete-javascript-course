/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Sander";
console.log(firstName);

const PI = 3.14;
*/

// console.log(typeof true);
/*
let age = 30;
age = 31;

const birthYear = 1995;
*/


// Template literals

// const firstName = 'Sander';
// const job = 'sound engineer'
// const birthYear = 1995;
// const year = 2022;

// const sander = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(sander);

// const sanderNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// console.log(sanderNew);

//IF ELSE
/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🐱')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`)
}

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Type conversion
// const inputYear = '1995';
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// Type coercion
// console.log('I am ' + 27 + ' years old')// Pluss converter number til strings
// console.log('23' - '10' - 3); // Minus converter strings til numbers
// console.log('23' * '2'); //Converter strings til numbers
// console.log('23' / '2'); //Converter strings til numbers

// 5 falsy values: 0, '', undefined, null, NaN

//console.log(Boolean(0)); //false
//console.log(Boolean(undefined)); //false
//console.log(Boolean('Sander')); //true
//console.log(Boolean({})); //true
//console.log(Boolean('')); //false
/*
const money = 0;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log("You should get a job!")
}

let height;
if (height >= 0) {
    console.log('Yay');
} else {
    console.log('Height is UNDEFINED')
}
*/

// === vs ==
/*
const age = 18; //endre dette til string for else statement
if (age === 18) {
    console.log('Hello adult (strict)')
} else {
    console.log('Hello adult (loose)')
}
*/
//avoid loose så mye som mulig

/* Loose
const favourite = prompt("What's your favorite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // '23' == 23
    console.log("Cool, 23 is an amazing number!")
}
*/

// Strict
/*
const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23
    console.log("Cool, 23 is an amazing number!")
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23, 7 or 9')
}
*/

// Logical operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense); // NOT

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive..')
// }

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive..')
// }

// The switch statement

// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :)');
//         break;
//     default:
//         console.log('Not a valid day!');
// }
// Same code in if else statements
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// }