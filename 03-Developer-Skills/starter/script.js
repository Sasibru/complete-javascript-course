// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) {
//   console.log(23);
// }

// const calcAge = birthYear => 2037 - birthYear;
// console.log('Hello World');

/*
const temperatures = [3, -2, -6, -1, 'error', 9 , 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
 const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
 console.log(amplitude);
*/

// const measureKelvin = function() {
//     const measurment = {
//         type: 'temp',
//         unit: 'celsius',
       
//        // C) FIX
//         value: Number(prompt('Degrees celsius:')),
//     }

//     // B) FIND
//     console.table(measurment);

//     console.log(measurment.value);
//     // console.warn(measurment.value);
//     // console.error(measurment.value);
//     debugger;
//     const kelvin = measurment.value + 273;
//     return kelvin;
// }
// // A) IDENTIFY
// console.log(measureKelvin());


// Coding challenge

const temperatures = [17, 21, 23];
const day = [1, 2, 3];

const printForecast = function(arr) {

    for (let i = 0; i < temperatures.length; i++){
        console.log(`... ${temperatures[i]} in ${day[i]} day`);
    }
}


//Hvordan faa de til hver sin string?
printForecast(temperatures, day);