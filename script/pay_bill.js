document.getElementById('pay-bill-btn').addEventListener('click', function(){
    const bank = document.getElementById('bank-select').value;
    if(bank === "Select for pay"){
        alert("Please select a bill type to proceed.");
        return;
    }
    const billerNumber = document.getElementById('pay-bill-number').value;
    const payAmount = document.getElementById('pay_amount').value;
    const balanceElement = document.getElementById('balance');
    const currentBalance = Number(balanceElement.innerText);
    const newBalance = currentBalance - Number(payAmount);
    const pin = document.getElementById('input-pin').value;
    if(pin === '1234'){
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Incorrect pin. Transaction failed.");
        return;
    }
})