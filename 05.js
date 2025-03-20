var populacaoA = 80000;
var aCrescimento = 0.03;
var populacaoB = 200000;
var bCrescimento = 0.015;
var anos = 0;
while (populacaoA < populacaoB) {
    populacaoA += populacaoA * aCrescimento;
    populacaoB += populacaoB * bCrescimento;
    anos++;
    console.log("Popula\u00E7\u00E3o da A: ".concat(populacaoA.toFixed(0), " e Popula\u00E7\u00E3o da B ").concat(populacaoB.toFixed(0)));
    console.log("Passaram " + anos + " anos");
}
