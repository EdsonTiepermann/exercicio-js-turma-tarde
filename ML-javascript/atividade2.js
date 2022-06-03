// 02 - Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 	    1 até 500.

let resto = 0;
let somaImpar = 0;

for (let index = 1; index < 501; index++) {
    resto = index % 3
    if (resto != 0) {
        somaImpar = somaImpar + index;
       
        
    }
    
}
 console.log(somaImpar)