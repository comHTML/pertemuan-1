
// FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka / Opeator");
    } else {
        f1(firstNumber, secondNumber, operator)
    }

});


// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

let dataSantri = [
    "bambang",
    "supri",
    "tri",
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]
// let dataSantri2 = [
//     'Data1', "Data2", 'Data3', 'Data4', 'Data5']

// function logggingNama(nama, alamat, rek) {
//     let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
//     // return "Ini Hasil Return"
//     return result
// }

// console.log(logggingNama("Bambang", "jakarta", "09876654321"));



// =======================================

// Deklartif
function f1(angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F1: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}

// Ekpresif
// const f1 = function (angkaPertama, angkaKedua, operator) {
//     togglePopup("1");
//     let result;
//     const a = Number(angkaPertama);
//     const b = Number(angkaKedua);

//     if (isNaN(a) || isNaN(b) && !a || !b) {
//         console.log("Input harus berupa angka");
//         console.log(typeof a);
//         console.log(typeof b);

//         return;
//     }

//     switch (operator) {
//         case "*":
//             result = a * b;
//             break;
//         case "+":
//             result = a + b;
//             break;
//         default:
//             console.log("Operator tidak valid");
//             return;
//     }

//     const output = document.getElementById("outputBox");
//     output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
//     togglePopup("1");
//     return result;
// }
// arrow function
// const funct1 =  (angkaPertama, angkaKedua,) => angkaPertama * angkaKedua;




// LOOPING 
// function f3(data) {
//     for (start = 0; start < data.length; start++) {
//         if (start % 2 != 0) {
//             console.log(`${start + 1} Genap >>> ${data[start]}`);
//             // console.log((start + 1) + " Genap >>>" + data[start]);
//         } else {
//             console.log(`${start + 1} Ganjil >>> ${data[start]}`);
//         }
//     }
// }

// f3(dataSantri2)
// console.log(`\n ========== \n`);
// f3(dataSantri)

function togglePopup(no) {
  document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
  document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
  const output = document.getElementById("outputBox");
  output.innerText += `\n======================\n`;
}


// F1: Kalkulator 

document.getElementById("F1").addEventListener("submit", function (e) {
  e.preventDefault();
  togglePopup("1");
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const operator = document.getElementById("operator").value;

  if (!firstNumber || !secondNumber || !operator) {
    alert("Masukkan angka dan operator!");
    return;
  }

  f1(firstNumber, secondNumber, operator);
});

function f1(angkaPertama, angkaKedua, operator) {
  let result;
  const a = Number(angkaPertama);
  const b = Number(angkaKedua);

  if (isNaN(a) || isNaN(b)) {
    alert("Input harus berupa angka!");
    return;
  }

  switch (operator) {
    case "*":
      result = a * b;
      break;
    case "+":
      result = a + b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Tidak bisa dibagi 0";
      break;
    default:
      alert("Operator tidak valid! Gunakan *, +, atau /");
      return;
  }

  const output = document.getElementById("outputBox");
  output.innerText += `\nF1: Hasil dari ${a} ${operator} ${b} = ${result}`;
  togglePopup("1");
  return result;
}


// F2: Data Diri

document.getElementById("F2").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;

  const output = document.getElementById("outputBox");
  output.innerText += `\nF2: Halo ${nama}, kamu tinggal di ${alamat}`;
  togglePopup("2");
});


// F3: Penjumlahan 3 angka

document.getElementById("F3").addEventListener("submit", function (e) {
  e.preventDefault();
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const n3 = Number(document.getElementById("num3").value);

  const result = f3(n1, n2, n3);

  const output = document.getElementById("outputBox");
  output.innerText += `\nF3: Jumlah dari ${n1}, ${n2}, ${n3} = ${result}`;
  togglePopup("3");
});

function f3(a, b, c) {
  return a + b + c;
}


// F4: Pilih Hero

document.getElementById("F4").addEventListener("submit", function (e) {
  e.preventDefault();
  const nick = document.getElementById("Nick").value;
  const role = document.getElementById("Role").value;
  F4(nick, role);
});

function F4(nick, role) {
  let result;
  switch (role) {
    case "1":
      result = "Fighter (Anda Menggunakan Superman)";
      break;
    case "2":
      result = "EX-Machine (Anda Menggunakan Iron-Man)";
      break;
    case "3":
      result = "Mutan (Anda Menggunakan Wolfverine)";
      break;
    default:
      alert("Role tidak sesuai! Pilih 1, 2, atau 3.");
      return;
  }

  const output = document.getElementById("outputBox");
  output.innerText += `\nF4: Halo Player ${nick}, kamu memilih ${result}.`;
  togglePopup("4");
  return result;
}

const exspresi = function perkenalan(Nama,asal){
    return (` Saya ${Nama} , Asal ${asal} , Nice To Meet You `)
}
console.log(exspresi("Raihan Nur Ichsan", "Kalimantan Barat"));

function tes() {
    let nama = "Raihan";
    console.log(`Nama: ${nama}`);
}

function abcx() {
    let umur = 20;
    console.log(`Umur: ${umur}`);
}

function asd() {
    let tinggi = 176;
    console.log(`Tinggi Badan: ${tinggi} cm`);
}

function bala() {
    let mahasiswa = true;
    console.log(`Mahasiswa: ${mahasiswa}`);
}

function aaa() {
  let nilai = 98; 
  let predikat;

  if (nilai >= 90) {
    predikat = "A";
  } else if (nilai >= 75) {
    predikat = "B";
  } else if (nilai >= 60) {
    predikat = "C";
  } else {
    predikat = "D";
  }

  console.log(`Nilai: ${nilai}, Predikat: ${predikat}`);
}


function ccc( panjang, lebar) {
  let luas = panjang * lebar;
  return luas;
}




let hasil = ccc(5, 3);
console.log(`Luas persegi panjang: ${hasil}`);
ccc();
aaa();
tes();
abcx();
asd();
bala();


document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("2")
    const nama = document.getElementById("nama").value;

    if (!nama) {
        alert("Silahkan masukan nama");
        togglePopup("2")
    } else {
        salamCheckReligi(nama)
        togglePopup("2")

    }

});

let tagOutput = document.getElementById('outputBox');

function salamCheckReligi(nama) {
    togglePopup("2")
    if(nama.includes("muhammad")){
        tagOutput.innerText += `Hello ${nama} Assalamualaikum Brother`;
        return `Hello ${nama} Assalamualaikum Brtoher`
    } else {
        tagOutput.innerText += `Hello ${nama} Ada yang bisa di bantu \n`;
        return `Hello ${nama} Brtoher`
    }
} //includes ap yg masuk 