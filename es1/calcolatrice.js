"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Calcolatrice = /** @class */ (function () {
    function Calcolatrice() {
    }
    Calcolatrice.prototype.calcola = function (a, b, operazione) {
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
    };
    return Calcolatrice;
}());
// interfaccia di input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var calcolatrice = new Calcolatrice();
function chiediInput() {
    rl.question("\nInserisci il primo numero intero (0 per uscire): ", function (inputA) {
        var a = parseInt(inputA, 10);
        if (a === 0) {
            console.log("Uscita dal programma.");
            rl.close();
            return;
        }
        rl.question("Inserisci il secondo numero intero: ", function (inputB) {
            var b = parseInt(inputB, 10);
            rl.question("Inserisci l'operazione (+, -, *, /): ", function (operazione) {
                var risultato = calcolatrice.calcola(a, b, operazione);
                console.log("\nRisultato:", risultato);
                // Ripeto se l input non è valido
                chiediInput();
            });
        });
    });
}
chiediInput();
