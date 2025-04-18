// JSON =JavaScript On Notation 
// JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
// JSON is language independent but uses conventions that are familiar to programmers of the C family of languages, which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.

const person={
    name:"jatin",
    age:22,
    hobbies:["cricket","football","coding"], 
    address:{
        city:"Himachal Pradesh",
        state:"Himachal Pradesh"
    },
    isStudent:false
}

// JSON.stringify = convert JavaScript object to JSON string
const jsonObject=JSON.stringify(person); 
console.log(jsonObject); 

// JSON.parse = convert JSON string to JavaScript object
console.log(JSON.parse(jsonObject)); 