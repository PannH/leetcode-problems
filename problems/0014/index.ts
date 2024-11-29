export function longestCommonPrefix(strs: string[]): string {
    let longestCommonPrefix = '';

    if (!strs.length) return longestCommonPrefix;

    const shortestStrLength = Math.min(...strs.map((str) => str.length));
    for (let i = 0; i < shortestStrLength; i++) {
        const character = strs[0][i];

        if (strs.every((str) => str[i] === character))
            longestCommonPrefix += character;
        else break;
    }

    return longestCommonPrefix;
}
