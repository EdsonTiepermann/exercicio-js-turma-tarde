var arrayNumero = [];

function adicionarOrdenarNumero() {
    var numeroInformado = document.getElementById('numero').value;
    numeroInformado = parseFloat(numeroInformado);

    if (arrayNumero.indexOf(numeroInformado) == -1){
        arrayNumero.push (numeroInformado);
        console.log (arrayNumero);
    } else {
        console.log ('Número já adicionado');
        return false;
    }
    
    function ordenacaoArray(a, b) {
        return a - b;
    }
    
    arrayNumero.sort(ordenacaoArray);
    document.getElementById('result').innerHTML = `Array ordenado: ${arrayNumero}.`;
}