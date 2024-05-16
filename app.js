let history = [];
let input = '';
let previousOperator = '';
let currentNumber = '';

function addNumber(number) {
    if (number === 'C') {
        input = '';
    }else if (number === '%') {
        input = (parseFloat(input) / 100).toString();
    } 
    else {
            input += number;
        }
    document.getElementById('input').value = input;
}
function calculate() {
    const numbers = input.split(/[-+x/]/);
    const operators = input.replace(/[0-9.]+/g, '').split('');
    let result = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = parseFloat(numbers[i + 1]);
        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case 'x':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber !== 0) {
                    result /= nextNumber;
                } else {
                    result = NaN;
                }
                break;
        }
    }
    document.getElementById('input').value = result;
    history.push(input + ' = ' + result);
    input = '';
}
function del() {
    input = input.slice(0,-1)
    document.getElementById("input").value = input;
}
function showHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
    history.forEach((item) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = item;
        historyDiv.appendChild(paragraph);
    });
}