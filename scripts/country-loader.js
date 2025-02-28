// JavaScript to handle country data and filtering
document.addEventListener("DOMContentLoaded", function () {
  // Country Data (Name, Continent, Flag Class from flag-icons)
  const countriesData = [
    { name: "Australia", continent: "oceania", flagClass: "fi fi-au" },
    { name: "Canada", continent: "north-america", flagClass: "fi fi-ca" },
    { name: "Germany", continent: "europe", flagClass: "fi fi-de" },
    { name: "Sweden", continent: "europe", flagClass: "fi fi-se" },
    { name: "Austria", continent: "europe", flagClass: "fi fi-at" },
    { name: "Hong Kong", continent: "asia", flagClass: "fi fi-hk" },
    {
      name: "United States",
      continent: "north-america",
      flagClass: "fi fi-us",
    },
    {
      name: "United Kingdom",
      continent: "europe",
      flagClass: "fi fi-gb",
    },
    { name: "Singapore", continent: "asia", flagClass: "fi fi-sg" },
    {
      name: "Dubai, UAE",
      continent: "middle-east",
      flagClass: "fi fi-ae",
    }, // Dubai is in UAE
  ];

  const countryGrid = document.getElementById("countryGrid");
  const continentFilter = document.getElementById("continentFilter");
  const continentButtons =
    continentFilter.querySelectorAll(".continent-button");

  let currentContinentFilter = "all";

  // Function to render countries based on filter
  function renderCountries() {
    countryGrid.innerHTML = ""; // Clear existing countries
    const filteredCountries = countriesData.filter((country) => {
      return (
        currentContinentFilter === "all" ||
        country.continent === currentContinentFilter
      );
    });

    filteredCountries.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("country-card");
      countryCard.innerHTML = `
                    <span class="country-flag"><i class="${country.flagClass}"></i></span>
                    <span class="country-name-sort">${country.name}</span>
                `;
      countryGrid.appendChild(countryCard);
    });
  }

  // Initial render of all countries
  renderCountries();

  // Event listener for continent filter buttons
  continentFilter.addEventListener("click", function (event) {
    if (event.target.classList.contains("continent-button")) {
      continentButtons.forEach((button) => button.classList.remove("active")); // Remove active class from all buttons
      event.target.classList.add("active"); // Add active class to clicked button
      currentContinentFilter = event.target.dataset.continent;
      renderCountries(); // Re-render countries based on new filter
    }
  });
});
