let numeroArray = [];
let numeroUsuario = 0;
let somaPar = 0;
let somaImpar = 0;
let mediaPar = 0;
let mediaGeral = 0;
let somaGeral = 0;

function adicionarErealizarMediadosNumeros() {
    numeroUsuario = document.getElementById ('valorInformadoUsuario').value;
    numeroUsuario = parseFloat (numeroUsuario);

    switch (numeroArray.length) {
        case 6:
            console.log ('Array cheio');
            break;
        default:
            if (numeroArray.indexOf(numeroUsuario) == -1){
                numeroArray.push (numeroUsuario);
                console.log (numeroArray);
            } else {
                console.log ('Número já adicionado');
            }

            let resultado = numeroUsuario%2;

            if (resultado == 0) {
                document.getElementById ('numerosPares').value += (numeroUsuario + '; ');
                somaPar += numeroUsuario;
                console.log (somaPar);
                mediaPar = somaPar / numeroArray.length;
                document.getElementById ('mediaPares').value = (mediaPar);
            } else {
                document.getElementById ('numerosImpares').value += (numeroUsuario + '; ');
                somaImpar += numeroUsuario;
                console.log (somaImpar);
            }

            somaGeral = somaPar + somaImpar;
            mediaGeral = somaGeral / numeroArray.length;
            document.getElementById ('mediaGeral').value = mediaGeral;
            break;
    }
}