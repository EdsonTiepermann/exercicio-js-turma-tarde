// Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 	    1 até 500.

let soma = 0;
let numeros = 0;
for (numeros = 1; numeros <= 500
    ; numeros++) {
    if ((numeros % 2 !== 0) && (numeros % 3 == 0)) {
        soma += numeros;
    }
}
console.log(soma);

