/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

/** 

// Vanilla JavaScript Function
function addTwoNumbers(a,b){
    ///code block
    return a + b;
}

let sum = addTwoNumbers(9,10);


// Arrow Function With Parameters
//define as conostannt soo they cannot be overwritten oor re defined. 
const addTwoNumberConst = (a, b) => {
    ///code block
    return a + b;
}

let sum2 = addTwoNumberConst(9,10);


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
    `<p> 
        hello! How are you
        girl
    </p>`
);


// index

const averagePoints = (arr, subject) =>{
    return arr, subject
}


//no spread operator
let arr1 = [1,2,3];
let arr2 = arr1;

arr2.push(4);

console.log("first array:", arr1);
console.log("Secnod array:", arr2);

//copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7);

console.log("third array", arr3);
console.log("fourth array", arr4);

//copying an object 

let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5}

console.log("first obj", obj1);
console.log("second oobj", obj2);
console.log("over written b oobj1", obj3);

//copying only a bit of obkect

let arr5 = [...arr1, {...obj1 }, ...arr3, "x","y","z"]
console.log(arr5)

//Create a variable named subjects using the keyword let
//Assign it a copy of the subjects array from the first object in the students array

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects];
console.log(subjects);

const update = (item, val) =>([...item, val]);

//REST PARAMETER

//Regularr function call: 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum", sum);

// Extra argumemnts are ignorred
let sum2 = sumAll(1, 2, 3, 4, 5, 6, 100);
console.log("Sum2", sum2);


//functions using ..rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1,2,3,4,59,299,38);
console.log(sum3)

*/

