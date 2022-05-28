function verificaSalario() {
    let base = 2000;
    let gerente = base + (base*10/100);
    let supervisor = base + (base*50/100);
    let funcionario = document.getElementById ('funcao').value;
    switch (funcionario) {
        case "gerente":
            // alert ('Salário de: R$' + gerente);
            document.getElementById ('resultado').value = ('R$' + gerente) ;
            break;
        case "supervisor":
            // alert ('Salário de: R$'+ supervisor);
            document.getElementById ('resultado').value = ('R$' + supervisor) ;
            break;
        default:
            // alert ('Salário de: R$' + base);
            document.getElementById ('resultado').value = ('R$' + base) ;
            break;
    }
}