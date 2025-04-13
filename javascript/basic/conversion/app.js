// type conversion

// 1. String to Number
let str = "123";
let num = Number(str);
console.log(num); // 123
console.log(typeof num); // number


// 2. Number to String
let num2 = 456;
let str2=String(num2);
console.log(str2); //"456"
console.log(typeof str2); // string

// 3. String to Boolean
let str3 = "true";
let bool = Boolean(str3);
console.log(bool); // true
console.log(typeof bool); // boolean

// 4. Boolean to String
let bool2 = false;
let str4 = String(bool2);
console.log(str4); // "false"
console.log(typeof str4); // string

// 5. Number to Boolean
let num3 = 0;
let bool3 = Boolean(num3);
console.log(bool3); // false
console.log(typeof bool3); // boolean

// 6. Boolean to Number
let bool4="False";
let num4=Boolean(bool4);
console.log(num4); //false
console.log(typeof num4); // boolean


// advanced conversion used for advance works 

// 7. Object to String
let obj = { name: "John", age: 30 };
let str5 = JSON.stringify(obj);
console.log(str5); // '{"name":"John","age":30}'
console.log(typeof str5); // string

// 8. String to Object
let str6 = '{"name":"John","age":30}';
let obj2 = JSON.parse(str6);
console.log(obj2); // { name: 'John', age: 30 }
console.log(typeof obj2); // object


// for conversion of object to string we use JSON.stringify(obj) and when we have to convert string to object we use JSON.parse(str)