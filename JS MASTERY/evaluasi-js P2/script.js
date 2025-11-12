



// JAWABAN 4
const arr5 = [1, 2, 3, 4, 6]
const li = arr5.filter(x => x % 2 === 0);


// JAWABAN 7
const arr1 = [1, 2, 3, 4, 5]
arr1.pop()
arr1.shift()
console.log(arr1);

// JAWABAN 8
const arr6 = arr1.map(x => x * 2);
console.log(arr6);  

// JAWABAN 9
const arr2 = [
    { nama : "ali", nilai : 90},
    { nama : "zaid", nilai : 80},
    { nama : "said", nilai : 90},
    { nama : "siti", nilai : 92}
]
const hasil = arr2.filter(a => a.nilai === 90)

// JAWABAN 10
const arr3 = [10, 20, 30, 40, 50]
.reduce((a, b) => a + b, 0)

// JAWABAN 11
const obj = {nama : "ali"};
const key = "B";
const value = "A"
const objBaru = { ...obj, [key]: value };

// JAWABAN 12
const arr4 = {
    nama : "ali",
    profil : { usia: 17, kontak : { telp: "0982765784" }}
}
const {nama, profil : {usia, kontak : { telp}}} = arr4



