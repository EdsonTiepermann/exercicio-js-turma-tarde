let mes = "outubro"

switch (mes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        console.log("o mês escolhido foi: " + mes + " referente ao verão");
        break;
    case "março":
    case "abril":
    case "maio":
        console.log("o mês escolhido foi: " + mes + " referente ao outono");
        break;
    case "junho":
    case "julho":
    case "agosto":
        console.log("o mês escolhido foi: " + mes + " referente ao inverno");
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        console.log("o mês escolhido foi: " + mes + " referente a primavera");
        break;


    default:
        console.log("")
        break;
}