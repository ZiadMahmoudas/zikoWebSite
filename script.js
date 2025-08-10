
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


let apiUrl = "https://ziaddemo.runasp.net/api/Contact/send";

 const form = document.getElementById('contactForm');
  const resultDiv = document.getElementById('result');
  const resulterror = document.getElementById('result2');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name.length === 0 || name.length > 30) {
resulterror.textContent = "Name is required and must not exceed 30 characters.";
      return;
    }
    if (email.length === 0 || email.length > 50) {
resulterror.textContent = "Email is required and must not exceed 50 characters.";
      return;
    }
    if (message.length === 0 || message.length > 350) {
resulterror.textContent = "Message is required and must not exceed 350 characters.";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      resulterror.textContent = "Please Enter Your Correct Email";
      return;
    }

    const data = { name, email, message };

    try {
      const response = await fetch(apiUrl, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        resultDiv.textContent = "Thanks for Send Me";
        setTimeout(()=>{
          resultDiv.textContent = "";
        },5000)
        form.reset();
      } else {
        const error = await response.json();
 resulterror.textContent = "Server Error: " + (error.details || error.error || response.statusText);      }
    } catch (err) {
      resulterror.textContent = "Error in Server ";
      console.error(err);
    }
  });