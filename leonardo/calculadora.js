// ATIVIDADE 8
function realizarOperacao() {
    let valor1 = document.getElementById ('v1').value;
    let valor2 = document.getElementById ('v2').value;
    let operacao = document.getElementById ('calculo').value;
    valor1 = parseFloat (valor1);
    valor2 = parseFloat (valor2);
    let resultado = '';
    switch (operacao) {
        case "soma":
            resultado = valor1 + valor2;
            // alert('A operação realizada foi de ' + operacao + ' entre os dados ' + valor1 + ' e ' + valor2 + ' com seu resultado: ' + resultado + '!');
            document.getElementById ('resposta').value = resultado;
            break;
        
        case "subtração":
            resultado = valor1 - valor2;
            // alert('A operação realizada foi de ' + operacao + ' entre os dados ' + valor1 + ' e ' + valor2 + ' com seu resultado: ' + resultado + '!');
            document.getElementById ('resposta').value = resultado;
            break;

        case "multiplicação":
            resultado = valor1 * valor2;
            // document.write ('A operação realizada foi de ' + operacao + ' entre os dados ' + valor1 + ' e ' + valor2 + ' com seu resultado: ' + resultado + '!');
            document.getElementById ('resposta').value = resultado;
            break;

        case "divisão":
            resultado = valor1 / valor2;
            // document.write ('A operação realizada foi de ' + operacao + ' entre os dados ' + valor1 + ' e ' + valor2 + ' com seu resultado: ' + resultado + '!');
            document.getElementById ('resposta').value = resultado;
            break;  

        default:
            document.write ('Informe valores e uma operação válidos!');
            break;
    }
}