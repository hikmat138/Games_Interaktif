// === POPUP PROFIL SAAT PERTAMA KALI ===
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("hkmtPopupShown")) {
    setTimeout(() => {
      const popup = document.getElementById("popup-profil");
      if (popup) {
        popup.style.display = "flex";
        localStorage.setItem("hkmtPopupShown", "true");
      }
    }, 1000);
  }

  // === TOMBOL PROFIL ===
  document.querySelector(".btn-profil")?.addEventListener("click", () => {
    document.getElementById("popup-profil").style.display = "flex";
  });

  document.getElementById("popup-close")?.addEventListener("click", () => {
    document.getElementById("popup-profil").style.display = "none";
  });

  // === INFORMASI APP ===
  document.querySelector(".btn-information")?.addEventListener("click", () => {
    alert("Ini adalah media pembelajaran interaktif untuk siswa kelas 5 SD.");
  });

  // === PLAY & PAUSE MUSIK ===
  const musik = new Audio('media/musik.mp3');
  musik.loop = true;

  const paused = localStorage.getItem('musikPaused') === 'true';
  const lastTime = parseFloat(localStorage.getItem('musikTime')) || 0;
  musik.currentTime = lastTime;

  if (!paused) musik.play();

  document.querySelector('.btn-play')?.addEventListener('click', () => {
    musik.play();
    localStorage.setItem('musikPaused', 'false');
  });

  document.querySelector('.btn-mute')?.addEventListener('click', () => {
    musik.pause();
    localStorage.setItem('musikPaused', 'true');
  });

  // Simpan posisi musik terakhir setiap detik
  setInterval(() => {
    if (!musik.paused) {
      localStorage.setItem('musikTime', musik.currentTime.toString());
    }
  }, 1000);

  // === NAVIGASI KE NUMERASI & LITERASI ===
  document.querySelector(".btn-numerasi")?.addEventListener("click", () => {
    window.location.href = "numerasi.html";
  });

  document.querySelector(".btn-literasi")?.addEventListener("click", () => {
    window.location.href = "literasi.html";
  });

  // === RESET NAMA PENGGUNA ===
  document.getElementById("reset-nama-btn")?.addEventListener("click", () => {
    if (confirm("Yakin ingin mengganti nama pengguna?")) {
      localStorage.removeItem("nama_pengguna");
      location.reload();
    }
  });

  // === TOGGLE HAMBURGER MENU (UNTUK MOBILE) ===
  const hamburgerBtn = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
