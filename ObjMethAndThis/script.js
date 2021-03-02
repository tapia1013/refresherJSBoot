/**
 *
 *    Object Methods and the 'This' Keyword
 *
 *
 *         PART 2
 *
 *
 *
 * GOALS:
 *    ADD METHODS TO OBJECTS
 *    USE NEW OBJECT SHORTHAND SYNTAX
 *    USE COMPUTED PROPERTIES
 *    UNDERSTAND PROTOTYPES
 *    EXPLAIN HOW "THIS" WORKS
 *
 *
 *
 *
 *
 */










// //           SHORTHAND OBJECT PROPERTIES

// // THE SECRET LIFE OF OBJECTS
// //  WE'VE SEEN THE BASICS OF OBJECT LITERALS, BUT THERE IS SO MUCH MORE TO TALK ABOUT WITH OBJECTS




// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r)
//   const avg = sum / arr.length;

//   // return {
//   //   max: max,
//   //   min: min,
//   //   sum: sum,
//   //   avg: avg
//   // }

//   // shorthand syntax if they;re the same
//   return {
//     max,
//     min,
//     sum,
//     avg
//   }
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats = getStats(reviews);

// // {max: 5, min: 2.8, sum: 26.74, avg: 3.82}
// stats;


































// //               COMPUTED PROPERTIES
// // new syntax to objects
// // ITS JUST AN IMPROVEMENT TO THE OBJECT LITERAL SYNTAX WHERE WE CAN A PROP WITH A DYNAMIC KEY

// //**** FOR CREATING FUNCTIONS THAT EITHER RETURN OBJECTS OR ADD THINGS INTO OBJECTS */


// // We can use a variable as a key name in an object literal property
// const user = 'Jools';
// const userRoles = {
//   [user]: 'Admin'
// }
// userRoles; // {Jools: 'Admin'}




// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'Director'
// const person2 = 'james'

// // lets say we want a dynamic value where i have key set tp the value of role which is host the value would be person


// // OLD WAY
// // const team = {}
// // team[role] = person;
// // // team; // {host: "Jools Holland"}

// // // if we want to add to pair
// // team[role2] = person2



// //        NEW WAY WE CAN DO IT ALL AT ONCE
// const team = {
//   [role]: person,
//   [role2]: person2,
//   [1 + 6 + 9]: 'sixteen'
// }
// // {16: "sixteen", host: "Jools Holland", Director: "james"}
// team;





// // // NOT USING COMPUTED PROPERTY
// // function addProp(obj, key, value) {
// //   const copy = { ...obj }
// //   copy[key] = value;
// //   return copy
// // }
// // const res = addProp(team, 'happy', ':)');

// // // {16: "sixteen", host: "Jools Holland", Director: "james", happy: ":)"}
// // console.log(res);





// // USING COMPUTED PROPERTIES
// const addProp = (obj, key, value) => {
//   return {
//     ...obj,
//     [key]: value
//   }
// }
// const res = addProp(team, 'happy', ':)');

// // {16: "sixteen", host: "Jools Holland", Director: "james", happy: ":)"}
// console.log(res); // same result



























// //            ADDING METHODS TO OBJECTS
// // we can add functions as properties on objects
// //  WE CALL FUNCTIONS IN OBJECTS METHODS


// // const math = {
// //   multi: function (x, y) {
// //     return x * y
// //   },
// //   divide: function (x, y) {
// //     return x / y
// //   },
// //   square: function (x) {
// //     return x * x
// //   }
// // }





// // function expression
// // const add = function (x, y) {
// //   return x + y
// // }



// // METHODD
// const math = {
//   add: function (x, y) {
//     return x + y
//   },
//   multi: function (x, y) {
//     return x * y
//   }
// }

// math.add(3, 4) // 7
// math.multi(6, 5) // 30































// //        METHOD SHORTHAND SYNTAX
// // we can use arrow functions but theres also a way where we dont even have to add the key for the value


// // const math = {
// //   blah: 'Hi',
// //   add(x, y) {
// //     return x + y;
// //   },
// //   multi(x, y) {
// //     return x * y
// //   }
// // }
// // math.add(50, 60) // 110



// const auth = {
//   username: 'Tommy',
//   login() {
//     console.log('LOGGED YOU IN');
//   },
//   logout() {
//     console.log('GOODBYE');
//   }
// }
// // turns into a method
// auth; // {login: ƒ}
// // after we add username and logout
// auth; // { username: "Tommy", login: ƒ, logout: ƒ }

















































/**
 *
 *
 *
 *                  T H I S
 *
 * THE KEYWORD "THIS" CAN BE A MAJOR POINT OF CONFUSION AND MISERY AND HARDSHIP AND GENERAL SUFFERING IN THE LIFE OF A JS DEVELOPER
 *
 *
 * "this" = window in global
 *
 *
 */




// // SayHi() is added as a prop/method in the global object aka "this"

// function sayHi() {
//   console.log('HI');

//   // "this" refers to the current exec scope
//   console.log(this);
// }

// // returns to us hi and a object called window
// sayHi()



// // Still refers to the window even tho its a const
// const greet = function () {
//   console.log(this);
// }
// // greet also refers to the window
// greet()













//       USING "THIS" in methods
const person = {
  first: 'Cherilyn',
  last: 'Sark',
  nickName: 'Cher',
  fullName() {
    // we can use 'this' to refer to whatevers inside in this scope object
    // console.log(this.first); // Cherilyn

    console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
  }
}
// "this" in the person method refers to the object itself... so its not logging the window cause its in a different scope
person.fullName();


// 3:11


































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































