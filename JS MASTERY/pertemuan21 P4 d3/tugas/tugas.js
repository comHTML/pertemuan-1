


const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const input = document.getElementById('textInput').value;
    if (input.trim() === "") {
        alert('Input tidak boleh kosong!');
        event.preventDefault();
    }
});


const form2 = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        alert('Masukkan email yang valid!');
        event.preventDefault();
    }
});


const form3 = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const phone = document.getElementById('phoneInput').value;

    if (!/^[0-9]+$/.test(phone)) {
        alert('Nomor telepon hanya boleh terdiri dari angka!');
        event.preventDefault();
    }
});


const form4 = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;
    
    if (password.length < 8) {
        alert('Password harus terdiri dari minimal 8 karakter!');
        event.preventDefault();
    }
});


const form5 = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        event.preventDefault();
    }
});


