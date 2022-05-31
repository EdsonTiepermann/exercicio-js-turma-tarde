let p = 90 ;
let a = 1.74;
let imc = p / (a * a);
if (imc < 18.5) {
    console.log("Está abaixo do peso ")
} else if ((imc >= 18.5) && (imc < 25)) {
    console.log(" Peso normal ")
} else if ((imc >= 25) && (imc < 30)) {
    console.log(" Sobrepeso ");
} else if ((imc >= 30) && (imc < 35)){
    console.log(" Obesidade grau 1 ")
} else if ((imc >= 35) && (imc < 40)) {
    console.log(" Obesidade grau 2")
} else if (imc <= 40) {
    console.log(" Obesidade grau 3")
}
