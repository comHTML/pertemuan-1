


const produk = document.getElementById("product");

// Mengakses nilai dataset
console.log(product.dataset.id);    // "101"
console.log(product.dataset.category);     // "elektronik"
console.log(product.dataset.price);        // "1500000"
console.log(product.dataset.inStock);                // "true" 
console.log(product.dataset.name);                 // "Laptop Lenovo ideapad" 
// (note : spasi diganti dengan camelCase pada JS )

// Mengakses semua dataset
console.log(produk.dataset);
// Output: DOMStringMap {productId: "101",
//  category: "elektronik", 
// price: "1500000", 
// stock: "10"}

