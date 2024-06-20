function clearScreen() {
    document.getElementById('screen').value = '';
}

function appendValue(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    } catch (e) {
        document.getElementById('screen').value = 'Error';
    }
}
function calculatePercent() {
    let currentValue = parseFloat(document.getElementById('screen').value);
    if (!isNaN(currentValue)) {
        let result = currentValue / 100;
        document.getElementById('screen').value = result;
    }
}

function backspace() {
    let currentValue = document.getElementById('screen').value;
    document.getElementById('screen').value = currentValue.slice(0, -1);
}

// Connect buttons to numpad
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*','%', '/', '.', 'Enter', 'Backspace', 'Escape'];
    
    if (validKeys.includes(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === 'Escape') {
            clearScreen();
        } 
        else if (key === '%') {
            calculatePercent();
        }
        else {
            appendValue(key);
        }
    }
});