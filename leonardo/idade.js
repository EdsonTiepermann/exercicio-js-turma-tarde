var idadeUsuarios = [];
var idade = '';
const menorIdade = 18;
var totalMenorIdade = 0;
var totalMaiorIdade = 0;

function verificarIdadeUsuario () {
    idade = document.getElementById ('idadeInformada').value;
    idade = parseFloat (idade);

    switch (idadeUsuarios.length) {
        case 18: 
            alert ('Informado valor total de usuários');
        break;
        default:
            if (idadeUsuarios.indexOf(idade) == -1) {
                idadeUsuarios.push (idade);
                console.log(idadeUsuarios);
            } else {
                console.log('Valor já informado');
                return false; 
            }

            if (idade < menorIdade) {
                totalMenorIdade++;
                console.log ('Total menor idade: ' + totalMenorIdade);
                document.getElementById ('totalPessoasMenorIdade').value = totalMenorIdade;
            } else {
                totalMaiorIdade++;
                console.log('Total maior idade: ' + totalMaiorIdade);
                document.getElementById ('totalPessoasMaiorIdade').value = totalMaiorIdade;
            }
    }
}