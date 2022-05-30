var gato = {
    peso:'30kg',
    raça:'persa',
    comprimento:'50cm',
    pelagem:'branco',
    sexo:'masculino',
    acordado:true,

    acordar:function() {
        this.acordado = true
        console.log('O gato ' + this.raça + ' está acordado');
    },

    dormir:function() {
        if (this.acordado == true) {
            console.log("foi dormir, ... ron ron ron");
        } else{
            console.log("o gato " + this.raça + " está dormindo");
        }
    }
}

gato.acordar();
gato.dormir();
console.log(gato.peso, gato.comprimento, gato.sexo);
