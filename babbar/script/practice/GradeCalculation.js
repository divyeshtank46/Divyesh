let cgpa =prompt("enter cgpa :");
while (cgpa === "" || isNaN(cgpa) || cgpa === null || cgpa>10) {
  cgpa = prompt(`Enter Valid cgpa :`);
}
if (cgpa >=9){
    window.alert(`Congrates ! You Got A Grade.`);
}
    else if(cgpa >=8){
        window.alert(`You Got B Grade`);
    }
    else if(cgpa >=7){
        window.alert(`You Got C Grade`);
    }
    else if(cgpa >=6){
        window.alert(`You Got D Grade`);
    }
else{
    window.alert(`Study Hard You Are Fail`);
}