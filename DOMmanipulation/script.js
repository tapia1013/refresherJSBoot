/**
 *
 *
 *
 *
 *                    INTRO TO DOM
 *
 *
 *
 *
 * PREQUISITES: HTML AND CSS
 *
 *
 *   EVERYTHING WE SELECT IS AN OBJECT
 *
 *
 *
 *
 */





//                      WHAT IS IT?
// THE DOM IS A JAVASCRIPT REPRESNTATION OF A WEBPAGE.
// ITS YOUR JS WINDOW INTO THE CONTENTS OF A WEBPAGE.
// ITS JUST A BUNCH OF OBJECTS THAT YOU CAN INTERACT WITH VIA JS.



//                   ROTATE GOOGLE SITE
// const myImg = document.createElement('img');
// myImg.src = 'http://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJjcHBfaWQi0jEyMDd9&auto=format&fit=crop&w=1268&q=80'

// myImg.style.position = 'relative'
// myImg.style.zIndex = '23324232333323'
// myImg.style.width = "200px"
// document.body.append(myImg)
// myImg.style.transition = 'all 2s'


// const sheet = new CSSStyleSheet();
// sheet.replaceSync('* {transition: all 2s}');
// document.adoptedStyleSheets = [sheet];

// const allEls = document.body.children


// setInterval(() => {
//   for (let el of allEls) {
//     const rotation = Math.floor(Math.random() * 360)
//     const x = Math.floor(document.body.clientWidth * Math.random())
//     const y = Math.floor(document.body.clientHeight * Math.random())
//     el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
//   }
// }, 2000)









































//                    THE DOCUMENT OBJECT
// The document object is our entry point into the world of the DOM. It contains representations of all the content on a page, plus tons of useful methods and properties.

// the dom is put into a tree like structure like the html

// DOM TREE

//                      DOM
//                       |
//                     BODY
//                    /    \
//                  H1     UL
//                        /  \
//                      LI   LI



























// //                GET ELEMENT BY ID
// // We select elements and do something with them
// // 1) SELECT         2) MANIPULATE



// // SELECTING:
// //    getElementById()
// //    getElementsByTagName()
// //    getElementsByClassName()




// //           CODE FOR THE SITE WE HAVE
// // when we select elements it prints it out as HTML, so we save to a var and modify it after

// const img = document.getElementById('bear-photo')

// // returns to us img#bear-photo with lots of options of what we can do to the img
// console.dir(img);

// // if we put a class or id that isnt there we' wont get an error but will get a null 


// // WE WILL GET ID="MAIN"
// const p = document.getElementById('main')

// // p#main
// console.dir(p);













































// //             GET ELEMTNTS BY TAG NAME
// // getElementsByTagName - rather then selecting elements by id we select them by tag name(<p></p>, <img />, <h1></h1> etc...);

// //        WHEN WE USE GETELEMENTSBYTAGNAMES WE WILL BE GETTING BACK A COLLECTION IF THE TAG ISNT THERE ITLL RETURN TO US AN EMPTY COLLECTION

// // WE CAN DO ARRAYISH COMMANDS ON THE HTMLCOLLECTIONS
// // WE CAN ITERATE/LOOP CAUSE HTMLCOLLECTIONS HAVE A LENGTH METHOD



// // WE WONT GET A SINGLE ELEMENT BACK LIKE WE DID WITH ID SO WE'LL RECIEVE A LIST
// const inputs = document.getElementsByTagName('input');

// // HTMLCollection(3) [input, input, input] array like BUT ITS NOT
// // console.dir(inputs);



// const p = document.getElementsByTagName('p')

// // HTMLCollection(2) [p, p#main, main: p#main]
// // console.dir(p);



// // ALWAYS RETURNS HTMLCOLLECTION
// // WE CAN ACCESS THEM KINDA LIKE AN ARRAY BUT ITS NOT ARRAY!!!!

// // LETS TRY ACCESSING FIRST INPUT
// inputs[0]// <input type="text" placeholder="Bear Name" id="">

// // NOW GET 2ND ELEMENT
// inputs[1] // <input type="password" placeholder="password">

// // AND SO ON IF THERES NO MORE INPUTS IT RETURNS UNDEFINDE.
// // WE CAN ALSO GET LENGTH
// inputs.length; //  3


// // WE CAN DO SOME ARRAY METHODS BUT NOT ALL LIKE WE CANT USE POP()
// // inputs.pop(); // ERROR: inputs.pop is not a function

// // IF WE TYPE inputs. ON THE CONSOLE IT  LETS US PREVIEW/SEE WHAT WE CAN DO WITH HTMLCOLLECTIONS which are: length, toString, valurOf, toLocaleString, item, namedItem, etc...


// // // We can iterate over input cause HTMLCollections have length method
// // for (let input of inputs) {
// //   console.log(input);
// //   // prints out each input
// //   // <input type="text" placeholder="Bear Name" id="">
// //   // <input type="password" placeholder="password">
// //   // <input type="submit">
// // }

// // SINCE ITS AN ITERABLE WE CAN ALSO USE THE SPREAD OPERATOR ... so we can turn it into an array
// const arr = [...inputs]

// // its an actual array now cause we spread
// arr; // [input, input, input]


// // WE CAN GET THE VALUES FROM A FORM AND LOOP THEM
// // we put stuff in the form on our page and we will return the value here using "whatever.value".
// // we need to put this code in browser in order to see
// for (let input of inputs) { console.log(input.value) }









































// //              GET ELEMENT BY CLASS NAME


// // Select off of class name whenever we have an s like(getElementsssssssss) means that we're going to get a collection back which also means that we can loop through it etc..

// const sp = document.getElementsByClassName('special')
// sp; // HTMLCollection(2) [li.special, li.special]


// const header = document.getElementsByClassName('header');
// // even though its only 1 item it will still give it to us in a HTMLCollection
// header; // HTMLCollection [h1.header]


// // IF WE SELECT SOMETHING THAT ISNT FOUND WE'LL GET AN HTMLCOLLECTIONS THAT IS EMPTY
// const chkns = document.getElementsByClassName('chickenss')
// chkns; // HTMLCollection []


// // IF WE TRY TO USE GETELEMENTSBYCLASSNAME TO GET AN ELEMENT THAT IS AN ID IT WILL RETURN AN EMPTY HTMLCOLLECTION[]






// // IF WE WANT TO BE MORE SPECIFIC WHICH CLASS OR ID WE WANT TO GET WE CAN DO THIS... THIS DOESNT WORK ON GETELEMENTBYID CAUSE THEY HAVE TO BE UNIQUE
// // We have to put [0] or else itll just return to us the HTMLCollections and we want the first index of the html collections which "ul"
// const ul = document.getElementsByTagName('ul')[0]

// // we can search within this ul and now we only get the 2 elements in the ul instead of all of them on the page
// ul.getElementsByClassName('special')















































// //            QUERYSELECTOR() AND QUERYSELECTORALL()
// // WE CAN CALL ANYTHING, THIS IS THE BEST METHOD, its like a swiss army knife useful for everything.
// // its newer





// //                 QUERYSELECTOR()
// // // querySelector() - A newer, all in one method to select a single element. IT DOESNT GIVES YOU A HTMLCOLLECTIONS
// // // Pass in a CSS selector

// // // Finds first h1 element:
// // document.querySelector('h1'); // <h1 class="header">My Webpage</h1>

// // // FInds, first element with ID of main:
// // document.querySelector('#main'); // <p id="main">Lorem ipsum</p >

// // // Finds first element with class of:
// // document.querySelector('.big')




// // // TO GET A SPECIFIC ELEMENT WE HAVE TO BE SPECIFIC TO TARGET THEM LIKE CSS
// // document.querySelector('section ul li.special')


// // // WE CAN ALSO SELECT OFF OF ATTRIBUTES
// // // <input type="password" placeholder="password">
// // document.querySelector('input[type="password"]')








// //                  QUERYSELECTORALL()
// // Same idea, but returns a collection of matching elements, not just the first results
// // WE GET BACK A NODELIST NOT A HTMLCOLLECTION
// // A NODELIST IS ANOTHET TYPE OF COLLECTION
// // WE GET FOREACH() WITH NODELIST WHICH WE DIDNT HAVE ACCESS TO WITH THE HTMLCOLLECTIONS


// // NodeList(3) [input, input, input]
// document.querySelectorAll('input')

// // NodeList(2) [li.special, li.special]
// document.querySelectorAll('.special')

// // NodeList(3) [li.special, li, li.special]
// document.querySelectorAll('li')

// // NodeList [p#main]
// document.querySelectorAll('#main')































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































