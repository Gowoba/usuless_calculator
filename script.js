let currentNumber = "";
let lastOperator = "";
let isOperatorInserted = false;
const maxLength = 15;
const displayMaxLength = 15;

function insert(num) {
    var result = document.getElementById('result').innerHTML;

    if (!isNaN(num) && result.length >= maxLength) return;

    if (['+', '-', '*', '/'].includes(num)) {
        currentNumber = result;
        lastOperator = num;
        document.getElementById('result').innerHTML = num;
        isOperatorInserted = true;
        return;
    }

    if (isOperatorInserted) {
        document.getElementById('result').innerHTML = num;
        isOperatorInserted = false;
    } else {
        if (num === '.' && result.includes('.')) return;
        document.getElementById('result').innerHTML = result + num;
    }
}

function clean() {
    currentNumber = "";
    lastOperator = "";
    isOperatorInserted = false;
    document.getElementById('result').innerHTML = "";
}

function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.slice(0, -1);
}

function calculate() {
    var result = document.getElementById('result').innerHTML;

    if (['+', '-', '*', '/'].includes(result)) {
        result = currentNumber;
    }

    try {
        let calculationResult = eval(currentNumber + lastOperator + result)/186638 || "0";
        
        let resultString = calculationResult.toString();
        
        if (resultString.length > displayMaxLength) {
            resultString = calculationResult.toExponential(9);
        }

        document.getElementById('result').innerHTML = resultString;
        currentNumber = "";
        lastOperator = "";
        isOperatorInserted = false;
    } catch {
        document.getElementById('result').innerHTML = "Invalid Operation";
    }
}
