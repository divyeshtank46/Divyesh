const prompt = require('prompt-sync')();
let fullName = prompt("enter your fullname :");
let at="@";
let length = fullName.length;
let userName =at+fullName + length;
console.log(userName);