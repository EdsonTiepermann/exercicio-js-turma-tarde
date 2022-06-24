// let car = {
//     fabricante: "Chevrolet",
//     modelo: "corsa",
//     peso: "1500kg"
// }

// console.log(car.fabricante);

// let truck = {
//     fabricante:"Scania",
//     modelo:"R440",
//     peso:"10300kg",

//     ligar:function() {
//         console.log( "Start vrum vrum");
//     },

//     parar:function() {
//         console.log('Stop');
//     }
// }

// truck.ligar();
// truck.parar();

// let truck = {
//     fabricante: "Scania",
//     modelo: "R440",
//     peso: "10300kg",
//     ligado: false,

//     ligar:function() {
//         this.ligado = true
//         console.log('O caminhão está ligando');
//         console.log('Start vrum vrum');
//     },

//     acelerar:function() {
//         if (this.ligado == true){
//             console.log('Acelerando, ...ra tá tá tá');
//         } else {
//             console.log('O caminhão' + this.modelo + 'não está ligado');
//         }
//     }
// }

// truck.ligar();
// truck.acelerar();
// console.log(truck.fabricante, truck.modelo)

// let cars = [
//     {fabricante: "fiat", modelo:"Uno"},
//     {fabricante: "toyota", modelo:"Etios"},
//     {fabricante: "Chevrolet", modelo:"Corsa"},
//     {fabricante: "ford", modelo:"focus"},
// ]

// console.log(cars[2].fabricante);


// let cachorro = {
//     raça:"Pug",
//     tamanho:"60cm",
//     nome:"Cláudio",
//     cor:'Marrom',
//     idade:"3 anos",


//     latir:function() {
//         this.latindo = true
//         console.log('O Cláudio está latindo');
//         console.log('Au Au Au')
//     },

//     correr:function() {
//         if (this.latindo == true) {
//             console.log('Cláudio está correndo atrás de você...');
//             console.log('corra.');
//         } else {
//             console.log('Fique tranquilo, Cláudio está dormindo');
//         }
//     },
// }

// cachorro.latir();
// cachorro.correr();




// let mes = "setembro";

// switch (mes) {
//     case "dezembro":
//     case "janeiro":
//     case "fevereiro":
//         console.log(" O mês escolhido foi: " + mes + " referente ao verão ")
//         break;
//     case "marco":
//     case "abril":
//     case "maio":
//         console.log(" O mês escolhido foi: " + mes + " referente ao outono ")
//         break;
//     case "junho":
//     case "julho":
//     case "agosto":
//         console.log(" O mês escolhido foi: " + mes + " referente ao inverno ")
//         break;
//     case "setembro":
//     case "outubro":
//     case "novembro":
//         console.log(" O mês escolhido foi: " + mes + " referente ao primavera ")
//         break;

//     default:
//         break;
// }




// let val1 = 10;
// let val2 = 15;
// let result ;
// let operacao = "soma";



// switch (operacao) {
//     case "soma":
//         result = val1 + val2;
//         console.log("O resultado da soma é " + result);
//         break;

//     default:
//         console.log("O resultado não existe");
//         break;
// }



// 07 - Faça um algoritmo que leia 6 valores positivos.
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos.[array]

// let numeros = [6, 7, 17, 20, 3, 4];
// let resto = 0;
// let totalPar = 0;
// let totalImpar = 0;
// let mediaPares = 0;
// let somaPares = 0;
// let somaImpares = 0;
// let mediaGeral = 0;

// for (let index = 0; index < numeros.length; index++) {
//     resto = numeros[index] % 2;
//     if (resto == 0) {
//         totalPar++;
//         somaPares = somaPares + numeros[index];
//     } else {
//         totalImpar++;
//         somaImpares = somaImpares + numeros[index];
//     }

// }

// mediaPares = somaPares / totalPar;

// mediaGeral = somaPares + somaImpares / numeros.length;

// console.log(mediaGeral);




// 05 - Desenvolver um algoritmo que leia a altura(em cm) de 15 pessoas. Este programa deverá calcular e mostrar :
//  [array] a. A menor altura do grupo; b. A maior altura do grupo;

// let alturas = [195, 201, 155, 164, 175, 140, 163, 183, 153, 174, 173, 178, 190, 210, 208]
// for (let index = 0; index < alturas.length; index++) {
//     if (alturas[index] > alturas[] ) { 

//     }
// }

// console.log(alturas.length);

// 01 - Escrever um algoritmo para mostrar os números ímpares entre 100 e 200.

// let resto = 0;
// for (let index = 100; index <= 200; index++) {
// resto = index % 2
// if (resto == 0){ 
//     console.log(index)
// }
// }

// 05 - Desenvolver um algoritmo que leia a altura(em cm) de 15 pessoas. 
// Este programa deverá calcular e mostrar : [array] a. A menor altura do grupo; b. A maior altura do grupo;

// function bubbleSort(array) {
//     for (let i = 0; i < array.lenght; i++) {
//         for (let j = 1; j < array.lenght; j++) {
//             if (array[i] > array[j]) {
//                 let aux = array[j];
//                 array[i] = array[j];
//                 array[j] = aux;
//             }
//         }
//     }
// }

// let numeros = [5, 6, 77, 66, 34];
// // // bubbleSort(numeros);
// // numeros.sort(ordenation);
// // console.log(numeros);


// // function ordenation(a,b) {
// return a > b ? 1 : a < b ? -1 : 0;
// //     if (a > b) {
// //         return 1 
// //     } else if (a < b) {
// //         return -1
// //     } else {
// //         return 0
// //     }
// // }

// function ordenation2(a,b) {
//     return a - b;
// }


// 08 - escreva um script que leia 15 números positivos,
//  encontre o maior deles e o menos deles, e mostre na tela. [array]


// let numeros = [42, 44, 65, 34, 2, 30, 10, 39, 78, 93, 28, 19, 13, 14, 109]
// numeros.sort(ordenation);
// console.log(numeros);

// function ordenation(a,b) {
//     if (a > b) {
//         return 1 
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// }


// 04 - Escrever um script que leia número de 0 a 999. Desses, fazer a soma apenas dos ímpares e mostrar na tela.
//  Mostrar também o total de números ímpares e pares.
//  E por fim, fazer a média aritmética da soma dos números divisíveis por 3;

// let resto = 1;
// for (let index = 0; index <= 999; index++) {
//     resto = index % 2
//     if (resto == 1) {
//         console.log(index)

//     }
// }


// Informe a idade de 18 pessoas e verifique
//  quantas pessoas são maiores de idade e quantas são menores.


// let pessoas = [14, 15, 13, 19, 37, 18, 93, 58, 36, 21, 19, 18, 10, 2, 15, 74, 39, 98];
// let maior = 0;
// let menor = 0;

// for (let index = 0; index < pessoas.length; index++) {

//     if (pessoas[index] < 18) {
//        menor++
//     } else (pessoas[index] > 18); {
//         maior++
//     }
// }
// console.log(maior, menor);




// 02 - Desenvolver um algoritmo que efetue a soma de todos os números 
// ímpares que são múltiplos de três e que
//  se encontram no conjunto dos números de 1 até 500.

// let resto = 0;
// for (let index = 0; index <= 500; index++) {

//     resto = index % 2;
//     multiplo = index % 3;

// if (resto == 1 && multiplo == 0){ 
//     console.log(index)
// }
// }


// Exemplos de Functions:

