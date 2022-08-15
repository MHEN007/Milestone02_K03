import { createPantry } from "./API.js";

const submitBtn = document.getElementById("pantry_submit");
const nameInput = document.getElementById("item_name");
const quantityInput = document.getElementById("item_quantity");
const itemTypeInput = document.getElementById("item_type");
const purchaseTimeInput = document.getElementById("item_bought");
const expiryDateInput = document.getElementById("item_expiration");
const storageInput = document.getElementById("item_storage");

async function handleSubmit() {
  try {
    // Masukin pantry ke database
    const res = await createPantry({
      name: nameInput.value,
      quantity: quantityInput.value,
      itemType: itemTypeInput.value,
      purchaseTime: purchaseTimeInput.value,
      expiryDate: expiryDateInput.value,
      storage: storageInput.value,
    });
    if (res.user) {
      // Kalo udah berhasil, balik lagi ke home
      window.location.href = "./pantry_home.html";
    } else {
      alert("Nama item belum dimasukkan");
    }
  } catch (err) {
    console.log(err);
  }
}

submitBtn.addEventListener("click", handleSubmit);
