// semua movie yang ingin ditampilkan ada di sini
//import { getTips } from "../scripts/API.js";

//const data = getTips().then((res) => res);
//console.log(data);

const tipsntricks = [
  {
    tipName: "Daging Ayam",
    tip: "Dipotong sesuai kebutuhan, dibungkus plastik, simpan dalam freezer (tanpa dicuci)",
    shelf: "2 Jam",
    fridge: "1-2 Hari (segar), 3-4 Hari (dimasak)",
    tipImage:
      "https://www.poultryworld.net/app/uploads/2022/02/IMG_Tajikistan.jpg",
    tipContent:
      "Dipotong sesuai kebutuhan, dibungkus plastik, simpan dalam freezer (tanpa dicuci)",
    cont: "Bungkus plastik",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Daging Ikan",
    tip: "Bersihkan dan tambahkan perasan jeruk nipis. Simpan di wadah kedap udara, lalu masukkan ke dalam freezer.",
    shelf: "2 jam",
    fridge: "1-2 hari (segar), 3-4 hari (dimasak)",
    tipImage:
      "https://img.jakpost.net/c/2017/05/15/2017_05_15_26895_1494828675._large.jpg",
    tipContent:
      "Bersihkan dan tambahkan perasan jeruk nipis. Simpan di wadah kedap udara, lalu masukkan ke dalam freezer",
    cont: "Wadah kedap udara (contoh: tuppwerware)",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Daging Sapi",
    tip: "Bungkus plastik, simpan dalam freezer tanpa dicuci. Daging sapi dapat bertahan sampai 6-12 bulan",
    shelf: "2 jam",
    fridge: "3-4 hari",
    tipImage:
      "https://img.freepik.com/premium-photo/raw-beef-steaks-fillet-mignon-rib-eye-striploin-skirt_89816-12494.jpg?w=2000",
    tipContent:
      "Bungkus plastik, simpan dalam freezer tanpa dicuci. Daging sapi dapat bertahan sampai 6-12 bulan",
    cont: "Bungkus plastik/saran wrap",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Daging Kambing",
    tip: "Bungkus plastik, simpan dalam freezer tanpa dicuci",
    shelf: "2 jam",
    fridge: "3-5 hari",
    tipImage:
      "https://mmc.tirto.id/image/otf/500x0/2017/08/30/Ilustrasi-daging-kambing--ISTOCK_ratio-16x9.jpg",
    tipContent: "Bungkus plastik, simpan dalam freezer tanpa dicuci",
    cont: "Bungkus plastik/saran wrap",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Sayur Wortel",
    tip: " Bungkus koran, simpan dalam kulkas",
    shelf: "3-5 hari",
    fridge: "3-4 minggu",
    tipImage:
      "https://www.iyalojadirect.com/wp-content/uploads/2021/02/Carrots.jpg",
    tipContent: " Bungkus koran, simpan dalam kulkas",
    cont: "Bungkus koran",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Sayur Hijau",
    tip: "Rendam akar dalam air, bilas, bungkus dalam koran, kemudian simpan di kulkas",
    shelf: "2 jam",
    fridge: "10 hari",
    tipImage:
      "https://images.prismic.io/yourgrocer/7b90f0cafb648396a416311c4b8056ebb53bba02_shutterstock_154023704.jpg?auto=compress,format",
    tipContent:
      "Rendam akar dalam air, bilas, bungkus dalam koran, kemudian simpan di kulkas",
    cont: "Bungkus koran atau bungkus plastik",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Sayur Terong",
    tip: "Jangan simpan di kulkas (untuk menjaga rasa), taruh di tempat yang sejuk dan dingin",
    shelf: "10 hari",
    fridge: "5-7 hari",
    tipImage:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/279/279359/two-eggplants-on-a-wooden-table.jpg",
    tipContent:
      "Jangan simpan di kulkas, taruh di tempat yang sejuk dan dingin",
    cont: "dibunkus koran",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Sayur Timun",
    tip: "Bilas dengan air kemudian bungkus dalam plastik dan ditaruh di kulkas",
    shelf: "2 hari",
    fridge: "2 minggu",
    tipImage:
      "https://asset.kompas.com/crops/wxP17Yrh68rvSvPf3yuz8_I4i88=/0x1:1000x668/750x500/data/photo/2020/11/24/5fbca020a13ac.jpg",
    tipContent:
      "Bilas dengan air kemudian bungkus dalam plastik dan ditaruh di kulkas",
    cont: "Bungkus plastik",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Cabai",
    tip: "Simpan dalam wadah lalu taruh tisu di atas cabai sebelum menutup wadah",
    shelf: "7-10 hari",
    fridge: "5-7 hari",
    tipImage:
      "https://factsofindonesia.com/wp-content/uploads/2021/02/indonesian-local-chilli-pepper.jpg",
    tipContent:
      "Simpan dalam wadah lalu taruh tisu di atas cabai sebelum menutup wadah",
    cont: "Wadah dengan tisu",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Buah Salak",
    tip: "Dikupas, simpan dalam wadah lalu simpan dalam kulkas",
    shelf: "7-9 hari",
    fridge: "10-14 hari",
    tipImage:
      "https://image.jpnn.com/resize/1200x800-80/ilustrasi/normal/2021/09/11/salak-nwo0f-aor3.jpg",
    tipContent:
      "Dikupas, simpan dalam wadah lalu simpan dalam kulkas. Buah salak yang tidak bagus tidak terlihat dari luar. Oleh karena itu, kupas terlebih dahulu sebelum dikulkaskan",
    cont: "Wadah kedap udara (contoh: tupperware)",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Buah apel",
    tip: "Simpan pada tempat gelap dan sejuk, atau taruh di lemari es di wadah yang terpisah",
    shelf: "5-7 hari",
    fridge: "6-8 minggu",
    tipImage: "https://ychef.files.bbci.co.uk/976x549/p07v2wjn.jpg",
    tipContent:
      "Simpan pada tempat gelap dan sejuk, atau taruh di lemari es di wadah yang terpisah",
    cont: "Dibungkus terpisah",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Buah Pisang",
    tip: "Bonggol lalu diikat plastik, simpan di suhu ruangan (untuk menjaga tekstur)",
    shelf: "2-3 hari (sejak matang kuning)",
    fridge: "5-7 hari (sejak matang kuning)",
    tipImage:
      "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg",
    tipContent:
      "Bonggol lalu diikat plastik, simpan di suhu ruangan (untuk menjaga tekstur)",
    cont: "Kulkas dapat menyimpan pisang lebih lama, tetapi tekstur dan rasa menjadi tidak ideal",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Jus Buah",
    tip: "Simpan pada wadah kedap udara yang kemudian disimpan pada wadah pendingin.",
    shelf: "1 hari",
    fridge: "7-10 hari",
    tipImage:
      "https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583836679/DCUK/Content/iStock-821583034.jpg",
    tipContent:
      "Simpan pada wadah kedap udara yang kemudian disimpan pada wadah pendingin.",
    cont: "Gela pitcher dengan saran wrap di tutupnya",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Susu Sapi",
    tip: "Susu sebaiknya disimpan di tempat bersuhu di bawah 3 derajat agar tidak basi",
    shelf: "2 jam",
    fridge: "4-7 hari (setelah dibuka dari kemasan)",
    tipImage:
      "https://agrifood.id/wp-content/uploads/2018/07/mommies-daily-susu-segar.jpg",
    tipContent:
      "Susu sebaiknya disimpan di tempat bersuhu di bawah 3 derajat agar tidak basi",
    cont: "Bungkus bawaan, simpan dalam kulkas",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Nasi Putih",
    tip: "Simpan dalam rice cooker bila ada. Nasi sisa tidak boleh disimpan pada suhu ruangan lebih dari dua jam. Simpan nasi dalam kulkas maksimal 3-4 hari.",
    shelf: "2 jam",
    fridge: "3-4 hari",
    tipImage:
      "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/Screen-Shot-2021-10-28-at-20.37.47.png",
    tipContent:
      "Simpan dalam rice cooker bila ada. Nasi sisa tidak boleh disimpan pada suhu ruangan lebih dari dua jam. Simpan nasi dalam kulkas maksimal 3-4 hari.",
    cont: "Wadah bebas, rice cooker bila masih bisa",
    link: "",
  }, //masukin link inventory check

  {
    tipName: "Fast Food",
    tip: " Menyimpan makanan cepat saji adalah suatu hal yang kurang disarankan. Akan tetapi, beberapa makanan seperti ayam goreng dan burger dapat disimpan selama maksimal 3 hari.",
    shelf: "dua jam",
    fridge: "3-4 hari",
    tipImage:
      "https://cdn1-production-images-kly.akamaized.net/9BaoDYDpYXY4nPAAJ3i2GgPdZPk=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2802943/original/078032100_1557636633-iStock-931308812.jpg",
    tipContent:
      "Menyimpan makanan cepat saji adalah suatu hal yang kurang disarankan. Akan tetapi, beberapa makanan seperti ayam goreng dan burger dapat disimpan selama maksimal 3 hari. ",
    cont: "Taruh di wadah di dalam kulkas ",
    link: "",
  }, //masukin link inventory check
];

const tipsUmum = [
  {
    tipName: "Menyimpan Makanan di Kulkas",
    tip: "Simpan makanan siap santap seperti kornet, keju, susu, tahu dan tempe, daging matang, makanan kemasan, serta sisa makanan matang di rak bagian atas dan tengah. <br><br> Simpan sayuran dan buah segar di laci bawah, jika buah sudah dipotong dan dikupas bersih simpan dalam wadah tertutup terlebih dahulu. <br><br>  Simpan daging segar atau beku di freezer, juga dalam wadah kedap udara (jangan masih di dalam plastik).",
    tipImage:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--fTjPhyEJ--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1594156924812/Fridge-Tips-hero.jpg",
  },

  {
    tipName: "Menyimpan Makanan di Rak atau Lemari",
    tip: " Simpan makanan di dalam toples atau wadah kedap udara yang tertutup rapat terlebih dahulu. Pastikan lemari dan penyimpanannya benar-benar bersih jauhi paparan sinar matahari langsung. <br> <br> Jangan letakkan langsung di lantai karena memicu datangnya serangga dan tikus untuk merusak atau mengambil makanan Anda.",
    tipImage:
      "https://www.thedailymeal.com/sites/default/files/2020/07/10/hero_grocery_shelf_life_getty_0.jpg",
  },

  {
    tipName: "Waktu Kedaluwarsa Dairy ",
    tip: "Telur: 3-5 minggu <br><br> Susu: 1 minggu setelah tanggal kadaluarsa <br><br> Keju mozzarella, segar, kelembaban tinggi: 2 minggu <br><br> Keju parmesan, komersial parut dan dikemas: 3 bulan setelah tanggal kadaluarsa <br><br> Yoghurt: 7-10 hari tanggal kadaluarsa ",
    tipImage: "https://oni.co.za/wp-content/uploads/2022/03/lacticinios.jpg",
  },

  {
    tipName: "Tips Menyimpan Buah dan Sayur",
    tip: "Buah dan Sayur secara umum (dalam lemari es) : Untuk buah dan sayur yang belum dipotong, bisa bertahan selama satu hingga dua minggu. Namun untuk yang sudah dipotong, sebaiknya segera Anda konsumsi dalam kurun waktu 3 sampai 4 hari setelah disimpan. ",
    tipImage:
      "https://img.freepik.com/free-photo/bottom-view-fruits-vegetables-radish-cherry-tomatoes-persimmon-tomatoes-kiwi-cucumber-apples-red-cabbage-parsley-quince-aubergines-blue-table_140725-146174.jpg?w=2000 ",
  },
];

// looping untuk memberikan judul tips spesifik di mainpage
for (let x = 0; x < tipsntricks.length; x++) {
  document.getElementById("img" + (x + 1)).src = tipsntricks[x].tipImage;
}

for (let x = 0; x < tipsntricks.length; x++) {
  document.getElementById(x + 1).innerHTML =
    x + 1 + ". " + tipsntricks[x].tipName;
}

for (let x = 0; x < tipsntricks.length; x++) {
  document.getElementById("c" + (x + 1)).innerHTML = tipsntricks[x].tipContent;
}

// looping untuk memberikan judul tips umum di mainpage
for (let x = 0; x < tipsUmum.length; x++) {
  document.getElementById("imgUmum" + (x + 1)).src = tipsUmum[x].tipImage;
}

for (let x = 0; x < tipsUmum.length; x++) {
  document.getElementById("u" + (x + 1)).innerHTML =
    "Tips Umum: " + tipsUmum[x].tipName;
}

// Fungsi tips spesifik: saat diclick popup akan aktif dan mengubah data seusai tip yg diclick
function togglePopup(tip_num) {
  document.getElementById("popup-1").classList.toggle("active");
  document.getElementById("popup_poster1").src =
    tipsntricks[tip_num - 1].tipImage;
  document.getElementById("tips_title").innerHTML =
    tipsntricks[tip_num - 1].tipName;
  document.getElementById("tipInfo").innerHTML =
    "TIP: " + tipsntricks[tip_num - 1].tip;
  document.getElementById("shelfLife").innerHTML =
    "Average Shelf Life: " + tipsntricks[tip_num - 1].shelf;
  document.getElementById("fridgeLife").innerHTML =
    "Average Fridge Life: " + tipsntricks[tip_num - 1].fridge;
  document.getElementById("container").innerHTML =
    "Recommended Container: " + tipsntricks[tip_num - 1].cont;
}

// Fungsi tips umum: saat diclick popup akan aktif dan mengubah data seusai tip yg diclick
function togglePopupUmum(tip_num) {
  document.getElementById("popup-1").classList.toggle("active");
  document.getElementById("popup_poster1").src = tipsUmum[tip_num - 1].tipImage;
  document.getElementById("tips_title").innerHTML =
    tipsUmum[tip_num - 1].tipName;
  document.getElementById("tipInfo").innerHTML =
    "TIP: " + tipsUmum[tip_num - 1].tip;
  document.getElementById("shelfLife").innerHTML = "";
  document.getElementById("fridgeLife").innerHTML = "";
  document.getElementById("container").innerHTML = "";
}

// search filter
const list = document.querySelector("#tips-list");
const searchBar = document.forms["search-tips"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const tips = list.getElementsByTagName("li");
  Array.from(tips).forEach(function (singleTip) {
    const title = singleTip.querySelector("h1").textContent;
    console.log(title);
    if (title.toLowerCase().indexOf(term) != -1) {
      singleTip.style.display = "";
    } else {
      singleTip.style.display = "none";
    }
  });
});
