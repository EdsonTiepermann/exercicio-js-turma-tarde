let mes = "novembro";

switch (mes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
    console.log("O mês escolhido foi: " +  mes + " referente ao verão ");
        
        break;
        case "marco":
        case "abril":
        case "maio":
    console.log("O mês escolhido foi: " +  mes + " referente ao outono ");
        break;
        case "junho":
        case "julho":
        case "agosto":
    console.log("O mês escolhido foi: " +  mes + " referente ao inverno ");
    break;
        case "setembro":
        case "outubro":
        case "novembro":
    console.log("O mês escolhido foi: " +  mes + " referente a primavera ");
    break;
    default:
        console.log("Outro mês")
        break;
}