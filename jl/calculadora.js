let a = 6
let b = 6
let resultado;
let opcao = "soma";
switch (opcao) {
    case "soma":
        resultado = a + b;
        console.log("A soma da  " + resultado);
        break;

    case "subtracao":
        resultado = a - b;
        console.log("A subtacao da " + resultado);
        break;
    case "multiplicacao":
        resultado = a * b;
        console.log("A multiplicação da " + resultado);
        break;
    case "divisao":
        resultado = a / b;
        console.log("A divisão dá " + resultado)
        break;


    default:
        break;
}
