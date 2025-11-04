
var abc = "raihan"

function def() {
    console.log("halo," + abc );
    
}
def();

console.log(a);
    var a = 5;


function buatsaldo (saldoawal = 0) {
    console.log ("saldo awal:" + saldoawal);
    return function(tambah =  0) {
       result = Number(saldoawal) + Number(tambah); 
        console.log ("saldo" + result);
    }
}
buatsaldo("100") ("50")
