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

  const fullname = params.get("fullname") || "New Player";
  const year = params.get("year") || "Freshman";
  const experience = params.get("experience") || "Beginner";
  const position = params.get("position") || "Striker";
  const strength = params.get("strength") || "5";
  const speed = params.get("speed") || "5";
  const team = params.get("team") || "Owlbears";
  const motivation =
    params.get("motivation") || "Ready to prove myself on the field!";

  document.querySelector("#player-name").textContent = fullname;
  document.querySelector("#jersey-name").textContent = fullname;

  document.querySelector("#player-year").textContent = year;
  document.querySelector("#player-experience").textContent = experience;
  document.querySelector("#player-position").textContent = position;
  document.querySelector("#player-strength").textContent = strength + "/10";
  document.querySelector("#player-speed").textContent = speed + "/10";
  document.querySelector("#player-motivation").textContent = motivation;

  if (team === "owlbears") {
    document.querySelector("#player-team").textContent = "Aguefort Owlbears";
  } else {
    document.querySelector("#player-team").textContent = "Other team";
  }

  const jersey = document.querySelector("#player-jersey");

  const years = ["freshman", "sophomore", "junior", "senior"];
  const positions = ["captain", "striker", "guardian", "tactician", "runner"];

  if (years.includes(year) && positions.includes(position)) {
    jersey.src = "/svg/svg_jersey/" + year + "_" + position + ".svg";
  } else {
    jersey.src = "/svg/svg_jersey/freshman_striker.svg";
  }

  jersey.alt = fullname + "'s Bloodrush jersey";

  document.querySelector(".player-kit").dataset.position = position;
}
