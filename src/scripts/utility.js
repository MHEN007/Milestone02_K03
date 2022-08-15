export function calcDaysIn(dateString) {
  let time = Math.round((new Date() - new Date(dateString)) / 1000 / 3600 / 24);
  if (time > 0) {
    // >= 1 hari
    return `${time} days in`;
  } else {
    return "Added today";
  }
}

export function getFirstItem(pantryArr) {
  const arr = [...pantryArr];
  arr.sort((a, b) => {
    return (
      new Date(a.expiryDate) -
      new Date() -
      (new Date(b.expiryDate) - new Date())
    );
  });
  return [arr[0], arr.slice(1)];
}

export function sortPantry(pantryArr) {
  const arr = [...pantryArr];
  return arr.sort((a, b) => {
    return (
      new Date() -
      new Date(b.purchaseTime) -
      (new Date() - new Date(a.purchaseTime))
    );
  });
}

export function calcExpiryDate(dateString) {
  let time = Math.round((new Date(dateString) - new Date()) / 1000 / 3600 / 24);
  if (time > 0) {
    // >= 1 hari
    return `Expires in ${time} day`;
  } else {
    return "Expires today";
  }
}

export function countPantry(pantries) {
  const arr = [...pantries];
  const allCount = arr.length;
  const fridgeCount = arr.filter(
    (item) => item.storage.toLowerCase() === "fridge"
  ).length;
  const freezerCount = arr.filter(
    (item) => item.storage.toLowerCase() === "freezer"
  ).length;
  const dryCount = arr.filter(
    (item) => item.storage.toLowerCase() === "dry"
  ).length;
  return [allCount, fridgeCount, freezerCount, dryCount];
}
