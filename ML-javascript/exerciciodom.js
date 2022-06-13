let divIdade = window.documents.getElementsByTagName('div')[0];
let corpo = document.body;

function setIdade(idade){
    if (idade == 0) {
        corpo.style.background = 'white';
        corpo.style.color = 'black';
    }else if (idade >= 18) {
        corpo.style.background = 'black';
        corpo.style.color = 'silver';
        document.write(divIdade.innerHTML + ' maior de idade, possui ' + idade + ' anos');
    }else {
        corpo.style.background = 'red';
        corpo.style.color = 'white';
        document.write(divIdade.inerrHTML + ' menor de idade, possui ' + idade + 'anos')
    }
}
setIdade()