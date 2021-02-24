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

// const yell = 'I will end you'.toUpperCase();
// yell; // "I WILL END YOU"


// const idx = ['a', 'b', 'c'].indexOf('c');
// idx; //2






// const scream = 'hello'.toUpperCase();
// scream; // has "<" in console cause its returning
// // console.log(scream); // not returning


// return values we can capture them in a var and we could pass them to another function... in the real wordl we dont really print much with the console, so we use return to return the value








// // No Return
// // our functions print values out, but do not return anything
// function add(x, y) {
//   console.log(x + y);
// }

// add(10, 20) // 30

// // if we try storing that in a var we'll get undefined
// const sun = add(10, 16)

// sum; // undefined










// // WITH RETRUNS.. since we used return now DONT GET UNDEFINED WHEN WE STORE IN A VAR
// function addd(x, y) {
//   return x + y; // RETURN
// }

// // since its returning we can add to a var
// const sum = addd(10, 16);
// sum; //26

// const answer = addd(100, 200);
// answer; // 3000



// // WE CAN ONLY RETURN 1 THING FROM A FUNCTION
// // IF WE WANTED TO RETURN X AND Y ABOVE WE CAN PUT IT AN ARRAY LIKE THIS return [x, y]





















//              RETURNING MULTIPLE VALUES
// return statements end function execution AND specifies the value to be returned by that function


// // for example where return ends the exectution
// function square(x) {
//   return x * x;
//   console.log('ALL DONE');
// }
// square(4); // doesnt shows the console log cause its after the return




// BUT we can use them in a if or for loop inside the functio cause of scope


// function isPurple(c) {
//   if (c.toLowerCase() === 'purple') {
//     return true;
//   }
//   else {
//     return false
//   }
// }


// function isPurple(c) {
//   // have to add return or else it'll say undefined
//   return c.toLowerCase() === "purple" ? true : false
// }


// // HOW A RETURN WOULD STOP A FUNCTION NO MATTER WHERE ITS LOCATED IN THE FUNCTION
// function containsPurp(arr) {
//   for (let color of arr) {
//     if (color === 'purple' || color === 'magenta') {
//       return true
//     }
//   }
//   return false
// }

// containsPurp(['green', 'blue', 'purple', 'red', 'magenta']) // true



















































//               P R A C T I C E



































































































































































































































































































































































































































































































