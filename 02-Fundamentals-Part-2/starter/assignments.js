'use strict';

// Coding challenge #1

// const calcAverage = (vOne, vTwo, vThree) => (vOne + vTwo + vThree) / 3;

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);


// const checkWinner = function (avgDolphins, avgKoalas) {

//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
//     } else {
//         console.log('No team wins')
//     }
// }
// checkWinner(scoreDolphins, scoreDolphins);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);





//Coding Challenge #2
/*
const calcTip = billValue => billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[bills.length - 1]) + bills[bills.length - 1]];

console.log(total);
*/


// Coding Challenge #3
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

mark.calcBmi();
john.calcBmi();

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBmi()}) is higher than ${john.firstName} ${john.lastName}'s (${john.calcBmi()})!`)
} else {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBmi()}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.calcBmi()})!`)
}
*/