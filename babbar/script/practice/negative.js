// let number = -12;
// if (number > 0) {
//         console.log("number is positve");
// } 
// else {
//     console.log("number is negative");
// }

function negative(number){
    if(number<0){
        console.log("number is negative");
    }
    else if(number===0){
        console.log("number is zero");
    }
    else
    {
        console.log("number is positive");
    }
}
negative(-12);
negative(12);
negative(0);
