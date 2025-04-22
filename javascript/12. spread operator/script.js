// The spread operator is a new addition to the js. It takes in an iterable (e.g. an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of arrays or objects, denoted by (...) and using this operator makes the code concise and enchances its readability.


// array
const numbers=(a,b,c,d)=>{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

numbers(1,2,3,4);// this is a normal function call
// but if we want to pass an array as an argument to the function, we face a problem.

color=["red","green","blue","yellow"];
 numbers(color); // numbers(color); // this will not work as we are passing an array as an argument to the function

// but we can use the spread operator to solve this problem.
numbers(...color); // this will work as we are using the spread operator to pass the array as an argument to the function. The spread operator will expand the array into individual elements and pass them as arguments to the function.

// The spread operator can also be used to combine two arrays into one array.
const array1=[1,2,3];
const array2=[4,5,6];
const array3=[...array1,...array2]; // this will combine the two arrays into one array.
console.log(array3)


// objects 

const obj={x:1,y:2,z:3};
const obj2={a:4,b:5,c:6};
const obj3={...obj,...obj2}; // this will combine the two objects into one object.
console.log(obj3); // this will combine the two objects into one object.


let person={
    name:"jatin",
    age:20,
    city:"himachal pradesh"
}

const clone={...person}; // this will create a shallow copy of the object.
const edited={...person,hobbies:["reading","writing"]}; // this will create a shallow copy of the object and add a new property to the object.
console.log(clone); // this will create a shallow copy of the object.   
console.log(edited); // this will create a shallow copy of the object and add a new property to the object.