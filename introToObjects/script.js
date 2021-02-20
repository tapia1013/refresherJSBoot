








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




















































































































































































































































































































































































































































































































































































































