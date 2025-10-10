// const prompt = require('prompt-sync')();

// let age = prompt("enter your age:");


function AgeCheck(age){
        
if(age<13){
    console.log("you are child");
    
    
}
else if(age<18 && age>=13) {
    console.log("you are teenager");
    }

else if(age>=18 && age<=100){
    console.log("you are adult");
}
else{
    console.log("enter aga between 1-100");
}
}
AgeCheck(12);
AgeCheck(14);
AgeCheck(18);
AgeCheck(180);





