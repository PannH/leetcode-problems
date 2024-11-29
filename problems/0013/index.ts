export function romanToInt(s: string): number {
    const symbolValues: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const symbols = s.split('');

    let totalValue = 0;

    for (let i = 0; i < symbols.length; i++) {
        const currentSymbolValue = symbolValues[symbols[i]];
        const nextSymbolValue = symbolValues[symbols[i + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            totalValue += nextSymbolValue - currentSymbolValue;
            i++;
        } else {
            totalValue += currentSymbolValue;
        }
    }

    return totalValue;
}
