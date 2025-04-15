// function 

// function declaration
// without any parameters
function greet() {
    console.log("Hello, World!");
}
//  call or run or  execute the function 
greet();

// function with parameters
function sayhello(name = "jatin") {
    console.log("Hello, " + name + "!");
}
sayhello("rohan");
sayhello();

// function with return value
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // 15

// function expression
const greeting = function(name) {
    console.log(`hello ${name}`);
}

greeting("jatin");

// callback function
function greetUser(name,callback){
    console.log(`Hello ${name}`);
    callback();
}

function callback(){
    console.log("This is a callback function");
}

greetUser("jatin",callback);


function value(val,cb){
    const value=val;
    cb(value);
}

function cb(val){
    console.log(`The value is ${val}`);

}

value(10,cb);