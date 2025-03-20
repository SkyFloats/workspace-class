"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeroTabuada = readlineSync.question("digite o numero para exibir a tabuada: ");
for (var i = 0; i <= 10; i++) {
    var numero = numeroTabuada * i;
    console.log("".concat(numeroTabuada, " x ").concat(i, " = ").concat(numero));
}
