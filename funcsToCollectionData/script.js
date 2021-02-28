/**
 *
 *
 *         ARRAY     CALLBACKS     METHODS
 *
 *
 *
 * GOALS:
 *   Use the new arrow functions syntax () => {}
 *   Understand and use these methods:
 *      forEach()
 *      map()
 *      filter()
 *      find()
 *      reduce()
 *      some()
 *      every()
 *
 *
 *
 *
 *
 *
 */




// Intro to Array callback methods

// Array Callback Methods:
//    Arrays come wtih many built-in methods that accept callback functions
//    Now that we've covered callbacks, we can learn these methods!
//    SUPER USEFUL!




























// //                forEach()

// // Accepts a callback function.
// // Calls the function once per element in the array


// // const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// // nums.forEach((n) => {
// //   // prints: 81,64,49,36,25,16,9,4,1
// //   console.log(n * n);
// // })
// // s
// // nums.forEach(function (el) {
// //   if (el % 2 === 0) {
// //     // prints: 8,6,4,2
// //     console.log(el);
// //   }
// // })
// // // 0:02








// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];


// // // numbers.forEach(function (num) {
// // //   console.log(num * 2);
// // // })


// // function printTriple(n) {
// //   console.log(n * 3);
// // }
// // numbers.forEach(printTriple)









// const books = [
//   {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]

// // books.forEach((b) => {
// //   // prints titles in all caps
// //   console.log(b.title.toUpperCase());
// // })

// // // why is this useful when we have stuff like for...of? WELL FOREACH HAS A FUNCTION AND FOR...OF IS JUST A BLOCK OF CODE
// // for (let book of books) {
// //   console.log(book.title.toUpperCase());
// // }

// // // old way... THIS IS A GOOD WAY IF WE CARE ABOUT THE INDEX but if we dont its better with for...of of foreach
// // for (let i = 0; i < books.length; i++) {
// //   console.log(books[i].title);
// // }





// // IN FOREACH WE CAN ALSO ADD A 2ND PARAMETER IF WE WANT TO USE THE INDEX
// numbers.forEach((num, idx) => {
//   console.log(idx, num);
// });





























































// //                     MAP
// // CREATES A NEW ARRAY with the results of calling a callback on every element in the array

// // Creates a new array without mutating the original array


// // const texts = ['lol', 'omg', 'ttyl', 'rofl'];

// // const caps = texts.map((t) => {
// //   return t.toUpperCase();
// // })

// // console.log(texts) // "lol", "omg", "ttyl", "rofl"
// // console.log(caps); // "LOL", "OMG", "TTYL", "ROFL"









// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy']

// // we need to capture in a variable or else it wont show cause .map() doesnt changes the original array
// const dbs = numbers.map((n) => {
//   return n * 2;
// })
// // [40, 42, 44, 46, 48, 50, 52, 54]
// console.log(dbs);





// // check if numbers are even or odds
// const numD = numbers.map((n) => {
//   return {
//     value: n,
//     isEven: n % 2 === 0
//   }
// })

// // array of objects [0:{val:20, isEven:true}, 1:{...}, 2:{...}]
// console.log(numD);














// // NOW with arrays of strings, capitalize them and add a .

// // old way with for...of
// // const doubles2 = []
// // for (let num of numbers) {
// //   doubles2.push(num * 2)
// // }


// // now to our words
// const bw = words.map((word) => {
//   return word.toUpperCase().split('').join('.')
// })
// console.log(bw);








// // A bit harderway with a complex data structure

// const books = [
//   {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]


// const titles = books.map((b) => {
//   return b.title
// });
// //["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]
// console.log(titles);
























































// //               ARROW FUNCTION () => {}


// // old way
// // const square = function(x) {
// //   return x * x;
// // }

// // NEW WAY
// const square = (x) => {
//   return x * x;
// }


// // if we have 1 param we dont need to have () around num
// const isEven = (num) => {
//   return num % 2 === 0;
// }
// console.log(isEven(4)); // true
// console.log(isEven(47)); // false


// // must have () if more than 1 argument
// const multiply = (x, y) => {
//   return x * y
// }
// console.log(multiply(3, 4)); // 12


// // must have params if no arguments
// const greet = () => {
//   console.log('HI');
// }








































// //             MORE COMPACT WAY



// // // Regulary Function expression
// // const isEven0 = function (num) {
// //   return num % 2 === 0;
// // }

// // // arrow function with parens around param
// // const isEven1 = (num) => {
// //   return num % 2 === 0;
// // }

// // // No Parens around param
// // const isEven2 = num => {
// //   return num % 2 === 0;
// // }

// // // implicit return
// // const isEven3 = num => (
// //   num % 2 === 0
// // )

// // // One liner implicit return
// // const isEven4 = num => num % 2 === 0;







// // const square = n => {
// //   return n * n;
// // }


// // const square = n => (
// //   n * n
// // )

// // This is a problem if we have more than 1 logic
// // const square = n => (
// //   if(n < 0) {
// //     return false
// //   }
// //   n * n
// // )


// // const square = n => n * n






// const nums = [1, 2, 3, 4, 5, 6, 7, 8]


// // // .map() with regular functions
// // const double1 = nums.map(function (n) {
// //   return n * 2;
// // })

// // // .map() with arrows
// // const double2 = nums.map(n => {
// //   return n * 2
// // })

// // // .map() with arrow but shorter
// // const double3 = nums.map(n => n * 2)



// // odd and even
// const parityList = nums.map(function (n) {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// })


// // with arrow functions () => {}
// const parityList1 = nums.map(n => {
//   return n % 2 === 0 ? 'even' : 'odd'
// })

// // with ternarary () => ()
// const parityList2 = nums.map(n => (
//   n % 2 === 0 ? 'even' : 'odd'
// ))






























































// // //                  ARRAY.FIND()
// // // returns the value of the first element in the array that satisfies the provided testing function


// // let movies = [
// //   "The Fantastic Mr. Fox",
// //   "Mr. and Mrs. SMith",
// //   "Mrs. Doubtful",
// //   "Mr. Deeds"
// // ]



// // // Arrow .find() with includes


// // // With includes
// // let movie = movies.find(movie => {
// //   return movie.includes('Mrs.')
// // })
// // // finds first Mrs. 
// // console.log(movie); //Mr. and Mrs. SMith



// // // 1 liner with .indexOf() === 0 ... 0 means first index cause indexOf is index based... STARTS WITH Mrs
// // let movie1 = movies.find(num => num.indexOf('Mrs') === 0);
// // // finds Mrs with indexOf() but it must be the starting with Mrs unlike includes off which can be at the end and it'll retrieve it
// // console.log(movie1); // "Mrs. Doubtfire"






// const books = [
//   {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]


// // find book greater than 4.3

// const gB = books.find(b => b.rating >= 4.3)
// //{ title: "Bone: The Complete Edition", authors: Array(1), rating: 4.42 }
// console.log(gB);



// // find the first book where neil gaiman is an author

// const gB1 = books.find(b => (
//   b.authors.includes('Neil Gaiman')
// ))
// //{title: "Good Omens", authors: Array(2), rating: 4.25}
// console.log(gB1);




























































// //                    FILTER

// // Creates a new array with all elements that pass the test implemented by the provided function.

// // const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// // const odds = nums.filter(n => {
// //   // our callback returns true or false if it returns treu, n is added to the filtered array
// //   return n % 2 === 1;
// // })
// // console.log(odds); // [9,7,5,3,1]

// // const smallNums = nums.filter(n => n < 5);
// // console.log(smallNums); // [4,3,2,1]



// // const sisters = ['Vee', 'Gee', 'Kay', 'Emm']
// // const notWantedSis = sisters.filter(s => s.includes('Vee'))
// // console.log(notWantedSis); // vee








// const nums = [34, 24, 3, 53, 23, 15, 74, 65, 66]

// // odds only
// const odds = nums.filter(n => n % 2 === 1);
// // returns to us filtered odd nums
// console.log(odds); // [3, 53, 23, 15, 65]

// // returns all filtered out EVENS from array
// const evens = nums.filter(n => n % 2 === 0)
// console.log(evens); //[34, 24, 74, 66]

// // Get Big Nums
// const bigNums = nums.filter(n => n >= 50)
// console.log(bigNums); // [53, 74, 65, 66]





// const books = [
//   {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction']
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fantasy', 'epic']
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['drama']
//   }
// ]




// // Search book off of a title
// const goodBooks = books.filter(b => b.rating > 4.3)
// console.log(goodBooks);
// //[0:{title: 'Bone', authors: Array('Jeff Smith'), rating: 4.42}, 1:{title: 'A Gentleman', authors: Array('Anor Towles'), rating: 4.36}]




// // By genres
// const fantasyBooks = books.filter(book => (
//   book.genres.includes('fantasy')
// ))

// // 0: {title: "Bone: The Complete Edition", authors: Array(1), rating: 4.42, genres: ['fantasy', 'epic]}
// // 1: { title: "American Gods", authors: ['fiction', 'fantasy'], rating: 4.11, genres: Array(2) }
// console.log(fantasyBooks);



// // short form
// const somethingElse = books.filter(book => (
//   book.genres.includes('epic') || book.genres.includes('drama')
// ))

// // 0: {title: "Bone: The Complete Edition", authors: Array(1), rating: 4.42, genres: ["fantasy", "epic"]}
// // 1: { title: "A Gentleman in Moscow", authors: Array(1), rating: 4.36, genres: ["drama"] }
// console.log(somethingElse);




// // Search titles that have "The" in the title

// // const query = "The"; //  1 title
// const query = "A" // 2 titles start with A

// const results = books.filter(book => {
//   const title = book.title.toLowerCase();
//   return title.includes(query.toLowerCase())
// })
// console.log(results);















































//            EVERY AND SOME

// tests whether all elements in the array pass the provided function. It returs a Boolean value

const words = ['dog', 'dig', 'log', 'bag', 'wag']

// checks if words are 3 index long
words.every(word => {
  return word.length === 3;
}) // true

// checks if every index starts with d
words.every(word => word[0] === 'd') // false


// checks if EVERY last letter ends with 'g' 
words.every(w => {
  let last_letter = w[w.length - 1];
  return last_letter === 'g'
}) // true













// lol






























































































































































































































































