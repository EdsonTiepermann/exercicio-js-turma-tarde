function calcularNumeros() {
    var numeroInicial = document.getElementById('primeiroNumero').value;
    var numeroFinal = document.getElementById('ultimoNumero').value;
    numeroInicial = parseFloat(numeroInicial);
    numeroFinal = parseFloat(numeroFinal);
    for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
        document.write (numeroInicial + ' ');
        console.log(numeroInicial);
    }
}

