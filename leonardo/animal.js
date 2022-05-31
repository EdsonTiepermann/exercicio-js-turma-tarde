function verificacoesAnimal() {

    var animal = {
        tipoAnimal: document.getElementById('tipo').value,
        racaAnimal: document.getElementById('raca').value,
        nomeAnimal: document.getElementById('nome').value,
        idadeAnimal: document.getElementById('idade').value,
        sexoAnimal: document.getElementById('sexo').value,
        animalVivo: document.getElementById('situacaoAnimal').value,
        animalVacinado: document.getElementById('vacinaAnimal').value,

        dadosAnimal: function () {
            if (animal.animalVivo != 'morto' && animal.animalVacinado == 'sim') {
                document.write('O animal se chama ' + animal.nomeAnimal + ' da raça ' + animal.racaAnimal + ' com ' + animal.idadeAnimal + ' e está vacinado!');
            } else if (animal.animalVivo != 'sim') {
                document.write('O animal se chama ' + animal.nomeAnimal + ' da raça ' + animal.racaAnimal + ' com ' + animal.idadeAnimal + ' não está vacinado!');
            } else {
                document.write('O animal está morto!');
            }
        },

        morteAnimal: function () {
            if (animal.animalVivo == 'morto') {
                document.write('Infelizmente o animal ' + animal.nomeAnimal + ' da raça ' + animal.nomeAnimal + ' está morto!');
            }
        }
    }

    animal.dadosAnimal();
    animal.morteAnimal();
}