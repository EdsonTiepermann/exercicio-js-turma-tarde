let mes = "novembro"; 

switch (mes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        console.log(" O mês escolhido foi: " + mes + " referente ao verão ")
        break;
    case "março":
    case "abril":
    case "maio":
        console.log(`9 O mês escolhido foi: ${mes} referente ao inverno `)
        break;
    case "junho":
    case "julho":
    case "agosto":
        console.log(" O mês escolhido foi: " + mes + " referente a primavera ")
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        console.log(" O mês escolhido foi: " + mes + " referente a outono ")
        break;

    default:
        break;
}