const max = 999;
let soma = 0; 
let media = 0;
let total = 0;
let contadorMedia = 0;


for (let n = 0; n <= max; n++) {
    let resultado = n%2;
    
    if (resultado == 1) {
        console.log (n);
        soma += n;
        contadorMedia ++;
    } else{
        // console.log (n);
        total += n;
    }
}

media = soma / contadorMedia;

document.write ('A soma dos valores impares é: ' + soma + '<br>');
document.write ('A soma total é: ' + total + '<br>');
document.write ('A média dos valores impares é: ' +media);
