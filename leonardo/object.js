var animal = {
    tipoAnimal: 'Cachorro',
    racaAnimal: 'Pinscher',
    nomeAnimal: 'Rex',
    idadeAnimal: '2 anos',
    sexoAnimal: 'Macho',
    animalVivo: true,
    animalVacinado: false,

    carteiraAnimal:function(){
        if (this.animalVivo == true) {
            console.log ('O animal se chama ' + this.nomeAnimal + ' e tem ' + this.idadeAnimal);
        } else {
            console.log ('O animal está morto!')
        }
    },

    vacinaAnimal:function(){
        this.animalVacinado = true;
        if (this.animalVacinado == true) {
            console.log ('O animal se chama ' + this.nomeAnimal + ' e tem ' + this.idadeAnimal + ' e está vacinado');
        } else {
            console.log ('O animal se chama ' + this.nomeAnimal + ' da raça ' + this.racaAnimal + ' com ' + this.idadeAnimal + ' não está vacinado');
        }
    }
}


animal.vacinaAnimal();

// let truck = {
//     fabricante: 'Scania',
//     modelo: 'R440',
//     peso: '10300 kg',
//     ligado:false,
    
//     ligar: function() {
//         this.ligado = true;
//         console.log ('O caminhão ' + this.modelo + ' está ligando...');
//         console.log ('Start')
//     },
//     acelerar: function () {
//         if (this.ligado == true) {
//             console.log ('Acelerando');
//         } else {
//             console.log ('O caminhã ' + this.modelo + ' não está ligado...')
//         }
//     },
//     desligar: function() {
//         console.log ('Stop')
//     }
// }

// truck.acelerar();
// truck.ligar();
// console.log (truck.fabricante);
// console.log (truck.modelo);
// console.log (truck.peso);
// truck.desligar();



// let carros = [
//     {fabricante: 'Fiat', modelo: 'Uno'},
//     {fabricante: 'Chevrolet', modelo: 'Corsa'},
//     {fabricante: 'Volksvagem', modelo: 'Gol'},
//     {fabricante: 'Toyota', modelo: 'Etios'},
// ];

// console.log (carros);
// console.log (carros[2].fabricante);