// script.js
let expression = "";

function pressKey(key) {
  expression += key;
  updateDisplay(expression);
}

function clearDisplay() {
  expression = "";
  updateDisplay("0");
}

function calculate() {
  try {
    expression = eval(expression).toString();
    updateDisplay(expression);
  } catch (error) {
    updateDisplay("Error");
  }
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}
