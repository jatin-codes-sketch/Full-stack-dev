//  methods are nothing but functions in objects
//  methods are used to perform actions on objects

const person={
    name:"John",
    age:30,
    hobbies:["reading","writing","coding"],
    info : function(){
        return `${this.name} is ${this.age} years old and likes ${this.hobbies.join(", ")}`;
    }
}

console.log(person.info()); // this code is for print the name of the person object