


// Simpan data user ke JSON
const user = { name: "Amin", age: 17, status : "pelajar" };
const json = JSON.stringify(user);
console.log(json);

// ========

// Ambil data user dari JSON
const json2 = '{"name":"Amin","age":17}';
const user2 = JSON.parse(json2);
console.log(user2);

// ========

// Konversi array angka ke JSON
const arr = [1, 2, 3, 4]
const user3 = JSON.stringify([1,2,3,4]);
console.log(user3);

// ========

// Konversi array object ke JSON
const siswa = [
  { nama: "Ali" },
  { nama: "Budi" }
];

const user4 = JSON.stringify(siswa);
console.log(user4);

// ========

// Parse JSON lalu ambil properti tertentu

const data = JSON.parse('{"x":10,"y":20}');
console.log(data.x);

// Validasi JSON

const data3 = '{ "nama" : "jak"}';
try {
  JSON.parse(data3);
  console.log("Valid");
} catch {
  console.log("JSON tidak valid!");
}


const data2 = '{"nama" : "com"}';
try {
  JSON.parse(data2);
  console.log("Valid");
} catch {
  console.log("JSON TDK VALID");
  
}


// JSON untuk menyimpan score game

const user5 = { poin : 2345, level : 3 };

localStorage.setItem("user5", JSON.stringify(user5));
// ngambil data dari localStorage
const data4 = JSON.parse(localStorage.getItem("user5"));
console.log(data4);










