// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in javascript. They were introduced in ECMScript 6 (ES6) and provide a more elegant syntax for writing functions. Arrow functions are particularly useful for writing anonymous functions and for maintaining the lexical scope of the `this` keyword. They are often used in functional programming and when working with higher-order functions, such as `map`, `filter`, and `reduce`.

function greet(name){
    return `hello ${name}`;
}
console.log(greet("Alice")); // this is a string interpolation using template literals


// we can also use arrow function to define the function greet
// the arrow function syntax is more concise and allows us to omit the `function` keyword and the curly braces if the function body is a single expression
const greetArrow = (name)=>{
    return `hello ${name}`;
}
console.log(greetArrow("Alice")); // this is a string interpolation using template literals


// more advance example of arrow function
// the arrow function syntax allows us to omit the parentheses if there is only one parameter
const greetShort=name=>`hello ${name}`; // this is a string interpolation using template literals 

// but if there will be two or more parameters then we have to use parentheses
const greetuser=(name,age)=>`hello ${name} and your age is ${age}`; // this is a string interpolation using template literals
console.log(greetuser("Alice",25)); // this is a string interpolation using template literals


const double=n=>n*2;
console.log(double(5)); // this is a string interpolation using template literals