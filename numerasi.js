// ==========================================
// 1. POPUP PROFIL PEMBUAT
// ==========================================
window.addEventListener("load", function () {
  const popupProfil = document.getElementById("popup-profil");

  // Logika popup profil muncul otomatis saat pertama kali dibuka
  if (!localStorage.getItem("hkmtPopupShown")) {
    setTimeout(() => {
      if (popupProfil) {
        popupProfil.style.display = "flex";
        popupProfil.classList.add("active");
      }
      localStorage.setItem("hkmtPopupShown", "true");
    }, 1000);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const popupProfil = document.getElementById("popup-profil");

  // Tombol profil di header untuk membuka kembali popup
  document.querySelector(".btn-profil")?.addEventListener("click", () => {
    if (popupProfil) {
      popupProfil.style.display = "flex";
      popupProfil.classList.add("active");
    }
  });

  // Tombol tutup popup profil
  document.getElementById("popup-close")?.addEventListener("click", () => {
    if (popupProfil) {
      popupProfil.style.display = "none";
      popupProfil.classList.remove("active");
    }
  });

  // ==========================================
  // 2. AKTIFKAN LEVEL YANG SUDAH DISELESAIKAN
  // ==========================================
  for (let i = 2; i <= 7; i++) {
    if (localStorage.getItem(`level${i - 1}_numerasi_selesai`) === 'true') {
      const btn = document.querySelector(`.level-btn[data-level="${i}"]`);
      if (btn) btn.classList.remove('disabled');
    }
  }

  // ==========================================
  // 3. EVENT LISTENER KLIK TOMBOL LEVEL
  // ==========================================
  document.querySelectorAll(".level-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("disabled")) {
        alert("Selesaikan level sebelumnya dulu ya! Semangat! 🚀");
        return;
      }

      const level = btn.dataset.level;
      window.location.href = `level${level}_numerasi.html`;
    });
  });
});

// ==========================================
// 4. INFORMASI APLIKASI / GAME
// ==========================================
document.querySelector(".btn-information")?.addEventListener("click", () => {
  alert("✨ Media Pembelajaran Interaktif ini dirancang khusus untuk murid sekolah dasar agar belajar perkalian jadi lebih seru, asyik, dan menyenangkan!");
});
