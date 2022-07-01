var cadastroUsuarios = [];

document.getElementById('cadastrarUsuario').addEventListener('click', novoCadastro);
document.getElementById('verificarUsuario').addEventListener('click', verificaUsuarioCadastrado);

function novoCadastro() {
    var cadastro = {
        nome: document.getElementById('nomeUsuario').value,
        idade: document.getElementById('idadeUsuario').value,
    }
    cadastroUsuarios.push(cadastro)
    console.log(cadastroUsuarios);
}

console.log(cadastroUsuarios);

function verificaUsuarioCadastrado() {
    for (let index = 0; index < cadastroUsuarios.length; index++) {
        if (cadastroUsuarios[index].nome == 'Leonardo') {
            document.getElementById('resultadoVerificacao').innerHTML = cadastroUsuarios[index].nome;
        }
    }
}