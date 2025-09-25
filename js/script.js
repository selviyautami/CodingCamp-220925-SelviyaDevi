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
    welcomeText.textContent = `Welcome, ${usernameInput.value.trim()}!`;
  }
});

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
