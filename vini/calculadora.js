let operacao = "divisao";
let valor1 = 4;
let valor2 = 5;
let resultado;

switch (operacao) {
    case "soma":
        resultado = valor1 + valor2;
        console.log(" a operação escolhida foi soma que é igual a " + resultado)

        break;
    case "subtracao":
        resultado = valor1 - valor2;
        console.log(" a operação escolhida foi subtração que é igual a " + resultado)

        break;
    case "divisao":
        resultado = valor1 / valor2;
        console.log(" a operação escolhida foi divisão que é igual a " + resultado)
        
        break;
        case "multiplicacao":
            resultado = valor1 * valor2;
            console.log(" a operação escolhida foi multiplicação que é igual a " + resultado)
            
            break;
            
            default:
                console.log("Erro");
                break;
            }