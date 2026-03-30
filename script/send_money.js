document.getElementById('send-money-btn').addEventListener('click', function(){
    const userMobileNumber = document.getElementById('user-mobile-number').value;
    const amountToSend = document.getElementById('transfer-amount').value;
    const balanceElement = document.getElementById('balance');
    const currentBalance = Number(balanceElement.innerText);
    const newBalance = currentBalance - Number(amountToSend);
    const pin = document.getElementById('input-pin').value;
    if(pin === '1234'){
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Incorrect pin. Transaction failed.");
        return;
    }
})