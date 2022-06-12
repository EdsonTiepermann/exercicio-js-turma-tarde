// Informe a idade de 18 pessoas e verifique quantas pessoas são maiores de idade e quantas são menores.
let idade = [12, 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 52 , 25 , 9 , 11 , 67]

let menor = 0;

let maior = 0;

for (let index = 0; index < idade.length; index++) {
    if (idade[index] < 18) {
        menor++;
        
    }else{
        maior++;
    }
}

console.log("pessoas menores de idade", menor);
console.log("pessoas maiores de idade", maior);