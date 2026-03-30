document.getElementById('add-money-btn').addEventListener('click', function(){
    const bank = document.getElementById('bank-select').value;
    if(bank === "Select Bank"){
        alert("Please select a bank to proceed.");
        return;
    }
    const accountNumber = document.getElementById('acc-number').value;
    const amountToAdd = document.getElementById('add_amount').value;
    const balanceElement = document.getElementById('balance');
    const currentBalance = Number(balanceElement.innerText);
    const newBalance = currentBalance + Number(amountToAdd);
    const pin = document.getElementById('input-pin').value;
    if(pin === '1234'){
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Incorrect pin. Transaction failed.");
        return;
    }
})