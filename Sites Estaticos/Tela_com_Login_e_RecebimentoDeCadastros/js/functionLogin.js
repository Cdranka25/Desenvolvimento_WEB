function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('user', username);
        //mostrarNome();
    }
}

function mostrarNome() {
    const user = localStorage.getItem('user'); // Verifica se o nome está armazenado
    if (user != null) {
        document.getElementById('usuarioLogado').innerHTML = user;
    }
}

function login() {
    var email = document.getElementById('emailLogin').value;
    var senha = document.getElementById('senhaLogin').value;

    if (email != "" && senha != "") {
        localStorage.setItem('user', email);
        localStorage.setItem('chaveMarcador', 'aberta');
        window.location.href = '../html/01_paginaPrincipal.html';
    } else {
        alert("Usuário/Senha deve ser preenchido!")
    }
}

function trocaEstilo() {
    var e = document.getElementById('optEstilo');
    var text = e.options[e.selectedIndex].text;

    if (text == 'Custom') {
        document.getElementById('criaConta').classList.remove('criarConta');
        document.getElementById('criaConta').classList.add('criarContaCustom');
    } else {
        document.getElementById('criaConta').classList.remove('criarContaCustom');
        document.getElementById('criaConta').classList.add('criarConta');
    }
}

const rotasDaAplicacao = ['../html/01_paginaPrincipal.html', '../html/02_paginaLogin.html', '../html/03_paginaCriacaoDeConta.html'];

function isPaginaDaAplicacao() {
    if (rotasDaAplicacao.includes(window.location.pathname)) {

    } else {
        localStorage.clear();
    }
}

function unload() {

    localStorage.clear();

}

// Adiciona um EventListener para verificar se a página está sendo fechada
window.addEventListener('unload', unload());


