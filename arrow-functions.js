/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b){
    ///code block
    return a + b;
}

let sum = addTwoNumbers(9,10);
console.log(sum);


// Arrow Function With Parameters
//define as conostannt soo they cannot be overwritten oor re defined. 
const addTwoNumberConst = (a, b) => {
    ///code block
    return a + b;
}

let sum2 = addTwoNumberConst(9,10);
console.log(sum2);


// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a+b;
//if function is simple, just use fat arrow
let sum3 = addTwoNumbers2(9,10);
console.log(sum2);

// Implicit Returns
const saysomething = (message) => console.log(message)

saysomething('Well, bitch')

const sayHello = () => console.log('hello')
sayHello()

// Returning Multiple Lines

const returnMultipleLines = () => (
    '<p>
        This is a multiline string!
    </p>'
)

console.log(returnMultipleLines())