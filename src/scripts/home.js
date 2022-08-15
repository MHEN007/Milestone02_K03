import { getUserData } from "./API.js";
import { getFirstItem, calcExpiryDate } from "./utility.js";

async function handleLoad() {
  try {
    const { pantries } = await getUserData();
    const count = pantries.length;
    const [{ name, expiryDate, quantity, storage }, ..._] =
      getFirstItem(pantries);

    document.getElementById("food-list-amount").textContent = count;
    document.getElementById("item-name").textContent = name;
    document.getElementById("item-quantity").textContent = quantity;
    document.getElementById("item-expiry").textContent =
      calcExpiryDate(expiryDate);
    document.getElementById("item-storage").textContent = storage;
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("load", handleLoad);
