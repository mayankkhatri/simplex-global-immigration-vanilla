// JavaScript to handle country data and filtering
document.addEventListener("DOMContentLoaded", function () {
  // Country Data (Name, Continent, Flag Class from flag-icons, and pageLink)
  const countriesData = [
    {
      name: "Australia",
      continent: "oceania",
      flagClass: "fi fi-au",
      pageLink: "/immigrate/australia.html",
    },
    {
      name: "Canada",
      continent: "north-america",
      flagClass: "fi fi-ca",
      pageLink: "/immigrate/canada.html",
    },
    {
      name: "Germany",
      continent: "europe",
      flagClass: "fi fi-de",
      pageLink: "/immigrate/germany.html",
    },
    {
      name: "Sweden",
      continent: "europe",
      flagClass: "fi fi-se",
      pageLink: "/immigrate/sweden.html",
    },
    {
      name: "Austria",
      continent: "europe",
      flagClass: "fi fi-at",
      pageLink: "/immigrate/austria.html",
    },
    {
      name: "Hong Kong",
      continent: "asia",
      flagClass: "fi fi-hk",
      pageLink: "/immigrate/hongkong.html",
    },
    {
      name: "United States",
      continent: "north-america",
      flagClass: "fi fi-us",
      pageLink: "/immigrate/unitedstates.html",
    },
    {
      name: "United Kingdom",
      continent: "europe",
      flagClass: "fi fi-gb",
      pageLink: "/immigrate/unitedkingdom.html",
    },
    {
      name: "Singapore",
      continent: "asia",
      flagClass: "fi fi-sg",
      pageLink: "/immigrate/singapore.html",
    },
    {
      name: "Dubai, UAE",
      continent: "middle-east",
      flagClass: "fi fi-ae",
      pageLink: "/immigrate/dubai.html",
    },
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
        <a href="${country.pageLink}">
          <span class="country-flag"><i class="${country.flagClass}"></i></span>
          <span class="country-name-sort">${country.name}</span>
        </a>
      `;
      countryGrid.appendChild(countryCard);
    });
  }

  // Initial render of all countries
  renderCountries();

  // Event listener for continent filter buttons
  continentFilter.addEventListener("click", function (event) {
    if (event.target.classList.contains("continent-button")) {
      continentButtons.forEach((button) => button.classList.remove("active"));
      event.target.classList.add("active");
      currentContinentFilter = event.target.dataset.continent;
      renderCountries();
    }
  });
});
