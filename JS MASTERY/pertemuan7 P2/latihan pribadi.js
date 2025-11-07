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

// ================================================
// ================================================

//CONTOH SPLICE

// start (index): tempat mulai operasi. Jika negatif, dihitung dari akhir (arr.length + start).

// deleteCount: jumlah elemen yang dihapus mulai dari start. Jika 0, tidak ada yang dihapus (jadi hanya sisip).

// ...items: elemen baru yang akan disisipkan pada posisi start.

let arr1212 = ["a","b","c","d"];
const removedItems = arr1212.splice(1, 2);  // mulai index 1, hapus 2 item ("b","c")
console.log("Setelah splice hapus:", arr1212);      // ["a","d"]
console.log("Yang terhapus:", removedItems);     // ["b","c"]
// contoh hapus (yg di atas)



let arr7 = [1,2,5];
arr7.splice(2, 0, 3, 4);   // mulai di index 2, hapus 0, sisip 3 dan 4
console.log(arr7);        // [1,2,3,4,5]
// sisip tanpa hapus (insert): (yg di atas)



let arr8 = ["sun","mon","tue"];
arr8.splice(1, 1, "MONDAY", "TUESDAY"); // mulai index1, hapus 1 ("mon"), sisip 2 item
console.log(arr8); // ["sun", "MONDAY", "TUESDAY", "tue"]
// ganti (replace): (yg di ataas)

let arr9 = ['a','b','c','d'];
arr9.splice(-2, 1, 'X'); // -2 -> index arr.length-2 (posisi 'c'), hapus 1, sisip 'X'
console.log(arr9); // ['a','b','X','d']
// menggunakan indeks negatif: (yg di atas)







