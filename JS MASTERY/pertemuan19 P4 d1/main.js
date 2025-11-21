


let data1 = "string satu";

const data2 = 123;

let data3 = true;

let data4 = false;

let data5 = [1, 2, 3, 4, 5];

let data6 = {
    nama: "John",
    umur: 30,
    alamat: "Jl. Merdeka No. 1",
    asal : "bandung",
    kelamin : "pria"
};


function tes(...data7) {
    return data7.reduce((a, b) => a + b, 0);
}
 console.log(tes(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



function f1(...data8) {
    let total = {}
    data8.forEach((v,i,a) => {
        total[`${v}`] = v;
    })
    return total;
}

console.log(f1(1, 2, 3, 4, 5, 6, 7, 8, 9,));


function f2(...data9) {
    let total = {};
    if (!data9)
    for (let i = 0; i < data9.length; i++) {
        { data9[i];
          total[v] = v;
    }}

    return total;
}

console.log(f2(1, 2, 3, 4, 5, 6, 7, 8, 9));



function f1(...datas){
    let object = {}
    if(!datas) {
        for (let i = 0; i < datas.length; i++) {
           object[`data ${i+1}`] = datas[i]
        }
    }
    return object
}

function f2(...datas){
    let object = {}
    datas.forEach((v,i,a)=>{
           object[`${v}`] = v
    })
    return object
}

console.log(f2("Bambang",'Ujang',"asep","Udin"));


let obj1 = {key1:"1"}

obj1['key1'] = "VALUE"

console.log(obj1);


