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






































//             ...SPREAD ARRAY LITTERALS

// Spread syntax allows an iterable sucj as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array iterals) are expected, or an object expression to be exapanded in places where zero or more key-value pairs (for object literal) are expected.


// SPREAD IN ARRAY LITERALS - in array literals: Creates a new array using an existing array. Spreads the elements form one array into a new array



const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]

// [...nums1, ...nums2]; turns into below
// [1,2,3,4,5,6]

// ['a', 'b', ...nums2]
// ['a', 'b', 4, 5, 6]

// [...nums1, ...nums2, 7, 8, 9]
// [1,2,3,4,5,6,7,8,9]




































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































