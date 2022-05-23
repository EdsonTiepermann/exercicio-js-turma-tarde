let pagamento = "carne parcelado";
let valor;
let valortotal = 1000
switch (pagamento) {
    case "pix":
        valor = (valortotal * 0.10) + valortotal
        console.log(" O pagamento será em " + pagamento + " e o valor será " + valor);
        break;
    case "debito":
        valor = valortotal
        console.log(" O pagamento será em " + pagamento + " e o valor será " + valor);
        break;
    case "credito 1x":
        valor = (valortotal * 0.05) + valortotal
        console.log(" O pagamento será em " + pagamento + " e o valor será " + valor);
        break;
    case "cartao parcelado":
        valor = (valortotal * 0,10) + valortotal
        console.log(" O pagamento será feito em  " + pagamento + " e o valor será " + valor);
        break;
    case "carne parcelado":
        valor = (valortotal * 0.20) + valortotal;
        console.log(" O pagamento será feito em " + pagamento + " e o valor será " + valor);
        break;
}