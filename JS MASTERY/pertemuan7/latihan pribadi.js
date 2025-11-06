// CONTOH PUSH.

let arr = [1, 2, 3];
console.log("Angka pertama :", arr);      // [1, 2, 3] tipe data di awal

let newLen = arr.push(4, 5);          // menambahkan 4 dan 5 di akhir 
console.log("Angka kedua :", arr);      // setelah push 
// console.log("Nilai balik push :", newLen); gk tau apa fungsinya


const arr2 = [1,2,3];
arr2.push(4); 
console.log(arr2);
// arr2 = 100 ni gk berjalan di console

// ================================================
// ================================================

// CONTOH UNSHIF

let arr3 = ["b", "c"];
console.log("Sebelum unshift:", arr3);  // ["b", "c"]

const newLen2 = arr3.unshift("a");      // tambahkan "a" di awal
console.log("Setelah unshift:", arr3);  // ["a", "b", "c"]

let arr4 = ["b" ,"c"]
arr4.unshift("a")
console.log(arr4);

// ================================================
// ================================================

// CONTOH POP

let arr5 = [10, 20, 30];
console.log("Sebelum pop:", arr5);      // [10, 20, 30]

const removed = arr5.pop();  // hapus 30
// hasil yg sudah di hapus(pop) disimpan di variabel removed
console.log("Setelah pop:", arr5);      // [10, 20]
console.log("Elemen yang dihapus:", removed); // 30

let tes = [10, 20, 30]
tes.pop()
console.log( tes);

// Fungsi pop() secara otomatis menghapus elemen terakhir dalam array. 
// Artinya, gk perlu menyebut angka berapa yang mau dihapus, karena "pop()"" selalu menghapus elemen terakhir.

// ================================================
// ================================================

//CONTOH SHIFT

let arr6 = ["x", "y", "z"];
console.log("Sebelum shift:", arr6);    // ["x", "y", "z"]

const first = arr6.shift();             // hapus "x"
console.log("Setelah shift:", arr6);    // ["y", "z"]
console.log("Elemen yang dihapus:", first); // "x"

let tes3 = ["x", "y", "z"]
tes3.shift()
console.log(tes3);


// ================================================
// ================================================

//CONTOH LEGHT

let arr11 = [1,2,3,4];
console.log("Panjang awal:", arr11.length); // 4

arr11.length = 2;  // memotong array jadi 2 elemen
console.log("Setelah set length=2:", arr11); // [1, 2]
console.log("Panjang sekarang:", arr11.length); // 2

arr11.length = 5;  // memperbesar length -> indeks 2..4 akan undefined
console.log("Setelah set length=5:", arr11); // [1, 2, <3 empty items>]
console.log(arr11[3]); // undefined

let arr123 =[1, 2, 3, 4, 5]
arr123.length = 4
console.log(arr123);

let arr112 = [1, 2, 3, 4, 5, 6, 7, 8, 9,]








