let cargo = "nada"
let salario;
switch (cargo) {
    case "gerente" :
        salario = 2000 + 2000/10
        console.log("O cargo é " + cargo + "o seu salário é " + salario);
        break;
        case "superior" :
        salario = 2000 + 2000/2
        console.log("O cargo é " + cargo + "o seu salário é " + salario);
        break;
    default: salario = 2000
    console.log(" O cargo é " + cargo + " o salário é " + salario)
        break;
}