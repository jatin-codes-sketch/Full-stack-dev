// Strings in JavaScript

let firstName="jatin ";
console.log(firstName);

let secondName=`thakur`;
console.log(secondName);

let fullName=firstName+secondName;
console.log(fullName);

let fullName2=`${firstName}${secondName}`; // template literals
console.log(fullName2);

//  concatenation
let firstName1="jatin ";
let secondName1="thakur";
console.log(firstName1.concat(secondName1)); // concat method

// appending 
firstName +="hello";
console.log(firstName); // appending

// length of string
console.log(firstName.length); // length of string

// cases
console.log(firstName.toUpperCase()); // upper case
console.log(firstName.toLowerCase()); // lower case
console.log(firstName.charAt(0)); // first character
console.log(firstName.charAt(firstName.length-1)); // last character
console.log(firstName.indexOf("t")); // index of character

// slicing
console.log(firstName.slice(0,7)); // slice
console.log(firstName.slice(0)); // slice
console.log(firstName.slice(-1)); // last character 
console.log(firstName.slice(-2)); // last two character

// splitting and joining
let str="hello world";
console.log(str.split('')); // split
console.log(str.split(' ').join('-')); // split


// include 
console.log(str.includes("hello")); // include true and false

// trim
let str1="   hello world   ";
console.log(str1.trim()); // trim

// replace
let str2="hello world";
console.log(str2.replace("hello","hi")); // replace

// repeat
let str3="hello";
console.log(str3.repeat(3)); // repeat
