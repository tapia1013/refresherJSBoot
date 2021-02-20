

// let colors = ['red', 'green', 'blue']


// // colors.shift('yellow')
// // console.log(colors);



















// let fruits = ['apple', 'bananas']
// let veggies = ['cucumber', 'onion']

// let meats = ['bratsworth', 'chorizo']

// let com = fruits.concat(veggies)
// let comb = veggies.concat(fruits)

// console.log(com);
// console.log(comb);

// let allFoods = fruits.concat(veggies, meats)
// console.log(allFoods);






















// includes of & indexOf

// includes returns true or false, tells you if arr includes that val or not, its just a yes or no it doesnt tell you where

// let ingred = [
//   'water',
//   'flour',
//   'eggs',
//   'butter',
//   'syrup'
// ]

// // // console.log(ingred.includes('oil')); // false
// // // console.log(ingred.includes('flour')); // true
// // // // second param is where to specify where to start from, not really used
// // // console.log(ingred.includes('water', 2)); // false, no water after index 2
// // // console.log(ingred.includes('butter', 3)); // true, butter after index 3



// // // take includes and use it in a conditional / for loop
// // if (ingred.includes('flour')) {
// //   console.log('I AM GLUTENT FREE CANT EAT THAT');
// // }


// // INDEXOF - returns first index[i] at which a given elem can be found in the array or -1(means false) if not possible

// console.log(ingred.indexOf('syrup')); // index of 4
// console.log(ingred.indexOf('eel')); // -1 its not array so no index location

// you can check WHERE it is also with indexOf 
// console.log(ingred.indexOf('butter') !== -1) // true





















// reverse mutates the array

// let letters = ['h', 'e', 'l', 'l', 'o']
// console.log(letters.reverse()); //["o", "l", "l", "e", "h"]

// // we can use join() to joun the reversed letters
// console.log(letters.reverse().join(' ')) //['hello'] ' ' removes , 
























// SLICE takes portion of array and makes new array without messing with original array

// let animals = ['shark', 'salmon', 'shrimp', 'lizard']

// console.log(animals.slice(0, 2)); // ['shark','salmon'] start 0 upto but do not include 2

// // we can count backwords with a negative number
// let last = animals.slice(-2)
// console.log(last); // ["shrimp", "lizard"]

// last = animals.slice(-3)
// console.log(last); //["salmon", "shrimp", "lizard"]




























// SPLICE removes/replaces elements
// there are 3 arg, arr.splice(start[, deleteCount[, item1, [item2[, ...]]]])

// let animals = ['shark', 'shrimp', 'salmon', 'whale', 'bear', 'lizard']

// // location, how many to delete, 'what to add'
// animals.splice(2, 0, 'bird');
// console.log(animals); //["shark", "shrimp", "bird", "salmon", "whale", "bear", "lizard"]
























// SORT - sorts the elem of an arr in place and returns the sorted array


// let people = ['Robinson', 'Angie', 'vee', 'jay', 'tee']

// // it mutates so it changes the original array (not really good)
// console.log(people.sort()); // ["Angie", "Robinson", "jay", "tee", "vee"]



// // sort is different with numbers not very good
// let nums = [1, 34, 23, 53, 133233232, 67, 99]

// console.log(nums.sort()); // [1, 133233232, 23, 34, 53, 67, 99]



























// // cant reassign a const array but you can modify it... YOU CANNOT REASSIGN myEggs = somethings new 

// const myEggs = ['brown', 'white']

// console.log(myEggs.push('purple')); //  3 eggs now [brown, white, purple]
// console.log(myEggs[0] = 'green'); // changed first egg ['green']
// console.log(myEggs); // ["green", "white", "purple"]



































// Working with nested arrays
// const animalPairs = [
//   ['doe', ['buck', 'stag']],
//   ['ewe', 'ram'],
//   ['peahen', 'peacock']
// ];

// // console.log(animalPairs); // [Array(2), Array(2), Array(2)]
// // console.log(animalPairs[2]); // ["peahen", "peacock"]

// // // we chain them 
// // console.log(animalPairs[2][0]); // peahen - gets 3rd arr and gets first
// // console.log(animalPairs[2][1]); // peacock
// // console.log(animalPairs[1][1]); // ram

// // update element
// // console.log(animalPairs[0][1] = 'stag'); // stag... without [,[]]
// console.log(animalPairs[0][1]) // ['buck', 'stag']
// // console.log(animalPairs[0][1] = 'stag'); // stag
// console.log(animalPairs[0][1][1]); // stag



























































































































