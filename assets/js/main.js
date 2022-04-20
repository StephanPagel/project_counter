let counterValue = 0;
let output = document.getElementById('output');
output.innerHTML = counterValue;

function plusOne() {
    output.innerHTML = counterValue += 1;
}

function minusOne() {
    output.innerHTML = counterValue -= 1;
}

function plusTen() {
    output.innerHTML = counterValue += 10;
}

function minusTen() {
    output.innerHTML = counterValue -= 10;
}

function plusHundred() {
    output.innerHTML = counterValue += 100;
}

function minusHundred() {
    output.innerHTML = counterValue -= 100;
}

function resetValue() {
    output.innerHTML = counterValue = 0;
}

function timesTwo() {
    output.innerHTML = counterValue *= 2;
}

