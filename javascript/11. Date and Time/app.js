// Date and Time

// year, month, day, hour, minute, second, milliseconds
const currentDate = new Date(2024,2,24,12,0,0,0); // 2024-03-24T12:00:00.000
console.log(currentDate)

console.log(currentDate.getFullYear()) // 2024
console.log(currentDate.getMonth()) // 2
console.log(currentDate.getDate()) // 24
console.log(currentDate.getHours()) // 12
console.log(currentDate.getMinutes()) // 0
console.log(currentDate.getSeconds()) // 0
console.log(currentDate.getMilliseconds()) // 0

const date=new Date();
console.log(date.toDateString()); // Sun Mar 24 2024
console.log(date.toISOString());
console.log(date.toLocaleDateString());

// for increment our date by 1 day and do same for decrement the date by 1 day
date.setDate(date.getDate()+1);
console.log(date.toDateString()); // Mon Mar 25 2024