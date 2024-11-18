async function loadFooter() {
    try {
      const response = await fetch('../html/default/footer.html'); 
      const footerHTML = await response.text(); 
      document.getElementById('footer-placeholder').innerHTML = footerHTML; 
    } catch (error) {
      console.error('Erro ao carregar o footer:', error); 
    }
  }
  
  window.addEventListener('DOMContentLoaded', loadFooter());