let numeroUsuario = '';
let arrayNumero = [];
let numeroMenor = 0;
let indice = 0;
let ultimoIndice = 0;

function adicionaEVerificaNumero() {
    numeroUsuario = document.getElementById ('valorUsuario').value;
    numeroUsuario = parseFloat (numeroUsuario);

    switch (arrayNumero.length) {
        case 15:
            console.log ('Array cheio');
            break;
    
        default:
            if (arrayNumero.indexOf(numeroUsuario) == -1){
                arrayNumero.push (numeroUsuario);
                console.log (arrayNumero);
            } else {
                console.log ('Número já adicionado');
            }

            function ordemNumeros (a, b) {
                return a - b;
            }


            arrayNumero.sort(ordemNumeros);
            indice = arrayNumero [0];
            ultimoIndice = arrayNumero.slice(-1);
            document.getElementById ('menorNumero').value = (indice);
            document.getElementById ('maiorNumero'). value = (ultimoIndice);

            break;
    }

}