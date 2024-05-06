//using index.js
console.log("hello index.js");

//variables
var nameOldConvention = "milan"; //technically correct, but not used since ES6

let fullName = "Molnar Milan"; //let keyword is used to define variables, regardless of type 
fullName = "Molnár Milán";

//constants
const staticName = "can't change this";
//staticName = 3; //this would be an uncaught error


//Primitive types / value types
let string = "this is called a string literal";
let number = 100; // number literal
let isbool = true; // boolean literal true|false
let notDefined = undefined; //stores an undifined value
let nothing = null; //used to set to nullable and reasigne later

//dynamic typing

let age = "im 27yrs old";
console.log(typeof age); // string
age = 27;
console.log(typeof age); // number

//reference types obj, arr, func

let personObject = { //object literal
    name: "Milán",
    age: 27
};

//dot notation
personObject.name = "Berta"; //reassigne name

//bracket notation
let selectedProperty = "age"
console.log(person[selectedProperty]);//reassigne name with a property changeble in a variable

//arrays

let listArray = ['item_1', 'item_2', "item_3", 4, 5, true, null] //array literal array can contain multiple type

console.log(listArray[1]) // index number 1 is the second item
console.log(listArray.length) // array is an obj, so we have properties on the dot notation

//functions

function greet(parameter){
    console.log("Hello " + parameter)
}

greet("World!")

const greetExpression = (parameter) => {
    console.log("Hello " + parameter)
}
