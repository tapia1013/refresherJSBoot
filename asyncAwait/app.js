/**
 *
 *                Async & Await: JS Magic
 *
 *
 * ASYNC FUNCTIONS ARE JUST SYNTATCICAL SUGAR
 *
 * IT WILL LET US USE THE PROMISE WITHOUT HAVING TO ATTACH .THEN() AFTER THE REQUEST
 *
 *
 * WE USE ASYNC INFRONT OF A FUNCTION DECLARATION
 *     async function hello() {console.log('Hi');}
 *
 *
 *
 *
 */


// IF WE TRY TO LOG DATA ITLL BE UNDEFINED CAUSE THE LOG RUNS RIGHT AWAY AND DOESNT WAIT FOR THE DATA TO COME BACK FROM AXIOS.
// SO WE HAVE TO .THEN() .CATCH()

// function getData() {
//   const data = axios.get('https://swapi.dev/api/planets').then((data) => {
//     console.log(data); // returns Promise planet data
//   })
//   console.log(data); // undefined
// }



// ASYNC AND AWAIT

// function getData() {
//   const data = axios.get('https://swapi.dev/api/planets/')
//   console.log(data);
// }






































/**
 *
 *                      ASYNC
 *
 * Async functions always return a promise
 *
 * If the function returns a value the Promise will be Resolved with that value
 *
 * If the function throws an exception the Promise will be Rejected
 *
 *
 *
 */


// // async function hello() {
// //   return 'Hey Guys!'
// // }

// // hello(); // Promise {<fulfilled>: "Hey Guys!"}


// // async function uhOh() {
// //   throw new Error('oh no!')
// // }
// // // uhOh() // Promise {<rejected>: Error: oh no!}






// // function greet() {
// //   return 'Hello!!!'
// // }
// // greet() // returns the string


// // // NOW WITH ASYNC
// // async function greet() {
// //   return 'HELLO'
// // }
// // // returns a Promise
// // greet() // Promise {<fulfilled>: "HELLO"}

// // // SINCE IT RETURNS A PROMISE WE CAN .THEN() THE FUNCTION
// // greet().then((val) => {
// //   console.log("PROMISE RESOLVED WITH: ", val);
// // })






// //           OLD WAY WITHOUT ASYNC
// // function add(x, y) {
// //   return new Promise((resolve, reject) => {
// //     if (typeof x !== 'number' || typeof y !== 'number') {
// //       reject('X AND Y MUST BE NUMBERS!')
// //     }
// //     resolve(x + y)
// //   })
// // }
// // // PROMISE RESOLVED WITH:  14
// // // Or if arg was a string...PROMISE REJECTED WITH:  X AND Y MUST BE NUMBERS!
// // add(6, 'e').then((val) => {
// //   console.log("PROMISE RESOLVED WITH: ", val);
// // }).catch((err) => {
// //   console.log("PROMISE REJECTED WITH: ", err);
// // })




// // async function add(x, y) {
// //   return x + y
// // }
// // // returns a resolved() promise witht the value 9
// // add(4, 5) // Promise {<fulfilled>: 9}


// // CHECK TO SEE IF X AND Y ARE NUMBERS IF NOT THROW ERROR
// async function add(x, y) {
//   // WE STILL GET A PROMISE BACK BUT ITS REJECTED
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw 'X AND Y MUST BE NUMBERS!'
//   }
//   // RETURN THE TOTAL
//   return x + y
// }



// // Error: Uncaught (in promise) X AND Y MUST BE NUMBERS!
// // add('e', 5)

// // WE CAN ATTACH .THEN() and .CATCH()
// add('e', 'r').then((val) => {
//   console.log("PROMISE RESOLVED WITH: ", val);
// }).catch((err) => {
//   console.log("PROMISE REJECTED WITH: ", err);
// })










































/**
 *
 *                       AWAIT
 *
 * We can only use the AWAIT keyword inside of the function where we declared with ASYNC
 *
 * AWAIT will pause the execution of the function, waiting for a Promise to be resolved
 *
 *
 *
 */


// //       WITHOUT ASYNC
// // function getPlanets() {
// //   return axios.get('https://swapi.dev/api/planets/')
// // }

// // getPlanets().then((res) => {
// //   console.log(res.data);
// // })


// // WITH ASYNC AWAIT
// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planets/')
//   console.log(res.data);
// }
// // basically await gets rid of having to chain on .then()
// getPlanets()




















































/**
 *         ERROR HANDLING IN ASYNC FUNCTIONS
 *
 * how to handle reject with async await
 *
 *
 *
 *
 */


// // 2nd) add try and catch block
// async function getPlanets() {
//   try {
//     const res = await axios.get('https://swpi.dev/api/planets/');
//     console.log(res.data);
//   } catch (e) {
//     console.log("IN CATCH");
//     console.log(e);
//   }
// }

// // 1st) to chain on a .catch()
// // getPlanets().catch((err) => {
// //   console.log("IN CATCH");
// //   console.log(err);
// // })

// // 2nd)
// getPlanets()


















































/**
 *
 *                MULTIPLE AWAITS
 *
 * BASICALLY NESTED AWAITS
 *
 *
 *
 *
 *
 */



// const moveX = (element, amount, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBound = document.body.clientWidth;
//       const elRight = element.getBoundingClientRect().right;
//       const currLeft = element.getBoundingClientRect().left;

//       if (elRight + amount > bodyBound) {
//         reject({ bodyBound, elRight, amount })
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`
//         resolve();
//       }
//     }, delay)
//   })
// }




// const btn = document.querySelector('button')

// async function animateR(el, amt) {
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)

// }

// animateR(btn, 200).catch(err => {
//   console.log("ALL DONE!");
//   // move other direction when it reaches wall
//   animateR(btn, -100)
// })









































/**
 *
 *         Parallel Vs. Sequential Requests
 *
 *
 * SEQUEL - IS IF WE WWANT TO WAIT FOR THE PREVIOUS AWAIT TO FINISH TO GET DATA FROM IT OR WE DEPEND ON THE AWAIT
 *
 *
 * PARALLEL - DOES EVERYTHING AT THE SAMETIME AND SHOWS THE LAST AWAIT YOU CALL
 *
 *
 *
 *
 * PROMISE.ALL([]) ACCEPTS AN ARRAY OF ALL PROMISES IT DOES WHAT PARALLEL DOES BUT WITH LESS CODE
 *
 *
 */






// //   SEQUENTIAL REQUEST 1 SENDING OFF AT A TIME

// async function get3Pokemon() {
//   // THEY ARE NOT BEING SENT OFF AT THE SAMETIME...
//   // THESE ARE RUNNING SEQUENTLY, 1 IS RUNNING AND THE OTHERS ARE WAITING AND THEN THE NEXT RUNS AND THE OTHER IS WAITING AND THEN THE LAST RUNS AND THE CODE IS FINISH
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }
// get3Pokemon()





//              PARALLEL
// WE DONT HAVE TO "AWAIT" IN ORIGINAL PLACE
// WE "AWAIT" AFTER THE AXIOS REQUEST
// WE DO THIS IF WE DONT CARE OR DEPEND ON THE FOLLOWING REQUEST PROMISE

// async function get3Pokemon() {
//   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

//   // pending
//   console.log(prom1);

//   // we await here... brings back undefined.. so we change the poke to prom cause the vars above are now promises and we store them in the new poke vars
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;

//   // resolved now cause we awaited the prom variable
//   console.log(prom1);

//   // THESE WERE SENT IN PARALLEL
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }
// get3Pokemon()








// // SEE THE SEQUENCE BUT IN SLOW MOTION
// function changeBodyColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.background = color;
//       // dont forget to always resolve
//       resolve()
//     }, delay)
//   })
// }
// // changeBodyColor('teal', 1000)



// // // NOW LETS MAKE AN ASYNC FUNC
// // async function lightShow() {
// //   // await this promise when its done then move on to the next promise
// //   await changeBodyColor('teal', 1000)
// //   await changeBodyColor('pink', 1000)
// //   await changeBodyColor('blue', 1000)
// //   await changeBodyColor('orange', 1000)
// // }

// // lightShow()


// //  SAME AS ABOVE BUT IN PARALLEL
// // IN PARALLEL WE SAVE EACH TO A VAR
// // HAPPENS ALL AT THE SAMETIME SO NO 1000 WAITING
// async function lightShow() {
//   const p1 = changeBodyColor('teal', 1000)
//   const p2 = changeBodyColor('pink', 1000)
//   const p3 = changeBodyColor('blue', 1000)
//   const p4 = changeBodyColor('orange', 1000)

//   // then we call them here with await
//   await p1
//   await p2
//   await p3
//   await p4
// }
// // goes to the last promise color
// lightShow()






//        REFACTORING WITH PROMISE.ALL
// PARALLEL WITH PROMISE.ALL([])
async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

  // PROMISE.ALL([]) and await the promise.all ALSO RETURNS A PROMISE ITESELF
  const results = await Promise.all([prom1, prom2, prom3])
  console.log(results);

  printPokemon(results)
}

function printPokemon(results) {
  for (let poke of results) {
    console.log(poke.data.name);
  }
}

// WE GET BACK AN ARRAY WITH 3 OBJECTS WITH VALUES
get3Pokemon()

































































































































































































































































































































































































































































































































































































































































































