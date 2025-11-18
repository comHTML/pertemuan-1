


const janji = new Promise (function(resolve, reject) {
    
    let sukses = true;
    if (sukses){
        resolve ("data berhasil");
    } else {
        reject ("data tdk berhasil");
    }
});
console.log(janji);

const janji2 = new Promise (function(resolve) {
    
    setTimeout(function() {
        resolve("data diterima")
    }, 3000 );
});
console.log(janji2);



const janji3 = new Promise (function(resolve, reject) {
    
    let sukses = true;
    if (sukses){
        resolve (" data berhasil");
    } else {
        reject ("data tdk berhasil");
    }
});
console.log(janji3);


janji3.then(function(data){
    console.log("berjalan dari then", data);
    
})
.catch (function(error){
    console.log("tdk", error);
    
})















