//  array -> 0 index based 
//  Array is the data structure which is used to store the homologous elements 

// empty array
const myList =[];
console.log(myList);

// array
const numbers =[1,2,3,4,5,6,7]
console.log(numbers);

// printing of array
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element,i)
    
}

//  string array 
const stringArray=["jatin","ram","rahul","rohit"]
console.log(stringArray)


//  nested arrays 
const nestedarr=['one',['two','three','four','five'],'six','seven']
console.log(nestedarr)
console.log(nestedarr[1][3])


// methods in array
// 1) push -> used to add a element in array at last 
const arr=[1,2,4,5,6]
arr.push(9)
console.log(arr)

// 2) pop-> used to remove the elements at the end of the array
arr.pop()
console.log(arr)

// 3) unshift -> used to add element at the start 
arr.unshift(9)
console.log(arr)

// 4) shilft-> used to remove the element at start
arr.shift()
console.log(arr)

// 5) concat-> used to concat two array 
const arr2=[13,53,54,66,99]
const fullArr=arr.concat(arr2)
console.log(fullArr)

// 6) includes-> used to check the where the given elements is present in array or not (it gives true or false values)
console.log(arr.includes(5))


// 7) join-> used to join the elemnts in array
console.log(arr.join("-"))

// 8) reverse-. used to reverse the array
console.log(arr.reverse())
