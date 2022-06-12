// Escrever um script que leia número de 0 a 999. Desses, fazer a soma apenas dos ímpares e mostrar na tela.
// Mostrar também o total de números ímpares e pares. E por fim, fazer a média aritmética da soma dos números divisíveis por 3;

let numeros = 0;
let resto = 0;
let totalPar = 0;
let totalImpar = 0;
let mediaAritimetica = 0;
let somaImpares = 0;

for (let index = 0; index <= 999; index++) {
    resto = numeros [index] % 3;
    if (resto == 0){
        somaPares =somaPares + numeros[index];
 }
 else {
    totalImpar++;
    somaImpares = somaImpares + numeros[index]
}

} somaImpares = somaImpares + numeros;
mediaAritimetica = (somaPares + somaImpares) / numeros.length;
console.log(mediaAritimetica);