// find input amount
document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputField = document.getElementById('input-deposit');
    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);
    const previousDepositTotal = document.getElementById('deposit-total');
    const depositTotalString = previousDepositTotal.innerText;
    const depositTotal = parseFloat(depositTotalString);
    const currentDeposit = depositTotal + inputAmount;
    previousDepositTotal.innerText = currentDeposit.toFixed(2);

    // total update for balance 
    const previousBalance = document.getElementById('balance');
    const balanceString = previousBalance.innerText;
    const balance = parseFloat(balanceString);
    const currentBalance = balance + inputAmount;
    previousBalance.innerText = currentBalance;
    inputField.value = '';
})