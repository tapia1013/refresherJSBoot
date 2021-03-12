/**
 *
 *
 *      Asynchronous Code, Callbacks & Promises
 *
 *
 *
 *
 *
 *
 *
 */




//                     THE CALL STACK
// The JS interperter uses to keep track of its place in a script that calls multiple functions.
// HOW JS "knows" what function is currently being run and what functions are called from within that function

// HOW IT WORKS
// When the script calls a function the interpreter adds it to the call stack and then starts carrying out the function.
// Any function that are called by that function are added to the call stack further up, and run where their calls are reached
// When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.





// const repeat = (str, times) => {
//   let result = '';
//   for (let i = 0; i < times; i++) {
//     result += str
//   }
//   return result
// }

// const scream = (str) => {
//   return str.toUpperCase() + '!!!'
// }

// const getRantText = (phrase) => {
//   let text = scream(phrase);
//   let rant = repeat(text, 8)
//   return rant;
// }

// const makeRant = (phrase, el) => {
//   const h1 = document.createElement('h1')
//   h1.innerText = getRantText(phrase);
//   el.appendChild(h1)
// }

// makeRant('I hate mayo', document.body)
// makeRant('If you have to cough, please cover your stinky mouth', document.body)


































// //                         JS IS SINGLE THREADED
// // READS 1 LINE AT A TIME
// // THE BROWSER HAS SOMETHING THAT CAN LET YOU CALL FOR AN API AND NOT STOP THE WHOLE WEBPAGE TILL ITS DONE


// // 1
// console.log('I HAPPEN FIRST!');

// // 2 alert blocks the second console.log until ok is pressed
// alert('HI THERE')

// // 3
// console.log('I HAPPEN SECOND!');






















































// //        HOW ASYNCHRONOUS CALLBACKS ACTUALLY WORK

// // CALLBACKS() - GET SENT TO THE WEB API WHILE JS RUNS AND THEN RETURNS IT CAUSE JS IS SINGLE THREADED

// // JAVASCRIPT ISNT THE BROWSER, THE BROWSER HAS ITS OWN METHODS THAT DEALS WITH CALLBACKS AMD OTHER THINGS

// // WHAT HAPPENS WHEN SOMETHING TAKES A LONG TIME?
// // const newTodo = input.value; // get user input
// // saveToDatabase(newTodo) // this could take a while!
// // input.value = '' // reset form




// //                WE HAVE CALLBACKS
// console.log('I print first!!!'); // 1


// // OK BUT HOW?
// // Browsers come with Web APIs that are able to handle certain tasks in the background (request or setimTimeout)
// // THE JS call stack recognizes these WEB API functions and passes them off ot the browser to take of.
// // Once the browser finishes those tasks they return and are pushed onto the stack as callbacks

// // setTimeout is part of the browser so it can runs apart from JS so JS continues to run its code
// setTimeout(() => {
//   console.log('I print after 3 seconds'); // 3 after 3sec
// }, 3000)

// console.log('I Print Second'); // 2






























































// //                   CALLBACK HELL
// // callback hell means there are too many nested callbacks

// const btn = document.querySelector('button')

// // // lets set this is in a timeout, starts from left then 2sec later move 100px to the right
// // setTimeout(() => {
// //   btn.style.transform = `translateX(100px)`
// //   // if we want another movement to right call another timeout here
// //   setTimeout(() => {
// //     btn.style.transform = `translateX(200px)`;
// //     setTimeout(() => {
// //       btn.style.transform = `translateX(300px)`
// //       setTimeout(() => {
// //         btn.style.transform = `translateX(400px)`
// //         setTimeout(() => {
// //           btn.style.transform = `translateX(500px)`
// //         }, 1000)
// //       }, 1000)
// //     }, 1000)
// //   }, 1000)
// // }, 1000)





// // const moveX = (element, amount, delay, callback) => {
// //   const bodyBound = document.body.clientWidth;
// //   const elRight = element.getBoundingClientRect().right
// //   const currLeft = element.getBoundingClientRect().left;

// //   // check to see if next 100px will hit the window
// //   if (elRight + amount > bodyBound) {
// //     console.log('DONE - CANT MOVE THAT FAR');
// //   } else {
// //     setTimeout(() => {
// //       element.style.transform = `translateX(${currLeft + amount}px)`;
// //       // to the same as above with lots of callback we need to pass a callback function in out params... we run into an issue if we dont do if() cause callback isnt a func
// //       if (callback) callback()
// //     }, delay)
// //   }

// // }

// // moveX(btn, 100, 1000, () => {
// //   moveX(btn, 100, 1000, () => {
// //     moveX(btn, 100, 1000, () => {
// //       moveX(btn, 100, 1000, () => {
// //         moveX(btn, 1000, 1000)
// //       })
// //     })
// //   })
// // })




// const moveX = (element, amount, delay, onSucc, onFail) => {
//   setTimeout(() => {
//     const bodyBound = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right
//     const currLeft = element.getBoundingClientRect().left;
//     if (elRight + amount > bodyBound) {
//       // console.log('DONE - CANT MOVE THAT FAR');
//       onFail()
//     } else {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSucc()
//     }
//   }, delay)
// }

// moveX(btn, 100, 1000, () => {
//   // success
//   moveX(btn, 400, 1000, () => {
//     // success
//     moveX(btn, 700, 1000, () => {
//       // success
//       console.log('REALLY WE STILL HAVE SPACE LEFT?');
//     }, () => {
//       // fail
//       alert('CANNOT MOVE FURTHER')
//     })
//   }, () => {
//     // fail
//     alert('CANNOT MOVE FURTHER')
//   })
// }, () => {
//   // fail
//   alert('CANNOT MOVE FURTHER')
// })






















































//                   PROMISES
//                new Promise
// A PROMISE is an object representing the Eventual Completion or Failure of an asynchronous operation
// A Pattern for writing async code
// BASICALLY A GUARENTEE THAT THE THERE WIL BE SUCCESS OR FAILURE




// A PROMISE IS A RETURNED OBJECT TO WHICH YOU ATTACH CALLBACKS INSTEAD OF PASSING CALLBACKS INTO A FUNCTION
// WE ATTACH CALLBACKS INTO THAT OBJECT (RESOLVE) OR (REJECT)




// how we call a promise() and we pass in a functions inside the the () IT HAS 2 PARAMS (RESOLVE, REJECT);
// if we dont pass in anything it shows us in the console a
// [[PromiseStatus]]: "pending" and [[PromiseValue]]: undefined

// const willGetYou = new Promise((resolve, reject) => {
//   // reject() or resolve()
//   // reject() // Error: Uncaught(in promise) undefined
//   resolve() // [[PromiseState]]: "fulfilled"

// })




// // EVERY PROMISE HAS A .THEN() and .CATCH() METHOD
// // run .then() if promise was resolved
// // 
// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random()
//   if (rand < 0.5) {
//     resolve()
//   } else {
//     reject()
//   }
// })

// // runs if its resolved
// willGetYouADog.then(() => {
//   // if rand is higher than 0.5 in the func it logs this
//   console.log('YAYYY GOT A DOG');
// })
// // .CATCH() RUNS IF ITS REJECTED
// willGetYouADog.catch(() => {
//   console.log('NO DOG FOR YOU!');
// })










// // we make it into a func expression and RETURN
// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random()
//       if (rand < 0.5) {
//         resolve()
//       } else {
//         reject()
//       }
//     }, 5000)
//   })
// }

// // now we can makeDogPromise() and we can chain on .then().catch()
// makeDogPromise().then(() => {
//   console.log('YAYYY GOT A DOG');
// }).catch(() => {
//   console.log('NO DOG FOR YOU!');
// })












// //              RESOLVING/REJECT WITH VALUES

// // WE CAN RESOLVE AND REJECT WITH A VALUE AND YOU'LL HAVE ACCESS TO THAT VALUE IN YOUR CALLBACK THAT YOU PASS INTO THEN() OR CATCH()
// // WHICH IS USEFUL CAUSE MOST OF THE TIME WE'RE NOT WAITING ON SOMETHING TO RESOLVE AND REJECT.
// // FOR EXAMPLE WE WANT TO KNOW WHY SOMETHING WAS REJECTED in the case of the http request
// // IF IT DIDNT FAIL WHAT WAS THE DATA WE GOT BACK 
// // WE CAN PASS INFO INTO RESOLVE(INFO) REJECT(INFO)


// const fakeReq = (url) => {
//   // use Promise cause it'll take sometime
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         '/users': [
//           { id: 1, username: 'Bilbo' },
//           { id: 5, username: 'Towiah' }
//         ],
//         '/about': 'This is the about Page'
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data })
//       } else {
//         reject({ status: 404 })
//       }
//     }, 1000)
//   })
// }


// // 200         REQUEST WORKED
// // with users as url
// fakeReq('/users')
//   .then((res) => {
//     console.log('Status Code', res.status);
//     console.log('Data', res.data);
//     console.log('REQUEST WORKS!!!');
//   })
//   // we can call a param now since we passed something into reject
//   .catch((res) => {
//     console.log(res.status);
//     console.log('REQUEST FAILED');
//   })


// // 404             Request Failed
// // with dog as url it doesnt exist its just to trigger reject
// fakeReq('/dog')
//   .then((res) => {
//     console.log('Status Code', res.status);
//     console.log('Data', res.data);
//     console.log('REQUEST WORKS!!!');
//   })
//   // we can call a param now since we passed something into reject
//   .catch((res) => {
//     console.log(res.status);
//     console.log('REQUEST FAILED');
//   })




























// //             PROMISE CHAINING




// // Fake Http Request function
// // It takes 1 sec to resolve or reject the promise, depending on the url that is passed in

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         '/users': [
//           { id: 1, username: 'Vee' },
//           { id: 5, username: 'Jay' }
//         ],
//         '/users/1': {
//           id: 1,
//           username: 'Vee',
//           upvotes: 232,
//           city: 'TOETOE',
//           topPostId: 45321
//         },
//         '/users/5': {
//           id: 5,
//           username: 'Jay',
//           upvotes: 984,
//           city: 'LA'
//         },
//         '/posts/45321': {
//           id: 45321,
//           title: 'Ladies & Gents, may I introduce my pet dog, Cookie'
//         },
//         '/about': 'This is the about page bro!'
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data }) // resolve with value
//       } else {
//         reject({ status: 404 }) // reject with value
//       }
//     }, 1000)
//   })
// }

// // fakeRequest('/users').then((res) => {
// //   // gets the id of the 0 index
// //   const id = res.data[0].id;
// //   fakeRequest(`/users/${id}`).then((res) => {
// //     const postId = res.data.topPostId
// //     // to access the post i have in object
// //     fakeRequest(`/posts/${postId}`).then((res) => {
// //       console.log(res);
// //     })
// //   })
// // })
// //   .catch((err) => {
// //     console.log("OH NOOOO!!", err);
// //   })



// // we can chain on .then() and it returns a promise instead of doing the above
// // .then()
// // .then()
// // .then()
// // BETTER WAY THAN THE ABOVE
// fakeRequest('/users')
//   .then((res) => {
//     console.log(res);
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`)
//   })
//   .then((res) => {
//     console.log(res);
//     const postId = res.data.topPostId;
//     return fakeRequest(`/posts/${postId}`)
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('OH NO!', err);
//   })















































//        REFACTORING FIST BTN WITH PROMISE





const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBound = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBound) {
        // to see why we stopped/rejected
        reject({ bodyBound, elRight, amount })
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay)
  })
}




// moveX(btn, 300, 1000)
//   .then(() => {
//     return moveX(btn, 300, 1000)
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000)
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000)
//   })
//   .then(() => {
//     console.log('WERE DONE WITH MOVING');
//   })
//   .catch(() => {
//     console.log("ERROR CANT MOVE ANYMORE");
//   })


moveX(btn, 100, 1000)
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 500))
  .then(() => moveX(btn, 100, 1000))
  .catch(({ bodyBound, amount, elRight }) => {
    console.log(`Body is ${bodyBound}`)
    console.log(`Element is at ${elRight}px, ${amount}px is too large!!!`)
  })






























































































































































































































































































































































































































































































































































































































































