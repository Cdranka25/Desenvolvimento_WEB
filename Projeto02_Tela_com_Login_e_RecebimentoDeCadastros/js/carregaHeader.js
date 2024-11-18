
async function loadHeader() {
  try {
    const response = await fetch('../html/default/header.html'); 
    const headerHTML = await response.text(); 
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    
    if(localStorage.getItem('user') === null){
      localStorage.setItem('user', 'Não Logado');
    }

    mostrarNome();
  } catch (error) {
    console.error('Erro ao carregar o header:', error); 
  }
}

function mostrarNome() {
  const user = localStorage.getItem('user'); // Verifica se o nome está armazenado
  if (user != null) {
    document.getElementById('usuarioLogado').innerHTML = user;
  }
}

window.addEventListener('DOMContentLoaded', loadHeader);
//window.addEventListener('mostranome', mostrarNome);