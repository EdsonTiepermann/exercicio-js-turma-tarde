var numeroArray = [];
var numeroUsuario = 0;
var somaPar = 0;
var somaImpar = 0;
var mediaPar = 0;
var mediaGeral = 0;
var somaGeral = 0;
var resultado = 0;
var totalPar = 0;
var totalNumeros = 0;

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
                return false;
            }

            resultado = numeroUsuario%2;

            if (resultado == 0) {
                document.getElementById ('numerosPares').value += (numeroUsuario + '; ');
                somaPar += numeroUsuario;
                console.log (somaPar);
                totalPar ++;
                mediaPar = somaPar / totalPar;
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

console.log (numeroArray);

