/**
 *            INTRO TO LOOPS
 *
*/


/**
 *
 * Loops
 * Doing things repeatedly
 *
 * Loops allow us to repeat
 *     "Print 'hello' 10 times"
 *   Sum all numbers in an array
 *
 *
 * There are multiple types:
 *     for loop
 *     while loop
 *     for...of loop
 *     for... in loop
 *
 *
 */





// const posts = [
//   {
//     title: 'cool video',
//     link: 'https://www.blah.com',
//     username: 'sillyGoose98'
//   },
//   {
//     title: 'cool vid',
//     link: 'https://www.sds.com',
//     username: 'towia13'
//   },
//   {
//     title: 'mehhhh',
//     link: 'https://www.sdfjk.com',
//     username: 'kingJay10'
//   }
// ]







// for (let i = 0; i < posts.length; i++) {
//   console.log(posts[i].title);
// }

// for (let post of posts) {
//   console.log(post.title);
// }






























































//           FOR LOOPS & ARRAYs

// To loop over an array, start at 0 and continue to the last index[i] (length-1)


// const animals = ['lions', 'tigers', 'bears'];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
//   // 0 'lions'
//   // 1 'tigers'
//   // 2 'bears'
// }






// const examScore = [98, 43, 12, 43, 75, 76, 32]

// for (let i = 0; i < examScore.length; i++) {
//   console.log(i, examScore[i]);
// }








// const myStudents = [
//   {
//     firstName: 'Zues',
//     grade: 86
//   },
//   {
//     firstName: 'Art',
//     grade: 97
//   },
//   {
//     firstName: 'Hera',
//     grade: 72
//   },
//   {
//     firstName: 'Apollo',
//     grade: 90
//   },
// ]




// // Zues scored 86 grade, each student gets its name and grade shown 
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i]
//   console.log(`${student.firstName} scored ${student.grade} grade`);
// }




// const word = 'stressed'

// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
//   // d
//   // e
//   // s
//   // s
//   // e
//   // r
//   // t
//   // s
// }

// // another way
// let reversedWord = ''
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i]
//   console.log(reversedWord);
//   // d
//   // de
//   // des
//   // dess
//   // desse
//   // desser
//   // dessert
//   // desserts
// }



// // we have to set var here cause if we put it inside it'll forget the previous loop it did so its neccesary to store it in here outside the loop
// let total = 0;

// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   // += means its adding onto it each loop cycle
//   total += student.grade
// }

// console.log(total); // 345 adds all students grades

// // to get average we dont need to to hardcode 4 we just use the length of myStudent
// console.log(total / myStudents.length); // 86.25






































































































/**
 *
 *
 *                 NESTED FOR LOOPS
 *
 *
 */



// let str = 'LOL';
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer: ", i);

//   for (let j = 0; j < str.length; j++) {
//     console.log(' Inner: ', str[j]);
//   }
// }

// Outer:  0
//    Inner:  L
//    Inner:  O
//    Inner:  L

// Outer:  1
//    Inner:  L
//    Inner:  O
//    Inner:  L

// Outer:  2
//    Inner:  L
//    Inner:  O
//    Inner:  L

// Outer:  3
//    Inner:  L
//    Inner:  O
//    Inner:  L

// Outer:  4
//    Inner:  L
//    Inner:  O
//    Inner:  L








// for (let i = 0; i < 10; i++) {
//   console.log('Outer Loop: ', i);

//   for (let j = 10; j >= 0; j -= 2) {
//     console.log('         Inner Loop: ', j);
//   }
// }








// const gameBoard = [
//   [4, 32, 7, 2],
//   [64, 52, 68, 3],
//   [42, 56, 17, 5],
//   [13, 8, 34, 3]
// ]

// // so we can add it all together
// let totalScore = 0;

// for (let i = 0; i < gameBoard.length; i++) {
//   // console.log(gameBoard[i]);

//   // we can loop the inner arrays, we get each row cause the loop here gives you 1 row at a time
//   let row = gameBoard[i];
//   // loop over the nested arrays
//   for (let j = 0; j < row.length; j++) {
//     // console.log(row[j]);
//     console.log(totalScore += row[j]) // it added everything togther so total is 410
//   }
// }





































































/**
 *
 *             INTRO TO WHILE LOOPS
 *
 *
 */





// While Loops -  A while loop continues to run as long as its test condition is true
// let num = 0;

// while (num <= 10) {
//   console.log(num);
//   num++; // 1 - 10
// }


// for (let i = 0; i <= 5; i++) {
//   console.log(i); // 1 - 5
// }

// let j = 0;
// while (j <= 10) {
//   console.log(j); // 1 - 10
//   j++;
// }
















//           MORE WHILE LOOPS
// Most ppl dont use it for like the example above its better to use a for loop for that

// WHATS ITS BETTER FOR IS FOR SOMETHING WE DONT KNOW HOW MANY TIMES ITS GOING TO RUN
// while(!gameOver) or while(stillAive) then we set to true to end game



// // first start by target number
// const target = Math.floor(Math.random() * 10)
// // console.log(target); // works

// // we set as guess cause we're probably gping to have to guess again
// let guess = Math.floor(Math.random() * 10)


// // now to implement the logic
// while (guess !== target) {
//   console.log(`Target: ${target} : Guess: ${guess}`);
//   // if not the target then do this till its false, once it they all hit the random number then it ends
//   guess = Math.floor(Math.random() * 10)
// }

// console.log(`Target: ${target} : Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!!`);







// BREAK DOWN

//      while(some condition)
//            in the loop update or attemtpt to make that condition false, it might take 3 tries or 100 tries















//                       BREAK
// We can use break; inside of loops to break out of the loop / stop its execution

// not really used with for loop but you can
// for (let i = 0; i < 10; i++) {
//   console.log(i);

//   if (i === 5) {
//     break;
//   }
// }




// But its common in a while loop

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (true) {
//   if (target === guess) break;
//   console.log(`Targe: ${target} : Guess: ${guess}`);
//   // other wise if its not true then continue
//   guess = Math.floor(Math.random() * 10)
// }

// console.log(`Targe: ${target} : Guess: ${guess}`);
// console.log(`Congrats you win!!!`);

































































/**
 *
 *
 *              FOR... OF INTRO
 *
 * Not supported in IE
 */



// // for...of loop - A nice and easy way of iterating over arrays



// let subreddits = ['soccer', 'popheads', 'cringe', 'books']


// // for of loop works with anything that is iterable
// for (let sub of subreddits) {
//   console.log(sub);
//   // soccer
//   // popheads
//   // cringe
//   // books
// }



// // a STRING is also iterable
// for (let char of 'cockadoodledoo') {
//   console.log(char.toUpperCase());
//   // c
//   // o
//   // c
//   // k
//   // a
//   // d
//   // o
//   // o
//   // d
//   // l
//   // e
//   // d
//   // o
//   // o
// }















// //             NORE FOR OF

// const magicSquare = [
//   [12, 32, 24],
//   [21, 37, 49],
//   [9, 5, 1, 5]
// ]


// //               FOR LOOP
// for (let i = 0; i < magicSquare.length; i++) {
//   // loop again to get each row []
//   let row = magicSquare[i];
//   // reset it to 0 for each row
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//     sum += row[j]
//   }
//   console.log(`${row} added to ${sum}`);
// }




// //            FOR OF
// for (let row of magicSquare) {
//   console.log(row);
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} added to ${sum}`);
// }
// // MUCH SHORTER AND EASIER



// // NOT TO OUR ADVANTAGE TO USE FOR...OF
// // we're going to see when its not that good to use a for of loop and instead use a for() loop


// let words1 = ['mail', 'milk', 'bath']
// let words2 = ['box', 'shake', 'tub']


// for (let i = 0; i < words1.length; i++) {
//   console.log(words1[i], words2[i]);
// }
















//               FOR..OF IN OBJECTS

// WE NEED TO USE OBJECT.KEYS/VALUES TO GAIN ACCESS AND LOOP THROUGH ***OBJECTS***


// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   'In Bruges': 9,
//   Amadeus: 10,
//   'Kill Bill': 8,
//   'Little Miss Sunshine': 8.5,
//   Coraline: 7.5
// }


// // AN OBJECT IS NOT ITERABLE

// // DOESNT WORK LOOPING OVER ENTIRE OBJECT
// // for (let x of movieReviews) {
// //   console.log(x); // Type Error movieReview isnt iterable
// // }


// // WE CAN LOOP THE KEYS IN THE OBJECT WITH FOR OF
// // Object.keys(movieReviews) //  shows obj keys
// // Object.values(movieReviews) //  shows obj vals

// // WRONG WAY ITS NOT THIS
// // movieReviews.keys // WRONG





// // THE WAY WE CAN USE OBJECT.KEYS/VALUES with FOR OF
// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie);// List of movie keys
//   // to access the values do below
//   console.log(movie, movieReviews[movie]); // Arrival 9.5
// }



// // ITERATE OVER THE VALUES INSTEAD
// let ratings = Object.values(movieReviews)

// let total = 0;
// for (let r of ratings) {
//   total += r;
// }

// let avg = total / ratings.length
// console.log(avg); // 8.6875














































































































/**
 *
 *
 *              FOR IN LOOPS
 *
 *  Used for Objects to loop over keys
 *
 *
 *
 */



// We can loop through objects with For...in



// const movieReviews = {
//   Amadeus: 10,
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8
// }

// for (let movie in movieReviews) {
//   console.log(movie); // Amadeus Arrival ALien Amelie
// }









const jeopardyWinnings = {
  regularPlay: 2523233,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000
}



// for (let prop in jeopardyWinnings) {
//   console.log(prop); // shows keys
//   console.log(jeopardyWinnings[prop]); // shows/gets values
// }


let total = 0;
for (let prop in jeopardyWinnings) {
  console.log(total += jeopardyWinnings[prop]); // shows the all the total values combined
}





for (let k in [88, 99, 77, 66]) {
  console.log(k); // not that useful just gives us the number place its on 1 2 3 4 cause arrays keys are just the place number they are
}





















