// Logical operators 
// 1) logical AND (&&)
// TRUE if bot hthe operands /boolean values are true, else evaluates to FALSE 

const a=true;
const b=false;
const c=5;

console.log(a&&b); // false
console.log(a&&c>2); // true 



// 2) logical OR (||)
// TRUE if either of the operand /booleans values is true. evaluates to false if both are false.

console.log(a||b) // true 
console.log(b||c>3) // true 

// 3) logical NOT (!)
// TRUE if the operand is false and vice versa

console.log(!a); // false
console.log(!b) // true
console.log(!c>4); // false 
