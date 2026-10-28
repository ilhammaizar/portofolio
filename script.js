const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const gmailCompose = document.querySelector('[data-gmail-compose]');
if (gmailCompose && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  gmailCompose.href = 'mailto:ilham.maizar2506@gmail.com';
}
