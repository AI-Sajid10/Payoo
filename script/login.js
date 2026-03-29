document.getElementById('login-btn').addEventListener('click', function(){
    const mobileNumber = document.getElementById('mobile-number').value;
    const pin = document.getElementById('input-pin').value;
    if(mobileNumber === '01576958290' && pin === '1234'){
        window.location.assign('home.html');
    }
    else{
        alert("Login failed. Please check your mobile number and pin.");
    }
})