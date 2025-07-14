// === POPUP PROFIL ===
window.addEventListener("load", function () {
  if (!localStorage.getItem("hkmtPopupShown")) {
    setTimeout(() => {
      document.getElementById("popup-profil").style.display = "flex";
      localStorage.setItem("hkmtPopupShown", "true");
    }, 1000);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn-profil")?.addEventListener("click", () => {
    document.getElementById("popup-profil").style.display = "flex";
  });

  document.getElementById("popup-close")?.addEventListener("click", () => {
    document.getElementById("popup-profil").style.display = "none";
  });

  document.querySelector(".btn-information")?.addEventListener("click", () => {
    alert("Ini adalah media pembelajaran interaktif untuk siswa kelas 5 SD");
  });

  // Musik
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

  setInterval(() => {
    if (!musik.paused) {
      localStorage.setItem('musikTime', musik.currentTime.toString());
    }
  }, 1000);

  // Navigasi Halaman
  document.querySelector(".btn-numerasi")?.addEventListener("click", () => {
    window.location.href = "numerasi.html";
  });

  document.querySelector(".btn-literasi")?.addEventListener("click", () => {
    window.location.href = "literasi.html";
  });

  document.getElementById("reset-nama-btn")?.addEventListener("click", () => {
    if (confirm("Yakin ingin mengganti nama pengguna?")) {
      localStorage.removeItem("nama_pengguna");
      location.reload();
    }
  });

  document.getElementById("reset-nama-btn-mobile")?.addEventListener("click", () => {
    if (confirm("Yakin ingin mengganti nama pengguna?")) {
      localStorage.removeItem("nama_pengguna");
      location.reload();
    }
  });

  // === HAMBURGER MENU ===
  const hamburger = document.getElementById('hamburger');
  const dropdownMenu = document.getElementById('dropdown-menu');

  hamburger?.addEventListener('click', () => {
    const isVisible = dropdownMenu.style.display === 'flex';
    dropdownMenu.style.display = isVisible ? 'none' : 'flex';
  });

  // Tutup menu saat salah satu item di dropdown diklik
  const dropdownItems = dropdownMenu.querySelectorAll('img, button');
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      dropdownMenu.style.display = 'none';
    });
  });

  // Tutup dropdown menu saat resize ke desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      dropdownMenu.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const dropdown = document.getElementById("dropdown-menu");

  hamburger.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  });

  // Tutup dropdown jika salah satu menu diklik
  dropdown.querySelectorAll("img").forEach(btn => {
    btn.addEventListener("click", () => {
      dropdown.style.display = "none";
    });
  });

  // Tampilkan nama pengguna dari localStorage
  const nama = localStorage.getItem("namaPengguna") || "Pengguna";
  document.getElementById("displayNamaPengguna").innerText = nama;

  // Ganti nama
  document.getElementById("reset-nama-btn-mobile")?.addEventListener("click", () => {
    if (confirm("Ingin ganti nama pengguna?")) {
      localStorage.removeItem("namaPengguna");
      location.reload();
    }
  });

  document.getElementById("reset-nama-btn")?.addEventListener("click", () => {
    if (confirm("Ingin ganti nama pengguna?")) {
      localStorage.removeItem("namaPengguna");
      location.reload();
    }
  });
});
