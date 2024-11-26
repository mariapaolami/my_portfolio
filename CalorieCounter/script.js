const calorieCounter = document.getElementById('calorie-counter'); // Variabile per ottenere il contatore delle calorie (In italiano)
const budgetNumberInput = document.getElementById('budget'); // Input per il numero del budget (Français : Entrée pour le budget)
const entryDropdown = document.getElementById('entry-dropdown'); // Menu a tendina per la selezione delle voci (In English: Dropdown for selecting entries)
const addEntryButton = document.getElementById('add-entry'); // Bottone per aggiungere una voce (In italiano)
const clearButton = document.getElementById('clear'); // Bottone per pulire il modulo (Français : Bouton pour effacer le formulaire)
const output = document.getElementById('output'); // Contenitore di output per i risultati (In English: Output container for results)
let isError = false; // Variabile per tracciare se ci sono errori (Français : Variable pour suivre s'il y a des erreurs)

function cleanInputString(str) {
  const regex = /[+-\s]/g; // Regex per rimuovere caratteri speciali come "+" o "-" (In English: Regex to remove special characters like "+" or "-")
  return str.replace(regex, ''); // Restituisce la stringa pulita (In italiano)
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i; // Controlla se l'input è un numero in formato scientifico (Français : Vérifie si l'entrée est un nombre au format scientifique)
  return str.match(regex); // Ritorna vero se l'input è invalido (In English: Returns true if input is invalid)
}

function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); // Trova il contenitore dell'input (In italiano)
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1; // Conta quante voci ci sono e incrementa il numero (Français : Compte combien d'entrées il y a et incrémente le numéro)
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`; // Crea un HTML per una nuova voce (In English: Creates an HTML structure for a new entry)
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString); // Aggiunge l'HTML al contenitore (Français : Ajoute le HTML au conteneur)
}

function calculateCalories(e) {
  e.preventDefault(); // Impedisce l'azione predefinita del form (In italiano)
  isError = false; // Resetta lo stato dell'errore (Français : Réinitialise l'état de l'erreur)

  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]'); // Seleziona tutti gli input per la colazione (In English: Selects all the breakfast input fields)
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]'); // Seleziona tutti gli input per il pranzo (Français : Sélectionne tous les champs de saisie du déjeuner)
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]'); // Seleziona tutti gli input per la cena (In italiano)
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]'); // Seleziona tutti gli input per gli snack (In English: Selects all the snack input fields)
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]'); // Seleziona tutti gli input per l'esercizio (Français : Sélectionne tous les champs d'exercice)
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]); // Ottiene le calorie dal budget (In italiano)

  // Calcola le calorie consumate (Français : Calcule les calories consommées)
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs); // Colazione (In English: Breakfast)
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs); // Pranzo (Français : Déjeuner)
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs); // Cena (In Italian)
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs); // Snack (In English: Snacks)
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs); // Esercizio (Français : Exercice)

  if (isError) { // Controlla se c'è un errore (In Italian)
    return;
  }

  // Calcola il totale delle calorie consumate e il saldo (Français : Calcule le total des calories consommées et le solde)
  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories >= 0 ? 'Surplus' : 'Deficit'; // Se il saldo è positivo è un surplus, altrimenti è un deficit (In English: If the remaining calories are positive, it's surplus, else deficit)
  
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `; // Mostra il risultato (In italiano)

  output.classList.remove('hide'); // Mostra l'output (Français : Affiche le résultat)
}

function getCaloriesFromInputs(list) {
  let calories = 0; // Inizializza le calorie a 0 (In English: Initialize calories to 0)

  for (let i = 0; i < list.length; i++) { // Cicla sugli input (Français : Parcours les champs de saisie)
    const currVal = cleanInputString(list[i].value); // Pulisce la stringa dell'input (In italiano)
    const invalidInputMatch = isInvalidInput(currVal); // Controlla se l'input è valido (In English: Checks if the input is valid)

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`); // Mostra un avviso se l'input è invalido (Français : Affiche un avertissement si l'entrée est invalide)
      isError = true; // Segna un errore (In English: Marks an error)
      return null;
    }
    calories += Number(currVal); // Somma le calorie (In italiano)
  }
  return calories; // Ritorna il totale delle calorie (Français : Retourne le total des calories)
}

function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container')); // Ottiene tutti i contenitori degli input (In English: Gets all the input containers)

  for (let i = 0; i < inputContainers.length; i++) {
    inputContainers[i].innerHTML = ''; // Svuota il contenuto di ogni contenitore (Français : Vide le contenu de chaque conteneur)
  }

  budgetNumberInput.value = ''; // Resetta il valore dell'input del budget (In italiano)
  output.innerText = ''; // Resetta l'output (Français : Réinitialise le résultat)
  output.classList.add('hide'); // Nasconde l'output (In English: Hides the output)
}

addEntryButton.addEventListener("click", addEntry); // Aggiungi un evento al pulsante per aggiungere una voce (Français : Ajoute un événement au bouton pour ajouter une entrée)
calorieCounter.addEventListener("submit", calculateCalories); // Aggiungi un evento per calcolare le calorie (In italiano)
clearButton.addEventListener('click', clearForm); // Aggiungi un evento per pulire il modulo (In English: Adds an event to clear the form)
