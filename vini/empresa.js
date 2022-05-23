let cargo = "supervisor"
let salario = 2000;

switch (cargo) {
    case "gerente":
        salario = (salario * 0.10) + salario;
        console.log(salario);
        
        break;
    case "supervisor":
        salario = (salario * 0.50) + salario;
        console.log(salario);
            
        break;

    default:
        break;

}