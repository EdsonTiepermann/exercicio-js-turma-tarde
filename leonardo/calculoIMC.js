function calcularIMC() {
    var pessoa = document.getElementById('nome').value;
    var altura = document.getElementById('alt').value;
    var peso = document.getElementById('kg').value;


    altura = parseFloat(altura);
    peso = parseFloat(peso);
    altura = altura / 100;
    var imc = peso / (altura * altura);

    var classificacao = '';

    if (imc < 16) {
        classificacao = 'baixo peso, muito grave!';
    } else if (imc >= 16 && imc < 17) {
        classificacao = 'baixo peso, grave!';
    } else if (imc >= 17 && imc < 18.50) {
        classificacao = 'baixo peso!';
    } else if (imc >= 18.50 && imc < 25) {
        classificacao = 'peso normal!'
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'sobrepeso!';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'obesidade grau 1!';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'obesidade grau 2!';
    } else {
        classificacao = 'obesidade grau 3!';
    }

    document.getElementById ('result').value += (pessoa + ' possui indice de massa corporal igual ' + imc + ', sendo classificado como: ' + classificacao);

    // document.write(pessoa + ' possui indice de massa corporal igual ' + imc + ', sendo classificado como: ' + classificacao);

}
