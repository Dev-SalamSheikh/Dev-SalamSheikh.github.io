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

// Navbar Scroll Code

function handleScroll() {
  const navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove("scrolledNav");
  } else {
    navbar.classList.add("scrolledNav");
  }
}

window.addEventListener("scroll", handleScroll);

// Work Portfolio Countdown

const skills_section = document.getElementById("skills");

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

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

    function myCounter(counterValue, counterSpeed, numberBox, counterNumber) {
      setInterval(() => {
        if (counterNumber == counterValue) {
          clearInterval();
        } else {
          counterNumber += 1;
          numberBox.innerHTML = counterNumber + "%";
        }
      }, counterSpeed);
    }

    myCounter(90, 21, number, counter);
    myCounter(80, 22, numberTwo, counterTwo);
    myCounter(70, 26, numberThree, counterThree);
    myCounter(80, 22, numberFour, counterFour);
    myCounter(80, 25, numberFive, counterFive);
    myCounter(70, 22, numberSix, counterSix);
  },
  {
    root: null,
    threshold: 0.4,
  }
);

CounterObserver.observe(skills_section);

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
  reset: false,
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

const loader = document.getElementById("loading");
document.documentElement.style.overflow = "hidden";
window.addEventListener("load", function () {
  loader.remove();
  document.documentElement.style.overflow = "auto";
});

// validation
function validate() {
  var returnString;
  var text = document.getElementByID("numbersOnly").value;
  var regex = /[0-9]|\./;
  var anArray = text.split("");
  for (var i = 0; i < anArray.length; i++) {
    if (!regex.test(anArray[i])) {
      anArray[i] = "";
    }
  }
  for (var i = 0; i < anArray.length; i++) {
    returnString += anArray[i];
  }
  document.getElementByID("numbersOnly").value = returnString;
}
