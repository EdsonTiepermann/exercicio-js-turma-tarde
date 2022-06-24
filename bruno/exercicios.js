// let Alunos = ['Bruno', 'Larissa', 'Matheus', 'Leonardo']
// console.log(Alunos) ;

// Alunos.push('Maribel')
// // console.log(Alunos)

// let cachorro = {
//     raca:'Pitbull' ,
//     cor:'Marrom' ,
//     sexo:'Macho' ,
//     peso:'15kg' ,
//     tamanho:'45cm' ,
    
//     latir:function() {
//        console.log('au au au')
//     },

//     rosnando:function() {
//         console.log('rrrr rrrr rrrr')
//     },
// }
// cachorro.latir();
// cachorro.rosnando();


//  let for ( i = 100; i < 200; i++ ) {
//     if((i 200 % 2) = 100) 
// }
// console.log


// 07 - Faça um algoritmo que leia 6 valores positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos.[array]
// let numeros = [6, 7, 17, 15, 3, 4];
// let resto = 0; 
// let totalPar = 0; 
// let totalImpar = 0;
// let mediaPar = 0;
// let somaPares = 0;
// let somaImpares = 0;

// for (let index = 0; index < numeros.length; index++) {
//     resto = numeros[index] % 2;
//     if (resto == 0 ){
//         totalPar++;
//         somaPares = somaPares + numeros[index]; 

//     } else {
//         totalImpar++;
//         somaImpares = somaImpares + numeros[index];

//     }
    
//     mediaPar = somaPares / totalPar;

//     mediaGeral =(somaPares + somaImpares ) / numeros.length;

//     console.log(mediaGeral);

// }


// 02 - Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 	    1 até 500.

// let numeros = [3, 9, 15,] {
//     for(=1; num<=500; index++ )
//     if(num % 3 == 0 )

// }
// console.log()

// 05 - Desenvolver um algoritmo que leia a altura(em cm) de 15 pessoas. Este programa deverá calcular e mostrar : [array] a. A menor altura do grupo; b. A maior altura do grupo;

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j ++) {
//             if (array[i] > array[j]) {
//                 let aux = array[1];
//                 array[i] = array[j];
//                 array[j] = aux
//             }
//         }
//     }
// }

// let numeros = [175, 168, 174];
// bubbleSort(numeros);
// numeros.reverse();
// console.log(numeros);

// function ordenaNum(a,b){ 
//     // operador condicional ternario 
//     return a > b ? 1 : a < b ? -1 : 0;
//     if (a > b) {
//         return 1
//     } else if (a < b ) {
//         return -1
//     } else {
//         return 0
//     }
// }
   
// numeros.sort(ordenaNum2);
// numeros.reverse();
// console.log(numeros);


// 06 - Escrever um algoritmo que leia 10 números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. mostre na tela a quantidade de vezes que aparece cada intervalo. [array]

// let numeros [0-25 , 26-50 , 51-75 , 76-100]
// for ()