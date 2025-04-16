// switch statement
// switch (expressioin){
// case x:
// print;
// break; for cut the flow of cases
// }


let x=1;
let text;
switch (x){
    case 0:
        text="off";
        break;
    case 1:
        text="on";
        break;
    default:
        text="no value found";
        

}
console.log(text);

let day=2;
switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("no day found");
        break;
        
}