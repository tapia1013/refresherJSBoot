/**
 *
 *
 *              FUNCTIONS
 *
 *
 * G O A L S:
 *
 *   Write valid functions
 *
 *   Write functions with arguments
 *
 *   Compare function expressions and function statements
 *
 *   Write a bunch of functions
 *
 *
 */









//               F U N C T I O N S
// Reusable procedures:
//     FUnctions allow us to write reusable, modular code
//     We define a chunk of code that we can then execute at a later point
// We use them ALL THE TIME



// Define.... function declaration or method
// function funcName() {
//   // do something
// }


// function grumpus() {
//   console.log('ugh.... its you');
//   console.log('for the last time...');
//   console.log('LEAVE ME ALONE!');
// }
// // grumpus()







// // LOOPS THE FUNCTION

// for (let i = 0; i < 20; i++) {
//   grumpus() // runs grumpus 20 times
// }


















































//                DICE ROLL FUNCTION


// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }
// rollDie()



// // call function within a function
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }


// // we can call functions within other functions
// function throwDice() {
//   // console.log(this);
//   for (let i = 0; i < 6; i++) {
//     rollDie();
//   }
// }


// throwDice()



















//=======================================================


















//                FUNCTION ARGUMENTS
// Inputs:  Right now our simple functions accept zero inputs they behave the same way everytime.

// Arguments - We can also write functions that accept inputs, called arguments



// function greet() {
//   console.log('hi');
// }

// // Greet2
// function greet2(name) {
//   console.log(`Hello, ${name}!`);
// }
// greet2('Vee')



// // function add(a, b) {
// //   console.log(a + b);
// // }
// // add(3, 4) // 7





// function rollDie() {
//   let roll = Math.floor(Math.random() * 10) + 1;
//   console.log(`Rolled: ${roll}`)
// }

// function throwDice(numRolls) {
//   for (let i = 0; i < numRolls; i++) {
//     rollDie();
//   }
// }

// throwDice(6)














//==================================================



















//           FUNCTIONS WITH MULTIPLE ARGS




// function square(num) {
//   console.log(num * num);
// }
// square(8)



//           2, 7
// function sum(x, y) {
//   //          2 + 7
//   console.log(x + y);
// }
// //  x, y
// sum(2, 7)





// const sum = (x, y) => console.log(x + y);
// sum(2, 7)




// const thots = ['Vee', 'Victoria', 'Cakes', 'Towiah']


// thots.forEach(thot => {
//   console.log(`Hello, my name is ${thot} and I am a thot!`);
// })




// Where order does matter
// function divide(a, b) {
//   console.log(a / b);
// }
// divide(4, 5);



















































//                    R E T U R N

// Built-in method "return" values when we call them. We can store those values

const yell = 'I will end you'.toUpperCase();
yell; // "I WILL END YOU"


const idx = ['a', 'b', 'c'].indexOf('c');
idx; //2












































































































































































































































































































































































































































































































































































































































































