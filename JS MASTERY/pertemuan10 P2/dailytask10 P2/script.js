// LATIHAN MANDIRI

const arr1 = [1, 2, 3, 4,]
const [b, c, d] = arr1

const mobil = {
    merek : "honda",
    tahun : 1865
}

const hasil = [...arr1, ...mobil]

function gabungan(...number) {
    return number.rerduce ((a, b) => a + b, 0)
}
console.log(gabungan(1, 2, 3, 4, 5, 6, 7, 8, 9));


// STUDI KASUS

