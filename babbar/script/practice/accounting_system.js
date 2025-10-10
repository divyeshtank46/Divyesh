let amount = parseInt(prompt("Add balance in your Account :"));
let balance = 0;
while (amount === "" || isNaN(amount) || amount === null) {
  amount = prompt(`Enter Valid amount :`);
}
amount = Number(amount);
balance = amount + balance;
window.alert(
  `Balance Is Successfully Added In Your Account Current Balance is ${balance} `
);

let operation = prompt(
  `Press 1 TO add Balance . Press 2 For Withdraw Balance `
);
while (operation !== "1" && operation !== "2" && operation !== "3") {
  operation = prompt(`Select Described Operation !!`);
}
if (operation == "1") {
  amount = prompt(`Enter Amount To Add Balance In Your Account`);
  amount = Number(amount);
  balance = amount + balance;
  window.alert(
    `Balance Is Successfully Added In Your Account. Current Balance is ${balance}`
  );
}
 operation = prompt(
  `Press 1 TO add Balance . Press 2 For Withdraw Balance `
);

// window.alert(`${balance}`);

if(operation == '2'){
    let WithdrawAmount=prompt("Enter Amount");
    WithdrawAmount=Number(WithdrawAmount);
    if(WithdrawAmount>balance){
        window.alert(`insuffient balance`);
    }     
    else{
        balance= balance-WithdrawAmount;
        window.alert(`₹ ${WithdrawAmount} is debited From your account.  Current Balance is ${balance}`);
    }   
}
