// object also known as dictionary in python
// object- keys-values pairs 

let person={
    name:'jatin',
    age:20,
    isStudent:true,
    hobbies:['sports','music']
}

console.log(person); // this code is for print the person object
console.log(person.name); // this code is for print the name of the person object
console.log(person.hobbies[1]); // this code is for print the second element of the hobbies array
console.log(typeof person); // this code is for print the type of the person object

// another way to access the object properties is using bracket notation
console.log(person['name']); // this code is for print the name of the person object using bracket notation
console.log(person['age']); // this code is for print the age of the person object using bracket notation

// for adding new properties to the object
person.city="Himachal Pradesh"; // this code is for adding new property to the person object
console.log(person); //  person object after adding new property

// delete property from the object
delete person.age;
console.log(person); 




// Enchanced object literals
// when we use the shorthand property name syntax, we can omit the property name if it is the same as the variable name
// this is called shorthand property name syntax

function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
// this is the normal way to create an object using function
// this is the shorthand property name syntax
function createPerson(name, age) {
    return {
        name,
        age,
        info:()=>`name is ${name} and age is ${age}` // this is the shorthand property name syntax
    };
}
// this is the shorthand property name syntax
console.log(createPerson("jatin", 20)); // this code is for print the person object using shorthand property name syntax
console.log(createPerson("jatin", 20).info()); // this code is for print the person object using shorthand property name syntax