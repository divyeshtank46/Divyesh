let marks = prompt("Enter your marks:");

while (marks === "" || isNaN(marks) || marks === null || marks>100) {
  marks = prompt(`Enter Valid Marks `);
}
let cast = prompt("Enter Your Cast :");
while((cast !='sc' && cast !='SC')&& (cast!='st' && cast!='ST') && (cast!='obc' && cast!='OBC') && (cast!='general' && cast!='GENERAL')){
    cast = prompt(`Oops! Can't find your cast enter your cast again`);
}
if(marks >=40 &&((cast =='sc'|| cast =='SC') || (cast=='st' || cast=='ST'))){
    window.alert(`you are eligleble for scolarship`);
}
else if (marks>=50 && (cast == 'obc' || 'OBC' )){
    window.alert(`you are eligible for scolraship `);
}
else{
    window.alert(`you are not eligible for scolarship`);
}

