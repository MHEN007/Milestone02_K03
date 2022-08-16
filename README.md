# Milestone02_K03
Tugas Milestone 02 Kelompok 3

## Judul
PERAN XPIRE DALAM MENGURANGI FOOD WASTE DI MASYARAKAT

## Anggota Kelompok dan Kontribusi
- Hilmi Baskara Radanto	(16521094), PPT
- Rava Maulana	(16521102), Backend Javascript
- Ahmad Ghulam Ilham (16521142), Content
- Fakhri Muhammad Mahendra	(16521155), PPT, README
- Kean Nafis Santang (16521159), Tips and Tricks Page
- Alisha Listya Wardhani (16521209), Pantry (Home dan Log)
- Rifqi Syafiq	(16521223), Content
- Erensi Ratu Chelsia (16521236),
- Raditya Azka Prabaswara	(16521252),
- Ilmagita Nariswari (16521300), Styling
- Mohammad Farhan Fahrezy	(16521364), Content
- Vincent Franstyo	(16521471), Home Page
- Matthew Mahendra	(16521497), Login dan Sign Up Page
- Jauza Lathifah Annasalafi	(16521515), Content

## Dokumentasi Produk
Seusai dengan judul solusi, XPire merupakan sebuah website yang dibuat untuk membantu pengguna dalam mendata dan mengingat makanan atau minuman apa saja yang dimilikinya sehingga pengguna dapat mengetahui mana yang perlu segera dikonsumsi sebelum basi. Dengan begitu, website ini diharapkan dapat membantu mengurangi tingkat food waste yang dihasilkan di masyarakat, terutama di kalangan mahasiswa.

Pengembangan XPire ini menggunakan javascript. JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Dengan JavaScript ini bisa membuat aplikasi, tools, atau bahkan game pada web. Secara teknis, JavaScript atau JS merupakan bahasa pemrograman jenis interpreter, sehingga tidak memerlukan compiler untuk menjalankannya. JavaScript memiliki fitur-fitur seperti berorientasi objek, client-side, high-level programming, dan loosely typed.

Selain JavaScript, pengembangan XPire juga memanfaatkan HTML dan CSS yang digunakan untuk mengatur struktur dan tampilan (layout) website XPire. HTML digunakan untuk mendefisinikan struktur website menggunakan markup, sehingga konten yang ditampilkan dapat dibedakan menjadi title, heading, body, list, paragraph. Sedangkan, CSS digunakan untuk mengatur style penulisan pada website seperti warna, ukuran, posisi font yang digunakan pada website.
## Cara Run
Install Extension di VS code. Buka file login.html . Click Go live pada bagian bawah kanan.
## Fungsi yang diimplementasikan
login(username : string, password : string) : Menyimpan data pengguna yang berupa username dan password ke dalam local storage  <br>
getUserData() : Mengambil data pengguna yang berupa username, password dan pantry dari database  <br>
createUser(username,password) : Mendaftar pengguna baru dengan username dan password dari input, kemudian menyimpan data tersebut dalam local storage  <br>
createPantry(pantry : pantry) : Menambahkan data pantries ke dalam data pengguna yang telah login  <br>
getTips() : Mengambil data tips and tricks dari data base  <br>
calcDaysIn(dateString) : Menghitung berapa lama semenjak data dimasukkan dalam database  <br>
getFirstItem(pantryArr) : Mengembalikan pantry dengan kadaluarsa paling awal  <br>
sortPantry(pantryArr) : Mengembalikan pantry Array dengan diurutkan berdasarkan days  <br>
calcExpiryDate(dateString) : Menghitung berapa lama sampai kadaluarsa  <br>
countPantry(pantries) : Menghitung jumlah pantries dibagi berdasarkan cara penyimpanannya

## Alur Kerja
Laman yang pertama ditampilkan adalah login page

### 1. Login Page ###
Ketika belum login maka terdapat pilihan **1.1. Login**, dan **1.2. Sign Up**

![Login Page](https://github.com/MHEN2606/Milestone02_K03/tree/main/src/Screenshot/login.png)

#### 1.1. Tips and tricks ####
Berisi informasi tentang tempat penyimpanan dan durasi ketahanan makanan

![Tips and tricks]()

#### 1.2. Buat Akun ####
Berisi tampilan untuk meminta input informasi pembuatan akun user

![Buat Akun]()

#### 1.3. Login ####
Berisi form untuk meminta username dan password user

![Login Page]()

Jika data tidak valid maka kembali ke **1.3. Login**, jika data valid lanjut ke  **2. Home Page (logged in)**

### 2. Home Page (logged in) ###
Ketika sudah login maka terdapat pilihan **2.1. Tips and Tricks** dan **2.2. Inventory**

![Home Page (logged in)]()

### 2.1. Tips and Tricks ###
Sama dengan **1.1.**, berisi informasi tentang tempat penyimpanan dan durasi ketahanan makanan

![Tips and Tricks]()

#### 2.2. Inventory ####
Berisi Berisi list makanan, tanggal expirasinya, dan durasi ketahanannya.

![Inventory Page]()

User mendapat pilihan untuk menambah makanan yang ada di list dengan memilih **2.2.1. Tambah List**

##### 2.2.1. Tambah List #####

Disini pengguna bisa memasukan Jenis, Tanggal expirasi, Waktu awal, dan tempat penyimpanan makanan.

![Tambah List Page]()

Lalu pengguna akan kembali ke **2.2. Inventory**
