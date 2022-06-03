let p = 300;
let a = 1.94;
let imc = p / (a*a);


if (imc<18.5){
    console.log("Você está abaixo do peso " + imc);
    } else if((imc>=18.5) && (imc<=24.9)) {
        console.log("Você está no peso normal  " + imc);
    } else if((imc>=25) && (imc<=29.9)) {
        console.log("Você está sobrepeso " + imc);
    } else if((imc>=30) && (imc<=34.9)) {
        console.log("Você está com obesidade GRAU II " + imc);
    } else if((imc>=35) && (imc<=39.9)) {
        console.log("Você está com obesidade GRAU II " + imc);
    } else if (imc>40) {
        console.log("Você está com obesidade GRAU III" + imc);
    }