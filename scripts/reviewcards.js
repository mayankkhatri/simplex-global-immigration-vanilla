const reviewsData = {
  students: [
    /* ... (same student review data as before) ... */
    {
      text: "I was confused about the admission process for IP University, but this consultancy made everything easy for me. They guided me through every step, from filling out the application to choosing the right college. Thanks to them, I got into my preferred course without any hassle!",
      reviewerName: "Shruti Dagar",
      reviewerCollege: "JIMS, Rohini",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SiIKf19f1BiRklisd2EowMAPAaadnFm-QQ&s",
    },
    {
      text: "Excellent guidance and support! Really helped me understand the options available and make the best decision for my career. Highly recommend!",
      reviewerName: "Ankit Sharma",
      reviewerCollege: "MSIT, Delhi",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiUEz4RGq3KG8CKPA5purU2ZhsBMa7WMwCSKI9I6IzSMz5NwgoTPu4pI3ZlsBmQ1vDwg&usqp=CAU",
    },
    {
      text: "The personalized counseling was incredibly helpful. They took the time to understand my needs and provided tailored advice. Got into the college of my dreams!",
      reviewerName: "Priya Verma",
      reviewerCollege: "BVCOE, Delhi",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnLo8Xm69Ycs74Afa5lqxXRdfYu7b2RzaAQ&s",
    },
    {
      text: "From start to finish, the process was smooth and efficient. The consultants are knowledgeable and supportive. Very happy with their services!",
      reviewerName: "Rohan Kapoor",
      reviewerCollege: "MAIT, Delhi",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cw84uA9RhWljI4tELFLrFkUodzvlnhY2aw&s",
    },
    {
      text: "I am extremely grateful for their help. Navigating college admissions felt overwhelming, but they made it manageable and successful.",
      reviewerName: "Sneha Patel",
      reviewerCollege: "NDIM, Delhi",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmPoeKu_cUrV01BMB48Jrqi_tP-FJiixCRu28ybUKv4cN9ScYnfOw-eEX_q1mvIywHso&usqp=CAU",
    },
    {
      text: "Professional and reliable service. They provided clear information and kept me updated throughout the process. Top-notch counseling!",
      reviewerName: "Vikram Singh",
      reviewerCollege: "IBS, Delhi",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuysbmUir2gK0mILPCHu1ks0HwcLlGqSQdiTyeMpN6wkgYh0Mo0ZGiD45HwzO0qevy7co&usqp=CAU",
    },
    {
      text: "Their expertise in IP University admissions is unmatched. They know the criteria and processes inside out. Made my application stand out!",
      reviewerName: "Kavita Joshi",
      reviewerCollege: "Vivekananda Institute of Professional Studies",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQh2swSTTcYEbjbx1VhG5N_smOka3rlDIT_YfRPhKV3h4DbmdqSB1077ykiJXdiBs7p4&usqp=CAU",
    },
    {
      text: "The 30-minute free consultation was very informative and convinced me to use their services. Best decision I made for my college admission journey!",
      reviewerName: "Deepak Kumar",
      reviewerCollege: "Fairfield Institute of Management and Technology",
      reviewerImage:
        "https://img.freepik.com/free-photo/indian-man-student-shirt-posed-outdoor_627829-2276.jpg?semt=ais_hybrid",
    },
    {
      text: "They helped me shortlist colleges that were perfect for my profile and aspirations. Their strategic approach made all the difference.",
      reviewerName: "Neha Gupta",
      reviewerCollege: "Unitedworld School of Business, Delhi",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQE7HTevRsAhwzoPpnIjH2YO2WDiPHa33KtPUTi_9HLqETYr7jkh5PkDZp4iv_5_r2Svw&usqp=CAU",
    },
    {
      text: "The transparent comparison report was incredibly useful. It helped me weigh the pros and cons and make an informed choice. Thank you!",
      reviewerName: "Siddharth Menon",
      reviewerCollege: "Jagannath International Management School",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzo-w0xAVpEi1PohHT_GiyArt6eotsE0bbgRGKnch_Q_Hob1Gxd3_EuHkGOgPKGpEKY4&usqp=CAU",
    },
  ],
  parents: [
    /* ... (same parent review data as before) ... */
    {
      text: "As parents, we were very anxious about our child's college admission. Admission Hunt provided us with reassurance and expert guidance. Our son got into a great college, and we couldn't be happier.",
      reviewerName: "Mr. & Mrs. Sharma",
      reviewerImage: "https://placehold.co/400x400?text=S",
    },
    {
      text: "Impressed with their professionalism and personal touch. They kept us informed at every stage and made the complex process seem simple.",
      reviewerName: "Mrs. Kapoor",
      reviewerImage: "https://placehold.co/400x400?text=K",
    },
    {
      text: "Their support was invaluable. They understood our concerns and provided solutions that worked for our family. Highly recommended for any parent.",
      reviewerName: "Mr. Patel",
      reviewerImage: "https://placehold.co/400x400?text=P",
    },
    {
      text: "We appreciate the time and effort they put into understanding our child's needs and finding the right fit. Excellent service!",
      reviewerName: "Mrs. Singh",
      reviewerImage: "https://placehold.co/400x400?text=S",
    },
    {
      text: "The team was very responsive and helpful. They answered all our questions and addressed all our concerns promptly.",
      reviewerName: "Mr. & Mrs. Joshi",
      reviewerImage: "https://placehold.co/400x400?text=J",
    },
    {
      text: "From consultation to admission, everything was handled with utmost care and efficiency. Thank you for making this journey stress-free for us.",
      reviewerName: "Mrs. Kumar",
      reviewerImage: "https://placehold.co/400x400?text=K",
    },
  ],
  corporate: [
    /* ... (same corporate review data as before) ... */
    {
      text: "We have been partnering with Admission Hunt for our employee education programs. Their counseling services have been exceptional, helping our employees pursue higher education seamlessly.",
      reviewerName: "Tech Solutions Inc.",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzU569dapDm3f74DiG2mBYlYwPQvwvdROLg&s",
    },
    {
      text: "Their understanding of the education sector and commitment to student success aligns with our corporate values. A valuable partner for employee development.",
      reviewerName: "Global Corp",
      reviewerImage:
        "https://img.freepik.com/free-vector/global-corporation-logo_1043-184.jpg",
    },
    {
      text: "Admission Hunt has been instrumental in facilitating further education for our workforce. Their services are professional, efficient, and highly effective.",
      reviewerName: "Innovate Systems",
      reviewerImage:
        "https://img.freepik.com/free-vector/innovation-education-logo-template-vector-with-atom-science-graphic_53876-125986.jpg",
    },
    {
      text: "We highly value our partnership with Admission Hunt. They have consistently provided excellent support and guidance to our employees seeking academic advancement.",
      reviewerName: "Future Forward Ltd.",
      reviewerImage:
        "https://static.vecteezy.com/system/resources/thumbnails/005/883/807/small/letter-e-software-digital-tech-logo-free-vector.jpg",
    },
    {
      text: "Their expertise in educational counseling has greatly benefited our corporate training initiatives. A reliable and trustworthy partner.",
      reviewerName: "Pioneer Group",
      reviewerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7unJm0gyoX5BGdKI6i0_KaghBFysJ1zpqg&s",
    },
  ],
};

let swiperInstance = null; // Store Swiper instance

function showReviews(category) {
  // Update active button style
  document.querySelectorAll(".review-category-button").forEach((button) => {
    button.classList.remove("active");
  });
  document
    .querySelector(
      `.review-category-button[onclick="showReviews('${category}')"]`
    )
    .classList.add("active");

  const carousel = document.getElementById("reviewsCarousel");
  carousel.innerHTML = ""; // Clear existing reviews

  const selectedReviews = reviewsData[category];

  if (selectedReviews) {
    selectedReviews.forEach((review) => {
      const reviewCard = document.createElement("div");
      reviewCard.className = "swiper-slide"; // Use swiper-slide class
      reviewCard.innerHTML = `
                  <p class="review-text">${review.text}</p>
                  <div class="reviewer-info">
                      <div class="reviewer-image-placeholder">
                          <img src="${
                            review.reviewerImage || "placeholder-profile.svg"
                          }" alt="${review.reviewerName} Profile">
                      </div>
                      <div class="reviewer-details">
                          <p class="reviewer-name">${review.reviewerName}</p>
                          ${
                            category === "students"
                              ? `<p class="reviewer-college">${review.reviewerCollege}</p>`
                              : category === "parents"
                              ? ""
                              : `<p class="reviewer-company">${review.reviewerName}</p>`
                          }
                      </div>
                  </div>
              `;
      carousel.appendChild(reviewCard);
    });
  } else {
    carousel.innerHTML = "<p>No reviews available for this category.</p>";
  }

  // Initialize or re-initialize Swiper
  if (swiperInstance) {
    swiperInstance.destroy();
    swiperInstance = null;
  }

  swiperInstance = new Swiper("#reviewsSwiper", {
    slidesPerView: "auto", // Enable auto slidesPerView
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  });
}

// Load student reviews by default on page load
document.addEventListener("DOMContentLoaded", () => {
  showReviews("students");
});
