function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const chars = s.split('');
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (vowels.has(chars[i]) && vowels.has(chars[j])) {
            const temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            i++;
            j--;
        } else if (vowels.has(chars[i])) {
            j--;
        } else {
            i++;
        }
    }
    return chars.join('');
}