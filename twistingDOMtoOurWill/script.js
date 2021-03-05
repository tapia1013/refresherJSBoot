/**
 *
 *
 *
 *           T W I S T I N G DOM TO OUR WILL
 *
 *
 *
 *
 *
 *  WHAT WE'RE LEARNING:
 *
 *
 *      classList                innerText
 *      setAttribute()           textContent
 *      appendChild()            innerHTML
 *      append()                 value
 *      prepend()                parentElement
 *      removeChild()            children
 *      remove()                 nextSibling
 *      createElement            prevoiousSibling
 *                               style
 *
 *
 *
 *
 *
 *
 */













// //                 INNERTEXT & TEXTCONTENT


// // //             innerText
// // // SOMETIMES WE MANIPULATE THEM OR CHANGING STYLES OR INSERTING A NEW ELEMENT INSIDE OF THEM OR REMOVING THE ELEMENTS.

// // // WE USUALLY JUST ACCESS DATA, LIKE WHAT NUMBER USER CHOSE, WHAT USER CLICKED ON

// // // THE DOM HAS SO MANY PROPERTIES SO MANY METHODS THAT IT GETS CONFUSING



// // // LETS SELECT THE H1 IN OUT PAGE
// // const h1 = document.querySelector('h1')

// // // returns the text inbetween the tag
// // h1.innerText; // "My Webpage"


// // // THATS HOW WE USE INNERTEXT WITH EASY ELEMENTS WHAT IF WE HAVE NESTED INSIDE, if we just use ul.innerText its going to return to us all the text inside the li's
// // const ul = document.querySelector('ul');

// // // this is what it returns to us:
// // //       "First Thing
// // //        Second Thing
// // //        Third Thing"
// // ul.innerText;

// // // innerText just gets all the text from the body page
// // document.body.innerText;
// // // returns to us all the text in the website regardless if its inside tags
// // // "My Webpage
// // // Lorem, ipsum dolor sit amet consectetur adipisicing elit.Consequuntur, quisquam! Minus beatae natus, ipsa perferendis eius deleniti nisi dolore aliquam esse autem impedit doloribus quam facere pariatur nemo quod.Culpa!
// // // Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odio recusandae maxime cupiditate earum voluptatem ratione fugit aspernatur quam odit distinctio nulla ex porro ullam officia, voluptatibus accusantium magnam eligendi error!
// // // First Thing
// // // Second Thing
// // // Third Thing




// // //  WHAT innerText is mostly useful is to change the text
// // h1.innerText = 'IM HUNGRY!!!'; // changes and updates h1

// // // all the ul li are changed to the text below
// // // ul.innerText = 'I AM A BIG UL'












// //                   textContent
// // IT LOOKS LIKE TEXTCONTENT DOES THE SAMETHING AS INNERTEXT.
// // TEXTCONTENT GETS EVERYTHING EXACTLY HOW IT IS ON THE TAGS IF IT HAS SPACES AND A CONSOLE LOG IN A TAG IT WILL RETURN EVERYTHING THE WAY IT IS
// // TEXT CONTENT DOESNT SHOWS TAGS <P></P> <SCRIPT></SCRIPT>


// const h1 = document.querySelector('h1')


// h1.textContent = 'I AM HUNGRY!!!!!!!!!'

































// //                      INNERHTML
// // IT RETURNS TO US THE TAGS AND TEXT IN "STRINGS"
// // KINDA SIMILAR TO INNERTEXT AND TEXTCONTENT
// // innerHTML WILL RETRIEVE THE TEXT INSIDE AN ELEMENT BUT ALSO THE TAG(<P></P>)
// // WE GET EVERYTHING BETWEEN THE TAG
// /** WE CAN ALSO UPDATE THE CONTENT/TAGS INSIDE THE TAGS WE'RE CALLING IT FROM */
// // WE CAN ALSO ADD HTML ELEMENTS WHEN UPDATING OR REPLACING THE CONTENTS INSIDE THE FORM


// const form = document.querySelector('form')

// // will return to us the tags and text inside the form
// form.innerHTML;
// // "
// //  <input type="text" placeholder="Bear Name" id="">
// //  <input type="password" placeholder="password">
// //  <input type="submit">
// // "



// // SELECT FIRST UL WE FIND
// const ul = document.querySelector('ul')

// // we get all of the tags and text inside the ul
// ul.innerHTML;
// // "
// //   <li class="special" > First Thing</li >
// //   <li>Second Thing</li>
// //   <li class="special">Third Thing</li>
// // "







// //         UPDATING THE TAGS INSIDE THE FORM
// // form.innerHTML = 'kadskasd'

// // // now the form only contains this and removes everything else it had before
// // form; // <form action="">kadskasd</form>

// // // we can add html tags with it
// // form.innerHTML = '<b>I AM A BOLD TAG FROM JS<b/>'




// // INNERHTML CAN ADD TAGS
// const h1 = document.querySelector('h1')


// // Theres a difference between innerText and innerHTML when we are setting them, innerText doesnt gives you the tag but innerHTML does

// // if you dont want to overwrite but add on to it
// h1.innerHTML += ' is cool <b>!!!</b>'; //"My Webpage is cool is cool!!!"
















































// //             VALUE, SRC, HREF, AND MORE

// // These are properties that we can directly access on individual elements.
// // If we have a form if we want to retrieve the text in a form input or the values from we have a value from an attribute on those elements called value
// // ITS LIKE WHEN WE HAVE A SEARCHBAR AND AFTER WE PRESS ENTER THE SEARCHBOX IS EMPTY AFTERWARDS


// //                     VALUE

// // lets select all inputs
// const inputs = document.querySelectorAll('input')

// // if we put text/value in the input box with the array index we can see what we put in the box
// inputs[0].value; // taco

// // we can see password input value
// inputs[1].value; // 'lolpw1' what we put in input



// // WITH CHECKBOX WE SEE "ON" ALL THE TIME NOMMATTER IF ITS BOX OR NOT we can see it has a diff property called checked: 'false' or 'true'
// inputs[2].checked // false or true depending if checked


// // WE USE .VALUE USUALLY TO RESET THE INPUT TO AN EMPTY STRING
// inputs[0].value = ''



// // WE CAN SEE THE RANGE SLIDER VALUE 100 - 500
// inputs[3].value

// // we can change placeholder text
// inputs[1].placeholder = 'Please Enter Password'



// //                      HREF
// // WE CAN ALSO CHANGE ACHOR TAGS href
// const a = document.querySelector('a')

// // we retrieve link 
// a.href // "https://www.cats.com/"

// // WE CAN CHANGE LINK
// a.href = 'https://www.google.com'






// //                    SRC
// const img = document.querySelector('img')

// // see whats the src
// img.src; // https://www.bearphotowehaveinhtml.com

// // change the src from the img to a polarbear
// img.src = 'https://images.unsplash.com/photo-1591630866811-eceedf667541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'





































// //             GETTING & SETTING ATTRIBUTES
// //       GETATTRIBUTE() AND SETATTRIBUTE()
// // ITS A METHOD NOT A PROPERTY
// // THEY ALLOW US TO ACCESS OR CHANGE THE VALUE OF ATTRIBUTES ON ELEMENTS
// // setAttribute() takes 2 arguments 


// // WERE GOING TO DO IT WITH RANGE
// const range = document.querySelector('input[type="range"]');


// //       getAttribute() gets you the value
// // we have lots of attributes on range
// // IF I WANT TO SEE THE MAX RANGE ATTRIBUTE
// range.getAttribute('max') // we get 500 
// range.getAttribute('min') // we get 100



// //         SETATTRIBUTE()

// // setAttribute() takes 2 arguments
// // ('thing we try to set', 'value i want to give it')
// range.setAttribute('min', '-500') // now the new min is -500
// // new max range number is 10000
// range.setAttribute('max', '10000')

// // WE CAN ALSO CHANGE THE TYPE FROM TYPE TO RADIO OR CHECKED OR TEXT OR SUBMIT;
// //('type', 'what we want to change it to')
// range.setAttribute('type', 'radio')






































//        FINDING PARENT/CHILDREN/SIBLINGS
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































