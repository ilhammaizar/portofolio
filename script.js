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

// Di perangkat seluler, buka aplikasi email melalui tautan mailto.
const gmailCompose = document.querySelector('[data-gmail-compose]');
if (gmailCompose && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  gmailCompose.href = 'mailto:ilham.maizar2506@gmail.com';
}
