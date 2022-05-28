
let base = 2000;
let cargo = 'recepcao';

switch (cargo) {
    case 'gerente':
        base = (base * 0.10) + base;
        console.log(base);
        break;
    case 'supervisor':
        base = (base * 0.50) + base;
        console.log(base);
        break;

    default:
        console.log(base);
        break;
}