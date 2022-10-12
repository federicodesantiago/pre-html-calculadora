let n0 = document.getElementById('n0');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let n6 = document.getElementById('n6');
let n7 = document.getElementById('n7');
let n8 = document.getElementById('n8');
let n9 = document.getElementById('n9');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multi = document.getElementById('multi');
let divi = document.getElementById('divi');
let reset = document.getElementById('reset');
let screening = document.getElementById('screening');
let coma = document.getElementById('coma');
let opposite = document.getElementById('opposite');
let porc = document.getElementById('porc');

let num1 = [];
let num2 = [];
let firstNumber, secondNumber;
let operator = '';
let result = 0;
let equalRestart = false;
document.getElementById('screening').style.fontSize = 'xx-large';

const onScreenNum1 = () => {
    if (firstNumber > 99999999) {
        document.getElementById('screening').style.fontSize = 'medium';
        screening.innerHTML = 'ERROR.<br>Number too big.';
        firstNumber = NaN;
    } else {
        screening.innerHTML = firstNumber;
    }
    return;
};

const onScreenNum2 = () => {
    if (secondNumber > 99999999) {
        document.getElementById('screening').style.fontSize = 'medium';
        screening.innerHTML = 'ERROR.<br>Number too big.';
        secondNumber = NaN;
    } else {
        screening.innerHTML = secondNumber;
    }
    return;
};

n0.onclick = function () {
    if (!operator) {
        num1.push(0);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(0);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }

    if (equalRestart) {
        operator = false;
        num1 = [];
        num1 = num1.push(result);
        onScreenNum1();
        result = 0;
        equalRestart = false;
    }
};

n1.onclick = function () {
    if (!operator) {
        num1.push(1);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(1);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n2.onclick = function () {
    if (!operator) {
        num1.push(2);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(2);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n3.onclick = function () {
    if (!operator) {
        num1.push(3);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(3);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n4.onclick = function () {
    if (!operator) {
        num1.push(4);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(4);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n5.onclick = function () {
    if (!operator) {
        num1.push(5);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(5);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n6.onclick = function () {
    if (!operator) {
        num1.push(6);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(6);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n7.onclick = function () {
    if (!operator) {
        num1.push(7);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(7);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n8.onclick = function () {
    if (!operator) {
        num1.push(8);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(8);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

n9.onclick = function () {
    if (!operator) {
        num1.push(9);
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push(9);
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

coma.onclick = function () {
    if (!operator) {
        num1.push('.');
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push('.');
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

opposite.onclick = function () {
    if (!operator) {
        if (firstNumber > 0) {
            firstNumber = firstNumber - firstNumber * 2;
        } else if (firstNumber < 0) {
            firstNumber = Math.abs(firstNumber);
        } else {
            firstNumber = firstNumber;
        }
        onScreenNum1();
        console.log('First number = ' + secondNumber);
    } else {
        if (secondNumber > 0) {
            secondNumber = -Math.abs(secondNumber);
        } else if (secondNumber < 0) {
            secondNumber = Math.abs(secondNumber);
        } else {
            secondNumber = secondNumber;
        }
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

coma.onclick = function () {
    if (!operator) {
        num1.push('.');
        firstNumber = num1.join('');
        onScreenNum1();
        console.log('First number = ' + firstNumber);
    } else {
        num2.push('.');
        secondNumber = num2.join('');
        onScreenNum2();
        console.log('Second number = ' + secondNumber);
    }
};

plus.onclick = function () {
    firstOrSecond = true;
    screening.innerHTML = '+';
    console.log(firstOrSecond);
    if (equalRestart) {
        if (operator === 'add') {
            result = +firstNumber + +secondNumber;
        } else if (operator === 'substract') {
            result = +firstNumber - +secondNumber;
        } else if (operator === 'multiply') {
            result = +firstNumber * +secondNumber;
        } else if (operator === 'divide') {
            result = +firstNumber / +secondNumber;
        }
        console.log('resultado ' + result);
        firstNumber = 0;
        secondNumber = 0;
        num1 = [];
        num2 = [];
        num1.push(result);
        firstNumber = num1.join('');
        result = 0;
    }
    operator = 'add';
    equalRestart = true;
};
minus.onclick = function () {
    firstOrSecond = true;
    screening.innerHTML = '-';
    console.log(firstOrSecond);
    if (equalRestart) {
        if (operator === 'add') {
            result = +firstNumber + +secondNumber;
        } else if (operator === 'substract') {
            result = +firstNumber - +secondNumber;
        } else if (operator === 'multiply') {
            result = +firstNumber * +secondNumber;
        } else if (operator === 'divide') {
            result = +firstNumber / +secondNumber;
        }
        console.log('resultado ' + result);
        firstNumber = 0;
        secondNumber = 0;
        num1 = [];
        num2 = [];
        num1.push(result);
        firstNumber = num1.join('');
        result = 0;
    }
    operator = 'substract';
    equalRestart = true;
};
multi.onclick = function () {
    firstOrSecond = true;
    screening.innerHTML = '*';
    console.log(firstOrSecond);
    if (equalRestart) {
        if (operator === 'add') {
            result = +firstNumber * +secondNumber;
        } else if (operator === 'substract') {
            result = +firstNumber - +secondNumber;
        } else if (operator === 'multiply') {
            result = +firstNumber * +secondNumber;
        } else if (operator === 'divide') {
            result = +firstNumber / +secondNumber;
        }
        console.log('resultado ' + result);
        firstNumber = 0;
        secondNumber = 0;
        num1 = [];
        num2 = [];
        num1.push(result);
        firstNumber = num1.join('');
        result = 0;
    }
    operator = 'multiply';
    equalRestart = true;
};
divi.onclick = function () {
    firstOrSecond = true;
    screening.innerHTML = '/';
    console.log(firstOrSecond);
    if (equalRestart) {
        if (operator === 'add') {
            result = +firstNumber + +secondNumber;
        } else if (operator === 'substract') {
            result = +firstNumber - +secondNumber;
        } else if (operator === 'multiply') {
            result = +firstNumber * +secondNumber;
        } else if (operator === 'divide') {
            result = +firstNumber / +secondNumber;
        }
        console.log('resultado ' / result);
        firstNumber = 0;
        secondNumber = 0;
        num1 = [];
        num2 = [];
        num1.push(result);
        firstNumber = num1.join('');
        result = 0;
    }
    operator = 'divide';
    equalRestart = true;
};

reset.onclick = function () {
    operator = false;
    equalRestart = false;
    num1 = [];
    num2 = [];
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    screening.innerHTML = 0;
    document.getElementById('screening').style.fontSize = 'xx-large';

    console.log('Primer número = ' + firstNumber);
    console.log('Segundo número = ' + secondNumber);
    console.log('Operador = ' + operator);
};

porc.onclick = function () {
    result = (+firstNumber * +secondNumber) / 100;
    screening.innerHTML = result;
    console.log(result);
};

equal.onclick = function () {
    if (operator === 'add') {
        result = +firstNumber + +secondNumber;
    } else if (operator === 'substract') {
        result = +firstNumber - +secondNumber;
    } else if (operator === 'multiply') {
        result = +firstNumber * +secondNumber;
    } else if (operator === 'divide') {
        result = +firstNumber / +secondNumber;
    }
    screening.innerHTML = result;
};
