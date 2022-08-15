// Cara nge run server: npm --prefix ./src/server/ run server

export async function login(username, password) {
  // Fungsi ini tujuannya buat nyimpen data username sama password ke localStorage.
  // Fungsi ini bisa dipake di halaman login.
  // Fungsi ini kalo loginnya valid bakal nge-return data user, kalo ga valid
  // bakal nampilin error.

  try {
    localStorage.clear();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    const data = await getUserData();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserData() {
  // Fungsi ini tujuannya buat ngambil data user yg isinya username, password, dan
  // array of pantries dari database.
  // Fungsi ini bisa dipakai kapanpun setiap butuh data user, dengan asumsi user sudah login.

  try {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const res = await fetch(
      `http://localhost:5000/api/v1/user?username=${username}&password=${password}`
    );
    const data = await res.json();

    if (data.user) {
      return data.user;
    } else {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function createUser(username, password) {
  // Fungsi ini tujuannya buat masukin user baru ke database.
  // Fungsi ini bisa dipakai di halaman signup.
  // Fungsi ini bakal nyimpen data user ke localStorage kalo datanya udah valid,
  // jadi setelah signup user ga perlu login lagi.

  try {
    const user = { username, password };
    const res = await fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data.user) {
      console.log(data.user);
      localStorage.clear();
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      return data.user;
    } else {
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function createPantry(pantry) {
  // Fungsi ini tujuannya buat nambahin pantries ke user yg udah login.
  // Inputnya object:
  // {
  //   name: String (Name of item), [ini harus ada, sisanya opsional]
  //   quantity: Number (Quantity),
  //   itemType: String (Type of item),
  //   purchaseTime: Date (Time of purchase),
  //   expiryDate: Date (Expected expiry date),
  //   storage: String (storage)
  // }

  try {
    const username = localStorage.getItem("username");

    const res = await fetch(`http://localhost:5000/api/v1/pantry/${username}`, {
      method: "POST",
      body: JSON.stringify(pantry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function getTips() {
  // Fungsi ini tujuannya buat ngambil data tips and tricks dari database.
  // Fungsi ini bisa dipakai kapanpun butuh data tips and tricks.

  try {
    const res = await fetch("http://localhost:5000/api/v1/tips");
    const data = await res.json();

    if (data.tips) {
      console.log(data.tips);
      return data.tips;
    } else {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}
