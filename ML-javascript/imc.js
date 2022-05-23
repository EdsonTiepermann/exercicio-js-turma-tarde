let altura = "1,80";
let peso = "55";
let imc = "ideal"

switch (imc) {
    case "ideal":
        imc= peso / (altura * altura)
        console.log(imc);
        
        break;

    default:
        break;
}