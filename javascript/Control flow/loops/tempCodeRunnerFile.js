// for loop 
// DRY - dont repeat yourself

// for( initialExpression; condition; increment or decrement Expression){.....}

for (let i = 0; i <= 10; i++) {
    console.log("hello world",i) // this will repeat this our hello world text for 10 times 
    
}


// nested loops 
for (let i = 0; i <=10; i++) {
    console.log("this is the outer loop");

    // nesting with other for loop
    for (let j = 0; j <=5; j++) {
        console.log("this is inner loop");
        
    }
    
}

// while loop (used mainly we don't know the end point of loop)
// while(condition){.....}

let i=1;

while(i<=10){
    console.log("hello world",i)
    i++;
}

// do-while loop (used when we want to perform block of code to run at once even the condtion be wrong)
// do{.....}
// while()

let a=1;

do{
    console.log("hello world",a)
    a++;
}while(a<=5)


