document.addEventListener("DOMContentLoaded", function () {
  const countrySlideTrack = document.getElementById("countrySlideTrack");
  const countries = [
    "Luxembourg",
    "Italy",
    "Ireland",
    "Iceland",
    "Hungary",
    "Greece",
    "Germany",
    "France",
    "Australia",
    "Denmark",
    "Belgium",
    "Canada",
  ];
  const separatorImageURL =
    "https://i.postimg.cc/dtgRY6HK/Untitled-design-3.png";
  let sliderContent = "";

  // Function to create country slide HTML
  function createCountrySlideHTML(countryName) {
    return `
              <div class="slide">
                  <div class="country-name">
                      ${countryName}
                      <img src="${separatorImageURL}" alt="*" class="country-separator">
                  </div>
              </div>
          `;
  }

  // Build slider content - Duplicate countries for seamless loop
  let duplicatedCountries = [];
  for (let i = 0; i < 4; i++) {
    // Duplicate 4 times - adjust as needed for length and smoothness
    duplicatedCountries = duplicatedCountries.concat(countries);
  }

  duplicatedCountries.forEach((country) => {
    sliderContent += createCountrySlideHTML(country);
  });
  countrySlideTrack.innerHTML = sliderContent;

  // Adjust animation speed based on content width (optional, for more consistent speed)
  const slideTrack = document.querySelector(".slide-track");
  const animationSpeed = 40; // Base speed
  const trackWidth = slideTrack.offsetWidth;
  const baseTrackWidth = 250 * 14; // Approximate base width from original example, adjust if needed
  const speedRatio = trackWidth / baseTrackWidth;
  const adjustedAnimationSpeed = animationSpeed * speedRatio;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-${trackWidth}px)); } } .slide-track { animation-duration: ${adjustedAnimationSpeed}s; }`;
  document.head.appendChild(styleSheet);
});
