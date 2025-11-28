

const KEY = "calc_history";

export function saveHistory(item) {
    const history = loadHistory();
    history.unshift(item);
    localStorage.setItem(KEY, JSON.stringify(history));
}

export function loadHistory() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function renderHistory(element) {
    const items = loadHistory();
    element.innerHTML = "";

    items.forEach(x => {
        const li = document.createElement("li");
        li.textContent = `${x.exp} = ${x.res}`;
        element.appendChild(li);
    });
}
