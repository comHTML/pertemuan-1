function sayHello() {
    console.time("f1");
    console.info('Info Time Terkini dari F1 >>');
    console.timeLog("f1");
    alert('Hello Selamat Datang');
    let nama = prompt("Nama Siapa?");
    confirm(nama + " Klik Button ")
    console.log(nama + " Telah Klik Button");
    console.count("submited"); 
    console.timeEnd("f1");
}
// nb: function gunanya untuk memanggil apa yg telah kita buat
// console: buat debagging
// console.time: ngatur waktu di awal & console.timeEnd: ngatur waktu kapan berhentinya
//  let nama: untuk nyimpan data
// console.count: berapa kali kita ngetik

 
function resetcount() {
    console.countReset("submited")
}
// console.countReset: buat merest

console.error("ini contoh error");
console.warn("ini contoh warm");

// console.error: tampilin errornya di console
// console.warn: tampilkan warning di console

let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" },
    { userId: "user45678", loginStatus: "inactive 001", lastLogin: "2024-03-15" },

];

// let userData: buat nyimpen data

console.table(userData);

console.group('API Response Debug');
console.log('Status Code:', "sucsesfull");
console.log('Response Time:', "sucsesfull");
console.log('Payload Size:', "sucsesfull");
console.groupEnd();

// console.table: buat bikin table
// console.group: menggabungkan banyak console menjadi satu