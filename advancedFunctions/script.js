// /**
//  *
//  *
//  *               F U N C T I O N SCOPES
//  *
//  * Goals:
//  *    Understand scope
//  *    Write Higher Order Functions
//  *    Pass functions as callbacks
//  *
//  *
//  *
//  */












// //                FUNCTION SCOPE

// // variable "visibility"
// //    The location where a variable is defined dictates where we have access to that variable






// // function helpMe() {
// //   let msg = 'Im on fire!';
// //   msg; //  'Im on fire!';
// // }

// // ERROR - msg is scoped to the function
// // msg; // NOT DEFINED CAUSE ITS OuT of SCopE







// // function lol() {
// //   let person = 'Tom';
// //   const age = 45;
// //   var color = 'teal'
// //   console.log(age);
// // }

// // // we can have the same vars inside independ functions and wont affect others inside other functions
// // function changeColor() {
// //   let color = 'purple';
// //   const age = 19;
// //   console.log(age);
// // }

// // lol(); //  45
// // changeColor() // 45

// //       Person is not defined cause not in scope
// // console.log(person); // not defined
// // console.log(color); // not defined
// // console.log(age);





// // let bird = 'mandarin duck';

// // function birdWatch() {
// //   let bird = 'golden pheasant';
// //   console.log(bird);
// // }

// // birdWatch();
// // console.log(bird);








































// //                 BLOCK SCOPE

// // // ****** Block Scope Starts *******
// // let radius = 8;

// // // ****** LOCAL SCOPE BEGINS ******
// // if (radius > 0) {
// //   const PI = 3.14;
// //   let circ = 2 * PI * radius;
// // }
// // // ****** LOCAL SCOPE ENDS ******

// // console.log(radius); // 8
// // console.log(PI); // NOt DEFINED
// // console.log(circ); // NOT DEFINED
// // // ****** BLock SCOPE Ends ******







// // if (true) {
// //   let animal = 'eel';
// //   console.log(animal); // we have access to animal
// // }

// // console.log(animal); // ERROR NOT DEFINED




// // // WHY VAR IS NOT GOOD CAUSE YOU HAVE ACCESS TO IT OUTSIDE THE SCOPE
// // let animals = ['grizzly bear', 'panda bear']
// // for (var i = 0; i < animals.length; i++) {
// //   console.log(i, animals[i]);
// // }
// // // we have access to i and its set to 2
// // console.log(i); // PROBLEM IF WE HAVE THE SAME VAR IN ANOTHER FUNCTION OR VARIABLE





// // //           NOW WITH LET
// // let animals = ['grizzly bear', 'panda bear']
// // for (let i = 0; i < animals.length; i++) {
// //   console.log(i, animals[i]);
// // }
// // // GIVES ERROR CAUSE i IS BOUND TO THE SCOPE WHERE IT WAS WRITTEN
// // console.log(i);







// // function dArr(arr) {
// //   const results = [];

// //   for (let num of arr) {
// //     let double = num * 2;
// //     // we push the current num we're looping through into the empty array we created
// //     results.push(double)
// //   }
// //   return results
// // }

// // console.log(dArr([1, 3, 4])); // [2, 6, 8]








































// //               LEXICAL SCOPE
// // A FUNCTION WITHIN A FUNCTION IS BOUND TO THE PARENT FUNCTION LEXICALLY AND HAS ACCESS TO WHATEVER IS INSIDE THE PARENT FUNCTION


// // function outer() {
// //   let hero = 'Black Panther';

// //   function inner() {
// //     let cryForHelp = `${hero}, please save me!`;
// //     console.log(cryForHelp);
// //   }

// //   inner()
// // }



// // function outer() {
// //   let movie = 'Amadeus';

// //   // we have access to movie in inner func
// //   function inner() {
// //     console.log(movie.toUpperCase());
// //   }
// //   // execute inner from outer
// //   inner()
// // }

// // console.log(outer());
// // console.log(inner()); // error we dont have acces to it cause of lexical evn and scopes





// // function outer() {
// //   let movie = 'Amadeus';

// //   function inner() {
// //     let movie = 'The Shining';

// //     function extraInner() {
// //       console.log(movie.toUpperCase());
// //     }
// //     extraInner()
// //   }
// //   inner()
// // }

// // console.log(outer()); // The Shining








































// // //            FUNCTION EXPRESSIONS
// // // There's another syntax we can use to define functions
// // // Its the same as a regular function but its stored in a variable or anonymus function cause it doesnt have a name but its stored in a variable... THE REASON IT WORKS IS CAUSE IN JS A FUNCTION IS AN OBJECT


// // // const square = function (num) {
// // //   return num * num;
// // // }
// // // console.log(square(7)); // 49




// // // regular function
// // function add(x, y) {
// //   return x + y;
// // }
// // // to execute
// // console.log(add(4, 9)) // 13
// // console.dir(add)


// // // function expression
// // const sum = function (x, y) {
// //   return x + y;
// // }
// // // we execute the same way
// // console.log(sum(4, 5)) // 9
// // // to reveal the object form underlying whats happening in the function
// // console.dir(sum)




// // // WE CAN ADD IN A NAME IN A ANON FUNCTIONS WHEN STORING IN A VARIABLE IT DOESNT HAVE TO BE ANON

// // const product = function multiply(x, y) {
// //   return x * y;
// // }
// // console.log(product(3, 5)); // 15
// // console.log(multiply(4, 3)); // not defined









































// // //            HIGHER ORDER FUNCTIONS
// // // Functions are objects! WE CAN ALSO STORE FUNCTIONS IN A ARRAY

// // function add(x, y) {
// //   return x + y;
// // }

// // const subtract = function (x, y) {
// //   return x - y;
// // }

// // function multiply(x, y) {
// //   return x * y;
// // }

// // const divide = function (x, y) {
// //   return x / y
// // }


// // // NOW WE'RE GOING TO PUT THEM ALL INTO AN ARRAY
// // const operations = [add, subtract, multiply, divide]



// // // if we want to get subtract we call op[index number we want], it doesnt execute tho FOR IT TO EXECUTE WE NEED TO ADD () AFTER THE INDEX[] AND PUT THE X, Y VALUES IN THE (X,Y)

// // // calling subtract 
// // operations[1](100, 9) // 14
// // // calling multiply
// // operations[2](34, 2) // 68


// // // ITS NOT VERY USEFUL TO PUT THEM IN A ARRAY TO CALL THEM MANUALLY ONE AT A TIME... THE POINT IS THAT WE CAN LOOP OVER OPERATIONS AND CALL EACH FUNCTION
// // for (let func of operations) {
// //   let results = func(3, 4);
// //   console.log(results);
// // }





// // // STORE THEM IN A OBJECT... METHOD
// // const thing = {
// //   doSomething: multiply
// // }
// // // we call it but not execute like this
// // thing.doSomething(50, 2) // 100












































// //             FUNCTIONS AS ARGUMENTS
// // // HIGHER ORDER FUNCTIONS
// // //   Functions that operate on/with other functions.n       They can:
// // //      Accept other functions as arguments
// // //      return a function



// // // function that accepts a function as an argument

// // // function callTwice(func) {
// // //   func();
// // //   func()
// // // }
// // // function laugh() {
// // //   console.log('HAHAHAHAHAHAHAAHAHAHAHAHA');
// // // }
// // // callTwice(laugh) // Pass a func as an arg!

// // // function callThreeTimes(f) {
// // //   f();
// // //   f();
// // //   f();
// // // }
// // function cry() {
// //   console.log('BOO HOO IM SAH SAD');
// // }
// // function rage() {
// //   console.log('GAHHHH IM SAHH PISSED OFF');
// // }
// // // callThreeTimes(rage)

// // // function repeatNTimes(action, num) {
// // //   for (let i = 0; i < num; i++) {
// // //     action()
// // //   }
// // // }
// // // repeatNTimes(rage, 13);

// // // Will pass 2 functions but randomly call 1 not 2
// // function pickOne(f1, f2) {
// //   let rand = Math.random();
// //   console.log(rand);
// //   if (rand < 0.5) {
// //     f1()
// //   } else {
// //     f2()
// //   }
// // }
// // pickOne(cry, rage)




























































// // //          FUNCTIONS AS RETURN VALUES
// // // AKA recursion


// // // function makeBetweenFunc(min, max) {
// // //   return function (val) {
// // //     return val >= min && val <= max
// // //   }
// // // }
// // // const inAgeRange = makeBetweenFunc(18, 100)
// // // inAgeRange(17) // false
// // // inAgeRange(68) // true





// // //const triple = multiplyBy(3)
// // // triple(5) // 15

// // // const double = multiplyBy(2)
// // // double(8) // 16





// // // function multiplyBy(num) {
// // //   return function (x) {
// // //     return x * num
// // //   }
// // // }

// // // //                        v this is (num)
// // // const triple = multiplyBy(3);
// // // //                        v this is (num)
// // // const double = multiplyBy(2)

// // // //      v this is (x)
// // // triple(32) // 96
// // // //     v this is (x)
// // // double(5) // 10




// // // function that checks if a val is between 2 numbers
// // function makeBetweenFunc(x, y) {
// //   return function (age) {
// //     // if (age >= x && age < y) {
// //     //   return true
// //     // } else {
// //     //   return false;
// //     // }

// //     // shorter way
// //     return age >= x && age < y
// //   }
// // }

// // const isChild = makeBetweenFunc(0, 18)
// // isChild(5) // true
// // isChild(65) // false

// // const is90s = makeBetweenFunc(1990, 2000)
// // is90s(1995) // true
// // is90s(1980) // false

// // const isNiceWeather = makeBetweenFunc(60, 79)
// // isNiceWeather(79) // false
// // isNiceWeather(69) // true


























































// // //                    CALL BACKS
// // // Callback functions:
// // //   A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

// // // from the previous lesson with recusion/function within a function... whatever is inside the () is a callback function like callTwice(laugh) laugh is the callback function 

// // // We usually use ANONYMOUS FUNCTIONS WHEN WE USE CALLBACKS, WE PASS IN ANONYNOUS FUNCTIONS RATHER THAN A EXISTING FUNCTION

// // // function grumpus() {
// // //   alert('BAHHHHH GO AWAY')
// // // }

// // // // grumpus is a callback that we decalre before
// // // setTimeout(grumpus, 5000)

// // // // but we can also put the anon func itself
// // // setTimeout(function () {
// // //   alert('GAHHHHH')
// // // }, 3000)




// // // RUN CODE WHEN WE CLICK A BUTTON ON THE PAGE
// // // Pattern of passing in a callback

// // const btn = document.querySelector('button')

// // btn.addEventListener('click', () => {
// //   alert('GAHHH TF YOU WANT')
// // })
























































// //                HOISTING
// // Something I need to cover that you shouldnt stress about if it confuses you.

// // if we call log first then says undefined and this is called hoisting, cause JS runs first thats why it gives you undefined instead of an error
// console.log(animals); // undefined

// var animals = 'Tiger';
// // console.log(animals);




// // Now with let and const

// // Gives us a refernce error with LET cause its not hoisted like VAR is
// // console.log(shrimp); // Error

// // let shrimp = 'Harlequin Shrimp';
// // const is the same as const as in JS doesnt reads these and stores them in memory like it does VAR
// // const shrimp = 'Harlequin Shrimp';
// // console.log(shrimp);



// // FUnction declarations are HOISTED UNLIKE CONST AND LET
// // howl(); // ALSO works cause its already been read by the JS memory
// // function howl() {
// //   console.log('roooooooooof');
// // }
// // howl(); // works


// // THIS TIME THE HOISTING DOESNT WORKS CAUSE ITS A FUNCTION
// hoot(); // Error

// // function expressions arent hoisted
// var hoot = function () {
//   console.log('HOO HOO');
// }
// hoot(); // works HOO HOO











