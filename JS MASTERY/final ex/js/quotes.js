export async function loadQuote() {
    try {
        const res = await fetch("");
        const data = await res.json();
        return data.content;
    } catch {
        return "Tetap semangat belajar JavaScript! 💪";
    }
}
