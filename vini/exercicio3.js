// 03 - Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N
let valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tabuada = 1
let resultado = 0;
for (let index = 0; index < 10; index++) {
    resultado = tabuada * index;
    console.log(resultado);
}
