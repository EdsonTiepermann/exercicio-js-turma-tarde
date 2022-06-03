let formaPagamento = "credito";
let valorTotal = 2000;
let saldo = 4000;
let parcela = 5

switch (formaPagamento) {
    case "pix":
        valorTotal =valorTotal - valorTotal/10
        console.log("Você pagara " + valorTotal)
            break;

    case "debito":
        if (saldo >= valorTotal){
        console.log("você pagara " + valorTotal)
        } else if (saldo <= valorTotal)
            console.log(" saldo insuficiente ")
            break;

    case "credito":
        if (parcela <=1){
            valorTotal = (valorTotal * 0.05) + valorTotal 
            console.log(" você pagara " + valorTotal )
        }

            break;
    case "cartao":
        
        
        break;
    case "carne":
        
        
        break;
    default:
        break;
}