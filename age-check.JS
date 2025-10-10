//  Write a program to check whether a person is eligible to vote
// (age >= 18).
const prompt = require("prompt-sync")();

let age = prompt("Enter Your  Age : ");
console.log("Your Age is : ", age);

if (age < 13 && age >0) {
    console.log("you are child that's why you are not eligible for vote ");
} 
    else if (age < 18 && age >= 13){
    console.log("you are teenager");
} 
    else if (age >= 18 ) {
        console.log("Eligible For Vote ");
} else {
    console.log("enter valid age ");
}
