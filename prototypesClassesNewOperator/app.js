/**
 *
 *
 *       PROTOTYPES, CLASSES, & THE NEW OPERATOR
 *
 *
 * OBJECT OREIENTED PROGRAMMING JAVASCRIPT
 *
 *
 *
 *
 *      DONT USE ARROW FUNCTION () => {}
 *
 *
 *
 *
 */









// //            WHAT IS A PROTOTYPE
// // PROTOTYPES ARE THE MECHANISM BY WHICH JS OBJECTS INHERIT FEATURES FROM ONE ANOTHER, HOW PROTOTYPES CHAINS WORK AND LOOK AT HOW THE PROTOTYPE PROPERTY CAN BE USED TO ADD METHODS TO EXISTING CONSTRUCTORS

// // ALL THE METHODS LIKE .PUSH(), .POP(), .FILTER(), .FIND() AND ETC... ARE IN __PROTO__ AND NOT ON THE ARRAY OR OBJECT OR VARIABLE OR FUNCTION ITSELF

// // PROTO IS THE TEMPLATE OBJECT FOR ARRAYS AND FUNCTIONS, IT CONTAINS PREBUILT METHODS THAT WE CAN USE ON EVERY FUNCTION ARR OBJ STRING ETC... THAT EVERY JS BLOCK CODE HAS ACCESS TO

// // __proto__ is a reference to prototype it shows when we call a function or varaible and that variable has a __proto__ which is a reference to prototype

// // ITS WHERE ALL THE METHODS ARE STORED

// /********************
//  *  THIS WILL HELP US UNDERSTAND OOP BUT THIS ISNT VERY USEFUL 
//  * 
//  * *****************/




// //        LETS CREATE A PROTO
// // String.prototype.grumpus = () => alert('GO AWAY!')
// // const cat = "blue"
// // // gives us an alert "GO AWAY"
// // cat.grumpus()


// // create method
// String.prototype.yell = function () {
//   return `OMG ${this.toUpperCase()}`
// }

// // replace pop method
// Array.prototype.pop = function () {
//   return `NAHH WONT POP FOO`
// }













































/**
 *     INTRO TO OBJECT ORIENTED PROGRAMMING (OOP)
 *
 *
 */



// OOP is just like a template or a reciepe that we can reuse over and over and that is easy to use







































/**
 *
 *           FACTORY FUNCTION
 *
 *
 * its like a boilerplate for code
 *
 *
 *
 *
 */






// function hex(r, g, b) {
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// function rgb(r, g, b) {
//   return `rgb(${r},${g},${b})`
// }



// // FACTORY FUNCTION
// function makeColor(r, g, b) {
//   const color = {}

//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     // console.log(this);
//     // instead of having to do this.r this.g this.b
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
//   }

//   color.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   }

//   return color
// }

// const firstColor = makeColor(35, 255, 150)

// // firstColor.rgb()
// // firstColor.hex()


























































/**
 *             CONSTRUCTOR FUNCTIONS
 *
 * BETTER WAY OF FACTORY FUNCTIONS
 *
 * "NEW" KEYWORD/OPERATOR - MAKES A NEW OBJECT
 *
 *
 *
 *
 * SINCE:
 *     // eventhough its the same location its a custom unlike .slice which everything has its builtin
 *     black.hex === firstColor.hex // false
 *     "HIDSD".SLICE === "ASD".SLICE // TRUE
 *
 *
 *
 *
 * THIS IS WHERE THE CONSTRUCTOR KEYWORD ENTERS
 * The "new" operator lets us create and instance of a user defined object type or of one of the built-in object types that has a constructor function.
 * The "new" keyword does the following things:
 *     1) Creates a blank, plain JS object
 *
 *     2) Links (sets the constructor of) this object to another object
 *
 *     3) Passes the newly created object from Step1 as the "this" contenxt
 *
 *     4) Returns "this" if the function doesnt returns its own object
 *
 * // take a look at the Car example
 *
 *               CAR EXAMPLE
 *
 * function Car(make, model, year) {
 *   this.make = make;
 *   this.model = model;
 *   this.year = year
 * }
 * var car1 = new Car('Eagle', 'Talon TSi', 1993)
 * console.log(car1.make); // "Eagle"
 *
 *
 *
 *
 *            COLOR EXAMPLE
 * IF WE LOOK A THE __PROTO__ WE ALSO SEE A CONSTRUCOR ALONG SIDE IT
 * WHAT THIS ALLOWS US TO DO IS ADD METHODS TO THE PROTOTYPE CAUSE REMEMBER ABOVE === WAS FALSE
 *
 *
 *
 *
 *
 */




// function makeColor(r, g, b) {
//   const color = {}

//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     // console.log(this);
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
//   }

//   color.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   }

//   return color
// }

// const firstColor = makeColor(35, 255, 150)
// firstColor.hex() // firstColor.hex()
// firstColor.rgb() // "rgb(35,255,150)"

// const black = makeColor(0, 0, 0);
// black.rgb(); // "rgb(0,0,0)"
// black.hex(); // "#000s0"


// // black.hex === firstColor.hex // false







// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;

//   // console.log(this); // undefined/window if we dont add "new"

//   // still defined on object but not prototype, WE HAVE A WORK AROUND, WE DEFINE THIS METHOD OUTSIDE OF THE THIS SCOPE
//   // this.rgb = function () {
//   //   const { r, g, b } = this;
//   //   return `rgb(${r},${g},${b})`
//   // }
// }

// // lets try and call Color without the "new" and we get nothing back
// // Color(255, 0, 0)


// // WE HAVE TO CALL "NEW" OR ELSE IT WONT WORK
// // 1 ADDING "NEW" CREATES A NEW JS OBJECT
// // 2 LINKS HTE OBJECT OT THE OTHER OBJECT
// // 3 PASSES NEWLY CREATES OBJECT FROM SETP1
// // const fav = new Color(244, 23, 1)


// // SINCE IT CREATES A CONSTRUCTOR IT MEANS WE CAN ADD METHODS TO THE PROTOTYPE NOW UNLIKE BEFORE WHERE === WAS FALSE CAUSE IT WASNT THE SAME OR NOT ALL HAD ACCESS TO IT LIKE SLICE()


// // DOING IT THIS WAY ITS IN THE PROTOTYPE NOW
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`
// }

// // THIS WILL ALSO BE IN __PROTO__... WE STILL HAVE ACCESS TO "THIS" IN THESE FUNCTIONS
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }


// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b, } = this;
//   return `rgba(${r},${g},${b},${a})`
// }


// // we now have an object that has rgb, it doesnt have the rgb() defined along side its inside the __proto__

// const color1 = new Color(40, 250, 70)
// // we can call color2.rgb(), so now its BETTER CAUSE ITS NOT UNIQUE TO ONLY THAT OBJECT CAUSE ITS IN __PROTO__
// color1.rgb() // "rgb(40,50,70)"
// color1.hex() // "#283246"


// const color2 = new Color(0, 0, 0)
// color2.rgb() // "rgb(0,0,0)"
// color2.hex() // Color {r: 0, g: 0, b: 0}




// // NOW LETS VERIFY IF ITS THE SAME CAUSE EARLIER IT FAILED WHEN WE DID IT THE OTHER WAY
// // THEYRE POINTING TO THE SAMETHING
// // color1.hex() === color2.hex() // TRUE

// document.body.style.backgroundColor = color1.rgba(0.3)



























































/**
 *                CLASSES
 *
 * JS CLASSES - SYNTACTICAL SUGAR
 * DOES THE SAMETHING AS THE ABOVE BUT WITH CLASSES SO ITS SHORTER AND EASIER TO READ AND IMPLEMENT
 *
 *
 * we do a class by writing class and name
 *     inside the class always goes a construcor
 *     its kinda like function Color(r,g,b) {this.r} etc...
 *         we usuall access "this" inside the constructor
 *
 *
 *
 *
 *
 * constructor() {} runs immediately after we instasitate it const c1 = new Color(0,0,0)
 *
 *
 *
 *
 *
 */








// // // This is a Contructor Function...
// // function Color(r, g, b) {
// //   this.r = r;
// //   this.g = g;
// //   this.b = b;
// // }

// // // If you call it on its own like a regular func
// // Color(35, 69, 189) // undefined
// // // It returns undefined. Seems useless!

// // // ********************
// // //  THE NEW OPERATOR!
// // // ********************

// // // 1. Creates a blank, plain JS object
// // // 2. Links (sets the constructor of) this object to another object
// // // 3. Passes the newly created object from Step1 as the "this" context
// // // 4. Returns "this" if the function doesnt return own object

// // Color.prototype.rgb = function () {
// //   const { r, g, b } = this;
// //   return `rgb(${r},${g},${b})`
// // }

// // Color.prototype.hex = function () {
// //   const { r, g, b } = this;
// //   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// // }

// // Color.prototype.rgba = function (a = 1.0) {
// //   const { r, g, b } = this;
// //   return `rgba(${r},${g},${b}, ${a})`
// // }

// // const color1 = new Color(40, 255, 60)
// // color1.hex()

// // const color2 = new Color(0, 0, 0)
// // color2.hex()







// // keyword called class and we give it a name
// class Color {
//   // we always call constructor when doing a class
//   constructor(r, g, b, name) {
//     // console.log("inside contructor");
//     // console.log(r, g, b);

//     // usually in the contructor we access "this"
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }

//   // adding methods is here... its like Color.prototype.greet = function(){}
//   // greet() {
//   //   return `HELLO FROM ${this.name}!`
//   // }

//   // cause rgb and rgba are similar lets dry code
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r},${g},${b}`
//   }

//   // CALL METHOD WITHIN THE SAME METHOD/CLASS
//   rgb() {
//     // this is how we call a func thats within 
//     return `rgb(${this.innerRGB()})`
//   }

//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`
//   }

//   hex() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   }
// }


// // create new Color
// const red = new Color(255, 23, 1, 'tomato') // inside constructor and r g b values we passed in
// red.hex() // "#ff1701"

// const white = new Color(255, 255, 255, 'white')
// white.hex() // #ffffff

// // compare both .hex
// // red.hex === white.hex // true... cause they come from the proto and have the same hex available 





























/**
 *          MORE PRACTICE WITH CLASSES
 *
 *
 *
 *
 */






// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//     // we can call a method from below
//     this.calcHSL()
//   }

//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r},${g},${b}`
//   }

//   rgb() {
//     return `rgb(${this.innerRGB()})`
//   }

//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`
//   }

//   hex() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   }

//   hsl() {
//     const { h, s, l } = this;
//     return `hsl(${h}, ${s}%, ${l}%)`
//   }

//   fullySat() {
//     const { h, l } = this;
//     return `hsl(${h}, 100%, ${l}%)`
//   }

//   opposite() {
//     const { h, s, l } = this;
//     const newHue = (h + 180) % 360;
//     return `hsl(${newHue}, ${s}%, ${l}%)`
//   }

//   // new part added to previous code
//   calcHSL() {
//     let { r, g, b } = this;

//     // make r,g,b fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;

//     if (delta == 0) h = 0;
//     // red is max
//     else if (cmax = r) h = ((g - b) / delta) % 6
//     // Green is max
//     else if (cmax == g) h = (b - r) / delta + 2
//     // Blue is max
//     else h = (r - g) / delta + 4;

//     h = Math.round(h * 60)

//     // Make negative hues positive behind 360
//     if (h < 0) h += 360;

//     // calculate saturation
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     // Multiply l and s by 100
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);

//     this.h = h;
//     this.s = s;
//     this.l = l;

//   }
// }

// const red = new Color(255, 0, 0., 'red')
// const white = new Color(255, 255, 255, "white")







































/**
 *
 *           EXTENDS, SUPER, SUBCLASSES
 *
 *
 * EXTENDS - BASICALLY SHARING FUNCTIONALITY BETWEEN CLASSES, we can put the constructor and names and a method in Pet and another class can have access to those if it extends Pet
 *    class Dog extends Pet{}
 *
 *
 *
 *
 * SUPER() - kinda like spreads, it references the class that we are extending from
 * 
 * 
 * 
 *
 *
 */




class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`
  }
}


class Cat extends Pet {
  // ADDITIONAL INFO ABOUT CAT WITH SUPER()
  constructor(name, age, livesleft = 9) {
    console.log("IN CAT CONSTRUCTOR");

    // if we dont want to duplicate name and age we put super keyword
    // this.name = name;
    // this.age = age;

    super(name, age)

    this.livesleft = livesleft;
  }

  meow() {
    return "MEOWWW!!!"
  }
}

// const cookie = new Cat('Cookie', 6)
// cookie.eat()// "Cookie is eating!"

class Dog extends Pet {
  bark() {
    return 'WOOF BISH!!'
  }
  // overwrites eat from Pet but only here
  eat() {
    return `${this.name} MUNCHES!!!`
  }
}
























