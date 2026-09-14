const NAMA = "Tesalonika Miracle Makalew";
const NIM = "825250020";

const cardArea = document.getElementById("cardArea");

document.getElementById("btnBuat").addEventListener("click", function () {
    cardArea.innerHTML = `
        <div class="id-card">
            <div class="label">NAMA</div>
            <div class="name">${NAMA}</div>
            <div class="label">NIM</div>
            <div class="nim">${NIM}</div>
        </div>
    `;
});

document.getElementById("btnHapus").addEventListener("click", function () {
  cardArea.innerHTML = `<span class="placeholder">// belum ada kartu //</span>`;
});