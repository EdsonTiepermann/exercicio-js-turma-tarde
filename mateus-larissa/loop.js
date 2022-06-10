// exercicio01

// let resultado 
// for (let i = 100 ; i < 200; i ++) {
//     resultado = i %2
//     if (resultado != 0) {
//         console.log(i)
//     }
// }



// 02 - Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três 
// e que se encontram no conjunto dos números de 1 até 500. 
 
   // let resto = 0;
   // let multiplo = 0;
   // let  resultado = 0;
   

   // for (let index = 1; index <= 10; index++) {
   //    resto = index % 2;
   //    multiplo =index % 3;
   //    console.log(resto);

   //    if((resto != 0) && (multiplo == 0)){
   //       resultado = resultado + index
         
   //    }
      
   // }



   // 03 - Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. 
   // Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N

// let n = 8
// let result



// for (let i = 0; i <= 10; i++) {
//     result = n * i
//     console.log(n + "*" + i + " = " + result + "N" )
// }   








// 04 - Escrever um script que leia número de 0 a 999. Desses, fazer a soma apenas dos ímpares e mostrar na tela. 
// Mostrar também o total de números ímpares e pares. E por fim, fazer a média aritmética da soma dos números divisíveis por 3;


// let resultado 
// for (let i = 0 ; i < 999; i ++) {
//     resultado = i %2
//     if (resultado != 0) {
//         console.log(i)
//     }
// }                    *incompleto*






// Exercicio 5

// function ordenacao(array) {
   // for (let index = 0; index < array.length; index++) {
   //    for (let j = index + 1; j < array.length; j++)
   //         if (array[index] > array[j]) {
   //            let aux = array[index];
   //            array[index] = array[j];
   //            array[j] = aux;
   //         }
      
   // }
   
// }




// let alturas = [170, 165, 174];
// ordenacao(alturas);
// // alturas.reverse;
// console.log(alturas);


// Exemplo

// let numeros = [5, 15, 55, 73, 40];

// function ordenacao2(a, b) {
   // operador condicional ternário
   // return a > b ? 1 : a < b ? -1 : 0;
//    if (a > b) {
//       return 1 
//    }
//    else if (a < b){
//       return -1
//    }
//    else {
//       return 0
//    }
// }

// numeros.sort(ordenacao2);
// numeros.reverse();
// console.log(numeros);





// 07 - Faça um algoritmo que leia 6 valores positivos.
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos.[array]

// let numeros = [6, 7, 17, 20, 3, 4];
// let resto = 0; 
// let totalimpar = 0;
// let totalpar = 0;
// let mediapares = 0;
// let mediageral = 0;
// let somapares = 0;
// let somaimpares = 0;


// for (let index = 0; index < numeros.length; index++) {
//     resto = numeros[index] % 2;
//     if (resto == 0){
//         totalpar++;
//         somapares = somapares + numeros[index];
        
//     } else {
//         totalimpar++;
//         somaimpares = somaimpares + numeros[index];


//     }
    
// }

// mediapares = somapares / totalpar;
// mediageral = (somapares + somaimpares) / numeros.length;
// console.log(mediageral);


// 08 - escreva um script que leia 15 números positivos, econtre o maior deles e o menos deles, e mostre na tela. [array]

// let numeros = [7, 30, 34, 2, 15, 78, 89, 53, 90, 23, 9, 45, 93, 32, 86];

// function suaordenacao(array) 
// {
//    for (let index = 0; index < array.length; index++) {
//       for (let j = index + 1; j < array.length; j++)
//            if (array[index] > array[j]) {
//               let aux = array[index];
//               array[index] = array[j];
//               array[j] = aux;
//            }
      
//    }
   
// }

// let numeros = [7, 30, 34, 2, 15, 78, 89, 53, 90, 23, 9, 45, 93, 32, 86];
// suaordenacao(numeros);
// suaordenacao.reverse;
// console.log(numeros[0], numeros[numeros.length -1]);