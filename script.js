
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 32px rgba(99,102,241,0.22)';
      this.style.transform = 'scale(1.12) translateY(-6px)';
    });
    icon.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
      this.style.transform = '';
    });
  });

  document.querySelectorAll('.project-link').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 32px rgba(99,102,241,0.22)';
      this.style.transform = 'scale(1.08) translateY(-4px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
      this.style.transform = '';
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').replace('#', '');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
});
