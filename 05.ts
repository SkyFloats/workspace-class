let populacaoA = 80000
let aCrescimento = 0.03
let populacaoB = 200000
let bCrescimento = 0.015

let anos = 0;

while( populacaoA < populacaoB ){
    populacaoA += populacaoA * aCrescimento
    populacaoB += populacaoB * bCrescimento

    anos++
    console.log(`População da A: ${populacaoA.toFixed(0)} e População da B ${populacaoB.toFixed(0)}`)
    console.log("Passaram "+ anos +" anos")
}