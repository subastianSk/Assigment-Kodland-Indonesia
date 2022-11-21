const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})

// Scroll Reveal

const slideUp = {
  distance: "20%",
  origin: "bottom",
  duration: 1500,
  opacity: 0
}

ScrollReveal().reveal(".hero__cta", slideUp)
ScrollReveal().reveal(".hero__image-container", slideUp)
ScrollReveal().reveal(".about__heading", slideUp)
ScrollReveal().reveal(".about__description", slideUp)
ScrollReveal().reveal(".product__heading", slideUp)
ScrollReveal().reveal(".swiper-container", slideUp)
ScrollReveal().reveal(".detail__content", slideUp)
ScrollReveal().reveal(".detail__image-container", slideUp)

// Hamburger
const hamburger = document.querySelector(".hamburger")
const headerMenu = document.querySelector(".header__menu")

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active")
  headerMenu.classList.toggle("header__menu_hide")
})
