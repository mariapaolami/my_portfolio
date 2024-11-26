// ITALIANO
// Selezioniamo gli elementi DOM per l'input, il bottone e il risultato
const numberInput = document.getElementById("number-input"); // Input per il numero
const convertBtn = document.getElementById("convert-btn"); // Bottone per la conversione
const result = document.getElementById("result"); // Sezione del risultato
const animationContainer = document.getElementById("animation-container"); // Contenitore per l'animazione
// Dati per l'animazione della call stack, con ritardi specifici per ciascun passaggio
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000, // Ritardo per aggiungere l'elemento
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.', // Messaggio da mostrare
    showMsgDelay: 15000, // Ritardo prima di mostrare il messaggio
    removeElDelay: 20000, // Ritardo prima di rimuovere l'elemento
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

// Funzione che converte un numero decimale in binario ricorsivamente
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input); // Caso base: 0 o 1
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2); // Conversione ricorsiva
  }
};

// Funzione per mostrare l'animazione della call stack
const showAnimation = () => {
  result.innerText = "Call Stack Animation"; // Mostriamo un messaggio iniziale

  animationData.forEach((obj) => {
    // Aggiungiamo l'elemento per ogni valore di input con il rispettivo ritardo
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    // Mostriamo il messaggio di animazione
    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    // Rimuoviamo l'elemento dopo il ritardo
    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  // Mostriamo il risultato finale dopo un certo tempo
  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

// Funzione per controllare l'input dell'utente
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value); // Prendiamo il valore dell'input e lo convertiamo in intero

  // Controlliamo se l'input è valido
  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0"); // Messaggio di errore
    return;
  }

  // Se l'input è 5, mostriamo l'animazione della call stack
  if (inputInt === 5) {
    showAnimation();
    return;
  }

  // Se l'input è valido, mostriamo il risultato della conversione
  result.textContent = decimalToBinary(inputInt);
  numberInput.value = ""; // Svuotiamo l'input
};

// Aggiungiamo un evento al click del bottone
convertBtn.addEventListener("click", checkUserInput);

// Aggiungiamo un evento per il tasto "Enter"
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
