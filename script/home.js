document.getElementById('cashout-btn').addEventListener('click', function(){
    const mobileNumber = document.getElementById('mobile-number').value;
    const Amount = document.getElementById('amount').value;
    const balanceElement = document.getElementById('balance');
    const currentBalance = Number(balanceElement.innerText);
    const newBalance = currentBalance - Number(Amount);
    if(newBalance < 0){
        alert("Insufficient balance. Transaction failed.");
        return;
    }
    const pin = document.getElementById('input-pin').value;
    if(pin === '1234'){
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Incorrect pin. Transaction failed.");
        return;
    }
});