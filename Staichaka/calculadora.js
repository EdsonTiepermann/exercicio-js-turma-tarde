let val1 = 10;
let val2 = 15;
let result ;
let operacao = "soma";



switch (operacao) {
    case "soma":
        result = val1 + val2;
        console.log("O resultado da soma é " + result);
        break;

    default:
        console.log("O resultado não existe");
        break;
}