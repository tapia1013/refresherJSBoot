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










// //       USING "THIS" in methods
// // Use the keyword "this" to access other props on the same object
// const person2 = {
//   first: 'Robert',
//   last: 'Herjavec',
//   fullName() {
//     return `${this.first} ${last}`
//   }
// }
// person2.fullName() // "Robert Herjavec"
// person2.last = "Plant";
// // last name was updated
// person.fullName(); // "Robert Plant"




// const person = {
//   first: 'Cherilyn',
//   last: 'Sark',
//   nickName: 'Cher',
//   fullName() {
//     // we can use 'this' to refer to whatevers inside in this scope object
//     // console.log(this.first); // Cherilyn


//     // we can destructure "this", so we wont have to use "this.first" or "this.last"
//     const { first, last, nickName } = this;


//     return `${first} ${last} AKA ${nickName}`
//   },
//   // we could also add another method to the object and call a diff method calling "this"
//   printBio() {

//     // get fullName from fullName and print something else
//     const fullName = this.fullName()

//     console.log(`${fullName} is a person`);

//   }

// }
// // "this" in the person method refers to the object itself... so its not logging the window cause its in a different scope
// person.fullName();


// // If we call person.printBio() we'll get an error so we have to add this. to fullName in printBio method
// person.printBio() //Cherilyn Sark AKA Cher is a person














// //             THIS: invocation Context
// // The value of "this" depends on the invocation context of the function it is used in.
// // The function will change depending on how the function is actually executed NOT JUST WHERE YOU WROTE IT
// /**
//  * 
//  *           IMPORTANT 
//  * 
//  * 
//  * "THIS" WILL ALWAYS BE SET TO WHATEVER IS IN THE LEFT
//  *  
//  *  person.printBio() // "this" is set to person
//  * 
//  *  cookies.cook() // "this" is set to cookies
//  * 
//  * 
//  * 
//  *     IF THERES NOTHING TO THE LEFT, "THIS" WILL BE SET TO THE WINDOW GLOBAL EXECUTION SCOPE
//  * 
//  * 
//  * 
//  *   WITH ARROW FUNCTIONS "THIS" IS A BIT DIFFERENT
//  * 
//  *      ARROW() => {} DONT GET THEIR OWN VERSION OF "THIS"
//  * 
//  *    with arrows we usually use .bind() with it
//  * 
//  * 
//  * 
//  * 
//  * *****/


// const person = {
//   first: 'Poop',
//   last: 'Bear',
//   nickName: 'Poo',
//   fullName() {
//     // In a method, "this" refers to the object the method LIVES in:
//     const { first, last, nickName } = this;
//     return `${first} ${last} AKA ${nickName}`
//   },
//   printBio() {
//     // references the window when we call pirntBio from the const printBio = person.printBio
//     console.log(this);

//     const fullName = this.fullName();
//     // fullName returns whats in fullName()
//     return `${fullName} is a person!`;

//   },
//   // arrow "this" is set to window
//   laugh: () => {
//     console.log(this);
//     console.log(`${this.nickName} says HAHAHA!`);
//   }
// }
// person.printBio()



// //                    GLOBAL
// // // HOW WE CAN CHANGE THE VALUE OF "THIS" is by making a reference to the bio
// // const printBio = person.printBio;
// // // // printBio is not a function
// // printBio;

// //                    OBJECT
// // BUT WE DONT STORE IN A VARIABLE AND JUST WRITE IT NORAMLLY THE "THIS" REFERENCES TO THE OBJECT
// person.printBio(); // {first: "Poop", last: "Bear", nickName: "Poo", fullName: ƒ, printBio: ƒ}





// //            ARROW FUNCTION "THIS"
// // ARROW() =>{} DONT GET THEIR OWN VERSION OF "THIS"

// // if we call laugh we will see "this" pointing to global and "this" being undefined in the says HAHAHA!
// person.laugh()

































































//               ANNOYING DEMO
// SINCE ARROW FUNCTIONS DONT HAVE THEIR OWN "THIS" IT JUST RELIES ON THE THIS WE HAVE FROM START()
// SOMETIMES ARROW FUNCTIONS ARE BETTER TO USE CAUSE WE DONT WANT A NEW "THIS" 
// BUT ON THE OTHER HAND ARROW FUNCTIONS SUCK AS A REGULAR METHOD ON A OBJECT.

// THIS IN ARROW DOESNT REFERENCES THE OBJECT BUT THE WINDOW


const annoyer = {
  phrases: [
    "litterally",
    "cray cray",
    "I cant even",
    "totes",
    "YOLO",
    "canot stop, wont stop"
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length)

    // return to access
    return phrases[idx]

  },
  // starts phrases
  start() {
    // console.log(this.pickPhrase());

    // store "this" in a var so we can have access, not IDEAL
    // const that = this;

    // HAVE PROBLEMS WITH "THIS"
    // setInterval(function () {
    //   // console.log(this);
    //   // console.log(that);
    //   // console.log(that.pickPhrase());
    // }, 3000)


    // ARROW FUNCTIONS AVOID "THIS" PROBLEM... ARROWS DONT HAVE THEIR OWN "THIS"
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000)
  },
  // stops annoyer
  stop() {
    // CLEAR INTERVALS STOPS THE SETINTERVAL but we need an ID
    clearInterval(this.timerId)

    console.log("PHEW THANKS ITS NOW OVER!");
  }
}


// setInterval(func, 3000)



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































