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






































// //        FINDING PARENT/CHILDREN/SIBLINGS

// // parentElement, children(), nextSibling()




// // //              PARENTELEMENT
// // // ALLOWS YOU TO HAVE ACCESS TO OTHER ELEMENTS BASED OFF OF THE CURRENT ELEMENT THAT YOURE WORKING ON
// // // WORKS UP THE PARENT TREE FROM LI -> UL -> DIV -> BODY -> HTML -> NULL


// // // first li in the parent ul with other li siblings
// const firstLi = document.querySelector('li')
// // // gives us the first li
// // // firstLi; // <li class="special">First Thing</li>


// // // IF WE CONSOLE.DIR(FIRSTLI) WE WILL SEE ALL THE METHODS IT HAS.
// // // WE CAN SEE THAT IT HAS A PARENTELEMET: UL
// // console.dir(firstLi)

// // // WE CAN ACCESS THE PARENTELEMENT
// // // firstLi.parentElement; // <ul></ul>

// // // WE CAN ADD ANOTHER PARENTELEMENT AND WE'LL SEE THAT THE PARENTELEMENT OF THE UL IS THE BODY
// // firstLi.parentElement.parentElement // <body></body>









// //                   CHILDREN
// // // WE GET AN HTMLCOLLECTION
// // // RETURNS TO YOU IN A HTML COLLECTION THE CHILDREN ELEMENT OF THE UL 

// // const ul = document.querySelector('ul')

// // // htmlCollection
// // ul.children; // HTMLCollection(3) [li.special, li, li.special]

// // // GET ACCESS TO THE FIRST CHILD OF THE LI
// // ul.children[0]; // <li class="special">First Thing</li>


// // // WE CAN THEN ACCESS THE INNERTEXT OF THE CHILD WE'VE CHOSEN
// // ul.children[0].innerText // "First Thing"



// // const form = document.querySelector('form')

// // form.children[2].checked // false











// //                   SIBLINGS
// // SIBLINGS ARE ON THE SAME LEVEL AND THEY SHARE THE SAME PARENT


// //             NEXTELEMENTSIBLING
// // WE GET THE NEXT SIBLING FROM THE FIRST ONE WHICH IS SECOND THING
// firstLi.nextElementSibling // "<LI>SECOND THING</LI>"
// // GETS THE THIRD SIBLING
// firstLi.nextElementSibling.nextElementSibling // "<LI class="special">THIRD THING</LI>"




// //            PREVIOUSELEMENTSIBLING

// const thirdLi = firstLi.nextElementSibling.nextElementSibling

// // "<LI class="special">THIRD THING</LI>"
// thirdLi

// // GIVES US THE PREVIOUS SIBLING WHICH IS THE SECOND
// thirdLi.previousElementSibling; // "<LI>SECOND THING</LI>"












































// //            CHANGING MULTIPLE ELEMENTS

// // 1)  WE GET ALL THE ELEMENTS WE WANT TO CHANGE WITH DOCUMENT.QUERYSELECTORALL OR JUST QUERYSELECTOR

// // 2) THEN WE ITERATE OVER THE ELEMENT/OBJECT/ARRAY

// // 3) THEN WE CALL WHATEVER METHOD/PROPERTY OR WE WANT TO CHANGE


// // const allLis = document.querySelectorAll('li')

// // for (let i = 0; i < allLis.length; i++) {
// //   // console.log(allLis[i]);

// //   // we are adding a <b></b> tag with innerHTML
// //   allLis[i].innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
// // }


// // Lets get all the "li" in the page
// const allLis = document.querySelectorAll('li')

// // now we want to iterate over allLis
// for (let i of allLis) {
//   // shows all the LI's innerText
//   // console.log(i.innerText);

//   // if we want to change allLis we can just set the innerText
//   i.innerText = 'LOL FROM THE JS'; // every li's have been changed to 'LOL FROM THE JS'
// }









































// //               ALTERING STYLES

// // CHANGE CSS STYLES USING JAVASCRIPT
// // EVERY ELEMENT THAT WE SELECT HAS A STYLE PROPERTY.
// // WE CAN USE .STYLE TO CHANGE THE STYLE OF THE ELEMENT BUT WE CANNOT GET THE STYLE VALUE THE ELEMENT HAS. IT ONLY SHOWS THE STYLES IF THE CSS IS INLINE WITH THE HTML LIKE: <H1 STYLE="COLOR: TEAL"></H1> THEN WE CAN SEE THAT BUT ITS NOT GOOD TO HAVE STYLES IN HTML TAGS <p style="background-color:'red'">lorem</p>




// // const h1 = document.querySelector('h1')

// // // we can see what methods .style has inits object
// // h1.style; // alignContent, alignSelf, background,color, etc...

// // // change font and color of h1 with .style
// // h1.style.color = 'red'; // changed h1 color red


// // // gets first p
// // const p = document.querySelector('p')

// // // chnage p tag style
// // p.style.color = 'lime'
// // // chage the background color it need to be camelCase
// // p.style.backgroundColor = 'purple';




// // NOW LOOP AND CHANGE STYLE
// const allLis = document.querySelectorAll('li')

// const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple']


// // we want to place each color into the li index, for...of is not very useful here so we use for() or forEach cause we get the element(li) and the index(color)
// allLis.forEach((li, i) => {
//   const color = colors[i];

//   // we can use the index to access the color
//   console.log(li, color);

//   // change the style
//   li.style.color = color
// })




























































































































































































































































































































































































































































































































































































































































































































































































































































































