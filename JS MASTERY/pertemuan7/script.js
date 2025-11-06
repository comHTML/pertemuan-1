
let pret = function () {
    return "f1"
    
}
//ini namanya ekpresif


let  arr = ["apel" , 100, false]
let arr2 = ["mangga", 10 , true , f1() , arr , ["arr1" , "arr2"]]



// console.log(typeof arr);
// console.log(arr2.length);//

// ARRAY = tipe data yg bisa nampung berbagai tipe data
// leght = menjumlahkan atau mentotalkan jumlah array + mulai dari 1
// index = mulai dari angka 0
// 

let arr3 = ["jambu" , 10000 , true]


    //di dalam loop ad kondisi1 - kondisi3 
    // kondisi1 itu cangkang
    //kondisi2 harus false biar dia berhenti kalo gk false dia gk berhenti
    //
    

function f2(namadata) {
    console.log(`array ${namadata} ` );
    return function (arr) {
        for (let i = 0; i < arr.length; i++) {
        console.log(`hasil array  "${namadata}" pada lop ke ${i+1} `);
        console.log(`${i+1}. ${arr[i]}`);
     }

     }

}

f2("data buat tes")(arr2)//manggil function f2 di atas

// ===================================================================



// const name[`hapis`]


// document.getElementById("F1").addEventListener("submit", function (e) {
    //   e.preventDefault();
    //   togglePopup("1");
    //   const name = document.getElementById("name").value;
    
    
    //   if (!name) {
        //     alert("data blm ke input");
        
        //   }else {
            //     addDataarray(name)
            //   }
            
            
            // });
            
            // function addDataarray(name) {
                //     togglePopup ("1")
                //     dataSantri.push (name)
                //     console.log(`Data ${name} berhasil`);
                //     togglePopup(`1`)
                
                
                // }
        //>>> dari github<<<         
                
 function togglePopup(no) {
       document.getElementById(`popupModal${no}`).classList.toggle("hidden");
 }
                
               
const dataSantri = ['Bambang']
const output = document.getElementById('outputBox');

document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const name = document.getElementById("name").value;
    if (!name) {
        alert("Data Belum Ke Input");
    } else {
        manipulationElementArray(name)
    }
});

function deletearray() {
    dataSantri = []
    output.innerText = dataSantri
}

function manipulationElementArray(data) {
    togglePopup('1')
    dataSantri.push(data), // PUSH()
    output.innerText = dataSantri //memasukkan data
    console.log(`Data ${data} berhasil Di tambahkan ...`);
    togglePopup('1')
}


// buah.push ("pisang");
// buah.unshift ("anggur") 
//ini contoh push sederhana


