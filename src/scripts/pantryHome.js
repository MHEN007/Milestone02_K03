import { getUserData } from "./API.js";
import {
  calcDaysIn,
  sortPantry,
  getFirstItem,
  calcExpiryDate,
  countPantry,
} from "./utility.js";

async function handleLoad() {
  try {
    let { pantries } = await getUserData();
    let firstItem;
    [firstItem, pantries] = getFirstItem(pantries);
    pantries = sortPantry(pantries);

    // Update Main
    const container = document.getElementById("pantry-main");
    let el = `
      <div class="pantry_item" id="item_pertama">
        <div class="pantry-tag"></div>
        <div class="item-left">
            <div class="item_name">
                ${firstItem.name}
            </div>
            <div class="item_expiration">
                ${calcExpiryDate(firstItem.expiryDate)}
            </div>
        </div>
        
        <div class="item-right">
            <div class="item_quantity">
                ${firstItem.quantity}
            </div>
            
            <div class="item_storage">
                ${firstItem.storage}
            </div>
        </div>
      </div>

      <div class="pantry_divider">
          SORTED BY
          <div class="item_sorted"> 
              <!-- Nanti harusnya di fetch dari data--> days in 
          </div>
      </div>
    `;

    for (const { name, purchaseTime, quantity, storage } of pantries) {
      el += `
        <div class="pantry_item">
          <div class="pantry-tag"></div>
            <div class="item-left">
                <div class="item_name">
                    <!-- Item name -->
                    ${name}
                </div>
                <div class="item_expiration">
                    <!-- Item expiration -->
                    ${calcDaysIn(purchaseTime)}
                </div>
            </div>
            
            <div class="item-right">
                <div class="item_quantity">
                    <!-- Item quantity -->
                    ${quantity}
                </div>
                
                <div class="item_storage">
                    <!-- Item storage -->
                    ${storage}
                </div>
            </div>
        </div>
      `;
    }

    container.innerHTML += el;

    // Update count
    const [allCount, fridgeCount, freezerCount, dryCount] =
      countPantry(pantries);

    document.getElementById("all-item").textContent = allCount;
    document.getElementById("fridge-item").textContent = fridgeCount;
    document.getElementById("freezer-item").textContent = freezerCount;
    document.getElementById("dry-item").textContent = dryCount;
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("load", handleLoad);
