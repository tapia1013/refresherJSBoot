








// const fitbitData = [
//   49343,
//   2332,
//   211
// ]

// const lucyFitbitData = [
//   123,
//   43,
//   12
// ]




// An Object allows us to store data where we can associate things in group pieces ofdata togther but rather than simply oredering data based off of an index to zero with item like an array does


// const fitbitData = {
//   totalSteps: 305834,
//   totalMiles: 211.5,
//   avgCaloriesBurns: 5632,
//   workoutsThisWeek: '5 of 7',
//   avgGoodSleep: '2:!3'
// }






// Objects are a collections of properties.
// Properties are a key value pair
// Rather than accessing data using an index, we use custom keys

//   key              :    value
// username           : 'crazyCatLady'
// upvotes            : 7
// text               : 'great post'




























// CREATING OBJECTS

// let comment = {
//   username: 'sillypoop420',
//   downVotes: 19,
//   upVotes: 214,
//   netScore: 195,
//   commentText: 'Taste kinda funny bro, what is it?',
//   tags: ['#lol', '#funny', '#joke'],
//   isGilded: false
// }





// we can change the info with const as long as we DONT REASSIGN it
// const fitBitData = {
//   totalSteps: 343421,
//   totalMiles: 211.3,
//   avgCaloriesBurns: 4321,
//   workOutThisWeek: '5 of 7',
//   45: 'FORTY FIVE'
// }


// // we access data with the . like fitBitdata.totalSteps

// // KEYS ARE AUTOMATICALLY CONVERTED TO STRINGS
// // fitbitdata.45 is on the object when you call the whole object but if you're trying to access it it'll give you an error fitBitData.45 // errror




// // we need to put a coma after each key value
// let data = { a: 1 }





























//               ACCESSING OBJECT PROPERTIES

// we know that numbers.16 doesnt work we'll get an error, SO WE USE ARRAY BRACKETS TO GET THEM
// const numbers = {
//   100: 'one hundred',
//   16: 'sixteen'
// }

// // array brackets then we put the key inside it, the keys in objects are converted into strings
// console.log(numbers[16]);  // sixteen value
// console.log(numbers['16']);  // sixteen value




// why do we use square brackets? sometimes we have property names that may not be valid in JS identifiers, like the name of the variable 

// invalid name of a variable, cause of the space
// let my cat = 'assadsdaasddsa'

// just like variables we cant put numbers as keys eithers
// let 76trumbones = 'asdas'

// but we can wrap them in '' in the object
// const numbers = {
//   '76 trumbones': 'it works'
// } // VALID

// // so to gain access we use []
// console.log(numbers['76 trumbones']);



// SOMETIMES WE WANT TO USE A DYNAMIC VALUE LIKE A VARIABLE TO ACCESS DATA FROM AN OBJECT

// const palatte = {
//   red: '#323223',
//   yellow: '#f3few3',
//   blue: '#3023es'
// }

// // It works but we cannot use brackets
// console.log(palatte.yellow);


// // DOESNT WORK cause its looking for a variable called yellow its like if we just type yellow nothing shows
// // console.log(palatte[yellow]); // error


// // TO GET IT TO WORK WE HAVE TO USE '' ON THE KEY
// console.log(palatte['yellow']); // works


// // WE CAN ALSO SET INTO A VAR, cause its going to look for the value of mystery colot and then plug it into palette instead
// let mColor = 'yellow'

// console.log(mColor); // '#f3few3'

// // DOESNT WORK cause its looking for a prop called mColor and there isnt one
// // console.log(palatte.mColor); // udefined






















































//            ADDING AND UPDATING PROPERTIES

// const fitBitData = {
//   totalSteps: 233232,
//   totalMiles: 231.12,
//   avgCaloriesBurns: 2342,
//   workoutsThisWeek: '5 of 7',
//   avgGoodSleep: '2:12'
// }

// // Updating properties:
// fitBitData.workoutsThisWeek = '6 of 7';
// fitBitData.totalMiles += 7.5;

// // Adding a new property
// fitBitData.hearStillBeating = true;








// // make empty object so we can add into it
// const userReviews = {}
// s
// // adding prop
// userReviews['queenBee49'] = 4.0
// // check if it added
// console.log(userReviews); // {queenBee49: 4}


// // updating
// userReviews['queenBee49'] = 5
// console.log(userReviews); // {queenBee49: 5}



// // If we want to add 2 to queen be
// userReviews['queenBee49'] += 2
// console.log(userReviews); // {queenBee49: 7}

// // increments by 1 with ++
// userReviews.queenBee49++
// console.log(userReviews); // {queenBee49: 8}






































//              NESTED ARRAYS & OBJECTS



// // OBJECTS
// const student = {
//   firstName: 'David',
//   lastName: 'Jones',
//   strengths: ['Music', 'Art'],
//   exams: {
//     midterm: 92,
//     final: 88
//   }
// }




// // ARRAYS
// const shoppingCart = [
//   {
//     product: 'Jenga Classic',
//     price: 6.88,
//     quantity: 1
//   },
//   {
//     product: 'Echo Dot',
//     price: 29.99,
//     quantity: 3
//   },
//   {
//     product: 'Fire Stick',
//     price: 39.99,
//     quantity: 2
//   }
// ]

// // Each element in array has an object






// const game = {
//   player1: {
//     username: 'Blue',
//     playingAs: 'X'
//   },
//   player2: {
//     username: 'Muffins',
//     playingAs: '0'
//   },
//   board: [
//     ['0', null, 'X'],
//     ['X', '0', 'X'],
//     [null, '0', 'X']
//   ]
// }



//           OBJECTS AND REFERNCE TYPES
// You cant reassign the obj but you can mutate/changge it but dont reassign it to another value with =








































// //               ARRAY/OBJECT EQUALITY
// // 1 === 1
// // 1 == 1






// let nums = [1, 2, 3]
// let myst = [1, 2, 3]


// // not same reference and variable
// console.log(nums === myst); // false
// console.log(nums == myst); // false


// // JS stores each var or whatever in its memory (like an id to each var)
// // nums -> 123838388439
// // myst -> 888340231123



// // To let it be the same we have to do this
// let moreNums = nums // now it has a ref to the same memory address/id
// console.log(moreNums === nums); // true
// console.log(moreNums == nums); // true








// const user = {
//   username: 'CherryGarcia8',
//   email: 'Garcia@gmail.com',
//   notification: []
// }

// // If we wanted to print something out, if notification was empty it would NOT work to do this, each time we type in a diff array its a new place in memory they look the same but they have diff locaiton / id in memory
// // if (user.notification === []); // false


// // {a: 1} === {a: 1} does not equal the same unless they are referring to the same place in memory


// let data1 = { a: 1 }

// let data2 = data1

// // now they are reffering to the same place in memory
// console.log(data1 === data2); // true















