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

// Creazione dell'interfaccia di input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Richiedi input all'utente
rl.question("Inserisci il primo numero intero: ", (inputA) => {
    const a = parseInt(inputA, 10);

    rl.question("Inserisci il secondo numero intero: ", (inputB) => {
        const b = parseInt(inputB, 10);

        rl.question("Inserisci l'operazione (+, -, *, /): ", (operazione) => {
            const calcolatrice = new Calcolatrice();
            const risultato = calcolatrice.calcola(a, b, operazione);

            console.log("\n🔢 Risultato:", risultato);

            rl.close();
        });
    });
});
