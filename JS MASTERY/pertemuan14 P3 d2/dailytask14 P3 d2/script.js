

// latihan mandiri
const dataDiri = {
    nama : "raihan",
    umur : 16,
    alamat : "bandung"
}

const json3 = JSON.stringify(dataDiri);

localStorage.setItem(json3);

const data67 = localStorage.getItem('dataDiri');
const data98 = JSON.parse(data67);


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log("Data API users:", data);
  })
  .catch(error => {
    console.error("Gagal mengambil data API:", error);
  });


// studi kasus


