/**
 * @topic - Explain when to use .then() vs async/await
 * @todo Examples of .then() : [ fetch, getNames ] can only use .then on an async function that returns a promise
 * @async - .then() and await ( with an asyc function)
 * @function fectch ( javaScript )
 * @function getNames ( we made )
 */

const addNumbers = async function(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        total += num; // total = total + num
    }


    return total; // {number} -> Promise
}

// Two ways to call an ASYNC function
// first way to call ( f )
addNumbers([1, 33, 44, 5, 6, 77, 88, 9]) // {number} -> Promise
    .then(total => {
        console.log('Total:', total);
    })


// Second wat to call ( f )
const runCode = async function() {
    let x = await addNumbers([1, 33, 44, 5, 6, 77, 88, 9]);
    console.log('x:', x);
    // if no return called it will return undefined
}

runCode();

// async arrow function that will run at the start of the program
(async() => {
    console.log('hello');
})();

// You CANNOT use the .then() syntax or async await with the following examples

const printNames = function(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let person = array[i]; // {string}
        console.log('person:', person);
        result.push(person);
    }
    return result; // {array}
}

const y = printNames(['Rome', 'Cal', 'Sharlene']) // {array}
console.log('y:', y);

// printNames(['Rob', 'Jane', 'Kasai'])
//     .then(result => {
//         console.log('result:', result);
//     })