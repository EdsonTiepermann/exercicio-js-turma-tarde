let numeros = [6, 7, 17, 15, 3, 4];
let resto = 0;
let totalPar = 0;
let totalImpar = 0;
let mediaPares = 0;
let mediaGeral = 0;
let somaPares = 0;
let somaImpares = 0;
let total = 0;

for (let index = 0; index < numeros.length; index++) {
    resto = numeros[index] % 2;
    if (resto == 0) {
        totalPar++;
        somaPares = somaPares + numeros [index];
    } else {
        totalImpar++;
        somaImpares = somaImpares + numeros [index];
    }
    total = totalPar + totalImpar;
    mediaPares = somaPares / totalPar;
    mediaGeral = (somaPares + somaImpares) / numeros.length;
    
}
console.log(mediaGeral);