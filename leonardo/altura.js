let arrayAltura = [];

function adicionaAltura() {
    var valorAltura = document.getElementById ('altura').value;
    valorAltura = parseFloat (valorAltura);

    if (valorAltura == '') {
        document.write ('Informe valores válidos!');
    } else {
        arrayAltura.push(valorAltura);
        console.log (arrayAltura);
    }
}

function ordenaArray(a, b) {
    console.log (arrayAltura.sort ());
}

function demonstrarMenorValor () {
    document.getElementById ('demonstrarMenorAltura').value = arrayAltura[0];
}