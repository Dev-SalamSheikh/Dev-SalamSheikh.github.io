// Hamburger Navigation Code

const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const bar = document.querySelectorAll(".bar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

burger.addEventListener("click", () => {
  bar.style.color = "white";
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
  })
);

// Work Portfolio Countdown
let number = document.getElementById("number");
let numberTwo = document.getElementById("numberTwo");
let numberThree = document.getElementById("numberThree");
let numberFour = document.getElementById("numberfour");
let numberFive = document.getElementById("numberfive");
let numberSix = document.getElementById("numbersix");
let counter = 0;
let counterTwo = 0;
let counterThree = 0;
let counterFour = 0;
let counterFive = 0;
let counterSix = 0;

setInterval(() => {
  if (counter == 85) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 19);

setInterval(() => {
  if (counterTwo == 80) {
    clearInterval();
  } else {
    counterTwo += 1;
    numberTwo.innerHTML = counter + "%";
  }
}, 19);

setInterval(() => {
  if (counterThree == 50) {
    clearInterval();
  } else {
    counterThree += 1;
    numberThree.innerHTML = counter + "%";
  }
}, 19);

setInterval(() => {
  if (counterFour == 80) {
    clearInterval();
  } else {
    counterFour += 1;
    numberFour.innerHTML = counter + "%";
  }
}, 19);

setInterval(() => {
  if (counterFive == 40) {
    clearInterval();
  } else {
    counterFive += 1;
    numberFive.innerHTML = counter + "%";
  }
}, 19);

setInterval(() => {
  if (counterSix == 50) {
    clearInterval();
  } else {
    counterSix += 1;
    numberSix.innerHTML = counter + "%";
  }
}, 19);

// Swipper Navigation Code

let swiperTestimonial = new Swiper(".box_container", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL REVEL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 1500,
  delay: 300,
  reset: true,
});
sr.reveal(".home");
sr.reveal(".content", { delay: 300, origin: "top" });
sr.reveal(".image", { delay: 300, origin: "top" });
sr.reveal(".works", { delay: 300, origin: "top" });
sr.reveal(".services", { delay: 300, origin: "top" });
sr.reveal(".skills", { delay: 300, origin: "top" });
sr.reveal(".testimonial", { delay: 300, origin: "top" });
sr.reveal("form", { delay: 300, origin: "top" });
sr.reveal(".footer-content", { delay: 300, origin: "top" });

// Home Scroll Button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Contact Button Alert

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function (e) {
  alert("Please Contact Through the Footer's Social Media Link");
});

const form = document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

// Preloader Animation

const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
