// login overlay
const loginOverlay = document.getElementById("login-overlay");
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const loginError = document.getElementById("login-error");
const welcomeText = document.getElementById("welcome-text");

loginBtn.addEventListener("click", () => {
  if (usernameInput.value.trim() === "") {
    loginError.textContent = "Please enter your name!";
  } else {
    loginOverlay.style.display = "none";
    welcomeText.textContent = `WELCOME, ${usernameInput.value.trim()}!`;
  }
});

// Inisialisasi Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: { slidesPerView: 3, delay: 4000 },
    768: { slidesPerView: 2, delay: 3500 },
    480: { slidesPerView: 1, delay: 3000,  spaceBetween: 20 }
  }
});

const hero = document.querySelector('.hero');
const images = [
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1731341869905-5ef9bcd272f1?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?auto=format&fit=crop&w=1920&q=80"
];


let i = 0;

setInterval(() => {
  hero.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}, 5000);


// contact form
const form = document.getElementById("contact-form");
const formError = document.getElementById("form-error");
const formResult = document.getElementById("form-result");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    formError.textContent = "All fields must be filled!";
    return;
  }

  formError.textContent = "";

  formResult.innerHTML = `
    <h3>Message Result:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});
