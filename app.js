

/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let previousInput = '';
let operator = null;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        if (event.target.classList.contains(`number`)) {
            containNum(value);
        } else if (event.target.classList.contains(`operator`)) {
            containOp(value);
        } else if (event.target.classList.contains(`equals`)) {
            containsEquals();
        }
    });
});

function containNum(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function containOp(value) {
    if (value === 'C') {
        clearCalc();
        return;
    }
    if (currentInput === '') return;
    if (previousInput !== '') {
        containsEquals();
    }
    operator = value;
    previousInput = currentInput;
    currentInput = '';
}

function containsEquals() {
    if (currentInput === '' || previousInput === '' || operator === null) return;
    const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay(currentInput);
}

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return;
    }
}

function clearCalc() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');
}

function updateDisplay(value) {
    display.innerText = value;
}

updateDisplay('0');
