/**
 *
 *
 *
 *               Making HTTP Requests
 *
 *
 *  XMLHTTP
 *  FETCH
 *  AXIOS
 *
 *
 *
 *                AJAX
 *  A SYNCHRONOUS
 *  J AVASCRIPT
 *  A ND
 *  X ML   BUT WE USE JSON NOW INSTEAD OF XML
 *
 *
 * AJAX LETS YOU UPDATE THE WEBSITE CONTENT WITHOUT HAVING IT RELOAD EACH TIME
 *
 *
 *
 *
 *
 * JSON LOOKS LIKE JS BUT ITS NOT, we CANNOT STORE FUNCTIONS
 *
 * {
 *   "squadName": "Super hero squad",
 *   "homeTown": "Metro City",
 *   "formed": 2016,
 *   "members": [
 *      "Molecule Man",
 *      "Madme Uppercut"
 *   ]
 * }
 *
 *
 *
 *
 *
 *
 *
 */












//               XMLHttpRequest
// Its the OLD school way 

// The "original" way of sending requst via JS
// Does not support PROMISES, so...lots of callbacks
// WTF is going witht the weird capitalization?
// Clunky syntax that I find difficult to remember


// // create new object
// const myReq = new XMLHttpRequest();

// // then we provide 2 callbacks .onload and onerror
// myReq.onload = function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// }
// myReq.onerror = function (err) {
//   console.log('ERROR! ', err);
// }

// // then we call the req object tell it what ('type request', 'what url to send req to')
// myReq.open('get', 'https://icanhazdadjoke.com/', true)
// myReq.setRequestHeader('Accept', 'application/json');
// // then we send the request
// myReq.send()






// function reqListener() {
//   console.log(this.responseText);
// }
// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', 'http://www.example.com/text');
// oReq.send



// const firstReq = new XMLHttpRequest();

// // we can do it with  .onload or addEventListner
// firstReq.addEventListener('load', function () {
//   console.log('IT WOrkED');

//   // lets get the response text we got back
//   // we have 2 options since () => conflicts with "this"
//   // console.log(this.responseText); // undefined cause arrow function
//   // option 1
//   // console.log(firstReq.responseText);
//   // option 2 we use a regular function() {}
//   // console.log(this.responseText);

//   // lets turn the JSON into JS with JSON.parse()
//   const data = JSON.parse(this.responseText)

//   // console.log(data);

//   // loop over the data.results
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }

// })
// firstReq.addEventListener('error', () => {
//   console.log('ERROR');
// })

// firstReq.open("GET", "https://swapi.dev/api/planets/")
// firstReq.send()
// // this log appears first cause the browser waits for the api request;
// console.log('REQUEST SENT!');






//         XMLHttpRequests: chaining Request



// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener('load', function () {
//   console.log('IT WORKED!');
//   const data = JSON.parse(this.responseText)
//   // console.log(data.results[0].films[0]);
//   const filmURL = data.results[0].films[0]

//   const filmReq = new XMLHttpRequest()
//   filmReq.addEventListener('load', function () {
//     console.log('Second Request Worked!');
//     // console.log(this);
//     // we need to parse again
//     const filmData = JSON.parse(this.responseText)
//     console.log(filmData);
//   })
//   filmReq.addEventListener('error', function (e) {
//     console.log('ERROR, ', e)
//   })
//   filmReq.open('GET', filmURL)
//   filmReq.send()

//   // for (let planet of data.results) {
//   //   console.log(planet.name);
//   // }
// });

// firstReq.addEventListener('error', () => {
//   console.log('ERROR');
// })

// firstReq.open('GET', 'https://swapi.dev/api/planets/')
// firstReq.send()
// console.log('Request Sent!!!');



























































//                FETCH: A BETTER WAY
// ITS THE NEWER WAY OF MAKING REQUEST VIA JS
// SUPPORTS PROMISES
// NOT SUPPORTED IN INTERNET EXPLORER


// fetch('https://www.icanhazdadjoke.com/23/2', {
//   headers: { Accept: 'application/json' }
// })
//   .then((res) => {
//     if (res.status !== 200) {
//       console.log('Problem!', res.status);
//       return
//     }
//     res.json().then((data) => {
//       console.log(data);
//     })
//   })
//   .catch(function (err) {
//     console.log('FETCH ERROR', err);
//   })





// fetch('https://swapi.dev/api/planets/')
//   .then((response) => {
//     // console.log(response);
//     // we need to .json() to read the resstream
//     // console.log(response.json());

//     // check with if statement status code err
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)

//     // we can return the response.json() so we can call .then() outside
//     // if we want the data we have to add .then
//     return response.json()
//   })
//   .then((data) => {
//     // console.log(data);
//     // print each planet
//     // for (let planet of data.results) {
//     //   console.log(planet);
//     //   console.log(planet.name);
//     // }

//     console.log('FETCHED ALL PLANETS (first 10)');
//     const filmURL = data.results[0].films[0]
//     return fetch(filmURL)
//   })
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)

//     return response.json()
//   })
//   .then((data) => {
//     console.log("FETCHED FIRST FILM, BASED OFF OF FIRST PLANET!");
//     console.log(data.title);
//   })
//   .catch((err) => {
//     console.log('SOMETHING WENT WRONG WITH FETCH');
//     console.log(err);
//   })







//           REFACTORING FETCH CHAINS

// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)

//   return response.json()
// }

// const printPlanets = (data) => {
//   console.log('LOADED 10 MORE PLANETS');
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   // creates new Promise for you that is resolved cause the issue of not returning the promise
//   return Promise.resolve(data.next)
// }

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
//   return fetch(url)
// }

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log('SOMETHING WENT WRONG FETCH!!!');
//     console.log(err);
//   })








































//                    AXIOS
// Its a npm package not part of JS its a library
// we dont need to JSON.parse() with axios it does it automatically for us



// axios.get('https://swapi.dev/api/planets/')
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

const fetchNexPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url)
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next)
}

fetchNexPlanets()
  .then(printPlanets)
  .then(fetchNexPlanets)
  .then(printPlanets)
  .then(fetchNexPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
  })





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































