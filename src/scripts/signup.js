import { createUser } from "./API.js";

// Select element
const form = document.getElementById("main-form");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("pass-input");
const confirmPass = document.getElementById("confirm-pass-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value === confirmPass.value) {
    createUser(usernameInput.value, passwordInput.value).then((data) => {
      if (data.username) {
        // Kalo user berhasil ditambahin ke database, pindah ke home
        window.location.href = "/src/home/home-logged-in.html";
      } else {
        alert(data.msg);
      }
    });
  } else {
    alert("Konfirmasi password salah");
  }
});
