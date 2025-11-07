
// LATIHAN MANDIRI

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result1 = angka.map(n => n * 5);

let angkagenap = angka.filter(n => n % 2 === 0);

let total = angka.reduce((a, b) => a + b, 0);

let angkaa = angka.find (n => n > 8 )

// ================================================
// ================================================

// STUDI KASUS

let evaluasi = [60, 75, 80, 55, 90, 45];

let lulus = evaluasi.filter (n => n >= 70);

let hasil23 = evaluasi.map (
    n => {
        if (n >= 70){
            return `${n} - lulus`;
        } else {
            return `${n} - gagal`;
        }
    }
);

let gabung = evaluasi.reduce ((a, c ) => a + c, 0 );

console.log( lulus);
console.log( hasil23);
console.log( gabung);



