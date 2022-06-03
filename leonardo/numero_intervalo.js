let numeroArray = [];
let numeroUsuario = '';


function adicionarEverificarNumero () {
    numeroUsuario = document.getElementById ('valorInformadoUsuario').value;
    numeroUsuario = parseFloat (numeroUsuario);

    switch (numeroArray.length) {
        case 10:
            console.log ('Array cheio');
            break;
    
        default:
            if (numeroArray.indexOf(numeroUsuario) == -1){
                numeroArray.push (numeroUsuario);
                console.log (numeroArray);
            } else {
                console.log ('Número já adicionado');
                // return false significa que vai ser encerrado a função quando chegar nesse resultado
                return false;
            }
            break;
    }

    if ((numeroUsuario >= 0) && (numeroUsuario <= 25) ) {
        document.getElementById ('intervalo0e25').value += (numeroUsuario + '; ');
    } else if ((numeroUsuario >= 26) && (numeroUsuario <= 50)) {
        document.getElementById ('intervalo26e50').value += (numeroUsuario + '; ');
    } else if ((numeroUsuario >= 51) && (numeroUsuario <= 75)) {
        document.getElementById ('intervalo51e75').value += (numeroUsuario + '; ');
    } else if ((numeroUsuario >= 76) && (numeroUsuario <= 100)){ 
        document.getElementById ('intervalo76e100').value += (numeroUsuario + ';');
    }
}