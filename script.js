document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector('.input');
    const numberButtons = document.querySelectorAll('.number-button');
    const operationButtons = document.querySelectorAll('.operation-button');
    const deleteButton = document.querySelector('.delete-button');
    const deleteWholeButton = document.querySelector('.deletewhole-button');
    const equalButton = document.querySelector('.equaloperation-button');
    const dotButton = document.querySelector('.dot-button');
  
    let input = '';
  
    // Function to update the input field
    function updateInput() {
      inputField.value = input;
    }
  
    // Function to append the clicked number/operator to the input
    function appendInput(value) {
      input += value;
      updateInput();
    }
  
    // Function to handle number button clicks
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        appendInput(button.textContent);
      });
    });
  
    // Function to handle operator button clicks
    operationButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (input !== '') {
          input += button.textContent;
          updateInput();
        }
      });
    });
  
    // Function to handle delete button click
    deleteButton.addEventListener('click', () => {
      input = input.slice(0, -1);
      updateInput();
    });
  
    // Function to handle clear button click
    deleteWholeButton.addEventListener('click', () => {
      input = '';
      updateInput();
    });
  
    // Function to handle decimal point button click
    dotButton.addEventListener('click', () => {
      if (!input.includes('.')) {
        appendInput(dotButton.textContent);
      }
    });
  
    // Function to handle equal button click
    equalButton.addEventListener('click', () => {
      try {
        input = eval(input);
        updateInput();
      } catch (error) {
        input = '';
        updateInput();
        console.error('Invalid expression');
      }
    });
  });
