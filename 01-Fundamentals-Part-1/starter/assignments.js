//First assignment Values and Variables

//let country = "Norway";
//let continent = "Europe";
//let population = 5379000;

//Second assignment Data Types

//let isIsland = false;
//let language

//console.log(isIsland);
//console.log(population);
//console.log(country);
//console.log(language);

// Coding Challenge #1

const markHeightOne = 1.69;
const markWeightOne = 78;
const markHeightTwo = 1.88;
const markWeightTwo = 95;

const bmiMarkOne = markWeightOne / markHeightOne ** 2;
const bmiMarkTwo = markWeightTwo / (markHeightTwo * markHeightTwo)

const johnHeightOne = 1.95;
const johnWeightOne = 92;
const johnHeightTwo = 1.76;
const johnWeightTwo = 85;

const bmiJohnOne = johnWeightOne / johnHeightOne ** 2;
const bmiJohnTwo = johnWeightTwo / (johnHeightTwo * johnHeightTwo);

const markHigherBmiOne = bmiMarkOne > bmiJohnOne;
const markHigherBmiTwo = bmiMarkTwo > bmiJohnTwo;


console.log(bmiMarkOne);
console.log(bmiMarkTwo);
console.log(bmiJohnOne);
console.log(bmiJohnTwo);
console.log(markHigherBmiOne);
console.log(markHigherBmiTwo);