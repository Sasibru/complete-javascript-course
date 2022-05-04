'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :)')

// const interface = 'Audio';
// const private = 236;
// const if = 23;

// FUNCTIONS

// function logger() {
//     console.log('My name is Sander');
// }

// calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// Function declaration

// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge1(1995);
// console.log(age1);

// Function expression

// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }
// const age2 = calcAge2(1995);

// Arrow function

// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1995);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
// return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1995, 'Sander'));

// Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`)
//         return -1;
//     }

// return retirement;

// }
// console.log(yearsUntilRetirement(1995, 'Sander'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


// ARRAYS

// const friendOne = 'Michael';
// const friendTwo = 'Steven';
// const friendThree = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1995, 1984, 2008, 2022);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);

// const firstName = 'Sander'
// const sander = [firstName, 'Simonsen', 'Brustad', 2022 - 1995, friends];
// console.log(sander)

// // Exercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const ageOne = calcAge(years[0]);
// const ageTwo = calcAge(years[1]);
// const ageThree = calcAge(years[years.length - 1]);
// console.log(ageOne, ageTwo, ageThree);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Add elements
/*
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //Legge til paa slutten
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Legge til paa starten
console.log(friends);

// Remove elements
friends.pop() //Det siste elementet
console.log(friends);
const popped = friends.pop();
console.log(popped);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf('Steven')); //sjekke hvor et element ligger i arrayen
console.log(friends.indexOf('Bob')); // Finnes ikke saa den vil vise -1

friends.push(23);
console.log(friends.includes('Steven')); // Finnes saa vil bli True
console.log(friends.includes('Bob')); // Finnes ikke saa vil bli False
console.log(friends.includes('23')); // Strict equality saa vil bli false
console.log(friends.includes(23)); // True

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

// OBJECTS
/*
const sander = {
    firstName: 'Sander',
    lastName: 'Brustad',
    age: 2022 - 1995,
    job: 'Soundtechnician',
    friends: ['Oscar', 'Andreas', 'Joakim']
};
*/
/*
const sander = {
    firstName: 'Sander',
    lastName: 'Brustad',
    age: 2022 - 1995,
    job: 'Soundtechnician',
    friends: ['Oscar', 'Andreas', 'Joakim']
};

console.log(sander);

console.log(sander.lastName);
console.log(sander['lastName']);

const nameKey = 'Name';
console.log(sander['first' + nameKey]);
console.log(sander['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Sander? Choose between firstName, lastName, age, job and friends');

// if (sander[interestedIn]) {
//     console.log(sander[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
// };

sander.location = 'Norway';
sander['twitter'] = '@donthave';
console.log(sander);

//Challenge
console.log(`${sander.firstName} has ${sander.friends.length} friends, and his best friend is called ${sander.friends[1]}.`)
*/

// Object methods
/*
const sander = {
    firstName: 'Sander',
    lastName: 'Brustad',
    birthYear: 1995,
    job: 'Soundtechnician',
    friends: ['Oscar', 'Andreas', 'Joakim'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

console.log(sander.calcAge());
console.log(sander.age);
console.log(sander['calcAge'](1995));

//Challenge
console.log(sander.getSummary());
*/



// LOOPS

/*
// console.log('Lifting weights repitition 1');
// console.log('Lifting weights repitition 2');
// console.log('Lifting weights repitition 3');
// console.log('Lifting weights repitition 4');
// console.log('Lifting weights repitition 5');
// console.log('Lifting weights repitition 6');
// console.log('Lifting weights repitition 7');
// console.log('Lifting weights repitition 8');
// console.log('Lifting weights repitition 9');
// console.log('Lifting weights repitition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
}
*/

/*
const sanderArray = [
    'Sander',
    'Brustad',
    2022 - 1995,
    'SoundTechnician',
    ['Oscar', 'Andreas', 'Joakim'],
    true
];
const types = [];

// console.log(sanderArray[0]);
// console.log(sanderArray[1]);
// ...
// console.log(sanderArray[4]);
// sanderArray[5] does NOT exist

for (let i = 0; i < sanderArray.length; i++) {
    // Reading from sanderArray
    console.log(sanderArray[i], typeof sanderArray[i]);

    // Filling types Array
    // types[i] = typeof sanderArray[i];
    types.push(typeof sanderArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


// Continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < sanderArray.length; i++) {
    if (typeof sanderArray[i] !== 'string') continue;

    console.log(sanderArray[i], typeof sanderArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < sanderArray.length; i++) {
    if (typeof sanderArray[i] === 'number') break;

    console.log(sanderArray[i], typeof sanderArray[i]);
}
*/

const sanderArray = [
    'Sander',
    'Brustad',
    2022 - 1995,
    'SoundTechnician',
    ['Oscar', 'Andreas', 'Joakim']
];

