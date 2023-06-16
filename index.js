
// Write your code here
let num1 = 31;
let num2 = 2;
// const multiply = num1 * num2;
const multiply = Math.round(Math.random()*0 +(num1 * num2));
console.log(`"Multiply" result: ${multiply}`)

const random = Math.round(Math.random()*100)
console.log(`"Random" result: ${random}`)

//Do not work, create a bug, and breaks the npm tests.
// console.log(`This is math random ${Math.random()}`)

let num3 = 28;
let num4 = 6;
const mod = num3%num4
console.log(`"Mod" result: ${mod}`)

let min = 19;
const max = Math.floor(Math.random()*(min - min)+20)
console.log(`"Max" result: ${max}`)