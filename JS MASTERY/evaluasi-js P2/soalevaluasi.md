

1) Sintaks & Operator
Fungsi

function hitungTotal(harga, qty, pajakPct, diskonPct) {}
Tugas: (harga×qty) → kurangi diskon% → tambah pajak% → hasil akhir (dibulatkan wajar). Langkah: kalikan → diskon → pajak → return total.

Contoh Hasil

soal_1:

  input: { harga: 10000, qty: 3, pajakPct: 11, diskonPct: 10 }

  expected: 29970
2) If/Else – Grading
Fungsi

function gradeIfElse(nilai) {}
Tugas: kembalikan salah satu dari "A"|"B"|"C"|"D"|"E". Langkah: if/else bertingkat: A≥90, B≥80, C≥70, D≥60, else E.

Contoh Hasil

soal_2:

  input: {nilai: 95} atau  { nilai: 85 } atau { nilai: 75 } atau { nilai: 65 } atau { nilai: 55 } 

  expected: 
  "A" untuk nilai 90-100, 
  "B" untuk nilai 80-89, 
  "C" untuk nilai 70-79, 
  "D" untuk nilai 60-69, 
  "E" untuk nilai 1-59
3) Switch – Kategori User
Fungsi

function kategoriSwitch(kode) {}
Tugas: "S"→Santri, "M"→Mentor, "A"→Admin, selain itu "Tamu". Langkah: gunakan switch(kode) dengan default.

Contoh Hasil

soal_3:

  input: { kode: "M" } atau { kode: "A" } atau { kode: "S" } atau { kode: "X" }

  expected: 
  "Mentor" untuk kode "M", 
  "Admin" untuk kode "A", 
  "Santri" untuk kode "S", 
  "Tamu" untuk kode selain "M", "A", "S"
4) For – Jumlah Bilangan Genap
Fungsi

function jumlahGenap(arr) {}
Tugas: jumlahkan semua bilangan genap di arr. Langkah: for indeks, cek n % 2 === 0, akumulasikan.

Contoh Hasil

soal_4:

  input: { arr: [1, 2, 3, 4, 6] }

  expected: 12
5) For – Akumulasi Sampai Batas (tanpa while)
Fungsi

function akumulasiSampai(batas) {}
Tugas: jumlah 1+2+3+… hingga total tidak melebihi batas. Langkah: for () → jika total + i > batas maka break, selain itu tambahkan.

Contoh Hasil

soal_5:

  input: { batas: 1000 }

  expected: 1000
6) Fungsi – Deklaratif vs Ekspresi
Fungsi

function luasPersegiPanjang(p,l) {}

const luasPersegi = function(s) {};
Tugas: kembalikan luas bangun sesuai rumus. Langkah: implement 2 gaya fungsi (deklaratif & ekspresi).

Contoh Hasil

soal_6:

  input: { p: 5, l: 3, s: 4 }

  expected: { luasPersegiPanjang: 15, luasPersegi: 16 }
7) Array Dasar — Immutable
Fungsi

function kelolaAntrian(list, aksi) {}
Tugas: dukung push/pop/shift/unshift/insert/remove tanpa memutasi input. Langkah: salin dengan spread/slice, kembalikan array baru sesuai type.

Contoh Hasil

soal_7:

  cases:

    - input: { list: ["Ali"], aksi: { type: "push", payload: "Zaid" } }

      expected: ["Ali", "Zaid"]

    - input: { list: ["Ali","Zaid"], aksi: { type: "remove", index: 0 } }

      expected: ["Zaid"]
8) Map – Kurva Nilai
Fungsi

function kurvaNilai(santri, tambah) {}
Tugas: tambah poin tambah untuk setiap nilai siswa. Langkah: map → buat objek baru {nama, nilaiBaru}.

Contoh Hasil

soal_9:

  input:
    santri: [ { nama: "Ali", nilai: 70 }, { nama: "Fatimah", nilai: 90 } ]
    tambah: 5

  expected:
    - { nama: "Ali", nilaiBaru: 75 }
    - { nama: "Fatimah", nilaiBaru: 95 }
9) Filter + Find
Fungsi

function seleksiDanCari(arr, batas, namaDicari) {}
Tugas: pilih yang nilai ≥ batas, dan cari item bernama namaDicari. Langkah: filter untuk lulus, find untuk temuan (atau null jika tidak ada).

Contoh Hasil

soal_10:

  input:
    arr: [ { nama: "Ali", nilai: 80 }, { nama: "Zaid", nilai: 60 } ]
    batas: 70
    namaDicari: "Ali"

  expected:
    lulus: [ { nama: "Ali", nilai: 80 } ]
    temuan: { nama: "Ali", nilai: 80 }
10) Reduce + Rest
Fungsi

function analitikNilai(...nilai) {}
Tugas: kembalikan { total, rata } dari argumen angka tak terbatas. Langkah: jumlah dengan reduce, bagi panjang (0 jika kosong).

Contoh Hasil

soal_11:

  input: { nilai: [80, 90, 70, 100] }

  expected: { total: 340, rata: 85 }
11) Object – Akses Dinamis (Immutable)
Fungsi

function setGetDynamic(obj, key, value) {}
Tugas: set obj[key]=value pada objek baru dan kembalikan nilainya. Langkah: objBaru = { ...obj, [key]: value } → return { value: objBaru[key], obj: objBaru }.

Contoh Hasil

soal_12:

  input: { obj: { nama: "Ali" }, key: "kelas", value: "A" }

  expected:
    value: "A"
    obj: { nama: "Ali", kelas: "A" }
12) Destructuring (Nested)
Fungsi

function ambilDataSantri(s) {}
Tugas: hasil "Nama (usia) - telp". Langkah: ambil nama, profil.usia, profil.kontak.telp via destructuring.

Contoh Hasil

soal_13:

  input:

    s:
      nama: "Ali"
      profil: { usia: 17, kontak: { telp: "0812" } }

  expected: "Ali (17) - 0812"
13) Spread & Rest
Fungsi

function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {}
Tugas: gabungkan 2 objek & jumlahkan angka ...nilaiTambahan. Langkah: profilGabung={...admin,...asrama}; totalTambahan=reduce(rest).

Contoh Hasil

soal_13:

  input:
    admin: { nama: "Ali" }
    asrama: { kamar: "B12" }
    nilaiTambahan: [10, 20, 30]

  expected:
    profilGabung: { nama: "Ali", kamar: "B12" }
    totalTambahan: 60
14) Integrasi Ringkas (Program • Modul • Santri)
Fungsi

function laporanProgram(pondok) {}
Tugas: render laporan sederhana (maks 1 tingkat submodul). Langkah:

Tulis nama pondok
Untuk tiap program: tulis nama & mentor (contoh mentor: Mas EL)
Tampilkan modul + submodul (1 tingkat)
Untuk tiap santri:
rata = sum(nilai)/jumlah (reduce)
hadirPct = (jumlah true / total) * 100
if/else: statusNilai (≥75 Lulus / selain itu Tidak Lulus)
if/else: statusHadir (≥75% Rajin / selain itu Kurang Rajin)
Urutkan santri desc oleh rata
Satukan menjadi string multiline dan return
Contoh Hasil

soal_15:

  input:

    pondok:
      nama: "Pondok IT Indonesia"
      program:
        - nama: "JavaScript Mastery"
          mentor: { nama: "Mas EL", email: "el@pondok.id" }
          modul:
            - judul: "Array & Method"
              submodul:
                - { judul: "map" }
                - { judul: "filter" }
          santri:
            - { nama: "Ali", nilai: [80, 75, 90], kehadiran: [true, false, true, true] }
            - { nama: "Fatimah", nilai: [95, 85, 100], kehadiran: [true, true, true, true] }


  expected: 

    === PONDOK IT INDONESIA ===
    - Program: JavaScript Mastery
      Mentor: Mas EL (el@pondok.id)
      Modul:
        - Array & Method
          - map
          - filter
      Santri:
        - Fatimah — Nilai: 93.3 | Hadir: 100% | Status: Lulus & Rajin
        - Ali     — Nilai: 81.6 | Hadir: 75%  | Status: Lulus & Rajin