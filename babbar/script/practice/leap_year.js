const prompt = require('prompt-sync')();
// LeapYear= (year)=>{
//     if((year%4==0 && year%100!==0) || (year%400===0)){
//     console.log(year,"is leap year")
// }
// else{
//     console.log(year," is not leap year ");
// }
// }
// LeapYear(2020);
// LeapYear(1900);
// LeapYear(2000); 
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear(2021));

