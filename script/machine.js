function showOnly(id){
    const addMoneySection = document.getElementById('add-money');
    const cashOutSection = document.getElementById('cashout');
    const sendMoneySection = document.getElementById('send_money');
    const bonousSection = document.getElementById('bonous');
    const payBillSection = document.getElementById('pay-bill');

    addMoneySection.classList.add('hidden');
    cashOutSection.classList.add('hidden');
    sendMoneySection.classList.add('hidden');
    bonousSection.classList.add('hidden');
    payBillSection.classList.add('hidden');

    const selectedSection = document.getElementById(id);
    selectedSection.classList.remove('hidden');
}