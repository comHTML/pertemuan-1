const nama = document.getElementById("input-name");
const myform = document.getElementById("myform");
const error = document.getElementById("err-msg-textarea");

myform.addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log("Value:", nama.value.trim());


});


const pass = document.getElementById("input-pass");





// const time = document.getElementById('err-msg-email');
// const file = document.getElementById('err-msg-umur');
// const color = document.getElementById('err-msg-date');
// const range = document.getElementById('err-msg-time');
// const checkbox = document.getElementById('err-msg-file');
// const button = document.getElementById('err-msg-color');
// const select = document.getElementById('err-msg-range');
// const textarea = document.getElementById('err-msg-checkbox');
// const form = document.getElementById('err-msg-button');
// const submit = document.getElementById('err-msg-select');

