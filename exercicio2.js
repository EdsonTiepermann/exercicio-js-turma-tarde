let a = 25;
let b = 25;
let resultado;
let operacao = "soma";

switch (operacao) {
    case "soma":
        resultado = a+b;
        console.log("A adição é " + resultado)
        break;
    case "subtracao":
        resultado = a-b;
        console.log("A subtração é " + resultado)
        break;
    case "multiplicao":
        resultado = a*b;
        console.log("A multiplicação é " + resultado)
        break;
    case "divisao":
        resultado = a/b;
        console.log("A divisão é " + resultado)

    default:
        break;
}
