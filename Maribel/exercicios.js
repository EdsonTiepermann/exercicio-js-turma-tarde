//7-que leia 6 valores positivos. Calcule a quantidade de números pares e ímpares,
//  a média de valores pares e a média geral dos números lidos.[altura]//

// let numeros =[6,7,17,15,3,4];
// let resto = 0;
// let totalpar = 0;
// let totalimpar = 0;
// let mediapares = 0;
// let somapares = 0;
// let somaimpares = 0;
// let mediageral = 0;
// let total = 0;

// for (let index = 0; index < numeros.length; index++) {
//     resto = numeros[index] &2
//     if (resto == 0 ){
//         totalpar++;
//         somapares = somapares + numeros[index];
//     }else{
//         totalimpar++;
//         somaimpares = somaimpares + numeros[index];
//     }
// }
//     mediapares= somapares / totalpar;
//     mediageral = (somapares + somaimpares) / numeros.length;
//     console.log (mediageral);








//5-Desenvolver um algoritmo que leia a altura(em cm) de 15 pessoas.Este programa deverá calcular e mostrar: [array] a.
// A menor altura do grupo; b.A maior altura do grupo;//


// let altura = [160,162,164,165,155,167,180,187,185,192,152,183,184,174,177,222,150,120];
// let menoraltura = 0;
// let maioralturs = 0;

// for (let i = 0; i < altura.length; i++) {
//     for (let j = i + 1; j < altura.length; j++) {
//         if (altura[i] > altura[j]) {
//             let aux = altura[i];
//             altura[i] = altura[j];
//             altura[j] = aux;
//         }
//     }
// }


// console.log(altura[0]);
// console.log(altura[altura.length-1]);



// 08 - escreva um script que leia 15 números positivos, econtre o maior deles e o menos deles, e mostre na tela. [array]

// let numeros = [10,12,04,16,15,25,18,07,03,92,21,31,52,87,37];
// let menornum = 0;
// let maiornum = 0;

// for (let i = 0; i < numeros.length; i++) {
//     for (let j = i + 1; j < numeros.length; j++) {
//         if (numeros[i] > numeros[j]) {
//             let aux = numeros[i];
//             numeros[i] = numeros[j];
//             numeros[j] = aux;
//         }
//     }
// }


// console.log(numeros[0]);
// console.log(numeros[numeros.length-1]);

//Informe a idade de 18 pessoas e verifique quantas pessoas são maiores de idade e quantas são menores//

// let idade =[6,7,18,15,3,4,25,27,24,10,36,45,65,72,53, 4,5,6,8,7];
// let maiores = 0;
// let menores = 0;
// console.log(idade.length);
//     for (let index = 0; index < idade.length; index++){
//          if (idade[index] >= 18 ){
//             maiores++;
//         }else{
//             menores++;
//         }
//     }

//     console.log (maiores);
//     console.log (menores);

// 06 - Escrever um algoritmo que leia 10 números e conte quantos deles estão nos seguintes intervalos:
//  [0-25], [26-50], [51-75] e [76-100]. mostre na tela a quantidade de vezes que aparece cada intervalo. [array]

    let numeros =[25,37,46,59,4,11,24,72,87,94];
    let intervalo1 = 0;
    let intervalo2 = 0;
    let intervalo3 = 0;
    let intervalo4 = 0;
     for (let index = 0; index < numeros.length; index++){
         if (numeros[index] <= 25 ){
             intervalo1++;
         }else if (numeros[index] > 26 <=50){
               intervalo2++;
            }else if (numeros[index] > 51 <=75){
                intervalo3++;
            }else{
                intervalo4++;
            }    
     }
  console.log (intervalo1);
  console.log (intervalo2);
  console.log (intervalo3);
  console.log (intervalo4);
   