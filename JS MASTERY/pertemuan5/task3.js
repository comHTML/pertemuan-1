var nama1 ="raihan"
nama1 = "raihannur"
console.log(nama1);
// global scope


console.log();
var apis = "belajar sama mas el menyenangkan dan gk cepat bosen"
//hoisting


function var23() {
    var a = "Selamat pagi";
    if (true) {
        var a = "Selamat siang"; 
        a = "penjelasan mas el mudah dipahami";
    }
    return a;
}
console.log(var23()); 
//block scope


function ceros(saldoawal = "") {
    return function (saldo2 = "") {
        result = Number(saldoawal) + Number(saldo2)
        console.log(`Catatan pengeluaran ${saldoawal} + ${saldo2} . Total ${result} `)
        return
    }
}

ceros("10000")("5000")
// closure




