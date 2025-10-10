// // // // 01. Print numbers from 1 to 100 using a loop.
// // // // // // // // // // // // // // // for(let i=1;i<=100;i++){
// // // // // // // // // // // // // // //     console.log(i);
// // // // // // // // // // // // // // // }

// // // //  02. Print numbers from 100 to 1 using a loop.
// // // // // // // // // // // // // for(let i=100;i>=1;i--){
// // // // // // // // // // // // //     console.log(i);
// // // // // // // // // // // // // }
// // // // 03. Print the multiplication table of 5 using a loop
// // // // // // // // // // // const prompt = require('prompt-sync')();
// // // // // // // // // // // let number=prompt("enter a number:");
// // // // // // // // // // // for(let i=1;i<=10;i++){
// // // // // // // // // // //     console.log(`${number} x ${i} = ${number*i}`);
// // // // // // // // // // // }
// // // //  04. Print all odd numbers from 1 to 100.
// // // // // // // // // for(let number=1;number<=100;number++){
// // // // // // // // //     if(number %2 ==0){
// // // // // // // // //             console.log(number);

// // // // // // // // //     }
// // // // // // // // // }
// // // //  05. Print all even numbers from 1 to 100.
// // // // // // //  for(let number=1;number<=100;number++){
// // // // // // //     if(number %2 !==0){
// // // // // // //             console.log(number);

// // // // // // //     }
// // // // // // // }
// // // // 06. Find the sum of numbers from 1 to 100.
// // // // // let sum=0;
// // // // // for(let i =1;i<=100;i++){
// // // // //     sum+=i;

// // // // // }
// // // // // console.log(sum);
// // // // 07. Find the largest of two numbers.

// // // const maxnum= (a,b)=>{
// // //     a === b ? console.log("numbers are same") : console.log(Math.max(a,b),"is bigger");
// // // }
// // // maxnum(12,15);
// // 08. Find the largest of three numbers.
// // const maxnum=(a,b,c) =>{
// //     a===b===c ? console.log("numbers are same") : console.log(Math.max(a,b,c),"is bigger");
// // }
// // maxnum(12,3,4);
// // 09. Check whether a number is positive, negative, or zero.

// // function negative(number){
// //     if(number<0){
// //         console.log("number is negative");
// //     }
// //     else if(number===0){
// //         console.log("number is zero");
// //     }
// //     else
// //     {
// //         console.log("number is positive");
// //     }
// // }
// // negative(-12);
// // negative(12);
// // negative(0);

// // 10. Swap two numbers using a temporary variable.

// // let number1=23;
// // let number2=25;
// // let number3=number1;
// // number1=number2;
// // number2=number3;
// // console.log(number1);
// // console.log(number2);
// // 11. Swap two numbers without using a temporary variable.
// // let number1 =50;
// // let number2 =40;
// // number1 = number1^number2;
// // number2 = number2^number1;
// // number1 = number2^number1;
// // console.log(number1);
// // console.log(number2);
// // 12. Multiply two numbers without using (*) operator.
// // let result =0;
// // num1=50;
// // num2=2;
// // for(i=0;i<num2;i++){
// //     result=result+num1;
// // }
// // console.log(result);
// // 13. Convert days into years, months, and days.
// // let days = 800;

// // let years = Math.floor(days / 365);
// // console.log(years)
// // let remaindays = days % 365;
// // let months = Math.floor(remaindays / 30);
// // console.log(months)
// // let day = remaindays % 30;
// // console.log(day);

// // console.log(`${days}  days =  ${years}  years ${months} months ${day} days `);

// // 14. Convert seconds into hours, minutes, and seconds.
// // let totalseconds =7250;
// // let hours = Math.floor(totalseconds / 3600);

// // let remainseconds = totalseconds % 3600;

// // let minutes = Math.floor(remainseconds / 60);
// // let seconds = remainseconds % 60;

// // console.log(`${totalseconds} seconds = ${hours} hours ${minutes} minutes ${seconds} seconds `)
// // 15. Count the number of digits in an integer.
// // const prompt = require('prompt-sync')();
// // let number =prompt("enter a integer : ");
// //  let digits =number.toString().length;
// //  console.log(`number of  digits in ${number} is ${digits}`);

// // 16. Reverse the digits of a number.
// // let integer = 76988875566;
// // let reversed = integer.toString().split("").reverse().join("");
// // console.log(`reversed integer of ${integer} is ${reversed}`); // 
// // 17. Store a number in reverse into another variable.

// // 18 ???
// // 18. Check if a number is a palindrome
// // let number = 45554;
// // let reversed = number.toString().split("").reverse().join("");

// // console.log(reversed);
// // if(number==reversed){
// //     console.log(`This is  palindrome number `);

// // }
// // else{
// //     console.log("This is not  palindrome number");}

// // 19. Check if a number is a prime number  
// let prime=58;
// if(prime<2){
//     console.log("this  is not prime number ");
// }
//     for(i=2;i<Math.sqrt(prime);i++){
//         if(prime % i === 0){
//             console.log("Given Number is not prime number");
//         }
        
//     }

//     else{
//             console.log("Given number is prime Number");
// // }
// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(5));

let isPrime=10;
if (isPrime<=2){
    console.log("Given Number is not  prime number");

for(i=2;i<=Math.sqrt(isPrime);i++){
    if(isPrime % i == 0){
        console.log("given number is not prime number");
    }

}

}
else{
    console.log("it is")
}