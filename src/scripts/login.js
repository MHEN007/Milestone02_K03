import { login } from "./API.js";

// Select element
const form = document.getElementById("main-form");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  login(usernameInput.value, passwordInput.value)
    .then((data) => {
      // Kalo login berhasil, pindah ke home
      if (data.username) {
        window.location.href = "/src/home/home-logged-in.html";
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => console.log(err));
});
