import { getUserData, getTips } from "./API.js";
import { getFirstItem, calcExpiryDate } from "./utility.js";

async function handleLoad() {
  try {
    // Ambil data
    const { pantries } = await getUserData();
    const count = pantries.length;

    // Set username
    document.querySelector(".user > span").innerHTML =
      localStorage.getItem("username") + "!";

    // Render data pantry
    const [{ name, expiryDate, quantity, storage }, ..._] =
      getFirstItem(pantries);

    document.getElementById("food-list-amount").textContent = count;
    document.getElementById("item-name").textContent = name;
    document.getElementById("item-quantity").textContent = quantity;
    document.getElementById("item-expiry").textContent =
      calcExpiryDate(expiryDate);
    document.getElementById("item-storage").textContent = storage;

    // Render tips
    const tips = await getTips(); // Ambil data tips
    document.getElementById("tips-1-title").textContent = tips[0].title;
    document.getElementById("tips-1-content").textContent = tips[0].content;
    document.getElementById("tips-2-title").textContent = tips[1].title;
    document.getElementById("tips-2-content").textContent = tips[1].content;
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("load", handleLoad);
