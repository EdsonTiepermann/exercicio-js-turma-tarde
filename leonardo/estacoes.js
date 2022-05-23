// ATIVIDADE 7
function verificarEstacao (){
    let mes = document.getElementById ('mesRef').value;

    switch (mes) {
        case "dezembro":
        case "janeiro":
        case "fevereiro":
            document.write ('O mês informado: ' + mes + ' é referente a Verão!');
            break;
        
        case "março":
        case "abril":
        case "maio":
            document.write ('O mês informado: ' + mes + ' é referente a Outono!');
            break;
        
        case "junho":
        case "julho":
        case "agosto":
            document.write ('O mês informado: ' + mes + ' é referente a Inverno!');
            break;
        
        case "setembro":
        case "outubro":
        case "novembro":
            document.write ('O mês informado: ' + mes + ' é referente a Primavera!');
        default:
            document.write ('A palavra ' + mes + ' não é válida. Favor informar um mês existente!')
            break;
    }

}