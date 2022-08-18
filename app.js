function add(a, b) {
    return a + b;    
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) { 
    switch (operator) {
        case "add":
            result = add(a, b)
            break;
        case "subtract":
            result = subtract(a, b)
            break;
        case "multiply":
            result = multiply(a, b)
            break;
        case "divide":
            result = divide(a, b)
            break;
        default:
            console.log("Invalid operator")
            return
    }
    return result;
}

function updateScreen(x){
    // prevent overflow of screen
    if(screen.textContent.length == 23){
        return
    } else if (x == 'clear'){
        screen.textContent = ''
    } else {
    screen.textContent += x;
    }
}

var leftOperand = 0
var rigthOperand = 0
var operatorSelected = false 

const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('.operator');

numbers.forEach(n => {
    n.addEventListener('click', () => {
        updateScreen(n.textContent)
    })
});

operators.forEach(n => {
    n.addEventListener('click', () => {
        if (operatorSelected) {
            console.log('operator selected')
            return
        }
        leftOperand = screen.textContent
        operatorSelected = true 
        updateScreen(n.textContent)
    })
})

clear.addEventListener('click', e => {
    updateScreen(clear.id)
})

