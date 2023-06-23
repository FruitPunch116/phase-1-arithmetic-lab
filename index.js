//All the logs to the console are for the testing process.

let num1 = 31;
let num2 = 2;

//alternative method
// const multiply = num1 * num2;

//Multiply a random number between 0 + (31 * 2)
const multiply = Math.round(Math.random()*0 +(num1 * num2));
// console.log(`"Multiply" result: ${multiply}`)

//Generate a random number between 0 and 100.
const random = Math.round(Math.random()*100)
// console.log(`"Random" result: ${random}`)

let num3 = 28;
let num4 = 6;
//Return the leftover from the divission.
const mod = num3%num4
// console.log(`"Mod" result: ${mod}`)

let min = 19;
const max = Math.floor(Math.random()*(min - min)+20)
// console.log(`"Max" result: ${max}`)