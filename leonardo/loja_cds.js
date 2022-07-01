document.getElementById('verificarPrecoCD').addEventListener('click', localizarPreco);

function localizarPreco() {
    let corCD = document.getElementById('listaCD').value;
    switch (corCD) {
        case "verde":
            document.getElementById('precoCD').innerText = `O preço do CD da cor ${corCD} é igual a R$10,00`;
            document.body.style.backgroundColor = 'green';
            break;
        case "amarelo":
            document.getElementById('precoCD').innerText = `O preço do CD da cor ${corCD} é igual a R$12,00`;
            document.body.style.backgroundColor = 'yellow';
            break;
        case "vermelho":
            document.getElementById('precoCD').innerText = `O preço do CD da cor ${corCD} é igual a R$15,00`;
            document.body.style.backgroundColor = 'red';
            break;
        case "azul":
            document.getElementById('precoCD').innerText = `O preço do CD da cor ${corCD} é igual a R$25,00`;
            document.body.style.backgroundColor = 'blue';
            break;
        default:
            alert('Informe uma cor!');
            document.body.style.backgroundColor = 'white';
            document.getElementById('precoCD').innerText = ('');
            break;
    }
}   