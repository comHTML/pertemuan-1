

// Agar bisa diubah → kamu harus “menangkapnya” dulu.
// const btn = document.getElementById("btn");
// const title = document.querySelector("h1");


// berdasarkan id
// const title3 = document.getElementById("title");

// // berdasarkan tag name
// const title4 = document.getElementsByTagName("h1")[0];

// // berdasarkan class name
// const title5 = document.getElementsByClassName("judul")[0];

// // berdasarkan query selector
// const title6 = document.querySelector(".judul");

// // berdasarkan query selector all
// const title7 = document.querySelectorAll(".judul")[0];   






// ==== contoh
document.body                   // <body>...</body>
document.querySelector("h1")    // <h1>Judul</h1>

// const title = document.getElementById("title");
// const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    btn.addEventListener("click", () => {
    title.innerText = "Judul Baru";
    title.style.color = "red";
    title.style.fontSize = "50px";
  });
}) 

// berdasarkan id
const titlee = document.getElementById("title");

// CSS selector pertama yang ketemu
const firstParagraph = document.querySelector("p");
const special = document.querySelector(".highlight");

// semua elemen yang match (NodeList)
const items = document.querySelectorAll(".item");


const vase = document.getElementById("text");

// hanya teks
vase.innerText = "Halo santri 1!";

// bisa teks + tag HTML
vase.innerHTML = "<b>Halo</b> santri 2!";
vase.style.color = "black";
vase.style.fontsize = "10px";
vase.style.backgroundColor = "yellow";
vase.style.padding = "10px";
vase.style.borderRadius = "15px";
vase.style.border = "2px solid red";
vase.style.textAlign = "center";

// Mengubah Style & Class
const box = document.getElementById("box");

// style langsung
box.style.backgroundColor = "black";
box.style.color = "white";
box.style.fontSize = "30px";

// class (lebih rapi pakai CSS)
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark");


// Attribute & Data
const img = document.querySelector("img");
img.setAttribute("src", "foto.png");
img.setAttribute("alt", "Foto santri");

// data-*
const btn2 = document.querySelector("button");
btn2.dataset.id = "123";
console.log(btn2.dataset.id); // "123"


// Membuat & Menghapus Elemen
const ul = document.getElementById("list");

const li = document.createElement("li");
li.textContent = "Item baru";
ul.appendChild(li);

// hapus
// li.remove();


// Event Listener
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Tombol diklik");
});

const input = document.getElementById("name");
input.addEventListener("keyup", function (event) {
  console.log("Ketik:", event.target.value);
});


// Ganti Judul Halaman
{/* <h1 id="page-title">Belajar JavaScript</h1>
<button id="btn-change">Ganti Judul</button> */}

{/* <script>
  const title = document.getElementById("page-title");
  const btn = document.getElementById("btn-change"); */}

  {/* btn.addEventListener("click", () => {
    title.innerText = "Selamat Datang di Kelas DOM!";
  });
</script> */}

const judul = document.getElementById("page-title");
const tombol = document.getElementById("btn-change");
tombol.addEventListener("click", () => {
    judul.innerText = "Selamat Datang di Kelas DOM!";
}); 