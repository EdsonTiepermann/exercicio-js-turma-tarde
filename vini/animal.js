var animal={
    especie:'aquático',
    animal:'tubarão',
    habitat:'mar',
    mordido:false,
    
    morder:function() {
      this.mordido= true
      console.log ("o tubarão" + this.especie) 
    }
}

// console.log(animal.es)

animal.morder();