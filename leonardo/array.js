// let carros = ['fusca', 'del rey', 'gurgel', 'brasilia']; 

// // unshift adiciona um item no começo do array
// carros.unshift('carroça');
// console.log(carros);
// // push adiciona um item no final do array
// carros.push ('busão');
// console.log (carros);
// // shift retira a primeira posição (0) do array
// carros.shift ();
// console.log (carros);
// // pop retira a última posição (n-1) do array
// carros.pop ();
// console.log (carros);

// let indice = carros.indexOf('del rey');
// // quando ao procurar um valor e o indíce da -1 significa que não existe no array 
// console.log (indice);

// let copiar = carros.slice();
// console.log(copiar);

let alunos = ['Leonardo', 'Pedro', 'Bruno', 'João', 'Luis'];
console.log(alunos);
let copiar = alunos.slice();

alunos.unshift('Maribel');
console.log(alunos);

let indiceAlunos = alunos.indexOf ('Leonardo');
console.log (indiceAlunos);

alunos.push ('Matheus');
console.log(alunos);
console.log(alunos.length);
console.log (copiar);

alunos.shift ();
console.log(alunos);

alunos.pop ();
console.log(alunos);





// function logar() {
//     let login = document.getElementById ('nome').value;
//     let senha = document.getElementById ('senha1').value;
//     let dadosLogin = ['Leonardo', 'Robinson', 'Edson'];
//     let dadosSenha = ['123', '1234', '12345'];

//     if (dadosLogin.indexOf(login) === dadosSenha.indexOf(senha) && dadosSenha.indexOf(senha) === dadosLogin.indexOf(login)){
//         alert ('Login realizado com sucesso');
//     } else {
//         alert ('Erro!')
//     }
// }
