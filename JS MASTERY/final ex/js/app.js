const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

// Event tombol angka & operator
buttons.forEach(btn => {
    const value = btn.dataset.value;
    if (!value) return;

    btn.addEventListener("click", () => {
        display.value += value;
    });
});

// Tombol C
clearBtn.addEventListener("click", () => {
    display.value = "";
});

// Tombol =
equalBtn.addEventListener("click", () => {
    try {
        const result = eval(display.value);
        display.value = result;

        saveHistory(display.value);
    } catch {
        display.value = "Error";
    }
});

// Simpan ke LocalStorage
function saveHistory(result) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    history.push(result);
    localStorage.setItem("calcHistory", JSON.stringify(history));
}
