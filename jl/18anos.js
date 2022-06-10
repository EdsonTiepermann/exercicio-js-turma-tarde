let arrayidades = [12, 15, 20, 22, 32, 11, 17, 19, 29, 25, 07, 44, 36, 28, 21, 26, 05, 06];
let maior = 0;
let menor = 0;

for (let index = 0; index < arrayidades.length; index++) {

    if (arrayidades[index] >= 18) {
        console.log(" É de maior ");
        nomes =
            maior++;
    } else if (arrayidades[index] < 18) {
        console.log(" É de menor ");
        menor++;
    }
}
console.log(" são de menor ", menor);
console.log(" são de maior ", maior);
