document.addEventListener("DOMContentLoaded", function () {
  const popupNama = document.getElementById("popup-nama");
  const inputNama = document.getElementById("input-nama");
  const btnSimpan = document.getElementById("btn-simpan-nama");

  // Cek apakah nama pengguna sudah tersimpan di localStorage
  const namaTersimpan = localStorage.getItem("nama_pengguna");

  if (namaTersimpan) {
    tampilkanNama(namaTersimpan);       // Tampilkan nama ke badge di HTML
    popupNama.style.display = "none";   // Jangan tampilkan popup nama
  } else {
    popupNama.style.display = "flex";   // Tampilkan popup jika belum ada nama
  }

  // Ketika tombol "Mulai" / "Mulai Belajar" ditekan
  btnSimpan.addEventListener("click", function () {
    const nama = inputNama.value.trim();
    if (nama !== "") {
      localStorage.setItem("nama_pengguna", nama);
      tampilkanNama(nama);
      popupNama.style.display = "none";
    } else {
      alert("Nama tidak boleh kosong!");
    }
  });

  // Fungsi menampilkan nama pengguna langsung ke dalam badge sambutan di HTML
  function tampilkanNama(nama) {
    const namaLabel = document.getElementById("nama-user-label");
    if (namaLabel) {
      namaLabel.textContent = nama;
    }
  }
});
