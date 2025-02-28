// --- Initialize Swiper ---
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Default to 1 slide for mobile
  spaceBetween: 10,
  loop: false, // Disable loop
  centeredSlides: true, // Center slides for mobile
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "swiper-button-disabled", // Class to style disabled buttons
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // 3 slides for desktop - Reverted to 3 slides
      spaceBetween: 30,
      centeredSlides: false, // Disable center slide for desktop
    },
  },
});

// --- Video Autoplay and Mute Control ---
const videoContainers = document.querySelectorAll(".video-container");
let currentlyUnmutedVideo = null; // Track the currently unmuted video

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector("video");
      const unmuteButton = entry.target.querySelector(".unmute-button");

      if (entry.isIntersecting) {
        video.play().catch((error) => {
          // Autoplay was prevented. May happen in some browsers/settings.
          console.log("Autoplay prevented:", error);
        });
        if (video.muted) {
          // Only show unmute button if video starts muted
          unmuteButton.style.display = "flex";
        } else {
          unmuteButton.style.display = "none";
        }
      } else {
        video.pause();
        unmuteButton.style.display = "none"; // Hide unmute button when not in view
        if (video !== currentlyUnmutedVideo) {
          video.muted = true; // Mute when out of view unless it's the currently unmuted one
        }
      }
    });
  },
  {
    threshold: 0.6, // Trigger when 60% of video is visible
  }
);

videoContainers.forEach((container) => {
  observer.observe(container);
});

// --- Unmute Button Functionality ---
videoContainers.forEach((container) => {
  const video = container.querySelector("video");
  const unmuteButton = container.querySelector(".unmute-button");

  unmuteButton.addEventListener("click", () => {
    if (currentlyUnmutedVideo && currentlyUnmutedVideo !== video) {
      currentlyUnmutedVideo.muted = true; // Mute previously unmuted video
      const prevUnmuteButton =
        currentlyUnmutedVideo.parentElement.querySelector(".unmute-button");
      if (prevUnmuteButton) {
        prevUnmuteButton.innerHTML =
          '<i class="fas fa-volume-mute"></i> <span>Tap to unmute</span>'; // Reset unmute button text
      }
    }

    video.muted = false;
    currentlyUnmutedVideo = video; // Update currently unmuted video
    unmuteButton.style.display = "none"; // Hide unmute button after clicking

    unmuteButton.innerHTML =
      '<i class="fas fa-volume-up"></i> <span>Muted</span>'; // Change text to show it's muted for current video, but it might be misleading in this case. Better to just hide it.

    // Hide unmute button for current video after unmuting, no need to change text and keep it.
    unmuteButton.style.display = "none";
  });

  video.addEventListener("play", () => {
    if (video.muted) {
      unmuteButton.style.display = "flex";
    } else {
      unmuteButton.style.display = "none";
    }
  });
  video.addEventListener("pause", () => {
    unmuteButton.style.display = "none"; // Hide on pause as well.
  });
});
