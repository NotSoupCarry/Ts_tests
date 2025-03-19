"use strict";
// app.ts
var btn = document.getElementById("salutaBtn");
var messaggio = document.getElementById("messaggio");
btn.addEventListener("click", function () {
    messaggio.textContent = "Ciao, benvenuto nel mondo di TypeScript e HTML!";
});
