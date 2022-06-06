// ** 7 - Faça um algoritmo que leia 6 valores positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos.[array]
    // let numeros = [6, 7 , 17, 15, 3, 4];
    // let resto = 0;
    // let totalpar = 0;
    // let totalimpar = 0;
    // let mediapares = 0;
    // let somapares = 0;
    // let somaimpares = 0;
    // let  mediapar = 0;
    // let mediageral = 0;
    



    // for (let index = 0; index < numeros.length; index++) {
    //     resto = numeros[index] % 2;
    //     if (resto == 0) {
    //         totalpar++;
    //         somapares = somapares + numeros[index];
    //     } else {
    //         totalimpar++;
    //         somaimpares = somaimpares + numeros[index];
    //     }

    // //  console.log(totalpar);
    // }
    // mediapar = somapares / totalpar;
    // mediageral = (somapares + somaimpares) / numeros.length;
    // console.log(mediageral);

    // **1 -  Escrever um algoritmo para mostrar os números ímpares entre 100 e 200.
    // let resultado;

    // for (let numeros =100 ; numeros < 200 ; numeros++) {
    //     resultado = numeros % 2;
    //     // console.log(resultado);
        
    //     if (resultado == 0) {
    //         // console.log(numeros);
    //  } else 
    //  console.log(numeros);
       
    // }
    
    // **2 - Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.

    let somaimpares = 0;
    let resto = 0;
    let numeros = 0;

    for(let numeros = 1 ; numeros < 500 ; numeros++) 
    resto = numeros[numeros] % 2;
        if (resto == 0) {
            // totalpar++;
        } if (resto !== 0 && numeros % 3 == 0){

        }
          else {
            totalimpar++;
            somaimpares = somaimpares + numeros[numeros];
        } 
        console.log(somaimpares);