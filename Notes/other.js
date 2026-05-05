// ----- Primitive / Value Types - String, Number, Boolean, Undefined, null, Symbol -----

// String

let x = "Javascript";
console.log(x);
console.log(typeof (x));

// Number

let y = 1;                 // Integer
console.log(y);
console.log(typeof (y));

let z = 2.5;               // Decimal
console.log(z);
console.log(typeof (z));

// Boolean

let p = true;
console.log(p);
console.log(typeof (p));

// Undefined

let q;                     // Can assign values later
console.log(q);
console.log(typeof (q));

// null

let r = null;
console.log(r);
console.log(typeof (r));    // type is object

// JS - Dynamic Language   - Can change both Value & Typeof

let s = "javascript";
console.log(s);
console.log(typeof (s));
s = 100;
console.log(s);
console.log(typeof (s));


// ----- Reference Types - Objects, Arrays, Functions -----

let a = "First"
let b = a;                     // Copy by Value

a = "Second"

console.log(a);
console.log(b);

let c = {name: "First"};
let d = c;                     // Copy by Reference

c.name = "Second";

console.log(c);
console.log(d);

// Objects

let course = {
    title: "BCA",
    semester: 5,
    pass: true
}
console.log(course);
console.log(typeof (course));

console.log(course.title);              // . Notatition
console.log(course['title']);           // [] Noatation

// Arrays

let subjects = ['History', 'Political Science', 12, true, null];
console.log(subjects[0]);
console.log(typeof (subjects));            //Arrays & Functions are Objects only

// Functions

function functionName (employeenName) {    // Function Declration
    console.log('creating New Employee ID for ' + employeenName)
}

functionName('Satya');                     // Function Call
functionName('Rahul');


// Execution Context - The environment where code is runs & executed
// 1. memory phase - variable context     (Memory allocation for Variables and Functions before execution)
// 2. code phase   - thread of execution  (Synchronus Single Thread language / Line by line)

// Hoisting - accessing the Variables & Functions before initializing them
// Temporal Dead Zone - cannot access Variables before initializing them
// Lexical Scope - to see what all we can access (Global>Local>Block)
// Block Scope, Function Scope, Global Scope


// ----- Usage of var / this.var / window.var - all are same -----

console.log(ab);                 // Memory Phase
console.log(this.ab);
console.log(window.ab);

var ab = 10;

console.log(ab);                 // Code Phase
console.log(this.ab);
console.log(window.ab);


// ----- variable type - let, var, const -----

{
    let aa = 10;                 // Block Scoped
    const bb = 20;               // Block Scoped
}

    var cc = 30;                 // Function Scoped


// ----- Functions - first classed citizens in js -----
// Higher-order functions
// Fucntion + Lexical Scope = Closure

function sum (a, b) {                             // Function Declare & intialize
    return a+b;
}

let diff = function (a, b) {                      // Fucntion assigned to a Varibale
    return a-b;
}

function calculate (CalFunction, a, b) {          // Function as an Argument / return to another Function - Higher Order Function
    return CalFunction(a, b);
}

console.log(calculate(sum, 2, 3));
console.log(calculate(diff, 2, 3));

function outer () {                              // Function as a return value to another function
    function inner () {
        console.log('hello');
    }
    return inner;
}

let returnedFunVar = outer();
console.log(returnedFunVar());


// ----- Arrow Functions -----
{
    let product = (a, b) => a*b;
}                                        // Both are same             

let product = function (a, b) {
    return a*b;
}


// ----- Callback - (function passed as an argument to an function to be called after particular time & event) -----
// Event Queue
// Event loop

function fetchData(callback) {
    setTimeout(() => {
        let data = 'fetched data';
        callback(data, null);
    }, 5000);
}

function handleData (data, error) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

fetchData(handleData);

// ----- Problems - Callback Hell, Pyramid of Doom, Inversion of control -----

// Promises - Object (representing the state)
// 3 staes - pending, fulfilled, rejected


function getData () {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('data fetched');
        }, 5000);
    })
}

getData () 
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })

async function fetchData () {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.error (error);
    }
}

fetchData();


// Common Higher Order Fucntions

// 1.Map

const numbers = [1,2,3,4,5];
console.log(nums);
const doubledNums = nums.map((num) => 2*num);
console.log(doubledNums);

// 2.Filter

const number = [1,2,3,4,5];
console.log(nums);
const evenNums = nums.filter((num) => num%2 === 0);
console.log(evenNums);

// 3.Reduce

const nums = [1,2,3,4,5];
console.log(nums);
const sum = nums.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum);