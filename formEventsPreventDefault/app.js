/**
 *
 *        FORM EVENT & PREVENTDEFAULT
 *
 *
 *
 *
 */





// select form
const form = document.querySelector('#signup-form')

// form.addEventListener('submit', function (e) {
//   alert('SUBMMITED FORM');
//   console.log(e);
//   // prevents the reload of the page after submitting or going to a new page
//   e.preventDefault()
// })


const creditCard = document.querySelector('#cc')
const terms = document.querySelector('#terms')
const veggie = document.querySelector('#veggies')




//      e.preventDefault() & getting form data

// form.addEventListener('submit', function (e) {
//   alert('SUBMMITED FORM')

//   console.log('cc ', creditCard.value);
//   console.log('terms ', terms.checked);
//   console.log('veggies ', veggie.value);

//   // send form data to database
//   // append something to page using form data

//   e.preventDefault()
// })







//        input and onChange
/**
 *
 * {
 *   cc: '21232',
 *   terms: false,
 *   veggie: 'carrot'
 * }
 *
 */

const formData = {}

// // input triggers eachtime the input is added something
// creditCard.addEventListener('input', (e) => {
//   console.log('CC CHANGED! ', e);
//   // {key: value}
//   formData['cc'] = e.target.value
// })
// // we call in formData and it is up to date with whatever value we put in the inputfield
// formData; // {cc: "232131112"}

// // Now the samething with veggie select

// veggie.addEventListener('input', (e) => {
//   console.log('VEGGIE CHANGED! ', e);
//   formData['veggies'] = e.target.value
// })
// formData; // {cc: "233223", veggies: "apple"}

// // with checkbox we cant use e.target.value
// terms.addEventListener('input', e => {
//   console.log('CHECKBOX!!! ', e);
//   formData['agreeToTerms'] = e.target.checked
// })
// formData; //{cc: "2342872671221", agreeToTerms: true, veggies: "carrot"}



const ul = document.createElement('ul')


// THERES A BETTER WAY OF WRITING THE ABOVE with NAME
// We loop over the const input fields above
for (let input of [creditCard, terms, veggie]) {
  const li = document.createElement('li')

  input.addEventListener('input', ({ target }) => {
    // console.log(e.target.name);

    // since we destrcutered target we can pull these out
    const { name, type, value, checked } = target;

    // we can use the NAME from html to add to our formData object
    formData[name] = type === 'checkbox' ? checked : value;

    console.log(formData);

    li.innerHTML = formData[name]

    return ul.appendChild(li)

    // e.preventDefault();
  })


}
document.body.prepend(ul)



// IF WE PUT "CHANGE" EVENT ISTEAD OF "INPUT" IT WILL WORK THE SAMEWAY, BUT IT WONT UPDATE AS YOUR TYPING CHARACTERS OR CHECKING BOX IT WILL ONLY UPDATE IF YOU CLICK OFF OF THE INPUT OR HIT ENTER
























































