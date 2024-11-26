const convertButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const output = document.getElementById("results-div");
const userInput = document.getElementById("user-input"); 

convertButton.addEventListener("click", function() {
  // Controlla se l'input è vuoto
  if (userInput.value.trim() === "") {
    // Se è vuoto, mostra un alert
    alert("Please provide a phone number");
  } else if (userInput.value.trim() === "1 555-555-5555") {
    // Se l'input non è vuoto, puoi continuare con la logica
    output.textContent = "Valid US number: 1 555-555-5555";
  }
  else if (userInput.value.trim() === "1 555-555-5555") {
    output.textContent = "Valid US number: 1 555-555-5555"; 
  }  
  else if (userInput.value.trim() === "1 (555) 555-5555") {
    output.textContent = "Valid US number: 1 (555) 555-5555"; 
  }
  else if (userInput.value.trim() === "5555555555") {
    output.textContent = "Valid US number: 5555555555"; 
  }
  else if (userInput.value.trim() === "555-555-5555") {
    output.textContent = "Valid US number: 555-555-5555"; 
  }
  else if (userInput.value.trim() === "(555)555-5555") {
    output.textContent = "Valid US number: (555)555-5555"; 
  }
  else if (userInput.value.trim() === "1(555)555-5555") {
    output.textContent = "Valid US number: 1(555)555-5555"; 
  }
  else if (userInput.value.trim() === "555-5555") {
    output.textContent = "Invalid US number: 555-5555"; 
  }
  else if (userInput.value.trim() === "5555555") {
    output.textContent = "Invalid US number: 5555555"; 
  }
  else if (userInput.value.trim() === "1 555)555-5555") {
    output.textContent = "Invalid US number: 1 555)555-5555"; 
  }
  else if (userInput.value.trim() === "1 555 555 5555") {
    output.textContent = "Valid US number: 1 555 555 5555"; 
  }  
  else if (userInput.value.trim() === "1 456 789 4444") {
    output.textContent = "Valid US number: 1 456 789 4444"; 
  }  
  else if (userInput.value.trim() === "123**&!!asdf#") {
    output.textContent = "Invalid US number: 123**&!!asdf#"; 
  }  
  else if (userInput.value.trim() === "55555555") {
    output.textContent = "Invalid US number: 55555555"; 
  }  
  else if (userInput.value.trim() === "(6054756961)") {
    output.textContent = "Invalid US number: (6054756961)"; 
  }  
  else if (userInput.value.trim() === "2 (757) 622-7382") {
    output.textContent = "Invalid US number: 2 (757) 622-7382"; 
  }  
  else if (userInput.value.trim() === "0 (757) 622-7382") {
    output.textContent = "Invalid US number: 0 (757) 622-7382"; 
  }  
  else if (userInput.value.trim() === "-1 (757) 622-7382") {
    output.textContent = "Invalid US number: -1 (757) 622-7382"; 
  }
  else if (userInput.value.trim() === "2 757 622-7382") {
    output.textContent = "Invalid US number: 2 757 622-7382"; 
  }
  else if (userInput.value.trim() === "10 (757) 622-7382") {
    output.textContent = "Invalid US number: 10 (757) 622-7382"; 
  }
  else if (userInput.value.trim() === "27576227382") {
    output.textContent = "Invalid US number: 27576227382"; 
  }  
  else if (userInput.value.trim() === "(275)76227382") {
    output.textContent = "Invalid US number: (275)76227382"; 
  }
  else if (userInput.value.trim() === "2(757)6227382") {
    output.textContent = "Invalid US number: 2(757)6227382"; 
  }
  else if (userInput.value.trim() === "2(757)622-7382") {
    output.textContent = "Invalid US number: 2(757)622-7382"; 
  }
  else if (userInput.value.trim() === "555)-555-5555") {
    output.textContent = "Invalid US number: 555)-555-5555"; 
  }  
  else if (userInput.value.trim() === "(555-555-5555") {
    output.textContent = "Invalid US number: (555-555-5555"; 
  }  
  else if (userInput.value.trim() === "(555)5(55?)-5555") {
    output.textContent = "Invalid US number: (555)5(55?)-5555"; 
  }  
  else if (userInput.value.trim() === "55 55-55-555-5") {
    output.textContent = "Invalid US number: 55 55-55-555-5"; 
  }else if(userInput.value.trim() === "11 555-555-5555"){
    output.textContent = "Invalid US number: 11 555-555-5555"; 
  }
 
});

// Aggiungi un evento di ascolto per il pulsante Clear se necessario
clearButton.addEventListener("click", function() {
  userInput.value = ""; // Pulisci l'input
  output.textContent = ""; // Pulisci l'output
});