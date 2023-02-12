document.getElementById("btn-withdraw").addEventListener("click", function () {
  const previousWithdrawTotal = document.getElementById("withdraw-total");
  const previousTotalString = previousWithdrawTotal.innerText;
  const withdrawTotal = parseFloat(previousTotalString);
  
  // input field
  const inputTotal = document.getElementById("input-withdraw");
  const inputTotalString = inputTotal.value;
  const inputWithdraw = parseFloat(inputTotalString);
  inputTotal.value = "";
  if(isNaN(inputWithdraw)){
    alert('Please provide a number.');
    return;
  }

  // current balance
  const previousBalance = document.getElementById("balance");
  const balanceString = previousBalance.innerText;
  const balance = parseFloat(balanceString);
  if (inputWithdraw > balance) {
    alert("You have not enough balance, Please add balance.");
  } else {
    // add with previous withdraw
    const currentWithdraw = withdrawTotal + inputWithdraw;
    previousWithdrawTotal.innerText = currentWithdraw.toFixed(2);

    // total update balance
    const currentBalance = balance - inputWithdraw;
    previousBalance.innerText = currentBalance.toFixed(2);
  }
  
});
