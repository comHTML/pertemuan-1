
// ==================================================
//          LATIHAN MANDIRI
// ==================================================


let buku = {
    judul : "selalu salah",
    pengarang : "JS",
    tahunTerbit : 2045
   
};

buku.tahunTerbit = 2222;

delete buku.pengarang

for (let key in buku) {
    console.log(key + ": " + buku [key]);
    
}


// ==================================================
//          STUDI KASUS
// ==================================================


let bukuFavorit = {
    judul : "clean code",
    penulis : "robert c. martin",
    tahun : 2008

}

bukuFavorit.kategori = 100;

delete bukuFavorit.penulis

for (let key in bukuFavorit) {
    console.log(key + ": " + bukuFavorit [key]);
    
}
