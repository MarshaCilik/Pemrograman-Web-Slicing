/* =========================================================
   JAVASCRIPT DOM INTERAKTIF (EASY TO LEARN FOR JUNIOR DEV)
   ========================================================= */

// Menunggu seluruh elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

  // 1. DOM SELECTOR (Mengambil elemen dari HTML)
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navbarMenu = document.getElementById('navbarMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  /* =========================================================
     2. HAMBURGER MENU TOGGLE (Khusus HP/Mobile)
     ========================================================= */
  hamburgerBtn.addEventListener('click', function () {
    // Menambah atau menghapus class 'show' pada navbar
    navbarMenu.classList.toggle('show');
  });

  /* =========================================================
     3. SMOOTH SCROLL & TUTUP MENU MOBILE SAAT KONTEN DIKLIK
     ========================================================= */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Sembunyikan navbar jika sedang terbuka di mobile
      navbarMenu.classList.remove('show');

      // Ubah status kelas 'active' pada tombol yang diklik
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* =========================================================
     4. SCROLLSPY (Otomatis memindahkan status menu aktif saat di-scroll)
     ========================================================= */
  window.addEventListener('scroll', function () {
    let currentSection = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });

  /* =========================================================
     5. PENANGANAN FORM KONTAK (DOM Event Handling)
     ========================================================= */
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      // Mencegah formulir melakukan reload halaman
      event.preventDefault();

      // Mengambil nilai input
      const name = document.getElementById('name').value;

      // Menampilkan notifikasi sukses sederhana di DOM
      formStatus.textContent = `Terima kasih, ${name}! Pesan Anda telah berhasil terkirim.`;
      formStatus.classList.add('success');

      // Mengosongkan isian form
      contactForm.reset();

      // Menghilangkan pesan setelah 5 detik
      setTimeout(function () {
        formStatus.classList.remove('success');
      }, 5000);
    });
  }

});