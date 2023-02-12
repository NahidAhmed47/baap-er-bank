// find input amount
document.getElementById("btn-deposit").addEventListener("click", function () {
  // input area
  const inputField = document.getElementById("input-deposit");
  const inputAmountString = inputField.value;
  const inputAmount = parseFloat(inputAmountString);

  inputField.value = "";
  if (isNaN(inputAmount)) {
    alert("Please provide a number.");
    return;
  }

  // deposit area
  const previousDepositTotal = document.getElementById("deposit-total");
  const depositTotalString = previousDepositTotal.innerText;
  const depositTotal = parseFloat(depositTotalString);
  const currentDeposit = depositTotal + inputAmount;
  previousDepositTotal.innerText = currentDeposit.toFixed(2);

  // total update for balance
  const previousBalance = document.getElementById("balance");
  const balanceString = previousBalance.innerText;
  const balance = parseFloat(balanceString);
  const currentBalance = balance + inputAmount;
  previousBalance.innerText = currentBalance.toFixed(2);
  
});
