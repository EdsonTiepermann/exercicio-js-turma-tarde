var animal = {
    tipo: 'cachorro',
    raca: 'pastoraalemao',
    peso: '50kg',
    cor: 'marrom',
    situacao: false,

    saudavel:function() {
        this.situacao = true
        console.log("O " + this.tipo + " está saudável.")
        console.log(' Ele está latindo au au!');
    },
    correr:function() {
        if (this.situacao == true) {
            console.log('Correr , ....lap lap lap');
        } else {
            console.log(' O ' + this.tipo + ' não está correndo');
        }

    }
}
animal.saudavel();
animal.correr();