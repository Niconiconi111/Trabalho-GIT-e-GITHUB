document.addEventListener("DOMContentLoaded", function() {
 
  const links = document.querySelectorAll('header nav ul li a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;
      if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
      } else {
        
        alert('O formulário foi enviado com sucesso!');
        contactForm.reset();
      }
    });
  }
});
