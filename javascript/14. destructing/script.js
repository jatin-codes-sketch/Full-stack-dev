// Destructing allows us to "unpack" values from data-structures (arrays, objects) into separate distinct variables.


// arrays
const num=["one","two","three"];
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);

// but this is kind of difficult to do this so we use destructing 
const [a,b,c]=num;
console.log(a);
console.log(b);
console.log(c);

// assigning default values for the variables
const [i=1,ii=2,iii=3]=["this is the first value","this is the second value"]
console.log(i);
console.log(ii);
console.log(iii);

// functions
const fun=()=>[1,2];

let x,y;
[x,y]=fun();
console.log(x);
console.log(y);

// ignoring any value in the return in functions 
function f(){
    return [1,2,3];
}

const [aa,,bb]=f(); // we ignore the second return value through this technique
console.log(aa);
console.log(bb);

// assigning the rest of the array to a variable
const [xx,...yy]=["one","two","three","hello",true,23,"one"]
console.log(xx);
console.log(yy);

// object 
const student={name:"jatin",position:"first",rollno:232};
const {name,position,rollno}=student;
console.log(name);
console.log(position);
console.log(rollno);


// object destructing and rest operator 
let {first,second,...rest}={a:100,b:200,c:300,d:400,e:500,f:600}
console.log(first);
console.log(second);
console.log( rest);

// ḍestructing through the function
const person={
    firstName:"jatin",
    lastName:"thakur",
    country:"india"
}

function printinfo({fName,lName,country}){
    console.log(`first name: ${fName}`)
    console.log(`last name: ${lName}`)
    console.log(`country: ${country}`)
}

printinfo(person);