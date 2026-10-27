// ==========================================
// 1. POPUP PROFIL PEMBUAT
// ==========================================
window.addEventListener("load", function() {
  const popupProfil = document.getElementById("popup-profil");
  
  // Munculkan otomatis hanya saat pertama kali dibuka di browser
  if (!localStorage.getItem("hkmtPopupShown")) {
    setTimeout(() => {
      if (popupProfil) popupProfil.style.display = "flex";
      localStorage.setItem("hkmtPopupShown", "true");
    }, 1000);
  }

  // Tombol profil di header untuk membuka popup kapan saja
  document.querySelector(".btn-profil")?.addEventListener("click", () => {
    if (popupProfil) popupProfil.style.display = "flex";
  });

  // Tombol tutup popup
  document.getElementById("popup-close")?.addEventListener("click", () => {
    if (popupProfil) popupProfil.style.display = "none";
  });
});


// ==========================================
// 2. TOMBOL INFORMASI GAME
// ==========================================
document.querySelector(".btn-information")?.addEventListener("click", () => {
  alert("✨ Media Pembelajaran Interaktif ini dirancang khusus untuk membantu murid belajar matematika dengan cara yang seru, asyik, dan menyenangkan!");
});


// ==========================================
// 3. PENGATURAN MUSIK LATAR (AUDIO)
// ==========================================
const musik = new Audio('media/musik.mp3');
musik.loop = true;

// Ambil status musik dari localStorage
const paused = localStorage.getItem('musikPaused') === 'true';
const lastTime = parseFloat(localStorage.getItem('musikTime')) || 0;

musik.currentTime = lastTime; // Lanjut dari waktu terakhir

if (!paused) {
  musik.play().catch(error => {
    console.log("Autoplay dicegah oleh browser, menunggu interaksi pengguna.");
  });
}

// Tombol Play Musik
document.querySelector('.btn-play')?.addEventListener('click', () => {
  musik.play();
  localStorage.setItem('musikPaused', 'false');
});

// Tombol Mute / Jeda Musik
document.querySelector('.btn-mute')?.addEventListener('click', () => {
  musik.pause();
  localStorage.setItem('musikPaused', 'true');
});

// Update posisi waktu musik setiap detik ke localStorage
setInterval(() => {
  if (!musik.paused) {
    localStorage.setItem('musikTime', musik.currentTime.toString());
  }
}, 1000);


// ==========================================
// 4. NAVIGASI MENU GAME & RESET NAMA
// ==========================================

// Arahkan ke halaman numerasi saat kartu/tombol game diklik
const numerasiButton = document.querySelector(".btn-numerasi");
numerasiButton?.addEventListener("click", () => {
  window.location.href = "numerasi.html";
});

// Tombol Reset / Ganti Nama Pengguna
document.getElementById("reset-nama-btn")?.addEventListener("click", () => {
  if (confirm("Yakin ingin mengganti nama pengguna?")) {
    localStorage.removeItem("nama_pengguna");
    location.reload(); // Muat ulang halaman agar kotak input nama muncul kembali
  }
});
