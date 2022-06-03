let peso = "60"
let altura = "1.70"
let imc = peso / (altura * altura)
console.log(imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else {
    
}
if (imc > 18.5 < 24.9) {
    console.log("Peso normal");
} else {
     
}
if (imc > 24.9 < 29.9) {
    console.log("Sobrepeso");
} else {
     
}
if (imc < 30 > 34.9) {
    console.log("Obesidade grau I");
} else {
    
}
if (imc < 35 > 39.9) {
    console.log("Obesidade grau II");
} else {
    
}
if (imc < 35 > 40) {
    console.log("Obesidade Grau III ou Morbida");
} else {
    
}