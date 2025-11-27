// Durasi loading (ms)
const LOADER_DURATION = 3500; // 3.5 detik

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const body = document.body;

  body.classList.remove("is-loaded");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("loader--hide");

      setTimeout(() => {
        loader.remove();
      }, 800);
    }

    body.classList.add("is-loaded");
  }, LOADER_DURATION);
});

// ====== BRAND VIEW SWITCHER (ANIMASI BARU) ======
document.addEventListener("DOMContentLoaded", function () {
    const detailView = document.getElementById("detailView");
    const cards = document.querySelectorAll("[data-brand]");
    const panels = document.querySelectorAll("[data-brand-panel]");
    const backButtons = document.querySelectorAll("[data-back-to-overview]");
  
    if (!detailView || !cards.length || !panels.length) return;
  
    function showPanel(brand) {
      // pilih panel yang sesuai brand
      panels.forEach((panel) => {
        panel.classList.toggle("hidden", panel.dataset.brandPanel !== brand);
      });
  
      // tampilkan overlay detail + animasi fade+slide
      detailView.classList.remove("hidden");
  
      // kasih 1 frame dulu supaya transition ke-trigger
      requestAnimationFrame(() => {
        detailView.classList.add("detail-visible");
      });
    }
  
    function hideDetail() {
      // hilangkan animasi (fade out + slide down dikit)
      detailView.classList.remove("detail-visible");
  
      // setelah transition selesai, baru benar-benar disembunyikan
      setTimeout(() => {
        detailView.classList.add("hidden");
      }, 280); // sedikit lebih besar dari 260ms di CSS
    }
  
    // klik kartu → buka detail
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const brand = card.dataset.brand;
        if (!brand) return;
        showPanel(brand);
      });
    });
  
    // semua tombol back → tutup detail
    backButtons.forEach((btn) => {
      btn.addEventListener("click", hideDetail);
    });
  });
  