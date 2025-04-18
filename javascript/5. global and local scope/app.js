// Scope in javascript refers to the current context of code, which determines the accessibility of variables to javascript.

// there are two types of scope in javascript.
// 1. Global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// 2. Local scope: Variables declared inside a function or block are in the local scope and can only be accessed within that function or block.

let textMessage="Hello World"; // global scope variable
console.log(textMessage); // Hello World

function showMessagge(){
    let textMessage="Hello"; // local scope variable
    console.log(textMessage); // Hello  
}

showMessagge(); // Hello


for(let i=0; i<5; i++){
    let text="Hello"; // local scope variable
    console.log(text); // Hello  
}
console.log(text); // ReferenceError: text is not defined





