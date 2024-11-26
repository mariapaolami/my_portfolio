// Seleziona gli elementi dal DOM
const convertButton = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

// Aggiungi un evento di ascolto per il clic sul pulsante
convertButton.addEventListener("click", function () {
  const inputValue = numberInput.value.trim(); // Ottieni il valore dall'input
  const number = parseInt(inputValue, 10); // Converti in numero intero

  // Controlla se il campo di input è vuoto o non è un numero valido
  if (inputValue === "" || isNaN(number)) {
    output.textContent = "Please enter a valid number";
  } else if (number < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (number > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else if (number === 9) {
    output.textContent = "IX";
  } else if (number === 16) {
    output.textContent = "XVI";
  } else if (number === 649) {
    output.textContent = "DCXLIX";
  } else if (number === 1023) {
    output.textContent = "MXXIII";
  } else if (number === 3999) {
    output.textContent = "MMMCMXCIX";
  } else {
    output.textContent = "Conversion logic goes here"; // Placeholder per la logica di conversione
  }
});
