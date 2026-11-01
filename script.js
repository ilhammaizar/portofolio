// Pilih elemen yang akan muncul dengan animasi saat masuk ke area pandang.
const revealElements = document.querySelectorAll('.reveal');

// Amati posisi elemen agar animasi hanya berjalan ketika elemen terlihat.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Kelas visible memicu animasi CSS, lalu elemen berhenti diamati.
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

// Daftarkan setiap elemen yang memakai efek kemunculan.
revealElements.forEach((element) => revealObserver.observe(element));

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('#primary-navigation');

if (navToggle && navMenu) {
  const setNavOpen = (isOpen) => {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Tutup navigasi' : 'Buka navigasi'
    );
    navMenu.classList.toggle('is-open', isOpen);
  };

  navToggle.addEventListener('click', () => {
    setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setNavOpen(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      setNavOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setNavOpen(false);
    }
  });

  window.matchMedia('(min-width: 901px)').addEventListener('change', () => {
    setNavOpen(false);
  });
}

// Di perangkat seluler, buka aplikasi email melalui tautan mailto.
const gmailCompose = document.querySelector('[data-gmail-compose]');
if (gmailCompose && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  gmailCompose.href = 'mailto:ilham.maizar2506@gmail.com';
}
