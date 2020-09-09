// Elements
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clearBtn');

// Global Variables
let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
  // Replace current display value if first value is entered
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    // If current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === '0' ? number : displayValue + number;
  }
}

// Add decimal
function addDecimal() {
  // If operator is pressed, don't add decimal
  if (awaitingNextValue) return;
  // If no decimal, add one
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // Assign first value if no value
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log('currentValue', currentValue);
  }
  // Ready for next value, store the operator
  awaitingNextValue = true;
  operatorValue = operator;
  console.log('FirstValue', firstValue);
  console.log('operator', operator);
}

// Add Event Lisnteners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    //Number buttons
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    // Any button with operator class.
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    // The decimal button
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

// Reset all values, display
function resetAll() {
  calculatorDisplay.textContent = '0';
  firstValue = 0;
  operatorValue = '';
  awaitingNextValue = false;
}

// Event listeners
clearBtn.addEventListener('click', resetAll);
