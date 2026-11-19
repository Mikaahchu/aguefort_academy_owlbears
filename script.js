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

  const fullname = params.get("full-name") || "New Player";
  const year = params.get("class-year") || "Freshman";
  const experience = params.get("experience") || "Beginner";
  const position = params.get("position") || "Striker";
  const strength = params.get("strength") || "3";
  const speed = params.get("speed") || "3";

  const strengthLabels = ["Imp", "Beholder", "Bugbear", "Ogre", "Tarrasque"];
  const speedLabels = [
    "Zombie",
    "Goblin",
    "Hill Giant",
    "Dire Wolf",
    "Quickling",
  ];

  const motivation =
    params.get("application-message") || "Ready to prove myself on the field!";

  //navn på jersey
  document.querySelector("#jersey-name").textContent = fullname;

  //oplysninger i player profile
  document.querySelector("#player-name").textContent = fullname;
  document.querySelector("#player-year").textContent = year;
  document.querySelector("#player-experience").textContent = experience;
  document.querySelector("#player-position").textContent = position;

  document.querySelector("#player-strength").textContent =
    strengthLabels[strength - 1];
  document.querySelector("#player-speed").textContent = speedLabels[speed - 1];

  document.querySelector("#player-team").textContent = "Aguefort Owlbears";
  document.querySelector("#player-motivation").textContent = motivation;

  const jersey = document.querySelector("#player-jersey");

  const jerseyYear = year.toLowerCase();
  let jerseyPosition = position.toLowerCase();

  const years = ["freshman", "sophomore", "junior", "senior"];

  const positions = ["captain", "striker", "guardian", "tactician", "runner"];

  if (jerseyPosition === "flexible") {
    jerseyPosition = "striker";
  }

  if (years.includes(jerseyYear) && positions.includes(jerseyPosition)) {
    jersey.src =
      "./svg/svg_jersey/" + jerseyYear + "_" + jerseyPosition + ".svg";
  } else {
    jersey.src = "./svg/svg_jersey/freshman_striker.svg";
  }

  //billedets alt text
  jersey.alt = fullname + "'s Bloodrush jersey";

  //spiller farve
  document.querySelector(".player-kit").dataset.position = jerseyPosition;
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
