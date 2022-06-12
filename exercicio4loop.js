// Escrever um script que leia número de 0 a 999. Desses, fazer a soma apenas dos ímpares e mostrar na tela. Mostrar também o total de números ímpares e pares. E por fim, fazer a média aritmética da soma dos números divisíveis por 3;



// let resultado
// let somaImpar = 0;
// let totalImpar = 0;
// let totalPar = 0;
// let divisivel3 = 0;

// for (let n = 0; n < 999; n++) {
//     resultado = n % 2
//     if (resultado == 0) {
//         n++
//     } else
//         console.log(n);


let soma = 0;
let numeros = 0;
let totalPar = 0;
let totalImpar = 0;
let divisivel3 = 0;

for (numeros = 1; numeros <= 999; numeros++) {
    if ((numeros % 3 == 0)) {
        divisivel3++
    } if ((numeros % 2 == 0)) {
        totalPar++
    } if ((numeros % 2 !== 0)) {
        totalImpar++
    }
}
console.log(divisivel3);