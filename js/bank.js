// find input amount
document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputAmount = document.getElementById('input-deposit').value;
    if(inputAmount >= 0){
        const addDeposit = document.getElementById('deposit-total').innerText;
        addDeposit = inputAmount + addDeposit;
        return addDeposit;
    }
    else{
        alert('Please enter number!');
    }
})