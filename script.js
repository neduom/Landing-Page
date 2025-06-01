function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const visible = 150;

    if (elementTop < windowHeight - visible) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const visible = 150;

    if (elementTop < windowHeight - visible) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);

const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
  this.reset();
});
