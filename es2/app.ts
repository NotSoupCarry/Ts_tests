const inputField = document.getElementById("userInput") as HTMLInputElement;
const button = document.getElementById("submitButton") as HTMLButtonElement;
const outputParagraph = document.getElementById("outputMessage") as HTMLParagraphElement;

const usernameInput = document.getElementById("username") as HTMLInputElement;
const descriptionInput = document.getElementById("description") as HTMLTextAreaElement;
const displayUsername = document.getElementById("displayUsername") as HTMLSpanElement;
const displayDescription = document.getElementById("displayDescription") as HTMLSpanElement;

// Evento per il bottone "Mostra"
button.addEventListener("click", () => {
    const userInput = inputField.value.trim();

    if (userInput) {
        outputParagraph.style.color = "black";
        outputParagraph.style.fontWeight = "normal";
        outputParagraph.textContent = `Hai inserito: ${userInput}`;
    } else {
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
