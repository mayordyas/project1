// ================= LOADER =================

const LOADER_DURATION = 3500;

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

// ================= BRAND STRIP (3 PANEL INDEX) =================

document.addEventListener("DOMContentLoaded", () => {
  const strip = document.querySelector("[data-brand-strip]");
  const panels = document.querySelectorAll("[data-panel]");

  if (!strip || !panels.length) return;

  function setFlex(activePanel) {

    if (!activePanel) {
      strip.classList.remove("has-active");

      panels.forEach((p) => {
        const logo = p.querySelector(".brand-panel__logo");

        p.classList.remove("brand-panel--active");
        p.style.flex = "1";
        p.style.filter = "none";


        if (logo) {
          logo.style.transform = "scale(1)";
          logo.style.opacity = "1";
        }
      });

      return;
    }


    strip.classList.add("has-active");

    panels.forEach((p) => {
      const logo = p.querySelector(".brand-panel__logo");

      if (p === activePanel) {
        p.classList.add("brand-panel--active");
        p.style.flex = "2.4";
        p.style.filter = "none";

        if (logo) {
          logo.style.transform = "scale(1)";
          logo.style.opacity = "1";
        }
      } else {
    
        p.classList.remove("brand-panel--active");
        p.style.flex = "0.6";
        p.style.filter = "grayscale(0.35) brightness(0.85)";

      
        if (logo) {
          logo.style.transform = "scale(0.5)";
          logo.style.opacity = "0.5";
        }
      }
    });
  }


  setFlex(null);

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      const isActive = panel.classList.contains("brand-panel--active");

      if (isActive) {
        setFlex(null);
      } else {
        setFlex(panel);
      }
    });
  });
});
