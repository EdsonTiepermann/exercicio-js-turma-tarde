let salariobase = 2000
let colaborador = "gerente"

let acrescimo 

switch (colaborador) {
    case "supervisor":
        acrescimo = salariobase + 1000
        console.log(" O " + colaborador + " recebe um salário de " + acrescimo)
        break;

        case "gerente" :
        acrescimo = salariobase + 200 
        console.log (" O " + colaborador + " recebe um salário de " + acrescimo)
        break;

    default:
        break;
}