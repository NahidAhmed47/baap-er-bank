document.getElementById('btn-login').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if(userEmail === 'mybank@gmail.com' && userPassword === '1234'){
        document.getElementById('a').setAttribute('href', 'bank.html');
    }
    else{
        alert('incorrect Email or Password');
    }
})