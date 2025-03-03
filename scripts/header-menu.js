document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav");
  const dropdown = document.querySelector(".dropdown"); // Select the dropdown container

  hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active"); // Optional: for hamburger icon animation if you want to add later

    // Close dropdown if open when hamburger is clicked (optional)
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    }
  });

  // Handle dropdown click/tap on mobile (optional - if you want to make dropdown toggle on click on mobile)
  if (window.innerWidth <= 768) {
    // Check if on mobile (same breakpoint as CSS)
    const servicesLink = document.querySelector(".services-link");
    servicesLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      dropdown.classList.toggle("active"); // Toggle active class on dropdown for mobile
    });
  }

  // Close navigation menu when clicking outside on mobile (optional)
  document.addEventListener("click", function (event) {
    const isClickInsideNav =
      navMenu.contains(event.target) || hamburgerMenu.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburgerMenu.classList.remove("active"); // If you added active class for hamburger icon
    }
  });
});
