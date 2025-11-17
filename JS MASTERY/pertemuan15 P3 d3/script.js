
// callback = fungsi yang dikirim sebagai argumen ke fungsi lain, kemudian fungsi tersebut dipanggil ("dipanggil balik") setelah proses tertentu selesai. 

// Kenapa pakai callback?
// Karena callback berguna untuk:
// menjalankan kode SETELAH proses lain selesai
// cocok untuk animasi, delay, setTimeout, request API, event, dsb
// membuat kode lebih fleksibel → kita bisa ganti callback-nya kapan saja
// Jika tanpa callback, fungsi ulang hanya bisa melakukan satu hal.
// Dengan callback, fungsi menjadi dinamis dan reusable.

function sapaUser(nama, callback) {
  console.log("Halo, " + nama);
  callback(); // Memanggil fungsi callback setelah sapaan
}           // contohnya kek gini

// Memanggil fungsi dengan callback anonim
sapaUser("Andi", function() {
  console.log("Callback: Fungsi ini dipanggil setelah sapaan selesai.");
});

function setelahsapa() {
    console.log("berhasil jalan");
    
}

// ======================================================


function sapaNama(nama, callback) {
    console.log("halo" + nama );
    callback()
}

 function setelah () {
    console.log("telah jalan");
    
 }

 sapaNama(" rai", setelah)

 // Eksekusi setelah perulangan selesai
 function ulang(n, callback) {
  for (let i = 0; i <= n; i++) {
    console.log("Hitungan ke " + i);
  }
  callback();
}

ulang(15, () => console.log("Selesai!"));


// Validasi data sebelum disimpan
function simpanData(data, callback) {
  if (!data) {
    console.log("Nama tidak boleh kosong");
    return;
  }
  callback(data);
}

simpanData({ nama: "Abyan", asal : "bali" }, (obj) => {
  console.log("Data berhasil disimpan:", obj);
});

// PENJELASAN:
// jika data.nama kosong, null, undefined, atau string kosong, maka kondisi ini true.
// Jika tidak ada nama:
// Program cetak: "Nama tidak boleh kosong"
// return menghentikan fungsi → callback tidak dijalankan

function simpanD(data, callback) {
    if (!data){
        console.log("data blm diisi");
        return;
    }
    callback(data)
}
simpanD({ nama : "jak", asal : "bali", alamat : "jakarta" }, (obj) => {
    console.log(" disimpsn ", obj);
} )



// Callback + Array
function prosesArray(arr, callback) {
  const hasil = callback(arr);
  console.log("Hasil:", hasil);
}

prosesArray([1, 2, 3], (arr) => arr.map(x => x * 2));


function awal(arr2, callback) {
  const lihat = callback(arr2);
  console.log("Hasil : ", lihat);
  
}
