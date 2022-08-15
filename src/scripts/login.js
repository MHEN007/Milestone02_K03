import { login } from "./API.js";

const form = document.getElementById("main-form");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  login(usernameInput.value, passwordInput.value)
    .then((data) => {
      if (data.username) {
        window.location.href = "/src/home/home-logged-in.html";
      } else {
        console.log(data);
      }
    })
    .catch((err) => console.log(err));
});
