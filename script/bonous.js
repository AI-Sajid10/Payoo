document.getElementById('bonous-btn').addEventListener('click', function(){
    const cuponCode = document.getElementById('cupon-number').value;
    const balanceElement = document.getElementById('balance');
    const currentBalance = Number(balanceElement.innerText);
    if(cuponCode === 'BONOUS100'){
        const newBalance = currentBalance + 100;
        balanceElement.innerText = newBalance;
        alert("Congratulations! You have received a bonous of 100.");
    }
    else{
        alert("Invalid cupon code. Please try again.");
    }

})