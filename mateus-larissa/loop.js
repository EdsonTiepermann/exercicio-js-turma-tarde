// let resultado 
// for (let i = 100 ; i < 200; i ++) {
//     resultado = i %2
//     if (resultado != 0) {
//         console.log(i)
//     }
// }

 
   
    


// let n = 5
// let result
// for (let i = 0; i <= 10; i++) {
//     result = n * i
//     console.log(n + "*" + i + " = " + result )
// }   




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


// 1 Em uma loja e CD ́s existem apenas quatro tipos de preços que estão associados a cores.
//  Assim os CD ́s que ficam na loja não são marcados por preços e sim por cores. 
// Desenvolva o algoritmo que a partir a entrada da cor o software e mostre o preço. 
// A loja está atualmente com a seguinte tabela de preços.

// COR 	VALOR EXEMPLO
// VERDE 	R$ 10
// AMARELO 	R$ 12
// VERMELHO 	R$ 15
// AZUL 	R$ 25

// let cor ="verde";
// let precoverde = 10;
// let precoamarelo = 12;
// let precoazul = 25;
// let precovermelho = 15;

// switch (cor) {
//     case "verde":
//         console.log(" A cor escolhida foi " + cor + " cujo o preço é " + precoverde);
//         break;

//     default:
//         break;
// }




// 04 - Escrever um script que leia número de 0 a 999. Desses, fazer a soma apenas dos ímpares e mostrar na tela. 
// Mostrar também o total de números ímpares e pares. E por fim, fazer a média aritmética da soma dos números divisíveis por 3;


let resultado 
for (let i = 0 ; i < 999; i ++) {
    resultado = i %2
    if (resultado != 0) {
        console.log(i)
    }
}
