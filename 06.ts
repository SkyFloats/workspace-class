import * as readlineSync from "readline-sync";

let numeroTabuada:number = readlineSync.question("digite o numero para exibir a tabuada: ");

for (let i = 0; i <= 10; i++) {
    let numero = numeroTabuada * i
    console.log(`${numeroTabuada} x ${i} = ${numero}`);
}