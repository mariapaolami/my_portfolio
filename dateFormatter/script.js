// Inizializzazione delle variabili per il paragrafo e la selezione delle opzioni di data
// Initialization of variables for the paragraph and date options selection
// Initialisation des variables pour le paragraphe et la sélection des options de date
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

// Creazione di un nuovo oggetto Date per ottenere la data e l'orario correnti
// Creating a new Date object to get the current date and time
// Création d'un nouvel objet Date pour obtenir la date et l'heure actuelles
const date = new Date();
const day = date.getDate(); // Giorno del mese
// Day of the month
// Jour du mois
const month = date.getMonth() + 1; // Mese (1-based)
// Month (1-based)
// Mois (commence à 1)
const year = date.getFullYear(); // Anno
// Year
// Année
const hours = date.getHours(); // Ore
// Hours
// Heures
const minutes = date.getMinutes(); // Minuti
// Minutes
// Minutes

// Formattazione della data nel formato "giorno-mese-anno"
// Formatting the date in "day-month-year" format
// Formatage de la date au format "jour-mois-année"
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate; // Imposta la data nel paragrafo
// Set the formatted date in the paragraph
// Définit la date formatée dans le paragraphe

// Aggiunge un ascoltatore di eventi per cambiare il formato della data quando selezionato
// Adds an event listener to change the date format when selected
// Ajoute un écouteur d'événements pour changer le format de la date lorsque sélectionné
dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        // Caso per il formato "yyyy-mm-dd"
        // Case for the "yyyy-mm-dd" format
        // Cas pour le format "aaaa-mm-jj"
        case "yyyy-mm-dd":
          currentDateParagraph.textContent = formattedDate
            .split("-")
            .reverse()
            .join("-"); // Inverti l'ordine della data
            // Reverse the date order
            // Inverse l'ordre de la date
          break;
        // Caso per il formato "mm-dd-yyyy-h-mm"
        // Case for the "mm-dd-yyyy-h-mm" format
        // Cas pour le format "mm-jj-aaaa-h-mm"
        case "mm-dd-yyyy-h-mm":
          currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`; 
          // Visualizza la data e l'ora in formato "mm-dd-yyyy h:mm"
          // Display date and time in "mm-dd-yyyy h:mm" format
          // Affiche la date et l'heure au format "mm-jj-aaaa h:mm"
          break;
        
    }
});
