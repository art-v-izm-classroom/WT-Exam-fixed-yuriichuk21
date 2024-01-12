document.getElementById('add-button').addEventListener('click', function () {
    performOperation('+');
});

document.getElementById('sub-button').addEventListener('click', function () {
    performOperation('-');
});

document.getElementById('mul-button').addEventListener('click', function () {
    performOperation('*');
});

document.getElementById('div-button').addEventListener('click', function () {
    performOperation('/');
});

document.getElementById('log-button').addEventListener('click', function () {
    performFunction('log');
});

document.getElementById('sin-button').addEventListener('click', function () {
    performFunction('sin');
});

document.getElementById('tan-button').addEventListener('click', function () {
    performFunction('tan');
});

function performOperation(operator) {
    const op1 = parseFloat(document.getElementById('op1').value);
    const op2 = parseFloat(document.getElementById('op2').value);

    let result;
    switch (operator) {
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case '*':
            result = op1 * op2;
            break;
        case '/':
            result = op1 / op2;
            break;
    }

    document.getElementById('res').textContent = 'Result: ' + result;
}

function performFunction(func) {
    const op1 = parseFloat(document.getElementById('op1').value);
    
    const helpData = {
        log: 'Natural logarithm (logarithm to the base e)',
        sin: 'Sine of an angle in degrees',
        tan: 'Tangent of an angle in degrees'
    };

    document.getElementById('content').textContent = helpData[func];
}
