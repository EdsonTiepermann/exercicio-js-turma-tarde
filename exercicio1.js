// Em uma loja e CD ́s existem apenas quatro tipos de preços que estão associados a cores. Assim os CD ́s que ficam na loja não são 			marcados por preços e sim por cores. 
// Desenvolva o algoritmo que a partir a entrada da cor o software e mostre o preço. A loja está atualmente com a seguinte tabela de preços.

// COR 	VALOR EXEMPLO
// VERDE 	R$ 10
// AMARELO 	R$ 12
// VERMELHO 	R$ 15
// AZUL 	R$ 25

let cor = "azul";

switch (cor) {
    case 'verde':
        console.log("o valor será $10.");
        break;

    case 'amarelo':
        console.log("o valor será $12.");
        break;

    case 'vermelho':
        console.log("o valor será $15.");
        break;

    case 'azul':
        console.log("o valor será $25.");
        break;

    default:
        break;
}