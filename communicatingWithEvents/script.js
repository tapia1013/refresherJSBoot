/**
 *
 *
 *
 *             COMMUNICATING WITH EVENTS
 *
 *
 * Events - responding to user inputs and actions
 *
 *            SOME EVENTLISTENERS
 *  ----------------------------------------------
 *       clicks              mouse wheel
 *       drags               double click
 *       drops               copying
 *       hovers              pasting
 *       scrolls             audio start
 *       form submission     screen resize
 *       key presses         printing
 *       focus/blur
 *
 *
 *
 *
 *
 *
 *
 */




//             2 ways NOT to Add evenets

/**
 *     what              listen              run
 * --------------------------------------------------
 *  the thing -> the event type itself -> code to run
 *
 *
 * button    ->        click       -> change color
 *
 * input    ->     hits return     -> get search results
 *
 * image    ->     mouseover   ->  display img caption
 *
 *
 */




// //              addEventListener() 
// // Specify the event type and a callback to run
// // WE CAN USE ARROW FUNCTIONS BUT SOMETIMES HAVE PROBLEMS WITH THE "THIS" KEYWORD

// // const button = document.querySelector('h1')
// // button.addEventListener('click', () => {
// //   alert('You clicked me')
// // })




// const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
//   alert('CLICKED!!!')
// })
// // we can add another event on same element
// btn.addEventListener('click', function () {
//   console.log('SECOND THING!');
// })
// // mouseover and change btn text
// btn.addEventListener('mouseover', function () {
//   // change innerText text
//   btn.innerText = 'INNER TEXT JS EVENT'
// })
// // mouseout and change btn text back to original
// btn.addEventListener('mouseout', function () {
//   // change innerText text
//   btn.innerText = 'CLICK'
// })


// // WHEN WE WORK WITH SCROLL WE HAVE A COUPLE OF OPTIONS
// // SCROLL ON ENTIRE WINDOW? OR LISTEN TO SCROLL IN A SINGLE ELEMENT LIKE A TEXTFRAME ETC...
// // THIS IS GOOD FOR WHEN WE HAVE ANITMATION AND WE REACH A CERTAIN SPOT ON THE PAGE AND SHOW STUFF
// window.addEventListener('scroll', function () {
//   console.log('STOP SCROLLING!!!');
// })












































// // window.screen; // Screen {availWidth: 1920, availHeight: 1040, width: 1920, height: 1080, colorDepth: 24, …}


// //          THE IMPOSSIBLE BUTTON
// const btn = document.querySelector('button')

// btn.addEventListener('mouseover', function () {
//   // console.log('mouse over me');

//   // generate random num by using window.height
//   const height = Math.floor(Math.random() * window.innerHeight)
//   // generate random num by using window.width
//   const width = Math.floor(Math.random() * window.innerWidth)

//   btn.style.left = `${height}px`;
//   btn.style.top = `${width}px`
// })


// // EVENT IF THE USER DOES CLICK BTN
// btn.addEventListener('click', function () {
//   btn.innerText = 'YOU GOT ME!'
//   document.body.style.backgroundColor = 'purple'
// })










































// //             EVENTS ON MULTIPLE ELEMENETS
// //                EVENT OBJECT
// // function (event) {console.log(e)} it gives us an object

// const colors = [
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'purple',
//   'indigo',
//   'violet'
// ]

// const h1 = document.querySelector('h1')
// // make a seperate function so it wont be too nested
// const changeColor = function (e) {
//   // console.log(this);
//   // console.log(this.style.backgroundColor);
//   console.log(e);
//   h1.style.color = this.style.backgroundColor
// }

// const container = document.querySelector('#boxes')

// for (let color of colors) {
//   const box = document.createElement('div');

//   box.style.backgroundColor = color;
//   box.classList.add('box')
//   container.appendChild(box)

//   box.addEventListener('click', changeColor)
// }



// //          event object if we click the body
// // if we put keypress it returns to us the key that was press on the keyboard like a b c d e f g etc..
// // the presskey is contained in the (e) object
// document.body.addEventListener('keypress', function (e) {
//   console.log(e);
// })




























// const input = document.querySelector('#username')



// // with keys we want the event object cause we want the info 
// input.addEventListener('keydown', function (e) {
//   console.log('KEY DOWN');
// })


// // key up, means get info when the key is let go of
// input.addEventListener('keyup', function (e) {
//   console.log('KEY UP');
// })


// // kepress for something to be considered a keypress there needs to be a change like space or a text
// input.addEventListener('keypress', function (e) {
//   console.log('KEY PRESS');
// })




const addItemInput = document.querySelector('#addItem')
const itemsUL = document.querySelector('#items')


addItemInput.addEventListener('keypress', function (e) {
  // console.log(e);

  // prevents empty values from being LIs
  if (!this.value) return;

  if (e.key === 'Enter') {
    // add new item to list, grab value from input
    const newItemText = this.value

    // create new LI to append new li
    const newItem = document.createElement('li');

    newItem.innerHTML = newItemText;

    // append
    itemsUL.appendChild(newItem);

    // clear input
    this.value = '';
  }
})




















// //      DO NOT DO EVENTS LIKE THIS

// // 1) DO NOT PUT EVENT LISTENERS INLINE IN HTML


// // 2) THE SECOND WAY IS TO MAKE IT IN A SEPERATE FILE LIKE THIS... THE BEST WAY IS TO ADD EVENTLISTENER


// const btn = document.querySelector('#clicker')

// // lets see what we have in the btn as options
// // console.dir(btn)

// // JS calls it immediately so we have to make a func
// // btn.onClick = alert('hi!!!')

// // so it wont run right away
// btn.ondblclick = function () {
//   console.log('YOU CLICKED ME THROUGH JS FILE');
// }


// // NOOOOOOOOOOOOOOOOOOOOO ABOVE IS WRONG








