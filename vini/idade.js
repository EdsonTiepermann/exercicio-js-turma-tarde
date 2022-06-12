let arrayidade = ['15', '22', '33', '50', '60', '70', '16', '20', '25', '40', '10', '34', '64', '45', '17', '18', '26', '55', 
8,9,7,6,5 ]
let maior =0;
let menor =0;

for (let index = 0; index < arrayidade.length; index++) {
    // console.log (index)
    if (arrayidade[index]>=18) {
        maior++;
    } else {
        menor++;
    }   
}

console.log(maior);
console.log(menor);