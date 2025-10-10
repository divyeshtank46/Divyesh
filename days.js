// • Write a program using switch to display the day of the week when given
// a number (1-7).
const prompt=require('prompt-sync')();
let day = prompt("enter number Between 1-7 :");
    switch(day){
        case "1":
            console.log("Sunday");
            break;
        case "2":
            console.log("Monday");
            break;
        case "3":
            console.log("Tuesday");
        case "4":
            console.log("Wednesday");
            break;
        case "5":
            console.log("Thrusday");
            break;
        case "6":
            console.log("Friday");
            break;
        case "7":
            console.log("Saturday");
            break;
        default:
            console.log("Enter Valid Input Between 1-7");
    }