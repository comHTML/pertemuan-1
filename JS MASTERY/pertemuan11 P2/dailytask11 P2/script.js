
// LATIHAN MANDIRI

const latihan = [
  { nama: "Ani", nilai: 85, jurusan: "IPA" },
  { nama: "Budi", nilai: 75, jurusan: "IPS" },
  { nama: "Cici", nilai: 90, jurusan: "IPA" },
  { nama: "Dodi", nilai: 70, jurusan: "IPS" },
  { nama: "Eka", nilai: 95, jurusan: "IPA" },
];

const ipa = latihan.filter(nama => nama.jurusan === "IPA");
console.log( ipa);

const arr = latihan.filter(item => item.nilai > 80).map(item => item.nilai);
console.log( arr);

const total = siswa.reduce((total, s) => total + s.nilai, 0);
console.log( total);


// STUDI KASUS

const transaksi = [
  { namaBarang: "Laptop", jumlah: 2, hargaSatuan: 400000 },
  { namaBarang: "Printer", jumlah: 1, hargaSatuan: 150000 },
  { namaBarang: "Meja", jumlah: 4, hargaSatuan: 100000 },
  { namaBarang: "Kursi", jumlah: 10, hargaSatuan: 60000 },
  { namaBarang: "Speaker", jumlah: 3, hargaSatuan: 200000 },
];


const barang = transaksi.filter(item => item.jumlah * item.hargaSatuan > 500000);
console.log( barang);


const Belanja = transaksi.reduce((total, item) => total + (item.jumlah * item.hargaSatuan), 0);
console.log( Belanja);

const Total = transaksi.map(t => ({
  namaBarang: t.namaBarang,
  totalBelanja: t.jumlah * t.hargaSatuan
}));
console.log( Total);

