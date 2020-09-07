// Elements
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clearBtn');

function sendNumberValue(number) {
  // If current display value is 0, replace it, if not add number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === '0' ? number : displayValue + number;
}

// Add Event Lisnteners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    //Number buttons
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    // Any button with operator class.
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    // The decimal button
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }
});
