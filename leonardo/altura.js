var arrayAltura = [];
var ultimoIndice = 0;

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

function ordenaArray() {
    function ordencao (a, b) {
        return a - b;
    }
    console.log (arrayAltura.sort (ordencao))
}

function demonstrarMenorValor () {
    document.getElementById ('demonstrarMenorAltura').value = arrayAltura[0];
}

function demonstrarMaiorValor(){
    ultimoIndice = arrayAltura.slice(-1);
    document.getElementById ('demonstrarMaiorAltura').value = ultimoIndice;
}