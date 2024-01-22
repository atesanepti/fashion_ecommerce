let toggleBtn = document.querySelectorAll("[data-nav-toggler]");
let navbar = document.querySelector("[data-navbar]");
let overllay = document.querySelector("[data-overllay]");
let header = document.querySelector("[data-header]");
let backBtn = document.querySelector("[data-back-btn]");

let moveBtn = document.querySelectorAll("[data-move-btn]");

// event handle markup
function onEventFire(element, type, callback) {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener(type, callback);
  }
}
// navbar toggle effect
function navToggle() {
  if (window.innerWidth > 795) return;
  navbar.classList.toggle("active");
  overllay.classList.toggle("active");
  document.body.classList.toggle("scrollOff");
}
onEventFire(toggleBtn, "click", navToggle);

// window scroll effect
function scrollEffect() {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backBtn.classList.remove("active");
  }
}
onEventFire([window], "scroll", scrollEffect);

// reset scroll
backBtn.addEventListener("click", () => {
  window.scroll(0, 0);
});

let products = document.querySelector("[data-product-card]");
let cardWidth = products.querySelector(".card").offsetWidth;
let endBtn = document.querySelector("[data-end-btn]");
// Card Move Effect
moveBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    products.scrollLeft +=
      btn.getAttribute("name") == "left" ? -(cardWidth + 15) : cardWidth + 15;
  });
});
endBtn.addEventListener("click", () => {
  products.scrollLeft = 0;
});

// Preloader Show
let preloader = document.querySelector("[data-preloader]");
window.addEventListener("DOMContentLoaded", () => {
  preloader.classList.add("remove");
});
