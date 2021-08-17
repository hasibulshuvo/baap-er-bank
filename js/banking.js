function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-tatal');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText);
    return previousBalancetotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-tatal');
    /*  const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText); */
    const previousBalancetotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalancetotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalancetotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});

//withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('not money')
    }

});

