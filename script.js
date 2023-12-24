buttons = document.querySelectorAll('button');
operationDisplay = document.getElementById('input-display');
resultDisplay = document.getElementById('result-display');
let toDisplay = '';
let flag = false;
let active = false;

function name(e) {
    if(e.target.innerText === 'C') {clear(); return;};
    if(e.target.innerText === 'Ce') {clearOperation(); return;}
    if(e.target.innerText === '=') {operate(); return}
    flag = isNaN(parseFloat(e.target.innerText));
    if(operationDisplay.innerText.length < 1 && flag) active = true;    
    if(resultDisplay.innerText.length > 1 && flag && active) {
        toDisplay = resultDisplay.innerText + e.target.innerText;
        operationDisplay.innerText = "ANS" + e.target.innerText;
        return;
    } 
    toDisplay += e.target.innerText;
    operationDisplay.innerText = toDisplay;
}

function clear() {
    clearOperation()
    resultDisplay.innerText = '';
}

function clearOperation() {
    toDisplay = '';
    operationDisplay.innerText = '';
}

function operate() {
    try {           
        resultDisplay.innerText = eval(toDisplay.replace('x', '*'));
        clearOperation();
        active = false;
    } catch (error) {
        alert("Invalid operation");
    }
}

for (const button of buttons) {
    button.addEventListener('click', (e)=>{
        name(e)
    })
}
