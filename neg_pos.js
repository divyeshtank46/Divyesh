const prompt = require("prompt-sync")();
let number = prompt("enter number :");

console.log("You Entered ",number);
if (number < 0) {
  console.log("number "+number+" is negative");
} else if (number == 0) {
  console.log("number is zero");
} else if (number > 0) {
  console.log("number",number+" "+"is  positive");
}
else{
    console.log("enter valid number");
}