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
    } else if(showingResult){
        screen.textContent = ''
        showingResult = false
    }
    screen.textContent += x;
}

function clearScreen(){
    operatorSelected = false
    leftOperand = ''
    rightOperand = ''
    operator = ''
    screen.textContent = ''
}

var leftOperand = ''
var rightOperand = ''
var operatorSelected = false 
var operator = ''
var showingResult = false

const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equal');

equals.addEventListener('click', function(e){
    if(rightOperand == ''){
        rightOperand = leftOperand
    }
    var result = operate(operator, parseFloat(leftOperand), parseFloat(rightOperand));
    console.log(result);
    clearScreen()
    updateScreen(result)
    showingResult = true
}) 

numbers.forEach(n => {
    n.addEventListener('click', () => {
        if(operatorSelected){
            rightOperand += n.textContent
        }
        updateScreen(n.textContent)
    })
});

operators.forEach(n => {
    n.addEventListener('click', () => {
        if (operatorSelected || screen.textContent == '') {
            return
        }
        leftOperand = screen.textContent
        operatorSelected = true 
        operator  = n.id
        updateScreen(n.textContent)
    })
})

clear.addEventListener('click', e => {
    clearScreen()
})