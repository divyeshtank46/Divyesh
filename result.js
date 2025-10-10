// • Write a program to display grades based on marks using if...else if...else.
const prompt = require('prompt-sync')();
let percentage = prompt("Enter Your Percnetage :");


if (percentage>=80 && percentage<=100 ){
    console.log("Congrats ! You Got A Grade");
}
    else if(percentage<80 && percentage >=70){
        console.log("Congrats ! You Got Grade B ");
    }
    else if(percentage <70 && percentage >=60){
        console.log("You Got C Grade");
    }
    else if (percentage <60 && percentage >=40){
        console.log("You Got Grade D");
    }
    else if (percentage <40 && percentage >=33){
        console.log("Needs Improvement" );
    }
    else if (percentage <33 && percentage>0 ){
        console.log("Study Hard You Are Fail ");
    }
    else {
            console.log("Enter Valid Percentage");
    }