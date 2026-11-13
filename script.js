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

// Forms
const applicationForm = document.querySelector(".form-placeholder");

if (applicationForm) {
  const positions = applicationForm.querySelectorAll('input[name="position"]');

  const positionError = document.querySelector("#position-error");

  function validatePositions() {
    const isChecked = [...positions].some((position) => position.checked);

    positions[0].setCustomValidity(
      isChecked ? "" : "Please choose at least one position.",
    );

    positionError.style.display = isChecked ? "none" : "block";
  }

  // Kontrollerer valget
  if (positions.length > 0) {
    positions[0].setCustomValidity("Please choose at least one position.");

    // Kontrollerer ændring af valg
    positions.forEach((position) => {
      position.addEventListener("change", validatePositions);
    });
  }
}
