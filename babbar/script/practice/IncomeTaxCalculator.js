let income = parseInt( prompt("enter your income :"));
while(isNaN(income)){
    income = prompt(`Enter Valid income `);
}

let  gender = prompt("enter your gender :");



while (gender !== "male" && gender !== "female") {
    gender = prompt(`select proper gender male or female`);
}   

    if(income >500000){
        if (income > 500000 && gender==='male') {

            window.alert(`you have to pay ₹ ${income*10/100} (10%) income tax on your income ₹ ${income}`);
        }
        else if(income >500000 && gender==='female')
            {
                window.alert(`you have to pay  ₹${income*8/100} (8%) on your income ₹${income}`);
            }
    
    }
    else{
        window.alert("no need to pay tax ");
    }

