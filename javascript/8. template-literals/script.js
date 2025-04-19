// Template literals are also known as template strings, are a  feature in javascript that allows you to create strings with embedded expressions. They are denoted by backticks `` instead of single or double quotes. Template literals provide a more flexible and concise way to construct strings, especially when they involve variables or expressions. They also support multi-line strings and string interpolation, making it easier to create complex strings without the need for concatenation.

console.log(`this is some 
of the example of template literals`); // this is a multi-line string using template literals


console.log(`${2+2}`); // this is a string interpolation using template literals

const firstName = "John";
const lastName = "Doe";

console.log(`Hello, my name is ${firstName} ${lastName}.`); // this is a string interpolation using template literals


function greet(name){
    return `Hello, ${name}!`; // this is a string interpolation using template literals
}

console.log(greet("Alice")); // this is a string interpolation using template literals