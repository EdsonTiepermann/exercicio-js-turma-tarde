let valor1 = 30;
let valor2 = 20;
let operacao = "multiplicacao";
let resultado ;

switch (operacao) {
    case "soma":
     resultado = valor1 + valor2
        console.log("o resultado da soma é: " + resultado);
        break;
    case "subtracao":
        resultado = valor1 - valor2
        console.log("o resultado da subtração é: " + resultado);
        break;
    case "divisao":
        resultado = valor1 / valor2
        console.log("resultado da divisão é: " + resultado);
        break;
    case "multiplicacao":
        resultado = valor1 * valor2
        console.log("resultado da multiplicação é: " + resultado);
        break;


    default:
        console.log("operação não registrada")
        break;
}