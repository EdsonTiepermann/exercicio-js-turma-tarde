// 03 - Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N
let N = 5;
let tabuada = 0;
let resultado = 0;

console.log(tabuada * N);

for (let index = 1; index < 11; index++) {
    console.log(N + " X " + index + " = " + N * index);
}

// switch (N) {
//     case 0:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);
//         }
//         break;
//     case 1:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 2:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 3:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 4:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 5:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 6:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 7:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 8:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 9:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }
//         break;
//     case 10:
//         for (let index = 1; index < 11; index++) {
//             console.log(N + " X " + index + " = " + N * index);


//         }


//         break;

//     default: console.log( "Esse número não faz parte do exercício");
//         break;
// }