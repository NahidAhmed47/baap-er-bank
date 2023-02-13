// get input field value
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
    return inputValue;
}
// get inner text from anything
function getInnerTextById(elementId){
    const element = document.getElementById(elementId);
    const elementTextString = element.innerText;
    const elementNumber = parseFloat(elementTextString);
    return elementNumber;
}
// value set into anything
function setValueById(totalValue, newValue){
    const previousValue = document.getElementById(totalValue);
    previousValue.innerText = newValue;
}