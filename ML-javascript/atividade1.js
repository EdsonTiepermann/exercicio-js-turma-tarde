// 01 - Escrever um algoritmo para mostrar os números ímpares entre 100 e 200.

let resto = 0;

for (let index = 100; index < 201; index++) {
    resto = index % 2
    if (resto != 0 ) {
        console.log(index);
        
    }
    
}