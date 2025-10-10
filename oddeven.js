// • Write a program to check if a number is even or odd using if...else.
const prompt = require("prompt-sync")();
let number = prompt("Enter Number :");
console.log("Your Entered Number is ", number);
if (number < 0) {
    console.log("enter valid number");
} else if (number == 0) {
    console.log("Number is Zero");
} else if (number % 2 == 0) {
    console.log("Number is Even");
} else if (number % 2 == 1) {
    console.log("Number is Odd");
} else {
    console.log("You Entered a  String");
}
