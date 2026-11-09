// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");
if (svgPlaceholder) {
  const bloodrushSvg = document.querySelector(".bloodrush-svg");
  const accordions = document.querySelectorAll(".accordion-item");
  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", updateSvgPosition);
  });
  function updateSvgPosition() {
    const openDetails = document.querySelector(".accordion-item[open]");
    if (openDetails) {
      bloodrushSvg.dataset.position = openDetails.dataset.position;
    } else {
      delete bloodrushSvg.dataset.position;
    }
  }
  updateSvgPosition();
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
