/**
 *
 *
 *
 *  A Few Miscellaneous JS Features
 *
 *
 *
 * THIS IS OTHER USEFUL THINGS WITH JS THAT YOU SHOULD KNOW
 *
 * 1.) DEFAULT PARAMS (NUMBER = 10)
 * 2.) SPREAD FOR FUNCTION CALLS (...)
 * 3.) SPREAD FOR ARRAY LITERALS [...]
 * 4.) SPREAD FOR OBJECT LITERALS {...}
 * 5.) THE ARGUMENT OBJECT
 * 6.) REST PARAMS (...)
 * 7.) DESTRUCTURING ARRAYS
 * 8.) DESTRUCTURING OBJECTS
 * 9.) NESTED DESTRUCTINING
 * 10.) DESTRUCTURING PARAMS
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */











// //                   DEFAULT PARAMETERS
// // THE ORDER MATTERS WITH THE DEFAULT PARAMS


// // OLD WAY
// // function multiply(a, b) {
// //   b = typeof b !== 'undefined' ? b : 1;
// //   return a * b
// // }
// // console.log(multiply(7)); // 7
// // console.log(multiply(7, 3)); // 21

// // function multiply(x, y) {
// //   // typeof always returns string so wrap ""
// //   if (typeof y === 'undefined') {
// //     y = 1
// //   }
// //   return x * y
// // }



// //                     NEW WAY
// // function add(a, b = 5) {
// //   return a + b;
// // }
// // add(4) // 9
// // // the second param here overwrites b = 5
// // add(3, 8) // 11


// // if we want to add a default value to arg or param
// // function multiply(x, y = 1) {
// //   return x * y;
// // }
// // console.log(multiply(4)); // 4
// // console.log(multiply(2, 8)); // 16



// // const greet = (person, greeting = 'hi') => {
// //   console.log(`${greeting}, ${person}!`);
// // }
// // greet('Vee');
// // greet('Vee', 'sup');



// // const blah = (x, y = [1, 2, 3]) => {
// //   console.log(x, y);
// // }

// // blah(1) // 1 [1,2,3]
// // blah(1, 3) // 1 3


// //      *** ORDER MATTERS ***
// const greet = (person, greeting = 'hi', punc = '!') => {
//   console.log(`${greeting}, ${person}${punc}`);
// }
// greet('anya') // hi, anya!

// // needs to be done in order
// greet('anya', '?') // ?, anya!

// // like the multiply example multiply(x = 1, y) {code here } but we if we call it like multiply(2)its going to say NaN cause y is still undefined and you just called x but not y





































// //        ...S P R E A D FUNCTION CALLS

// // Spread syntax allows an iterable sucj as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array iterals) are expected, or an object expression to be exapanded in places where zero or more key-value pairs (for object literal) are expected.

// // spread really just get the old thing you want to EXPAND and add onto it with ...




// // Expands an iterable(array, string, etc.) into a list of arguments
// // SPREAD FOR FUNCTION CALLS
// const nums = [9, 3, 2, 8];

// Math.max(nums) // NaN

// // use Spread!
// Math.max(...nums) // 9
// // Same as calling: Math.max(9,3,2,8)



// function giveMeFour(a, b, c, d) {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('c', c);
//   console.log('d', d);
// }
// //         a  b  c  d
// giveMeFour(4, 5, 6, 7)

// // we're going to pass colors into giveMeFour
// const colors = ['red', 'green', 'blue', 'white']

// // a red   b green   c blue   d white
// giveMeFour(...colors)



// const str = 'GOAT';
// // a G   b O   c A   d T
// giveMeFour(...str);






































// //           ...SPREAD ARRAY LITTERALS

// // Spread syntax allows an iterable sucj as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array iterals) are expected, or an object expression to be exapanded in places where zero or more key-value pairs (for object literal) are expected.


// // SPREAD IN ARRAY LITERALS - in array literals: Creates a new array using an existing array. Spreads the elements form one array into a new array

// // CPODS === CCOPY // FALSE THEYRE NOT POINTING TO THE SAME REFERENCE



// const nums1 = [1, 2, 3]
// const nums2 = [4, 5, 6]

// // [...nums1, ...nums2]; turns into below
// // [1,2,3,4,5,6]

// // ['a', 'b', ...nums2]
// // ['a', 'b', 4, 5, 6]

// // [...nums1, ...nums2, 7, 8, 9]
// // [1,2,3,4,5,6,7,8,9]








// const cpods = ['dumbo', 'humboldt', 'flamboyant']
// const gpods = ['giant african snail', 'banana slug', 'variable neon slug']
// const cndidaria = ['fire coral', 'moon jelly']


// // we're going to combined them
// const related = [...cpods, ...gpods]

// // ["dumbo", "humboldt", "flamboyant", "giant african snail", "banana slug", "variable neon slug"]
// related;



// const inverts = [...cndidaria, ...gpods, ...cpods]

// // // ["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo", "humboldt", "flamboyant"]
// inverts;



// // THE MOST COMMON USE FOR THE SPREAD... IS TO MAKE A COPY OF AN ARRAY
// const cCopy = [...cpods]
// // we now have a copy of the cpods array
// cCopy; // ["dumbo", "humboldt", "flamboyant"]






// // We can also spread a string not just arrays

// // OLD WAY
// console.log('abcdefg'.split(''));

// // NEW WAY
// console.log([...'abcdefg']) // ["a", "b", "c", "d", "e", "f", "g"]













































// //          SPREAD IN OBJECT LITERALS

// // Spread in Object Literals - Copies properties from one object into another object literal


// // const feline = { legs: 4, family: 'Felidae' };
// // const canine = { family: 'Canine', furry: true }

// // // {family: 'Canine', furry: true, isPet: true}
// // const dog = { ...canine, isPet: true }

// // // {legs: 4, family: 'Felidae', genus: 'Panthera'}
// // const lion = { ...feline, genus: 'Panthera' }

// // // {legs: 4, family: 'Canine, furry: true}
// // const catDog = { ...feline, ...canine }










// const feline = {
//   legs: 4,
//   family: "Felidae"
// }

// const canine = {
//   family: "Canine",
//   furry: true,
//   legs: 3
// }


// const dog = {
//   ...canine,
//   isPet: true,
//   adorable: true
// }

// const houseCat = {
//   ...feline,
//   isGrumpy: true,
//   personality: 'unpredicatable'
// }


// // If we have keys that are the same the last one of the spread overwrites the first spread
// const catDog = {
//   ...feline, ...canine
// }

// // legs is now 3 if we put canine first then feline will overwrite it cause its the newest
// catDog; // {legs: 3, family: "Canine", furry: true}





// //     **********  IMPORTANT  ***********
// // WE CAN ONLY SPREAD AN OBJECT WHEN WE'RE SPREADING INTO ANOTHER OBJECT
// // IF WE TRY TO DO IT IN A ARRAY WE'LL GET AN ERROR


// // WE CAN DO THE OPPISITE ND SPREAD AN ARRAY INSIDE AN OBJECT AND IT WONT GIVE US AN ERROR
// // {...[4, 6, 7] } INSTEAD WE GET KEY: VALUE PAIS BASED OFF OF THE INDICIES/INDEXES {0: 4. 1: 6, 3: 7}


// // WE CAN CREATE ARRAY LITERALS
// const random = [...'HELLO', { ...catDog }]

// // ["H", "E", "L", "L", "O", {…}]
// random;























































//           THE ARGUMENTS OBEJECTS
// REST - IT LOOKS LIKE SPREAD BUT ITS NOT!

// WHAT REST IS INSTEAD OF SPREADING DATA OUT INTO ARGUMENTS OR INTO A NEW OBJECT OR AN ARRAY IT ACTUALLY COLLECTS THINGS INTO A NEW SINGLE ARRAY

// SO ITS USED WHEN WE WANT TO MAKE FUNCTIONS THAT ACCEPT AN UNLIMITED NUMBER OF ARGUMENTS OR A VARIABLE NUMBER OF ARGUMENTS.
// EX.) Math.max(1,5,6,7,8) // 8
// AND IT RETURNS THE MAXIMUM VALUE


// ***** ITS NOT A REAL ARRAY HAVE TO SPREAD FOR T TO BE A REAL ARRAY ******

// what if we want more than 2 arguments?
// function sum(a, b, c, d, e, f, g) {

// }


// THERES A WAY OF DOING IT ITS CALLED THE ARGUMENT OBJECT:
//    Available inside every function
//    Its an array like object:
//        Has a length prop
//        Does not have array methids like push or pop
//    Contains all the arguments passed to the function
//    Not available inside of arrow function

// Not great way cause its old way
// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i]
//   }
//   return total;
// }
// sumAll(8, 4, 3, 2) // 17
// sumAll(2, 3) // 5



// // EXAMPLE 1
// function sum() {
//   return arguments.reduce((total, currVal) => {
//     return total + currVal
//   })
// }
// // WILL GIVE ERROR cause arguments isnt an array just an array LIKE function
// sum(1, 2, 3, 4, 5)


// // EXAMPLE 2 -  we can bypass the above problem by turning it into an array with ...
// function sum() {
//   // we can rest here to make arguments into an array 
//   const argsArray = [...arguments]
//   return argsArray.reduce((total, currVal) => {
//     return total + currVal
//   })
// }
// // Works now
// console.log(sum(1, 2, 3, 4, 5)) //  15


// // ANOTHER SITUATION WHERE ITS NOT IDEAL
// function fullName(first, last) {
//   console.log(arguments);
//   console.log(first);
// }
// fullName('tom', 'jones', 'the third')


// // YET ANOTHER ISSUE IT DOESNT WORKS WITH ARROW FUNCTIONS cant be used with arrows
// const multi = () => {
//   console.log(arguments);
// }
// // ERROR 
// multi(1, 2, 3, 4)














































// //             REST PARAMETERS
// // REST - Collets all remaining argumetns into an actuall array (...nums)

// // function sumAll(...nums) {
// //   let total = 0;
// //   for (let n of nums) total += n;
// //   return total
// // }
// // console.log(sumAll(1, 2)); // 3
// // console.log(sumAll(2, 3, 4, 5)); // 14



// //  RECAP FROM LAST VIDEO AND ITS EXAMPLE OLD WAY

// // function sum() {
// //   const argsArr = [...arguments];
// //   return argsArr.reduce((total, currVal) => {
// //     return total + currVal
// //   })
// // }




// //             NEW WAY

// /// (...Name that contains name of all the args we're passing)
// // function sum(...nums) {
// //   console.log(nums);
// // }
// // // its an actual array now [4, 5, 6, 7]
// // sum(4, 5, 6, 7);


// // second step
// function sum(...nums) {
//   return nums.reduce((total, currVal) => {
//     return total + currVal
//   })
// }
// // 22
// console.log(sum(4, 5, 6, 7));


// //********* THE ORDER MATTERS PUT ...nums AT THE END */

// //   IMPORTANT: WE CAN ALSO USE REST TO COLLECT THE REMAINING ARGUMENTS into AN  actual array
// // COllects all the remaining argumetns that have not been match with a parameter
// function fullName(first, last, ...titles) {
//   console.log('first: ', first);
//   console.log('last: ', last);
//   console.log('title: ', titles);
// }

// // first: tom
// // last: jones
// // title: (2)["III", "order of the phoenix"]
// fullName('tom', 'jones', 'III', 'order of the phoenix')



// const multiply = (...nums) => (
//   nums.reduce((total, currVal) => total * currVal)
// )
// // 6720
// multiply(8, 4, 5, 6, 7)



























































//                DESTRUCTURING 
// POSITION MATTERS

// A short clean syntax to unpack:
//    Values form arrays
//    Properties from objects
// Into distinct variables





// //         ARRAY DESTRUVTURING

// // const raceResults = ['Eluid', 'Feyisa', 'Galen']

// // const [gold, silver, bronze] = raceResults;
// // gold; // Eluid
// // silver; // Feyisa
// // bronze; // Galen


// // const [fastest, ...everyoneElse] = raceResults
// // fastest; // 'Eluid'
// // everyoneElse; // ['Feyisa','Galen']




// const raceResults = ['Eluid', 'Feyisa', 'Galen', 'Ghirmay', 'Alphonce', 'Jared'];

// // pre destructuring old way
// // const gold = raceResults[0]
// // const silver = raceResults[1]
// // const bronze = raceResults[2]


// // NEW WAY
// //     ELUID  FEYISA  GALEN
// const [gold, silver, bronze] = raceResults;

// // TO SKIP AN INDEX we add ,,,,,,
// const [first, , , fourth] = raceResults
// console.log(fourth); //Chirmay

// // WE CAN USE THE REST ... INSIDE THE [] in order to collect the rest of the array
// const [winner, ...others] = raceResults;
// console.log(winner); // 'Eluid'
// console.log(others); // array of people after eluid










// //        DESTRUCTURING OBJECTS
// // IN ARRAY WE DESTRUCT BASED ON POSITIONS
// // BUT ON OBJECTS WE BASE THE VARIABLES OFF OF THE NAME OF THE PROPERTY/KEY

// const runner = {
//   first: 'Eluid',
//   last: 'Kipchoge',
//   country: 'Kenya',
//   title: 'Elder of the order of the Golden Heart of Kenya'
// }

// // // ORDER DOESNT MATTER
// // const { first, last, country } = runner;

// // console.log(first); // Eluid
// // console.log(last); // Kipchoge
// // console.log(country); // kenya


// // // MUST BE NAMES IN THE OBJECT BUT WE CAN CREATE THEM... so now country is updated to nation
// // const { country: nation, title: honor } = runner
// // console.log(nation); // Kenya
// // console.log(honor); // Elder of the order of the Golden Heart of Kenya



// // WE CAN USE THE REST OPERATOR JUST LIKE WE CAN WITH ARRAYS so we can single out a key and then collect everything elese ina new variable
// const { first, last, ...other } = runner;
// console.log(first); // Eluid
// console.log(last);  // Kipchoge
// console.log(other); //{country: "Kenya", title: "Elder of the order of the Golden Heart of Kenya"}













// //             NESTED DESTRUCTURING



// const results = [
//   {
//     first: 'Eluid',
//     last: 'Kipchoge',
//     country: 'Kenya'
//   },
//   {
//     first: 'Feyisa',
//     last: 'Lilesa',
//     country: 'Ethiopia'
//   },
//   {
//     first: 'Galen',
//     last: 'Rupp',
//     country: 'United States'
//   }
// ]


// //  // EXTRACT COUNTRY OF SECOND PLACE
// // const [, { country }] = results;
// // console.log(country); // Ethiopia


// // // NOW LETS SAY WE WANT TO GIVE IT 1ST PLACE KEY NAME
// // const [{ first: goldWinner }, { country }] = results;
// // console.log(goldWinner);
// // console.log(country); // Ethiopia


// // for nested objects ITS BETTER TO SPLIT THEM
// const [, silverMedal] = results; // now feyisa obj is silverMedal
// const { country } = silverMedal;
// // now its getting the country of silverMedal aka feyisa
// console.log(country);













//         DESTRUCTURING PARAMTERS
// ({we're expexting a fullName to be passed an object}) we only care about first and last


// // ({will unpack values from arg passed in})
// const fullName = ({ first, last }) => {
//   return `${first} ${last}`
// }

// const runner = {
//   first: 'Eluid',
//   last: 'Kipchoge',
//   country: 'Kenya'
// }

// fullName(runner) // 'Eluid Kipchoge'




const runner = {
  first: 'Eluid',
  last: 'kipchoge',
  country: 'kenya',
  title: 'Elder of the whatever'
}

// function print(person) {
//   // {} means we're extracting those keys from person
//   const { first, last, title } = person;
//   console.log(`${first} ${last}, ${title}`);
// }

// // Eluid kipchoge, Elder of the whatever
// print(runner);


// DESTRUCTURE... same as above
function print({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}

print(runner);





// NOW WITH ARRAYS
const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json'
]

// get status quote... with arrays we use []
function parseResp([proto, status, content]) {
  console.log(`Status: ${status}`);
}
// Status: 200 OK
parseResp(response)
































































































































































































































































































































































































































































































































































































































































































































