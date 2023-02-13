document.getElementById("btn-withdraw").addEventListener("click", function () {
  const inputAmount = getInputFieldValueById('input-withdraw');
  const previousWithdrawTotal = getInnerTextById('withdraw-total');
  const withdrawTotal = inputAmount + previousWithdrawTotal;
  setValueById('withdraw-total', withdrawTotal);
  const previousBalance = getInnerTextById('balance');
  const totalBalance = previousBalance - inputAmount;
  setValueById('balance', totalBalance);
});
