// // Get carousel elements
// const carousel = document.getElementById("default-carousel");
// const carouselItems = carousel.querySelectorAll("[data-carousel-item]");
// const carouselIndicators = carousel.querySelectorAll(
//   "[data-carousel-slide-to]"
// );
// const prevButton = carousel.querySelector("[data-carousel-prev]");
// const nextButton = carousel.querySelector("[data-carousel-next]");

// // Set initial active slide
// let activeSlide = 0;

// // Function to show the active slide and update indicators
// function showActiveSlide() {
//   carouselItems.forEach((item, index) => {
//     if (index === activeSlide) {
//       item.classList.remove("hidden");
//     } else {
//       item.classList.add("hidden");
//     }
//   });

//   carouselIndicators.forEach((indicator, index) => {
//     if (index === activeSlide) {
//       indicator.setAttribute("aria-current", "true");
//     } else {
//       indicator.setAttribute("aria-current", "false");
//     }
//   });
// }

// // Function to handle next slide
// function nextSlide() {
//   activeSlide = (activeSlide + 1) % carouselItems.length;
//   showActiveSlide();
// }

// // Function to handle previous slide
// function prevSlide() {
//   activeSlide = (activeSlide - 1 + carouselItems.length) % carouselItems.length;
//   showActiveSlide();
// }

// // Function to start auto sliding
// function startAutoSlide() {
//   setInterval(nextSlide, 5000);
// }

// // Add event listeners to buttons
// prevButton.addEventListener("click", prevSlide);
// nextButton.addEventListener("click", nextSlide);

// // Add event listeners to indicators
// carouselIndicators.forEach((indicator, index) => {
//   indicator.addEventListener("click", () => {
//     activeSlide = index;
//     showActiveSlide();
//   });
// });

// // Initialize the slider and start auto sliding
// showActiveSlide();
// startAutoSlide();

//nav handler
function navHandler(e) {
  let list = document.querySelector("ul");
  console.log(list);
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.remove("top-[-300px]"),
      list.classList.remove("opacity-0"))
    : ((e.name = "menu"),
      list.classList.add("top-[-300px]"),
      list.classList.add("opacity-0"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

// Heading script
const list = document.querySelector(".nav-links");
// console.log(list);
function onToggleMenu(e) {
  console.log(e);
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

// // Show less or more starts
// const paragraph1 = document.getElementById("paragraph1");
// const moreBtn1 = document.getElementById("moreBtn1");

// moreBtn1.addEventListener("click", function () {
//   if (paragraph1.classList.contains("truncate-lines")) {
//     paragraph1.classList.remove("truncate-lines");
//     moreBtn1.textContent = "Less";
//   } else {
//     paragraph1.classList.add("truncate-lines");
//     moreBtn1.textContent = "More";
//   }
// });

// const paragraph2 = document.getElementById("paragraph2");
// const moreBtn2 = document.getElementById("moreBtn2");

// moreBtn2.addEventListener("click", function () {
//   if (paragraph2.classList.contains("truncate-lines")) {
//     paragraph2.classList.remove("truncate-lines");
//     moreBtn2.textContent = "Less";
//   } else {
//     paragraph2.classList.add("truncate-lines");
//     moreBtn2.textContent = "More";
//   }
// });

// const paragraph3 = document.getElementById("paragraph3");
// const moreBtn3 = document.getElementById("moreBtn3");

// moreBtn3.addEventListener("click", function () {
//   if (paragraph3.classList.contains("truncate-lines")) {
//     paragraph3.classList.remove("truncate-lines");
//     moreBtn3.textContent = "Less";
//   } else {
//     paragraph3.classList.add("truncate-lines");
//     moreBtn3.textContent = "More";
//   }
// });

// const paragraph4 = document.getElementById("paragraph4");
// const moreBtn4 = document.getElementById("moreBtn4");

// moreBtn4.addEventListener("click", function () {
//   if (paragraph4.classList.contains("truncate-lines")) {
//     paragraph4.classList.remove("truncate-lines");
//     moreBtn4.textContent = "Less";
//   } else {
//     paragraph4.classList.add("truncate-lines");
//     moreBtn4.textContent = "More";
//   }
// });
// const paragraph5 = document.getElementById("paragraph5");
// const moreBtn5 = document.getElementById("moreBtn5");

// moreBtn5.addEventListener("click", function () {
//   if (paragraph5.classList.contains("truncate-lines")) {
//     paragraph5.classList.remove("truncate-lines");
//     moreBtn5.textContent = "Less";
//   } else {
//     paragraph5.classList.add("truncate-lines");
//     moreBtn5.textContent = "More";
//   }
// });

// const paragraph6 = document.getElementById("paragraph6");
// const moreBtn6 = document.getElementById("moreBtn6");

// moreBtn6.addEventListener("click", function () {
//   if (paragraph6.classList.contains("truncate-lines")) {
//     paragraph6.classList.remove("truncate-lines");
//     moreBtn6.textContent = "Less";
//   } else {
//     paragraph6.classList.add("truncate-lines");
//     moreBtn6.textContent = "More";
//   }
// });

// Show less or more ends

// Popup window script
// Popup window script (joy sir)
// Popup window script
// var modal = document.getElementById("modal");

// function toggleModal() {
//   modal.classList.toggle("hidden");
//   if (!modal.classList.contains("hidden")) {
//     document.addEventListener("click", handleOutsideClick);
//   } else {
//     document.removeEventListener("click", handleOutsideClick);
//   }
// }

// function handleOutsideClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }

// console.log(modal);

// // Popup window script (zilla)
// var modal2 = document.getElementById("zilla-modal");

// function toggleModal2() {
//   modal2.classList.toggle("hidden");
//   if (!modal2.classList.contains("hidden")) {
//     document.addEventListener("click", handleOutsideClick2);
//   } else {
//     document.removeEventListener("click", handleOutsideClick2);
//   }
// }

// function handleOutsideClick2(event) {
//   if (event.target === modal2) {
//     toggleModal2();
//   }
// }

// console.log(modal2);

// // Popup window script (upazilla)
// var modal3 = document.getElementById("upazilla-modal");

// function toggleModal3() {
//   modal3.classList.toggle("hidden");
//   if (!modal3.classList.contains("hidden")) {
//     document.addEventListener("click", handleOutsideClick3);
//   } else {
//     document.removeEventListener("click", handleOutsideClick3);
//   }
// }

// function handleOutsideClick3(event) {
//   if (event.target === modal3) {
//     toggleModal3();
//   }
// }

// console.log(modal3);

// // Popup window script (polok)
// var modal4 = document.getElementById("polok");

// function toggleModal4() {
//   modal4.classList.toggle("hidden");
//   if (!modal4.classList.contains("hidden")) {
//     document.addEventListener("click", handleOutsideClick4);
//   } else {
//     document.removeEventListener("click", handleOutsideClick4);
//   }
// }

// function handleOutsideClick4(event) {
//   if (event.target === modal4) {
//     toggleModal4();
//   }
// }

// console.log(modal4);
