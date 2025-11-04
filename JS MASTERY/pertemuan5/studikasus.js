function ceros(saldoawal = "") {
    return function (saldo2 = "") {
        result = Number(saldoawal) + Number(saldo2)
        console.log(`Catatan pengeluaran ${saldoawal} + ${saldo2} . Total ${result} `)
        return
    }
}

ceros("10000")("5000")