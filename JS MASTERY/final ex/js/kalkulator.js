export function calculate(exp) {
    try {
        // Pecah misalnya: "12+5" → ["12", "+", "5"]
        const match = exp.match(/(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)/);

        if (!match) return "Err";

        const a = parseFloat(match[1]);
        const op = match[2];
        const b = parseFloat(match[3]);

        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return b === 0 ? "Err" : a / b;
        }
    } catch {
        return "Err";
    }
}
