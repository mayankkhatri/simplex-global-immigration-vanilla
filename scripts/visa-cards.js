document.addEventListener("DOMContentLoaded", function () {
  const flickityCarousel = document.querySelector(".visa-flickity-carousel");
  const flkty = new Flickity(flickityCarousel); // Initialize with JS if needed, but data-flickity attr is used now

  // Card Hover Persistence Logic
  const visaCards = document.querySelectorAll(".visa-card");
  let lastHoveredCard = null;

  visaCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (lastHoveredCard && lastHoveredCard !== card) {
        lastHoveredCard.classList.remove("card-hovered");
      }
      card.classList.add("card-hovered");
      lastHoveredCard = card;
    });
  });

  document.addEventListener("mouseleave", (event) => {
    if (lastHoveredCard && !event.relatedTarget?.closest(".visa-card")) {
      // Do not remove class, keep the hover effect persistent.
    }
  });
});
