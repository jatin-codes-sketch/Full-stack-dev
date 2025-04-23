// the rest parameter syntax allows a function to accept an indefinite number of arguments
//  as an array, providing a way to represent variadic function in javascript.

const user=(...userData)=>console.log(userData);

user("rohan", 12,"programming","football")

const user1=(something,...data1)=>{
    console.log(something);
    console.log(data1);
}

user1("jatin",21,"programming","football")