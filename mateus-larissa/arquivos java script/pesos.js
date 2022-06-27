let peso = 62
let altura = 1.70

let imc = peso / (altura * altura) 

console.log(imc)
    if (imc<18.5){
       console.log("Abaixo do peso");
    }
   else if  (imc==18.5 || imc<=24.9) {
   console.log("Peso normal")
}
