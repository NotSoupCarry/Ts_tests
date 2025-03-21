import * as readline from "readline";

class Calcolatrice {
    calcola(a: number, b: number, operazione: string): number | string {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            return "Errore: Inserisci solo numeri interi.";
        }

        switch (operazione) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (b === 0) {
                    return "Errore: Divisione per zero non consentita.";
                }
                return Math.floor(a / b); // Divisione intera
            default:
                return "Errore: Operazione non supportata.";
        }
    }
}

// interfaccia di input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcolatrice = new Calcolatrice();

function chiediInput() {
    rl.question("\nInserisci il primo numero intero (0 per uscire): ", (inputA) => {
        const a = parseInt(inputA, 10);
        if (a === 0) {
            console.log("CIAOOOOOOOOOOOO");
            rl.close();
            return;
        }

        rl.question("Inserisci il secondo numero intero: ", (inputB) => {
            const b = parseInt(inputB, 10);

            rl.question("Inserisci l'operazione (+, -, *, /): ", (operazione) => {
                const risultato = calcolatrice.calcola(a, b, operazione);
                console.log("\nRisultato:", risultato);
                
                // Ripeto se l input non è valido
                chiediInput();
            });
        });
    });
}

chiediInput();
