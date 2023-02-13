document.getElementById("btn-deposit").addEventListener("click", function () {
  const inputValue =  getInputFieldValueById('input-deposit');
  const previousDepositTotal = getInnerTextById('deposit-total');
  const depositTotal = inputValue + previousDepositTotal;
  setValueById('deposit-total', depositTotal);
  const previousBalance = getInnerTextById('balance');
  const totalBalance = previousBalance + inputValue;
  setValueById('balance', totalBalance);
});
