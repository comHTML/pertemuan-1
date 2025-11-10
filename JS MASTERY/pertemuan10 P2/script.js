
// =============================
// DESTRUCTURING
// =============================


// const tag1 = document.getElementById("tag1")
// const tag2 = document.getElementById("tag2")

// destruction array
let dataSantri = ["Santri1","Sntri2","Santri3","Santri4","Santri5"]


const arr = [10, 20, 30];
const [a, b, c] = arr; // array yg di atas masuk ke sini
console.log(a, b, c); // 10 20 30  "versi sederhana"



// destruction object
let dataSantri2 = {
    nama : "santri Obj 1",
    nama2 : "santri Obj 2",
    nama3 : "santri Obj 3",
    nama4 : "santri Obj 4",
    nama5 : "santri Obj 4",
}

const user = { 
    nama: "Aisyah", 
    umur: 20,
    alamat : "Banten",
    hobi : "mendaki"
};
const { nama, umur, alamat, hobi } = user // harus dipanggil
console.log(nama, umur, alamat, hobi ); //  "versi sederhana"



let [san1, , , ,san5] = dataSantri

let {nama : namaAwal,nama2,nama3,nama4,nama5} = dataSantri2

// tag1.innerHTML += `<h1>${san1}</h1>`
// // tag1.innerHTML += `<h1>${san2}</h1>`
// // tag1.innerHTML += `<h1>${san3}</h1>`
// // tag1.innerHTML += `<h1>${san4}</h1>`
// tag1.innerHTML += `<h1>${san5}</h1>`

// tag1.innerHTML += `<h1>${namaAwal}</h1>`
// tag1.innerHTML += `<h1>${nama2}</h1>`
// tag1.innerHTML += `<h1>${nama3}</h1>`
// tag1.innerHTML += `<h1>${nama4}</h1>`
// tag1.innerHTML += `<h1>${nama5}</h1>`

// tag2.innerHTML += `<h1>DATA 1</h1>`
// tag2.innerHTML += `<h1>DATA 2</h1>`



// =============================
// SPREAD OPERATOR
// =============================

// let exampleSpread1 = [10,20,30,40,50]
// let exampleSpread2 = [60,70,80,90,100]

// let exampleSpread3 = [...exampleSpread1,...exampleSpread2]

// console.log('INI EXAMPLE SPREAD 3 >>>>>');
// console.table(exampleSpread3);

// let exampleSpread4 = {id: "001",email : "email@GMAIL.COM"}
// let exampleSpread5 = {...exampleSpread4,pw : "0987654321"}
// console.table(exampleSpread5);

// spread (versi sederhana)
const ab = [3, 4, 5];
const abc = [1, 2, ...ab];

console.log(abc);

const aabb = [...abc, 6, 7, 8, ]
console.log(aabb);          // "versi sederhana"
const qwe = [0, ...aabb]
console.log(qwe);

const newnama = { 
    nama : "aisyah",
    status : "aktif",
    keterangan : "sakit"
};
const newnama2 = {
    ...newnama,
    asal : "banten"
}
console.log(newnama2);      // versi sederhana




// =============================
// REST OPERATOR
// =============================

// function fRest(...items) {
//     tag2.innerText = items
//     return items
// }

// console.table(fRest("Item 1","Item 2","Item 3","Item 4","Item 5"));

// rest "versi sederhana"

 const [sisa, ...rest] = [1, 2, 3, 4, 5];
 console.log(sisa, rest);
 
 const { sisa2, ...rest2} = {
    sisa2 : 1,
    b : 2,
    c : 3
 }
 console.log(sisa2);
 console.log(rest2);
 console.log(sisa2, rest2);
 

 function frest( ...number) {
    return number.reduce((a, b) => a + b, 0)
 }
 console.log(frest(1, 2, 3, 4, 5));     // "versi sederhana"


 //  GABUNGAN SEMUANYA

 const siswa = {
  nama: "Aisyah",
  nilai: [90, 85, 92],
  alamat: { kota: "Banten", prov: "Jawa Barat" }
};

// Destructuring object + rename + default
const { nama: namaSiswa, alamat: { kota }, nilai: [nilaiUjian, ...nilaiLain] } = siswa;

console.log(namaSiswa); // Aisyah
console.log(kota);      // Banten
console.log(nilaiUjian, nilaiLain); // 90 [85,92]

// Spread untuk membuat object baru dan menambah properti
const updated = { ...siswa, umur: 18, nilai: [...siswa.nilai, 88] };
console.log(updated);

 // ... spredd di dalam variabel
 // ... rest di dalam parameter


 