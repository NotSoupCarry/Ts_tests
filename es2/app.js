"use strict";
const inputField = document.getElementById("userInput");
const button = document.getElementById("submitButton");
const outputParagraph = document.getElementById("outputMessage");
const usernameInput = document.getElementById("username");
const descriptionInput = document.getElementById("description");
const displayUsername = document.getElementById("displayUsername");
const displayDescription = document.getElementById("displayDescription");
// Evento per il bottone "Mostra"
button.addEventListener("click", () => {
    const userInput = inputField.value.trim();
    if (userInput) {
        outputParagraph.style.color = "black";
        outputParagraph.textContent = `Hai inserito: ${userInput}`;
    }
    else {
        outputParagraph.style.color = "red";
        outputParagraph.style.fontWeight = "bold";
        outputParagraph.textContent = "Inserisci del testo!";
    }
});
// Evento per aggiornare automaticamente i dati dell'utente
usernameInput.addEventListener("input", () => {
    displayUsername.textContent = usernameInput.value || "Nessun nome inserito";
});
descriptionInput.addEventListener("input", () => {
    displayDescription.textContent = descriptionInput.value || "Nessuna descrizione";
});
